import React from 'react'

function input(props) {
    return (
        <div className='form'>
            <input name={props.name} onChange={props.onChange} type={props.type} placeholder={props.placeholder}></input>
        </div>
    )
}

export default input