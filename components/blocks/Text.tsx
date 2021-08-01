import React, { FC, HTMLAttributes } from 'react'

export interface TextProps extends HTMLAttributes<HTMLDivElement> {

}

export const Text: FC<TextProps> = (props) => {
  return (
    <div>
      <h2 className='text-5xl'>Text</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
