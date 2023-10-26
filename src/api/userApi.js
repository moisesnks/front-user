const baseURL = "http://localhost:3000";
export async function loginWithGoogle() {
    try {
        // Haciendo una solicitud GET a la ruta /login-google en tu servidor
        const response = await fetch(baseURL + "/login-google");
        if (!response.ok) {
            throw new Error(
                "Network response was not ok " + response.statusText
            );
        }

        // Parseando la respuesta JSON para obtener la URL de redirección
        const data = await response.json();
        const redirectURL = data.url;

        if (redirectURL) {
            // Redirigiendo al usuario a la página de autenticación de Google
            window.location.href = redirectURL;
        } else {
            console.error("No se pudo obtener la URL de redirección");
        }
    } catch (error) {
        console.error("Error al iniciar sesión con Google:", error);
    }
}

export async function login({ email, password }) {
    try {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        const response = await fetch("http://user.lumonidy.studio/login", {
            method: "POST",
            body: formData,
        });


        return response.status;

    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        // Puedes manejar el error de alguna manera o simplemente devolver un código de error, como -1
        return -1;
    }
}

export async function register({ email, password, confirmPassword }) {
    try {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("confirmPassword", confirmPassword);

        const response = await fetch("http://user.lumonidy.studio/register", {
            method: "POST",
            body: formData,
        });


        return response.status;

    } catch (error) {
        console.error("Error al registrar usuario:", error);
        // Puedes manejar el error de alguna manera o simplemente devolver un código de error, como -1
        return -1;
    }
}
