import React, { FC, HTMLAttributes } from 'react'
import { SearchIcon } from '../svg/Search';

export interface PopUpNavItemProps extends HTMLAttributes<HTMLElement> {
    
    /**
     * pop up type
     */
    type: "default" | "header" | "button" | "special"
    /**
     * flag to check pop up item is active
     */
    isActive?: boolean
    /**
     * text to show
     */
    caption: string
    /**
     * url to show
     */
     href?: string
     /**
      * child node
      */
     children?: React.ReactNode


}

/**
 * Primary UI component for user interaction
 */
export const PopUpNavItem: FC<PopUpNavItemProps> = ({
    caption="Link",
    type="default",
    href="#",
    isActive=false,
    ...props
}) => {
    
    return (
        <div
            { ...props }
            className={`flex items-center
                ${(type != "default") && "uppercase"}
                ${(type == "special") && "px-3 py-2.5 text-gray-100 tracking-wider font-semibold text-sm "}
                    ${((type == "special") && (!isActive) && "hover:text-brand-300 dark:text-gray-100 dark:hover:text-brand-300")}
                    ${((type == "special") && (isActive) && "text-brand-300 dark:text-brand-300")}
                ${(type == "default") && "px-3 py-2.5 text-sm  "}
                    ${((type == "default") && (!isActive) && "text-gray-800  hover:text-brand-600 dark:text-gray-100 dark:hover:text-brand-300")}
                    ${((type == "default") && (isActive) && "text-brand-600 dark:text-brand-300")}
                ${(type == "header") && "px-3 py-2.5 font-semibold tracking-wider text-gray-800 text-sm dark:text-gray-100"}
                ${(type == "button") && "px-3 py-3.5 tracking-wider text-xs font-semibold "}
                    ${((type == "button") && (!isActive) && "text-brand-600 hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-100")}
                    ${((type == "button") && (isActive) && "text-brand-700 dark:text-brand-100")}
            `}
            style={{width: 'fit-content'}}
        >
            <a href={href}>
                { caption }
            </a>
            {
                props.children ? props.children : ""
            }
        </div>
    )
}
