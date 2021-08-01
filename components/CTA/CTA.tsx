import React, { FC, HTMLAttributes } from 'react'
import { Button } from '../buttons/Button'

export interface CTAType {
    name?: string
    url?: string
}

export interface CTAProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * CTA data list
     */
    ctalist?: Array<CTAType>
    /**
     * Caption string
     */
    caption?: string
    /**
     * description string
     */
    description?: string
}

/**
 * Primary UI component for user interaction
 */
export const CTA: FC<CTAProps> = ({
    ctalist = [],
    caption = "",
    description = "",
    ...props
}) => {

    return (
        <div className="w-full py-24 text-center bg-gray-900">
            <h2 className='fontStyle-4xl text-gray-50'>{ caption && caption !== "" ? caption : "We can also create any simulated realities" }</h2>
            <p className="text-lg text-gray-50 mt-4 leading-7 mb-7">{ description && description !== "" ? description : "for any use case you may have in mind" }</p>
            <div className="inline-flex space-x-4">
            { ctalist.map((cta, index) => (
                index == 0 &&
                    <Button 
                    text = {cta.name}
                    url = {cta.url}
                    type = "primary"
                    icon = 'none'
                    size = "large"
                />
                
                ||
                    <Button 
                    text = {cta.name}
                    url = {cta.url}
                    type = "tertiary"
                    icon = 'none'
                    size = "large"
                />
            )) }
            </div>
        </div>
    )
}