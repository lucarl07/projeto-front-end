/* Elemento DOM Header - Meu primeiro código em React */
import './Header.css'

const Header = () => {
    return (
        <header className="myHeader">
            <h1>Olá Mundo!</h1>
            <nav className='navigation'>
                <ul className='navList'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Sobre nós</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <button className='button'>Cadastre-se</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;