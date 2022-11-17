import React from 'react'
import './css/AdviceCard.css'
import divider from './images/pattern-divider-desktop.svg'
import mobileDivider from './images/pattern-divider-mobile.svg'
import die from './images/icon-dice.svg'

function AdviceCard(props) {


  return (
    <div className="adviceCard">
      <h1>Advice #{props.adviceId}</h1>
      <div className="advice">
        "{props.advice}"
      </div>
      <img className="divider desktopDivider" src={divider} alt="divider" />
      <img className="divider mobileDivider" src={mobileDivider} alt="divider" />
      <div className="dieHolder" onClick={props.toggleAdvice}>
        <img className="die" src={die} alt="click me to get another quote"/>
      </div>
    </div>
  )
}

export default AdviceCard
