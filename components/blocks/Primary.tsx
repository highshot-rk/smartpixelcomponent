import React, { FC, HTMLAttributes } from 'react'

export interface PrimaryProps extends HTMLAttributes<HTMLDivElement> {

}

export const Primary: FC<PrimaryProps> = (props) => {
  return (
    <div>
      <h2 className='text-5xl'>Primary</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
