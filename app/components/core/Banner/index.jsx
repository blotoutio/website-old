import { useLocation, Link } from 'react-router-dom'

import { useEffect } from 'react'

import { ArrowRight20 } from '@carbon/icons-react'

import { codifyClick } from '~/utils'

const Banner = () => {
  const { pathname } = useLocation()

  const announcementPath = '/blog/edgetag-announcement'

  const checkIfAnnouncementPath = () => {
    return pathname === announcementPath
  }

  useEffect(() => {
    checkIfAnnouncementPath()
  }, [pathname])

  return (
    <div className='banner'>
      {checkIfAnnouncementPath() ? (
        'Announcing EdgeTag: Fix your Facebook Pixels in 2 min. Read the announcement below.'
      ) : (
        <>
          Announcing EdgeTag: Fix your Facebook Pixels in 2 min.
          <Link
            to='/blog/edgetag-announcement'
            onClick={() => codifyClick('Banner - EdgeTag Announcement')}
          >
            Read the announcement <ArrowRight20 />
          </Link>
        </>
      )}
    </div>
  )
}

export default Banner
