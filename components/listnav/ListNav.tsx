import React, { FC, HTMLAttributes } from 'react'
import { PopUpNavItem, PopUpNavItemProps } from '../popupnavitem/PopUpNavItem'

export interface MenuItem {
    name: string
    url: string
    type?: "default" | "header" | "button"
}

export interface MenuType {
    groupcaption: string
    grouplist:Array<MenuItem>
}

export interface ListNavProps extends HTMLAttributes<HTMLDivElement> {
    
    /**
     * style
     */
    styles: "elevated" | "flat"
    /**
     * If data contains one, it will be single. If data contains more than one, it will be multi. At this time, last element will be tertiary  button.
     */
    linkList: Array<MenuType>
}

/**
 * Primary UI component for user interaction
 */
export const ListNav: FC<ListNavProps> = ({
    styles="elevated",
    linkList = [],
    ...props
}) => {
    linkList = (linkList == null || linkList == undefined) ? [] : linkList
    return (
        <div
            className={`rounded-lg bg-gray-50 dark:bg-transparent px-3 py-2.5 w-max
                ${ (styles == "elevated") && "shadow-lg" }
                ${ (linkList.length > 1) && (styles == "elevated") && "flex" }
                ${ (linkList.length > 1) && (styles == "flat") && "grid grid-cols-2" }
            `}
            style={{width: 'fit-content'}}
        >
            {
                linkList.map((menu, index) => {
                    return <div className="m-1.5 w-max" key={index} >
                        {
                            (linkList.length > 1) && (
                                <div
                                    className={`font-semibold text-sm leading-5 uppercase px-3 py-2.5 dark:text-gray-100 text-gray-800`}
                                >
                                    { menu.groupcaption }
                                </div>
                            )
                        }
                        {
                            menu.grouplist.map((menuItem, subIndex) => {
                                return (<PopUpNavItem  caption={menuItem.name} type={menuItem.type?menuItem.type:"default"} key={subIndex} className='px-3 py-2.5' href={menuItem.url} ></PopUpNavItem>)
                            })
                        }
                    </div>
                })
            }
        </div>
    )
}
