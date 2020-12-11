import React from 'react'

export default function HeaderFiller (props: any): JSX.Element {
  return (
    <div className='headerFiller_wrapper'>
      <div className='headerFiller_filler' />
      {props.children}
    </div>
  )
}
