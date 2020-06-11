import React, { Fragment, useState } from 'react'

const Events = () => {

    const [text, setText] = useState('Text from state')

    const handleClick = () => {
        setText('Ouch lo cambie')
    }

    return (
        <Fragment>
            <hr />
            <h2>Eventos</h2>
            <button onClick={handleClick}>Click</button>
            <h2>{text}</h2>
        </Fragment>
    )
}

export default Events
