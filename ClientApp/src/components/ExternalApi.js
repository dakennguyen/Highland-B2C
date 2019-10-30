import React, { useState } from "react";
import ReactDOM from 'react-dom';
import b2cauth from 'react-azure-adb2c';
import Auth from './Auth';
// import Profile from './Profile';

const ExternalApi = () => {
    const [showResult, setShowResult] = useState(false);
    const [apiMessage, setApiMessage] = useState("");
    const auth = new Auth();

    const loginWithRedirect = () => {
        b2cauth.run(() => {
            ReactDOM.render(<ExternalApi />, document.getElementById('root'));
        });
    }

    const callApi = async () => {
        try {
            var token = sessionStorage.getItem('msal.idtoken');
            const response = await fetch(
                "https://localhost:5001/api/SampleData/CallApi",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const responseData = await response.json();

            setShowResult(true);
            setApiMessage(responseData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>  
            <h1>External API</h1>
            {!auth.isLoggedIn() && (<button onClick={() => loginWithRedirect()}>Login</button>)}
            {auth.isLoggedIn() && (<button onClick={() => auth.logout()}>Logout</button>)}
            <button onClick={callApi}>Ping API</button>
            {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
        </>
    );
};

export default ExternalApi;
