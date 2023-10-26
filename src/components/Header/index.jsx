import "./Header.css";
import { Link } from "wouter";
function Header() {
    return (
        <header className="box-header">
            <Link href="/login">
                <a className="link">Inicio de Sesion</a>
            </Link>
            <Link href="/register">
                <a className="link">Registro</a>
            </Link>
            <Link href="/user/profile">
                <a className="link">Perfil</a>
            </Link>
        </header>
    );
}
export default Header;
