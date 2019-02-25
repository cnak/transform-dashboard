const fs = require('fs');
const moment = require('moment');
const readline = require('readline');
const {
  google
} = require('googleapis');

exports.getAllReminders = getAllReminders;
exports.getAllOverheard = getAllOverheard;
exports.getAllTeamNews = getAllTeamNews;
exports.getLatestWifiPassword = getLatestWifiPassword;

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const CREDENTIALS = 'server/credentials.json'
const TOKEN_PATH = 'server/token.json';
const SPREADSHEET_ID = '1scieI0CU5Suyze7cg8pV8kzYHJXUKzieUtJhAdOLyIc';

async function getAllReminders() {
  const content = fs.readFileSync(CREDENTIALS);
  return await authorize(JSON.parse(content), null).then(async function (value) {
    return retrieveAllReminders(value);
  });
}

async function getAllOverheard() {
  const content = fs.readFileSync(CREDENTIALS);
  return await authorize(JSON.parse(content), null).then(async function (value) {
    return retrieveAllOverheard(value);
  });
}

async function getAllTeamNews() {
  const content = fs.readFileSync(CREDENTIALS);
  return await authorize(JSON.parse(content), null).then(async function (value) {
    return retrieveAllTeamNews(value);
  });
}

async function getLatestWifiPassword() {
  const content = fs.readFileSync(CREDENTIALS);
  return await authorize(JSON.parse(content), null).then(async function (value) {
    return retrieveLatestWifiPassword(value);
  });
}

const retrieveLatestWifiPassword = async auth => {
  let latestWifiPassword = [];
  const SHEET_NAME = 'wifi-passwords';
  const sheets = google.sheets({
    version: 'v4',
    auth
  });

  return new Promise(function (resolve, reject) {

    sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}`
      },
      (err, res) => {
        if (err) return console.log(`The API returned an error: ${err}`);

        const rows = res.data.values;
        let allWifiPasswords = []

        if (rows.length) {
          rows.map(row => {
            if (row[0] !== 'content') {
              allWifiPasswords.push({
                wifiPassword: row[0],
                startDate: row[1],
              });
            }
          });

          const todaysDate = new Date();

          latestWifiPassword = allWifiPasswords.filter((wifiPassword) => {
            const myDate = moment(wifiPassword.startDate, "DD-MM-YYYY").toDate();

            if (todaysDate > myDate) {
              return myDate;
            }
          })

        } else {
          console.log('No data found.');
        }
        resolve(latestWifiPassword);
      }
    );
  });
};

const getLatestValidWifiPassword = (wifiPasswords) => {

  let latestValidDate = dates[0]
  const dateNow = new Date();

  for (let index = 0; index < dates.length; index++) {

    if (dateNow > dates[i]) {
      latestValidDate = dates[i]
    } else {
      break;
    }
  }

  return latestValidDate
}

const retrieveAllOverheard = async auth => {
  const overheard = [];
  const SHEET_NAME = 'overheard';
  const sheets = google.sheets({
    version: 'v4',
    auth
  });

  return new Promise(function (resolve, reject) {

    sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}`
      },
      (err, res) => {
        if (err) return console.log(`The API returned an error: ${err}`);

        const rows = res.data.values;

        if (rows.length) {
          rows.map(row => {
            overheard.push({
              quote: row[0],
            });
          });
        } else {
          console.log('No data found.');
        }
        resolve(overheard);
      }
    );
  });
};

const retrieveAllTeamNews = async auth => {
  const teamNews = [];
  const SHEET_NAME = 'team-news';
  const sheets = google.sheets({
    version: 'v4',
    auth
  });

  return new Promise(function (resolve, reject) {
    sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}`
      },
      (err, res) => {
        if (err) return console.log(`The API returned an error: ${err}`);

        const rows = res.data.values;

        if (rows.length) {
          rows.map(row => {
            if (row[0] !== 'heading') {
              teamNews.push({
                heading: row[0],
                content: row[1],
                startDate: row[2],
                startTime: row[3],
                endDate: row[4],
                endTime: row[5]
              });
            }
          });
        } else {
          console.log('No data found.');
        }
        resolve(teamNews);
      }
    );
  });
};

const retrieveAllReminders = async auth => {
  const reminders = [];
  const SHEET_NAME = 'reminders';
  const sheets = google.sheets({
    version: 'v4',
    auth
  });

  return new Promise(function (resolve, reject) {
    sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}`
      },
      (err, res) => {
        if (err) return console.log(`The API returned an error: ${err}`);

        const rows = res.data.values;

        if (rows.length) {
          rows.map(row => {
            if (row[0] !== 'heading') {
              reminders.push({
                heading: row[0],
                content: row[1],
                startDate: row[2],
                startTime: row[3],
                endDate: row[4],
                endTime: row[5]
              });
            }
          });
        } else {
          console.log('No data found.');
        }
        resolve(reminders);
      }
    );
  });
};

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 */
const authorize = async (credentials, callback) => {
  const {
    client_secret,
    client_id,
    redirect_uris
  } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  return new Promise(function (resolve, reject) {
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getNewToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      resolve(oAuth2Client);
    });
  });
};

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', code => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}