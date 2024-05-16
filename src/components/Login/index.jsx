import React, { useState } from "react";
import ImagenProfile from './gustoexpress2.jpeg';
import FirebaseApp from '../Firebase/FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(FirebaseApp);

const LoginSignupForm = () => {
    const navigate = useNavigate();
    const [registrando, setRegistrando] = useState(false);

    const functAuthenticaction = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                console.log("Usuario creado con éxito");
                navigate('/home'); 
            } catch (error) {
                console.error("Error al crear el usuario:", error.message);
                alert("Error al crear el usuario: " + error.message);
            }

        } else {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                console.log("Usuario autenticado con éxito");
                navigate('/home'); 
            } catch (error) {
                console.error("Error al autenticar al usuario:", error.message);
                alert("El correo o la contraseña son incorrectos");
            }
        }
    };

    return (
        <div className="padre">
            <div className="card card-body shadow-lg">
                <img src={ImagenProfile} alt="" className="style-profile" />
                <form onSubmit={functAuthenticaction}>
                    <input type="text" name="email" className="cajatexto" placeholder="Ingrese Email" />
                    <input type="password" name="password" className="cajatexto" placeholder="Ingrese Contraseña" />
                    <button className="btnform">{registrando ? 'Regístrate' : 'Iniciar Sesión'}</button>
                </form>

                <h4 className="texto">{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"} <button className="btnswitch" onClick={() => setRegistrando(!registrando)}>{registrando ? "Iniciar sesión" : "Regístrate"}</button></h4>
            </div>
        </div>
    );
};

export default LoginSignupForm;