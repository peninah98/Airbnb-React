import style from './styles.module.css'
import img from '../assets/Group 77.png'
const HeroSection = ()=>{
    return (
        <section className={style.hero}>
            <img src={img} alt="Grouped images" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default HeroSection