import Cards from "./components/Cards";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBaar";
import data from './data'
import style from '../src/components/styles.module.css'

function App() {
  const cards = data.map(item => {
    return (
        <Cards 
        key={item.id}
        {...item}
        />
    )
}) 

  return (
    <div className="App">
     <NavBar/>
     <HeroSection/>
     <section className={style.cardsList}>

     {cards}
     </section>
    </div>
  );
}

export default App;
