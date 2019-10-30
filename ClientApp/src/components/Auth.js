import b2cauth from 'react-azure-adb2c';
import decodeJWT from 'jwt-decode';

class Auth {
    isLoggedIn() {
        if (this.getToken()) {
            return true;
        }
        return false;
    }

    logout() {
        b2cauth.signOut();
    }

    getToken() {
        return sessionStorage.getItem('msal.idtoken'); 
    }

    decodedToken() {
        var token = this.getToken();
        if (!token) return;
        return decodeJWT(token);
    }
}

export default Auth;