import React, { FC, HTMLAttributes, useState, useEffect } from 'react'
import Marquee from "react-fast-marquee";

export interface LogoPizzaInterface {
    imgUrl: string;
    href?: string;
}
    
export interface LogoPizzaProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * speech to display on LogoPizza
     */
    companyArr?: LogoPizzaInterface[]
    /**
     * mode : "Default" | "Compact"
     */
    mode?: "Default" | "Compact"
}

/**
 * Primary UI component for user interaction
 */
export const LogoPizza: FC<LogoPizzaProps> = ({
    companyArr = [],
    mode = "Default",
    ...props
}) => {

    return (
        <div
            className={`logo-pizza`}
            {...props}
        >
            <h3 className={`${ mode == "Compact" ? "text-2xl" : "text-4xl"} text-center mb-16`}>Trusted by</h3>
            <Marquee
                gradientWidth=  "0"
            >
                <div className={`flex flex-nowrap w-max  space-x-14 lg:space-x-32 md:space-x-16`}>
                { companyArr.map((company, id) => (
                    <div
                        key={id}
                        className={ mode == "Default" ? "h-14 lg:h-24 md:h-20" : "h-14 lg:h-16 md:h-12"}
                    >
                        { (company.imgUrl && company.imgUrl !== "") ? 
                            <img className="w-auto h-full" src={company.imgUrl ? company.imgUrl : `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`}></img>
                            : <div className="w-full h-full bg-black"></div>
                        }
                    </div>
                )) }
                </div>
            </Marquee>
        </div>
    )
}
