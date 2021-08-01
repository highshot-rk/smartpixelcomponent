import React, { FC, HTMLAttributes } from 'react'
import TestImage from './Blank.png'
import { Button } from '../buttons/Button'

export interface CTAType {
    name: string
    url: string
}

export interface CTAInfoType {
    head: string
    text: string
    cta: CTAType
}

export interface PrimaryBlockProps extends HTMLAttributes<HTMLDivElement> {
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
export const PrimaryBlock: FC<PrimaryBlockProps> = ({
    type  = "vertical",
    mirror = "false",
    ...props
}) => {
    const Image = () => {
        return (
            <div
                className={`
                    ${type!="vertical" && "px-12 py-6"}
                    ${type=="vertical" && "pb-8"}
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
                    ${type!="vertical" && "flex items-center justify-center"}
                `}
            >
                <div 
                    className={`
                        ${type!="vertical" && "pl-12"
                    }
                `} >
                    <h2
                        className='fontStyle-4xl'
                    >
                        {
                            props.info.head
                        }
                    </h2>
                    <p
                        className='text-base pt-4'
                    >
                        {
                            props.info.text
                        }
                    </p>
                    {
                        props.info.cta &&
                        <div
                            className="pt-6">
                            <Button 
                                text = {props.info.cta.name}
                                url = {props.info.cta.url}
                                type = "primary"
                                icon = 'none'
                                size = "large"
                            />
                        </div>
                    }
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
