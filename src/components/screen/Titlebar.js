import React from 'react'
const stylesdata = {
    fontSize:'30px',
    color:'red',
    marginLeft:'40%'
}

export default function Titlebar(props) {
    return (
        <>
            <h2 style={stylesdata}>{props.name}</h2>
        </>
    )
}
