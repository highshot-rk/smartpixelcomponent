import React, { FC, HTMLAttributes } from 'react'

export interface LogosProps extends HTMLAttributes<HTMLDivElement> {

}

export const Logos: FC<LogosProps> = (props) => {
  return (
    <div>
      <h2 className='text-5xl'>Logos</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
