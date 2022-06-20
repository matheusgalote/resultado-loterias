import React from 'react'

const Logo = ({ game }) => {

    return (
        <img src={require(`../public/img/${game}.png`)} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '200px', marginTop: '20px' }} />
    )
}

export default Logo