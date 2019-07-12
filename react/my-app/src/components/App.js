import React from 'react'
// import List from './List/List'
import Menu from './Menu/Menu'
import products from './products.json'


// const poducts = [
//     {}
// ]


const App = () => {
    return(
    <div>
        <Menu products={products} icon='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmjrvsf3aKS7Ek_rlzcqpKGpjWHDxiXKc_aZkBCC6IZeT7EMflcg' />
    </div>)
}

export default App