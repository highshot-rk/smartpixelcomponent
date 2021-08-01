import React, { FC, HTMLAttributes } from 'react'
import { SiteNavProps } from './SiteNav'
import { NavItem } from '../navitem/NavItem'

/**
 * Primary UI component for user interaction
 */
export const MobileMenu: FC<SiteNavProps> = ({
    demobuttontext="Free Demo",
    demourl="#",
    styles="black",
    menudata=[],
    ...props
}) => {
    return (
        <div
            {...props}
            className={`bg-gray-900
                ${(styles=="transWhite") && "bg-opacity-10"}
            `}
        >
            <div 
                className='flex justify-between pb-5 pt-6'
            >
                <div
                    className="ml-2"
                >
                    <a 
                        href={demourl}
                        className="py-3.5 px-3.5 uppercase bg-brand-400 rounded-lg tracking-wider leading-3 text-sm font-semibold"
                    >
                        {demobuttontext}
                    </a>
                </div>
                <NavItem 
                    className='mr-7'
                    styles="default/white" 
                    caption={props.languagelist.current ? props.languagelist.current : "En" } 
                    submenu={props.languagelist.submenu}
                />
            </div>
            <hr 
                className='mx-2 bg-opacity-10 mt-6 text-gray-400'
            />

            {
                menudata.map((menu, menuIndex) => {
                    return (
                        <div key={menuIndex}>
                            <div
                                className="font-borda uppercase text-gray-50 text-lg tracking-widest pl-6 pt-6 "
                            >
                                {
                                    (menu.submenu == null) ? (
                                        <a
                                            href={menu.captionlink}
                                        >
                                            {menu.caption}
                                        </a>
                                    ) : menu.caption
                                }
                            </div>
                            <div>
                                {
                                    (menu.submenu == null) ? (
                                       <></>
                                    ) : (
                                        <div
                                            className="grid grid-cols-2"
                                        >
                                            {
                                                menu.submenu.map((group, groupIndex) => {
                                                    return (
                                                    <div 
                                                        key={groupIndex}
                                                    >
                                                        <div
                                                            className="text-gray-100 font-semibold tracking-wider text-sm pl-6 pt-5"
                                                        >
                                                            {group.groupcaption}
                                                        </div>
                                                        {
                                                            group.grouplist.map((item, itemIndex) => {
                                                                return (
                                                                    <div 
                                                                        className='px-6 pt-5 text-gray-100'
                                                                        key={itemIndex}
                                                                    >
                                                                        <a
                                                                            className={`
                                                                                ${(item.type=="button") && "text-brand-300 hover:text-brand-600"}
                                                                            `}
                                                                            href={item.url}    
                                                                        >
                                                                            {item.name}
                                                                        </a>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div> 
                                                    )
                                                })
                                            }
                                            
                                        </div>
                                    )
                                }
                            </div>
                            {
                               ( menudata.length - 1 > menuIndex ) && 
                               <hr 
                                    className='mx-2 bg-opacity-10 mt-6 text-gray-400'
                                />
                            }
                            
                        </div>
                    )
                    
                })
            }
            <div className='pb-20'></div>
        </div>
    )
}
