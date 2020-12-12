import HeaderFiller from '../headerFiller'

export default function MDX (props: any): JSX.Element {
  return (
    <HeaderFiller>
      <section className='mdx_content'>
        {props.children}
      </section>
    </HeaderFiller>
  )
}
