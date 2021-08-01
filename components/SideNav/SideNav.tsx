import React, { FC, HTMLAttributes, useState, useEffect } from 'react'
import { useMediaPredicate } from "react-media-hook";

import { SideNavItemProps, SideNavItem } from "../sidenavitem/SideNavItem";

export interface SideNavProps extends HTMLAttributes<HTMLElement> {
   /**
    * SideNav data object
    */
    navObj?: SideNavItemProps[]
    classNames?: string
}

/**
 * Primary UI component for user interaction
 */
export const SideNav: FC<SideNavProps> = ({
    navObj = [],
    ...props
}) => {
    const desktop = useMediaPredicate("(min-width: 640px)")

    return (
        <ul
            {...props}
            className={`${props.classNames ? props.classNames : ""}`}
        >
            {navObj.map((navItem, index) => (
                <SideNavItem 
                    {...navItem}
                />
            ))}
        </ul>
    )
}
