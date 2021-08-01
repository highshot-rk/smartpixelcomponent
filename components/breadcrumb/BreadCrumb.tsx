import React, { FC, HTMLAttributes } from 'react'

export interface BreadCrumbType {
    name: string
    url: string
}

export interface BreadCrumbProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * fixed: no link, no click
     * responsive: link, clickable and hover
     */
    styles?: "fixed" | "responsive"
    /**
     * breadcrumb data list
     */
    crumblist: Array<BreadCrumbType>

    className?: string
}

/**
 * Primary UI component for user interaction
 */
export const BreadCrumb: FC<BreadCrumbProps> = ({
    styles="responsive",
    crumblist = [],
    ...props
}) => {

    return (
        <nav
            {...props}
            aria-label="Breadcrumb"
            className={`
                ${props.className?props.className:''}
            `}
        >
            <ul className="flex flex-wrap">
                {
                    crumblist.map((item, index) => {
                        return (
                            <li
                                key={index}
                            >
                                <span
                                    className={`fontStyle-xl
                                        ${(styles=='fixed') && ""}
                                        ${ (styles=='responsive') && "hover:text-brand-300"}`}
                                    key={index}
                                >
                                    <a
                                        href={ ((styles=='responsive') ? item.url : null) }
                                    >
                                        {
                                            item.name
                                        }
                                    </a>
                                </span>
                                {
                                    (crumblist.length - 1 > index) && <span className='px-2.5'>/</span>
                                }
                                
                            </li>
                        )
                        
                    })
                }
            </ul>
        </nav>
    )
}
