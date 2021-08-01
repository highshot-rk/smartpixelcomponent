import React, { FC, HTMLAttributes, useState, useEffect } from 'react'
import { HeaderText, HeaderTextProps } from '../headertext/HeaderText'
import { useMediaPredicate } from "react-media-hook";
/*
* In production mode, show dynamic image and video with url
*/
import TempImage from '../../assets/images/test_blockicon.png';

export interface BlockIconProps extends HTMLAttributes<HTMLElement> {
   /**
    * type of BlockIcon ("horizontal" | "vertical")
    */
    type?: "horizontal" | "vertical"
    /**
     *  image url to show
     */
    imageurl?: string
    /**
     * heading text
     */
    heading?: string
    /**
     * content text
     */
    text?: string
    classNames?: string
}

/**
 * Primary UI component for user interaction
 */
export const BlockIcon: FC<BlockIconProps> = ({
    type = "horizontal",
    heading = "Heading",
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    ...props
}) => {
    const desktop = useMediaPredicate("(min-width: 640px)")

    return (
        
        <div
            {...props}
            className={`
                ${type=="horizontal" && "flex"}
                ${props.classNames?props.classNames:""}
            `}
        >
            <div
                className={`
                    ${type=="vertical" && "py-2"}
                    ${type=="horizontal" && "px-6 pb-14"}
                `}
            >
                <img 
                    src={props.imageurl?props.imageurl:TempImage}
                    className={`w-14 h-14`}
                />
            </div>
            <div
                className={`
                    ${type=="vertical" && "mt-6"}
                    ${type=="horizontal" && "ml-6"}
                `}
                style={
                    {
                        width: type == "horizontal" ? "310px" : "290px"
                    }
                }
            >
                <h2
                    className='fontStyle-2xl'
                >
                    {
                        heading && heading == "" ? heading : "Heading"
                    }
                </h2>
                <p
                    className='text-base pt-2'
                >
                    {
                        text && text == "" ? text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit ed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    }
                </p>
            </div>
        </div>
    )
}
