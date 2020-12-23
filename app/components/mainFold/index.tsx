import { Button } from '../button'

export default function MainFold (): JSX.Element {
  return (
    <section className='mainFold_wrapper'>
      <div className='mainFold_front'>
        <h1 className='mainFold_header1'>
          The enterprise-grade  privacy-era customer data platform
        </h1>
        <h2 className='mainFold_header2'>
          Cloud Native Analytics, Data Integrations, Governance, Messaging, and Activation
        </h2>
        <div className='mainFold_buttons'>
          <Button
            id='sign-up'
            external
            link='mailto:sales@blotout.io'
            text='Signup for Demo'
            type='primary'
          />
          <Button
            id='product-video'
            external
            link='https://www.youtube.com/channel/UC-ywhz5uMq_3kX_JnHorg-A'
            text='See our Product Video'
            type='secondary'
          />
        </div>
        <div className='mainFold_imageWrapper'>
          <div className='mainFold_imageSpacing'>
            <img src='/images/main_fold.jpg' alt='Main image' height='100%' width='100%' />
          </div>
        </div>
      </div>
    </section>
  )
}
