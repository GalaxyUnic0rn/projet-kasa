import { Link } from "react-router-dom"

function Banner(){
    return (
    <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/test'>test</Link>
    </nav>
    )
}

export default Banner