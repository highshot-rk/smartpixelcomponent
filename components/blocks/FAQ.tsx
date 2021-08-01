import React, { FC, HTMLAttributes } from 'react'

export interface FAQProps extends HTMLAttributes<HTMLDivElement> {

}

export const FAQ: FC<FAQProps> = (props) => {
  return (
    <div>
      <h2 className='text-5xl'>FAQ</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
