import React from "react";
import Auth from './Auth';
import Highlight from './Highlight';

const Profile = () => {
    const auth = new Auth();
    return (
        <Highlight>{JSON.stringify(auth.decodedToken(), null, 2)}</Highlight>
    );
}

export default Profile;
