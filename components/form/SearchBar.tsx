import React, { FC, HTMLAttributes, useState } from 'react'
import { SearchIcon } from "../svg/Search"
import focusClasses from "../../utilities/focusClasses"

export interface SearchBarProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * focussed type
     */
    isFocussed?: boolean
    /**
     * filled text
     */
    text?: string
    /**
     * place holder string
     */
    placeHolder?: string
    /**
     * disabled
     */
    isDisabled?: boolean

}

/**
 * Primary UI component for user interaction
 */
export const SearchBar: FC<SearchBarProps> = (props) => {
    const [autoFocus, setInputFocus] = useState(false);
    return (
        <div
            className={`w-72 flex rounded-lg items-center overflow-hidden
                ${ !props.isDisabled && "hover:border-gray-300 dark:border-gray-400" } dark:bg-gray-800 dark:text-white text-base h-12 max-h-12 py-3 px-4 rounded-lg border border-gray-200 ${props.isDisabled && "dark:border-gray-500"}
                ${focusClasses('outline-none ring-2 ring-brand-500 border-transparent', props.isFocussed)}` }
            defaultValue={props.text}
        >
            <button
                disabled={props.isDisabled}
            >
                <SearchIcon color="text-gray-600" />
            </button>
            <input
                disabled={props.isDisabled}
                className='border-none ml-3.5 focus:outline-none dark:bg-gray-800 bg-white dark:text-white'
                defaultValue={props.text}
                placeholder={props.placeHolder}
                onFocus={() => setInputFocus(true) }
                onBlur={() => setInputFocus(false)}
            />
        </div>

    )
}
