import React from "react";
import FirebaseApp from "../Firebase/FirebaseConfig";
import {getAuth, signOut} from 'firebase/auth';

const auth = getAuth(FirebaseApp)

const HomeLogin = () => {
    return (
        <div>
            <h2>Bienvenido usuario</h2>
            <button onClick={()=>signOut(auth)} >LogOut</button>
        </div>
    )
}

export default HomeLogin