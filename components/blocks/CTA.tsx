import React, { FC, HTMLAttributes } from 'react'

export interface CTAProps extends HTMLAttributes<HTMLDivElement> {

}

export const CTA: FC<CTAProps> = (props) => {
  return (
    <div>
      <h2 className='text-5xl'>CTA</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
