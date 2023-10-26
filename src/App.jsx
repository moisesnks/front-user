import "./App.css";
import Layout from "./components/Layout";
import { Route } from "wouter";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ForgotPasword from "./pages/ForgotPassword";
import ChangedPassword from "./pages/ForgotPassword/passwordChanged";
import Profile from "./pages/Profile";
import Service from "./components/Service";
import RegisterSuccess from "./pages/Register/registerSuccess";
import RegisterError from "./pages/Register/registerError";

function App() {
    return (
        <>
            <Layout>
                <Route component={Home} path="/" />
                <Route component={Login} path="/login" />
                <Route component={Register} path="/register" />
                <Route component={RegisterSuccess} path="/register/success" />
                <Route component={RegisterError} path="/register/error" />
                <Route component={ForgotPasword} path="/forgot-password" />
                <Route
                    component={ChangedPassword}
                    path="/forgot-password/changed-password"
                />
                <Route component={Profile} path="/user/profile" />
                <Route component={Service} path="/user/service" />
            </Layout>
        </>
    );
}

export default App;
