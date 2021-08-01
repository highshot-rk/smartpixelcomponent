import React, { FC, HTMLAttributes } from 'react'
import { SearchIcon } from '../svg/Search';

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * text to display on button
     */
    text?: string
    /**
     * button link
     */
    url?: string
    /**
     * force dark mode
     */
    forceDark?: boolean
    /**
     * button type
     */
    type: "primary" | "secondary" | "tertiary"
    /**
     * icon position
     * only: show only icon with rounded button
     */
    icon: "right" | "left" | "only" | "none"
    /**
     * icon size
     */
    size: "small" | "default" | "large"
}

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
    type = "primary",
    text = 'LABEL',
    icon = 'none',
    size = "default",
    ...props
}) => {
    const cssClasses = `inline-flex items-center space-x-3 leading-0
        ${ (type == "primary" && !props.forceDark ) && "rounded-lg bg-brand-600 hover:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-200"}
        ${ (type == "primary" && props.forceDark ) && "rounded-lg bg-brand-400 hover:bg-brand-200"}
        ${ (type == "tertiary") && "bg-none" }
        ${ (size == "small") && "h-8 max-h-8 px-3.5 py-2.5"}
        ${ (size == "default") && "h-10 max-h-10 px-4 py-3.5"}
        ${ (size == "large") && "h-12 max-h-12 py-4 px-5"}
    `
    const Content = () => {
        return (
            <div>
                {
                    (icon != "none") && 
                    <SearchIcon 
                        color="text-white" darkColor="dark:text-black"
                    />
                }
                
                <span
                    className={`font-semibold tracking-wide uppercase
                        ${ (type == "primary" && !props.forceDark ) && "text-white dark:text-brand-900"}
                        ${ (type == "primary" && props.forceDark ) && "text-brand-900"}
                        ${ (type == "tertiary" && !props.forceDark ) && "text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-200"}
                        ${ (type == "tertiary" && props.forceDark ) && "text-brand-400 hover:text-brand-200"}
                        ${ (size == "small") && "text-xxs"}
                        ${ (size == "default") && "text-xs"}
                        ${ (size == "large") && "text-sm"}
                    `}
                >{ text }</span>
            </div>
        )
    }
    if (props.url)
        return (
            <a 
                href={props.url}
                className={cssClasses}
                {...props}
            >
            <Content />
            </a>
        )
    
    if (!props.url)
        return (
            <button 
                className={cssClasses}
                {...props}
            >
            <Content />
            </button>
        )
    
}
