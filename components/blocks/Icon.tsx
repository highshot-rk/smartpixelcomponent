import React, { FC, HTMLAttributes } from 'react'

export interface IconProps extends HTMLAttributes<HTMLDivElement> {

}

export const Icon: FC<IconProps> = (props) => {
  return (
    <div>
      <h2 className='text-5xl'>Icon</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
