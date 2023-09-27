import style from './styles.module.css'
const Cards = (props) =>{
    let badgeText
    if(props.openSpots === 0){
        badgeText = 'Sold out' 
     }
     else if ( props.location === 'Online'){
        badgeText =  "ONLINE"
       
     }
    return (
        <div className={style.card}>
            {badgeText && <div className={style.cardBadge}>{badgeText}</div>}
            <img src={`./images/${props.coverImg}`} alt="Katie image"  className={style.cardImage }/>
            <div className={style.cardStats}>
                <img src={`./images/Star1.png`} className={style.cardStar} />
                <span >{props.rating}</span>
                <span className={style.gray}>({props.stats.reviewCount}) • </span>
                <span className={style.gray}>{props.country}</span>
            </div>
            <p className={style.cardTittle}>{props.title}</p>
            <p> <span className={style.bold}>From ${props.price}</span> / person</p>
        </div>
    )
}

export default Cards