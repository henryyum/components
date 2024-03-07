import React from 'react'
const BannerContext = React.createContext()
export {BannerContext}

export default function Banner({children, status}){
    let BannerVariant = status && `banner-${status}`

    return (
        <BannerContext.Provider value={{status}}>
        <div className={`main-banner ${BannerVariant}`}>
                {children}
            </div>
        </BannerContext.Provider>
    )
}