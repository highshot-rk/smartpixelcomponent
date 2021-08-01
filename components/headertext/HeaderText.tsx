import React, { FC, HTMLAttributes } from 'react'
import { BreadCrumb, BreadCrumbType } from '../breadcrumb/BreadCrumb'
import { Input } from '../form/Input'
import { Button } from '../buttons/Button'
import { SP } from '../svg/SP'

export interface HeaderTextFooterType {
    type: "default" | "form" | "case"
    buttonText?: string
    formPlaceholder?: string
    caseText?: string
    url?: string
}

export interface HeaderTextProps extends HTMLAttributes<HTMLElement> {
    /**
     * Header type and information
     */
    styles: HeaderTextFooterType
    /**
     * breadcrumb
     */
    breadcrumb?: Array<BreadCrumbType>
    /**
     * text to show as title
     */
    title: string
    /**
     * text to show
     */
    text: string

    className?: string
}

/**
 * Primary UI component for user interaction
 */
export const HeaderText: FC<HeaderTextProps> = ({
    breadcrumb=[],
    ...props
}) => {

    return (
        <div
            {...props}
            className={` flex flex-col
                ${props.className?props.className:''}
            `}
        >
            <BreadCrumb 
                crumblist={breadcrumb}
                styles="fixed"
                className="text-gray-50 pb-3"
            />
            <h1
                className='text-gray-50 fontStyle-5xl '// lg:fontStyle-6xl md:fontStyle-5xl sm:fontStyle-5xl'
            >
                { props.title }
            </h1>
            <p
                className='text-gray-50 text-base break-words pt-4'
            >
                { props.text }
            </p>
            <div
                className='pt-6 pb-4'
            >
                {
                    (props.styles.type=="default") && (
                        <a
                            href={props.styles.url}
                            className='bg-brand-400 rounded-lg py-4 px-5 text-base font-semibold uppercase text-brand-900 hover:bg-brand-300'
                        >
                            { props.styles.buttonText }
                        </a>
                    )
                }
                {
                    (props.styles.type=="form") && (
                        <form className="flex space-x-2">
                            <Input 
                                placeholder={props.styles.formPlaceholder}
                            />
                            <Button 
                                text = {props.styles.buttonText}
                                forceDark = "true"
                                type = "primary"
                                icon = 'none'
                                size = "large"
                            />
                        </form>
                    )
                }
                {
                    (props.styles.type=="case") && (
                        <div
                            className='flex items-center'
                        >
                            <SP width='48' height='48' />
                            <a
                                className='text-gray-50 ml-7'
                                href={ props.styles.url }
                            >
                                { props.styles.caseText }
                            </a>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
