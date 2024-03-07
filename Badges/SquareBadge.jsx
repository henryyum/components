import React from 'react'

export default function Button({children, variant}){
    let variantClass = variant && `button-${variant}`


    return (
        <button className={variantClass}>{children}</button>
    )
}