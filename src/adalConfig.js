import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
  tenant: process.env.ADAL_TENANT,
  clientId: process.env.ADAL_CLIENT_ID,
  redirectUri: process.env.ADAL_REDIRECT_URI,
  endpoints: {
    api: 'https://graph.microsoft.com'
  },
  cacheLocation: 'sessionStorage'
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);
