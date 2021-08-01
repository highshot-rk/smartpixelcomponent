import React, { FC, HTMLAttributes } from 'react'

export interface TextStylesProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * text to display for heading
     */
    type?: "all" | "heading" | "body"
   
}

/**
 * Primary UI component for user interaction
 */
export const TextStyles: FC<TextStylesProps> = ({
    type="all",
    ...props
}) => {

    return (
        <div 
            {...props}
            className={`w-full
                ${props.className?props.className:''}
            `}
        >
            {/* <h5 className = "text-gray-100 text-lg tracking-wider uppercase font-semibold">{headerText}</h5>
            <hr className = "border-brand-600 mt-4"/>
            <p className = "text-gray-100 text-base mt-8">
                {paragraph}
            </p> */}
            
            <div
              className={`mb-16
                ${ (type != "all" && type != "heading") && "display: hidden"}
              `}
            >
              <p className="fontStyle-lg uppercase strong mb-6">Headings : </p>
              <div
                className='bg-gray-50 p-8 mb-4 rounded-2xl'
              >
                <h1 className="fontStyle-9xl">Heading 9x</h1>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className='fontStyle-9xl'
                </pre>
              </div>
              
              <div
                className='bg-gray-50 p-8 mb-4 rounded-2xl'
              >
                <h1 className="fontStyle-8xl">Heading 8x</h1>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className='fontStyle-8xl'
                </pre>
              </div>
              
              <div
                className='bg-gray-50 p-8 mb-4 rounded-2xl'
              >
                <h1 className="fontStyle-7xl">Heading 7x</h1>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className='fontStyle-7xl'
                </pre>
              </div>
              
              <div
                className='bg-gray-50 p-8 mb-4 rounded-2xl'
              >
                <h1 className="fontStyle-6xl">Heading 6x</h1>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className='fontStyle-6xl'
                </pre>
              </div>
              
              <div
                className='bg-gray-50 p-8 mb-4 rounded-2xl'
              >
                <h1 className="fontStyle-5xl">Heading 5x</h1>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className='fontStyle-5xl'
                </pre>
              </div>
              
              <div
                className='bg-gray-50 p-8 mb-4 rounded-2xl'
              >
                <h1 className="fontStyle-4xl">Heading 4x</h1>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className='fontStyle-4xl'
                </pre>
              </div>
              
              <div
                className='bg-gray-50 p-8 mb-4 rounded-2xl'
              >
                <h1 className="fontStyle-3xl">Heading 3x</h1>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className='fontStyle-3xl'
                </pre>
              </div>
              
              <div
                className='bg-gray-50 p-8 mb-4 rounded-2xl'
              >
                <h1 className="fontStyle-2xl">Heading 2x</h1>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className='fontStyle-2xl'
                </pre>
              </div>
              
              <div
              className='bg-gray-50 p-8 mb-4 rounded-2xl'
            >
              <h1 className="fontStyle-xl">Heading x</h1>
              <pre
                className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                  className='fontStyle-xl'
              </pre>
            </div>
            </div>
            
            <div
              className={`mb-16
                ${ (type != "all" && type != "body") && "display: hidden"}
              `}
            >
              <p className="fontStyle-lg uppercase strong mb-6">Body large : </p>
              <div
                className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
              >
                <p className="fontStyle-lg">Body large</p>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className="fontStyle-lg"
                </pre>
              </div>
                
              
              <div
                className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
              >
                <p className="fontStyle-body uppercase strong">Body large strong</p>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className="fontStyle-lg strong"
                </pre>
              </div>
                
              
              <div
                className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
              >
                <p className="fontStyle-lg uppercase">Body large uppercase</p>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className="fontStyle-lg uppercase"
                </pre>
              </div>
                            
              <div
                className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
              >
                <p className="fontStyle-lg uppercase strong">Body Large uppercase strong</p>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className="fontStyle-lg uppercase strong"
                </pre>
              </div>
            </div>
              
            <div
              className={`mb-16
                ${ (type != "all" && type != "body") && "display: hidden"}
              `}
            >
              <p className="fontStyle-body uppercase  mb-6">Body : </p>
              <div
                className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
              >
                <p className="fontStyle-body">Body</p>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className="fontStyle-body"
                </pre>
              </div>
                
              
              <div
                className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
              >
                <p className="fontStyle-body strong">Body strong</p>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className="fontStyle-body strong"
                </pre>
              </div>
                
              
              <div
                className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
              >
                <p className="fontStyle-body uppercase">Body uppercase</p>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className="fontStyle-body uppercase"
                </pre>
              </div>
                            
              <div
                className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
              >
                <p className="fontStyle-body uppercase strong">Body uppercase strong</p>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className="fontStyle-body uppercase strong"
                </pre>
              </div>
            </div>

            <div
              className={`mb-16
                ${ (type != "all" && type != "body") && "display: hidden"}
              `}
            >
              <p className="fontStyle-sm uppercase strong mb-6">Body small : </p>
              <div
                className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
              >
                <p className="fontStyle-sm">Body small</p>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className="fontStyle-sm"
                </pre>
              </div>
                
              
              <div
                className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
              >
                <p className="fontStyle-sm strong">Body small strong</p>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className="fontStyle-sm strong"
                </pre>
              </div>
                
              
              <div
                className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
              >
                <p className="fontStyle-sm uppercase">Body small uppercase</p>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className="fontStyle-sm uppercase"
                </pre>
              </div>
                            
              <div
                className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
              >
                <p className="fontStyle-sm uppercase strong">Body small uppercase strong</p>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className="fontStyle-sm uppercase strong"
                </pre>
              </div>
            </div>

            <div
              className={`mb-16
                ${ (type != "all" && type != "body") && "display: hidden"}
              `}
            >
              <p className="fontStyle-xs uppercase strong mb-6">Body xsmall : </p>
              <div
                className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
              >
                <p className="fontStyle-xs">Body xsmall</p>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className="fontStyle-xs"
                </pre>
              </div>
                
              
              <div
                className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
              >
                <p className="fontStyle-xs strong">Body xsmall strong</p>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className="fontStyle-xs strong"
                </pre>
              </div>
                
              
              <div
                className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
              >
                <p className="fontStyle-xs uppercase mb-6">Body xsmall uppercase</p>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className="fontStyle-xs uppercase"
                </pre>
              </div>
                            
              <div
                className='bg-gray-50 py-4 px-8 mb-4 rounded-2xl'
              >
                <p className="fontStyle-xs uppercase strong">Body xsmall uppercase strong</p>
                <pre
                  className='inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600'>
                    className="fontStyle-xs uppercase strong"
                </pre>
              </div>
            </div>
        </div>
    )
}