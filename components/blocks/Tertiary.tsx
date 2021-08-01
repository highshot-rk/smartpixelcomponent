import React, { FC, HTMLAttributes } from 'react'

export interface TertiaryProps extends HTMLAttributes<HTMLDivElement> {

}

export const Tertiary: FC<TertiaryProps> = (props) => {
  return (
    <div>
      <h2 className='text-5xl'>Tertiary</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
