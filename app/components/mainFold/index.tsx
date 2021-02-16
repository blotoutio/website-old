import { Button } from '../button'

export default function MainFold (): JSX.Element {
  return (
    <section className='mainFold_wrapper'>
      <div className='mainFold_front'>
        <h1 className='mainFold_header1'>
          Capture customer journeys in your infrastructure
        </h1>
        <h2 className='mainFold_header2'>
          Blotout lets you balance privacy and attribution.
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
            id='join-slack'
            external
            link='https://join.slack.com/t/blotout-workspace/shared_invite/zt-medvirwy-ucfSJGHl6gjBh_tTWPWAYQ'
            text='Join our Slack'
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
