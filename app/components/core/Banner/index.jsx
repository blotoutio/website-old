import { useLocation, Link } from 'react-router-dom'

import { useEffect } from 'react'

import { ArrowRight20 } from '@carbon/icons-react'

import { codifyClick } from '~/utils'

const Banner = () => {
  const { pathname } = useLocation()

  const announcementPath = '/blog/funding-announcement'

  const checkIfAnnouncementPath = () => {
    return pathname === announcementPath
  }

  useEffect(() => {
    checkIfAnnouncementPath()
  }, [pathname])

  return (
    <div className='banner'>
      {checkIfAnnouncementPath() ? (
        'Blotout is proud to announce our $3m seed round. Read the announcement below.'
      ) : (
        <>
          Blotout is proud to announce our $3m seed round.
          <Link
            to='/blog/funding-announcement'
            onClick={() => codifyClick('Banner - Funding Announcement')}
          >
            Read the announcement <ArrowRight20 />
          </Link>
        </>
      )}
    </div>
  )
}

export default Banner
