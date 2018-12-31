const fs = require('fs');
const readline = require('readline');
const {
  google
} = require('googleapis');

exports.start = start;

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';
const SPREADSHEET_ID = '1ctq6PE-K6OyEaIShFi3caCHErXA-Iiw1Q3ZRUjjSMVM'

// Load client secrets from a local file.
async function start() {

  const content = fs.readFileSync('./credentials.json')
  return await authorize(JSON.parse(content), null)
    .then(async function (value) {
      return listHolidays(value);
    })
}

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
      resolve(oAuth2Client)
    });
  })
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
const listHolidays = async (auth) => {

  var holidays=[]
  const SHEET_NAME = 'Holidays'
  const sheets = google.sheets({
    version: 'v4',
    auth
  });

  return new Promise(function (resolve, reject) {

    sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: SHEET_NAME + '!A2:B19',
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);

      const rows = res.data.values;

      if (rows.length) {
        rows.map((row) => {
          holidays.push({
            name: row[0],
            date: row[1]
          })
        });
      } else {
        console.log('No data found.');
      }
      resolve(holidays)
    });
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}