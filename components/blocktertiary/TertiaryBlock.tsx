import React, { FC, HTMLAttributes } from 'react'
import TestImage from './Blank.png'


export interface CTAInfoType {
    head: string
    text: string
}

export interface TertiaryBlockProps extends HTMLAttributes<HTMLDivElement> {
   /**
    *  image url to show
    */
    imageurl?: string
    /**
     * text and button to show
     */
    info: CTAInfoType
    /**
     * Block type
     */
    type?: "default" | "vertical"
    /**
     * Is mirror
     */
    mirror?: boolean
    className?: string
}


/**
 * Primary UI component for user interaction
 */
export const TertiaryBlock: FC<TertiaryBlockProps> = ({
    type  = "vertical",
    mirror = "false",
    ...props
}) => {
    const Image = () => {
        return (
            <div
                className={`
                    ${type=="vertical" && "pb-6"}
                `}
            >
                <img 
                    src={props.imageurl?props.imageurl:TestImage}
                    className={`rounded-lg
                        ${type=="default" && "w-auto"}
                    `}
                />
            </div>
        )
    }
    const Text = () => {
        return (
            <div
                className={`
                    ${type!="vertical" && "flex justify-center"}
                `}
            >
                <div 
                    className={`
                        ${type!="vertical" && "pl-12"
                    }
                `} >
                    <h2
                        className='fontStyle-2xl'
                    >
                        {
                            props.info.head
                        }
                    </h2>
                    <p
                        className='text-base pt-2'
                    >
                        {
                            props.info.text
                        }
                    </p>
                </div>
            </div>
        )
    }
    return (
        <div
            {...props}
            className={`
                ${type=="default" && "flex"}
                ${mirror && "flex-row-reverse"}
                ${props.className?props.className:""}
            `}
        >
            {
                (type=="default" || type=="vertical") && (
                    <>
                        <Image />
                        <Text />
                    </>
                )
            }
            
            
        </div>
    )
}
