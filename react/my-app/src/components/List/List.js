import React from 'react'
import PropTypes from 'prop-types'
import style from './List.module.css'
console.log(style)

const List = ({title, icon, price, disable}) => {
    const choose  = ["titleStyle"]
    
    if(!disable) {
        choose.push("titleDisable")
    }
    
    return (
        <div>
            <h1 className={disable ? style.titleStyle : style.titleDisable}>{title}</h1>
            <img className={style.imgStyle} src={icon}  alt={title}/>
            <p>{price}</p>
        </div>
    )
}



List.defaultProps = {
    price : 0,
    icon : 'undef',
    title : 'undef',
}

List.propTypes = {
    price : PropTypes.number.isRequired,
    icon : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
}



export default List