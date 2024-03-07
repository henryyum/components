import React from 'react'
import { BannerContext } from './Banner'

export default function Banner({children}){
    const {status} = React.useContext(BannerContext)

    return (
        <h1 className={status && `title-${status}`}>
             {children}
        </h1>
            
        
            
    )
}