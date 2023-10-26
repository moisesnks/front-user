import "./Login.css";
import Input from "../Form/Input";
import ButtonSubmit from "../Form/ButtonSubmit";
import ButtonSocial from "../Form/ButtonSocial";
import { FacebookIcon, GoogleIcon } from "../Icons";
import { Link, useLocation } from "wouter";
import { login } from "../../api";
import { Formik, Form } from "formik";
import { LoginSchema } from "../../utils/schemas/loginSchema";
import { useState, useEffect } from "react";

const falseLogin = (passwordForm, emailForm) => {
    const email = "test@gmail.com";
    const password = "hol";

    if (email === emailForm && password === passwordForm) {
        return 200;
    } else {
        return 404;
    }
};

function Login() {
    const [res, setRes] = useState(null);
    const [, setLocation] = useLocation(); // 2. Usar el hook useLocation
    useEffect(() => {
        // 2. Usa useEffect
        if (res === 200) {
            setLocation("/user/profile");
        }
    }, [res, setLocation]);
    const handleSubmit = async (values) => {
        const result = await login({ email: values.email, password: values.password });
        setRes(result);
    };

    const handleLoginGoogle = async () => {
        try {
            const userData = await loginWithGoogle();
            console.log("User data:", userData);
        } catch (error) {
            console.error("Login failed:", error.message);
        }
    };

    return (
        <div className="container-login">
            <div className="container-form">
                <div>
                    <h1>BIENVENIDO</h1>
                    <p>Por favor ingrese sus datos</p>
                </div>
                {res === 404 ? <div>Los datos son incorrectos</div> : null}
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={LoginSchema}
                >
                    <Form>
                        <Input
                            name="email"
                            type="email"
                            content="Correo electronico"
                            placeholder="test@correo.com"
                        />
                        <Input
                            name="password"
                            type="password"
                            content="Contraseña"
                            placeholder="********"
                        />

                        <div className="container-checkbox">
                            <label htmlFor="checkbox">
                                <input
                                    name="checkbox"
                                    type="checkbox"
                                    className="checkbox-form"
                                />
                                Mantener sesion iniciada
                            </label>
                        </div>
                        <ButtonSubmit content="Iniciar sesion" />
                    </Form>
                </Formik>
                <div className="container-btn-social">
                    <ButtonSocial color="White" onClick={handleLoginGoogle}>
                        <GoogleIcon />
                    </ButtonSocial>
                    <ButtonSocial color="Blue">
                        <FacebookIcon />
                    </ButtonSocial>
                </div>
                <div className="container-forgotten">
                    <p>
                        ¿No tienes una cuenta?{" "}
                        <span className="text-high">Registrate</span>
                    </p>
                    <Link href="/forgot-password">
                        <p className="text-high">¿Olvidaste tu contraseña?</p>
                    </Link>
                </div>
            </div>
            <div className="container-logo">
                <img src="/logo.png" alt="logo" className="logo" />
            </div>
        </div>
    );
}
export default Login;
