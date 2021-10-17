import React from 'react';
const axios = require('axios').default;

export const app_name = 'MyBin';
export const default_theme = 'light';

 export const API_URL = 'http://b10b-34-74-131-4.ngrok.io/';

export const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {'x-application': 'mybin'},
});
export const API_URL1 = 'https://cxray.herokuapp.com/';

export const API1 = axios.create({
  baseURL: API_URL1,
  timeout: 10000,
  headers: {'x-application': 'mybin'},
});

export const API_VERSION = 'v3';

export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});
