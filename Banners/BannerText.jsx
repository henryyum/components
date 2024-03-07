import React from 'react'
import {BannerContext} from './Banner'

export default function Banner({children}){
    const {status} = React.useContext(BannerContext)

    return (
        <p className={status && `text-${status}`}>
            {children}
        </p>
            
    )
}