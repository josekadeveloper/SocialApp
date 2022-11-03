import React, { useState } from "react";
import { Container, Image } from "semantic-ui-react";
import socialLogo from "../../assets/images/SocialApp.gif";
import LoginForm from "../../components/Auth/LoginForm";
import RegisterForm from "../../components/Auth/RegisterForm";
import "./Auth.scss";

export default function Auth() {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <Container fluid className="auth">
            <Image src={socialLogo} />

            <div className="container-form">
                {showLogin
                ? <LoginForm />
                : <RegisterForm setShowLogin={setShowLogin} />
                }
            </div>

            <div className="change-form">
                <p>
                    {showLogin ? (
                        <>
                            ¿No tienes cuenta?
                            <span onClick={() => setShowLogin(!showLogin)}>Registrate</span>
                        </>
                    ) : (
                        <>
                            ¡Entra con tu cuenta!
                            <span onClick={() => setShowLogin(!showLogin)}>Iniciar Sesión</span>
                        </>
                    )}
                </p>
            </div>
        </Container>
    );
}