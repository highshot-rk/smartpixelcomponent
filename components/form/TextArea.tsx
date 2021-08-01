import React, { FC, HTMLAttributes } from 'react'
import { ErrorIcon } from "../svg/Error"
import { ValidatingIcon } from "../svg/Validating"
import { TickIcon } from "../svg/Tick"
import focusClasses from "../../utilities/focusClasses"

export interface TextAreaProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * focussed type
     */
    isFocussed?: boolean
    /**
      * Label text
      */
    label?: string
    /**
      * filled text
      */
    text?: string
    /**
     * placeholder text
     */
    placeholder?: string
    /**
      * information text
      */
    information?: string
    /**
      * error text
      */
    error?: string
    /**
      * error
      */
    isError?: boolean
    /**
      * checking...
      */
    isValidating?: boolean
    /**
      * success
      */
    isSuccess?: boolean
    /**
      * disabled
      */
    isDisabled?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const TextArea: FC<TextAreaProps> = (props) => {
    return (
        <div
            className="flex flex-col gap-y-1 w-72"
        >
            { props.label &&
              <div
                  className={`text-sm font-semibold flex flex-row justify-between dark:text-gray-300 ${ props.isDisabled && "text-gray-500 dark:text-gray-600"}`}
              >
                  <p>
                      { props.label }
                  </p>
                  { (props.isError && props.label )  && <ErrorIcon color="text-red-600" darkColor="dark:text-red-500" />}
                  { (props.isValidating && props.label )  && <ValidatingIcon color="text-blue-600" darkColor="dark:text-blue-500" />}
                  { (props.isSuccess && props.label )  && <TickIcon color="text-green-600" darkColor="dark:text-green-500" />}
              </div>
            }
            <div
                className="col-span-2"
            >
                <textarea
                    className={`${ !props.isDisabled && "hover:border-gray-300 dark:border-gray-400" } dark:bg-gray-800 dark:text-white text-base py-3 px-4 rounded-lg border border-gray-200 ${props.isDisabled && "dark:border-gray-500"} w-72
                    ${focusClasses('outline-none ring-2 ring-brand-500 border-transparent', props.isFocussed)}
                    ${props.isError && "drop-shadow-sm outline-none ring-2 dark:ring-red-500 ring-red-600 border-transparent"}
                    ${props.isValidating && "drop-shadow-sm outline-none ring-2 dark:ring-blue-500 ring-blue-600 border-transparent"}
                    ${props.isSuccess && "drop-shadow-sm outline-none ring-2 dark:ring-green-500 ring-green-600 border-transparent"}` }
                    defaultValue={props.text}
                    placeholder={props.placeholder}
                    disabled={props.isDisabled}
                />
            </div>
            <div
                className={`text-sm font-normal dark:text-gray-300 ${ props.isDisabled && "text-gray-500 dark:text-gray-600"} `}
            >
                { props.information }
            </div>
            {props.isError && (<div className="text-sm font-normal text-red-700">{ props.error }</div>)}
        </div>
    )
}
