import React from 'react';
import ReactDOM from 'react-dom';
import ExternalApi from './components/ExternalApi';
// import * as serviceWorker from './serviceWorker';
import b2cauth from 'react-azure-adb2c';

b2cauth.initialize({
    instance: 'https://login.microsoftonline.com/tfp/',
    tenant: 'codingfreaksdaken.onmicrosoft.com',
    signInPolicy: 'B2C_1_SignUpAndSignIn',
    applicationId: 'c21ceda9-3252-4894-83bc-4c46ee105a64',
    cacheLocation: 'sessionStorage',
    scopes: ['https://codingfreaksdaken.onmicrosoft.com/api/user_impersonation'],
    redirectUri: 'http://localhost:3003',
    postLogoutRedirectUri: window.location.origin,
});

ReactDOM.render(<ExternalApi />, document.getElementById('root'));