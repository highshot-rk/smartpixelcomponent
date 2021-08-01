import React, { FC, HTMLAttributes } from 'react'

export interface QABlockProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * text to show as question
     */
    question: string
    /**
     * text to show as answer
     */
    answer?: string

    className?: string
}


/**
 * Primary UI component for user interaction
 */
export const QABlock: FC<QABlockProps> = ({
    answer = "",
    ...props
}) => {
    return (
        <div
            {...props}
            className={`text-gray-900
                ${props.className?props.className:""}
            `}
        >
            <div
                className="font-semibold text-lg leading-7"
            >
                {
                    props.question
                }
            </div>
            <div
                className="pt-2 text-base leading-6"
            >
                {
                    answer
                }
            </div>
        </div>
    )
}
