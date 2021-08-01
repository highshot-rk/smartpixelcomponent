import React, { FC, HTMLAttributes } from 'react'

export interface TestimonialsProps extends HTMLAttributes<HTMLDivElement> {

}

export const Testimonials: FC<TestimonialsProps> = (props) => {
  return (
    <div>
      <h2 className='text-5xl'>Testimonial</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
