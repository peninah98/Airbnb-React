 import style from './styles.module.css'
 import img from "../assets/logo.png"
 const NavBar = () =>{
    return (
        <nav className={style.nav}>
            <img src={img} alt="" />
        </nav>
    )
 }

 export default NavBar