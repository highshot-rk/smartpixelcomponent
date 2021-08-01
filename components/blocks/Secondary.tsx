import React, { FC, HTMLAttributes } from 'react'

export interface SecondaryProps extends HTMLAttributes<HTMLDivElement> {

}

export const Secondary: FC<SecondaryProps> = (props) => {
  return (
    <div>
      <h2 className='text-5xl'>Secondary</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
