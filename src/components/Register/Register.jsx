import "./Register.css";
import "./ErrorMessage.css";
import Input from "../Form/Input";
import ButtonSubmit from "../Form/ButtonSubmit";
import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { Link, useLocation } from "wouter";
import { register } from "../../api";


const email2 = (email) => {
    const correo = "test@gmail.com";
    if (email === correo) {
        return 406;
    } else {
        return 200;
    }
};

export default function Register() {
    const [password, setPassword] = useState(true);
    const [res, setRes] = useState(null);
    const [, setLocation] = useLocation(); // 2. Usar el hook useLocation
    useEffect(() => {
        // 2. Usa useEffect
        if (res === 200) {
            setLocation("/register/success");
        } else if (res === 400) {
            setLocation("/register/error")
        }
    }, [res, setLocation]);
    const handleSubmit = async (values) => {
        const result = await register({
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmpassword,
        });
        setRes(result);

        console.log(result);

        // Ahora, utiliza result en lugar de res para la comparación
        const passwordMatch = comparacion(values.password, values.confirmpassword);
        setPassword(passwordMatch);
        console.log(passwordMatch);
    };


    function comparacion(password, confirmpassword) {
        if (password === confirmpassword) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="registro-login">
            <div className="registro-logo">
                <img src="/logo.png" />
            </div>
            <div className="registro-form">
                <Formik
                    onSubmit={handleSubmit}
                    initialValues={{
                        nombre: "",
                        apellidos: "",
                        email: "",
                        telefono: "",
                        password: "",
                        confirmpassword: "",
                    }}
                >
                    <Form>
                        <div>
                            <h1 className="titulo">Registro</h1>
                            <p className="titulo">Ingrese sus datos</p>
                        </div>
                        <Input
                            name="nombre"
                            type="text"
                            content="Nombre"
                            placeholder="Ej: Diego Andres"
                        />
                        <Input
                            name="apellidos"
                            type="text"
                            content="Apellidos"
                            placeholder="Ej: Hernandez Garcia"
                        />
                        <Input
                            name="email"
                            type="email"
                            content="Email"
                            placeholder="Ingrese su correo electrónico"
                        />
                        <Input
                            name="telefono"
                            type="numb"
                            content="Telefono"
                            placeholder="+56977172355"
                        />
                        <Input
                            name="password"
                            type="password"
                            content="Contraseña"
                            placeholder="********"
                        />
                        <Input
                            name="confirmpassword"
                            type="password"
                            content="Confirmar contraseña"
                            placeholder="********"
                        />

                        <ButtonSubmit content="Registrarse" />
                        <div className="error-message">
                            {password ? null : (
                                <div>Las contraseñas no coincide</div>
                            )}
                            {res === 406 ? (
                                <div>El correo ya se encuentra registrado</div>
                            ) : null}
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
