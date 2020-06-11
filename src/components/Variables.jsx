import React from 'react'

const Variables = () => {

    const saludo = 'Hi from here'
    const img = "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"

    return (
        <div>
            <h2>New component {saludo}</h2>
            <img src={img} alt=""/>
        </div>
    )
}

export default Variables
