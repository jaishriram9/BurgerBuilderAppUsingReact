import React from "react";
import BurgerLogo from '../../assests/Images/burgerLogo.png'
import classes from './Logo.css'
const logo = (props)=>{
   return <div className={classes.Logo} style={{height : props.height}}>
        <img src={BurgerLogo} alt="BurgerImage"/>
    </div>
}
export default logo;