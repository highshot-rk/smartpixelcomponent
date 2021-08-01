import React, { FC, HTMLAttributes, useState, useEffect } from 'react'
import { useMediaPredicate } from "react-media-hook";

export interface SideNavItemProps extends HTMLAttributes<HTMLElement> {
   /**
    * type of SideNavItem ("linkheader" | "link" | "header")
    */
    type?: "linkheader" | "link" | "header"
    /**
     *  nav text
     */
    text?: string
    /**
     *  nav url
     */
    url?: string
    /**
     * status of item
     */
    status?: "default" | "active" | "hover"
    /**
     * space bar ? if spacer, true else false
     */
    spacer?: boolean
    classNames?: string
}

/**
 * Primary UI component for user interaction
 */
export const SideNavItem: FC<SideNavItemProps> = ({
    url = "#",
    type = "linkheader",
    text = "Link Header",
    status = "default",
    spacer = false,
    children = <></>,
    ...props
}) => {
    const desktop = useMediaPredicate("(min-width: 640px)")

    return (
        
        <li
            {...props}
            className={`list-none border-l-2 pr-3 
                ${ spacer ? "py-1.5" : "py-2.5"} 
                ${ type == "link" ? "pl-7" : "pl-5"}
                ${ status == "default" ? "border-gray-100" : "border-brand-600 text-brand-700" }
                hover:border-brand-600 hover:text-brand-700 text-gray-600 cursor-pointer
            `}
        >
            { spacer ? "" : 
            <a
                href={url ? url : "#"}
                className={`fontStyle-sm
                    ${ type == "header" ? "font-semibold" : "" }
                `}
            >{ text }</a> }
        </li>
    )
}
