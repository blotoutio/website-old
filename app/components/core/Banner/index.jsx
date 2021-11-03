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
      Blotout is proud to announce our $3m seed round.
      {checkIfAnnouncementPath() ? (
        <span>Read the announcement below.</span>
      ) : (
        <Link
          to='/blog/funding-announcement'
          onClick={() => codifyClick('Banner - Funding Announcement')}
        >
          <span>Read the announcement</span>
          <ArrowRight20 />
        </Link>
      )}
    </div>
  )
}

export default Banner
