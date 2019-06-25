import React from 'react'

const TestButton = (props) => {
    return (
        <button style={TestButtonStyle} onClick={props.test}>
            TEST!
        </button>
    )
}

const TestButtonStyle = {
    position: 'fixed',
    right: '0px',
    top: '25vh'
}

export default TestButton
