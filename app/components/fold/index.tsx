import React from 'react'

export interface Props {
  number: number
  title: string
  children: JSX.Element
}

export default function Fold (props: Props): JSX.Element {
  const className = props.number%2 === 0 ? 'even' : 'odd'

  return (
    <div className={`fold_wrapper ${className}`} {...props}>
      <div className='fold_center'>
        <div className='fold_text'>
          <div className='fold_titleWrapper'>
            <img src={`/icons/fold${props.number}.svg`} width='56' height='56' alt={props.title} />
            <h3 className='fold_title'>{props.title}</h3>
          </div>
          {props.children}
        </div>
        <div className='fold_image'>
          <img src={`/images/fold${props.number}.jpg`} height='100%' width='100%' alt={`section-${props.number}`} />
        </div>
      </div>
    </div>
  )
}
