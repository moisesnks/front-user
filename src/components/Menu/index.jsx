import "./Menu.css"; // Asegúrate de que la ruta del archivo CSS sea correcta

function UserMenu() {
    return (
        <div className="user-menu">
            <ul className="horizontal-menu">
                <li>Mis Reservas</li>
                <li>Perfil</li>
                <li>Otra Opción</li>
                <li>Cerrar Sesión</li>
            </ul>
        </div>
    );
}

export default UserMenu;
