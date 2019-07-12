import React from 'react'
import List from '../List/List'
import PropTypes from 'prop-types'


const style = {
    border : '1px solid red'
}


const Menu = ({products, icon}) =>  {
    console.log(products)
    return ( <div style={{...style, backgroundImage: 'url(${icon})'}}>
                {products.length >= 3 ? (
                    products.map((element) => (
                    <li key={element.id}>
                        {/* <List icon ={element.icon}/> */}
                        <List {...element}/>
                    </li>
                    ))
                    ) : (<p>False</p>)}
            </div>
            )
}


Menu.defaultProps = {
    products : []
}

Menu.propTypes ={
    products: PropTypes.arrayOf(
        PropTypes.shape(
            {id : PropTypes.number.isRequired}
            ).isRequired
    ).isRequired
}

export default Menu