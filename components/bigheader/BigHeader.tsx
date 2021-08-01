import React, { FC, HTMLAttributes, useState, useEffect } from 'react'
import { HeaderText, HeaderTextProps } from '../headertext/HeaderText'
import { useMediaPredicate } from "react-media-hook";
/*
* In production mode, show dynamic image and video with url
*/
import bgTestImage from '../../assets/images/bg_bigheader.jpg'
import bgTestVideo from '../../assets/images/bunny.mp4'

export interface BigHeaderProps extends HTMLAttributes<HTMLElement> {
   /**
    * background image or video url in assets folder
    */
    bgImage?: string
    /**
     * image or video
     */
    bgtype: "image" | "video"
    /**
     * header text information
     */
    headerinfo: HeaderTextProps

    className?: string
}

/**
 * Primary UI component for user interaction
 */
export const BigHeader: FC<BigHeaderProps> = ({
    bgImage="../images",
    ...props
}) => {
    const desktop = useMediaPredicate("(min-width: 640px)")

    return (
        <header
            {...props}
            className={`min-h-568 lg:h-90vh md:h-90vh sm:h-90vh overflow-hidden bg-cover relative
                ${props.className?props.className:''}
            `}
            style={
                {
                    //backgroundImage: 'url(https://source.unsplash.com/random)'
                    backgroundImage: `url(${bgTestImage})`,
                }
            }
             
        >
            {
                (props.bgtype == "video" && desktop ) && (
                    <video id="videoBG" poster={bgTestImage} autoPlay muted loop className='absolute z-0 top-0 left-0 object-cover w-full h-full hidden sm:block'>
                        <source src={bgTestVideo} type="video/mp4" />
                        {/* <source src={bgImage} type="video/mp4" /> */}
                    </video>
                )
            }
            <div 
                className='absolute z-10 h-2/6 -top-1/6 left-0 w-full bg-gradient-to-b from-gray-900 to-transparent opacity-40'
            />
            <div 
                className='absolute z-10 h-full -bottom-1/6 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent opacity-60'
            />
            {/* 
            position: absolute;
            height: 160px;
            left: 0px;
            right: 0px;
            top: 120px;

            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
            transform: matrix(1, 0, 0, -1, 0, 0); */}
            <div
                className='absolute z-20 bottom-0 left-0 p-6 lg:p-12 md:p-12 sm:p-12'
            >
                <HeaderText 
                    {...props.headerinfo} 
                    style={{backgroundColor:'transparent'}}
                />
            </div>
        </header>
    )
}
