import MenuIconDark from '../../graphics/icons/menu-icon-dark'
import MenuIconLight from '../../graphics/icons/menu-icon-light'
import XIconDark from '../../graphics/icons/x-icon-dark'
import XIconLight from '../../graphics/icons/x-icon-light'
import LogoLight from '../../graphics/logo-light'
import LogoBlue from '../../graphics/logo-blue'

export const getBackgroundColor = (pathname) => {
  if (pathname === '/about' || pathname.includes('/job')) {
    return 'var(--dark-blue-1)'
  }

  if (pathname === '/integrations') {
    return 'var(--dark-blue-2)'
  }

  if (pathname === '/privacy-policy' || pathname === '/terms-of-service') {
    return 'var(--grey-3)'
  }

  if (pathname.includes('/blog')) {
    return 'var(--light-blue-3)'
  }

  if (pathname.includes('/case-studies')) {
    return 'var(--light-blue-3)'
  }

  if (pathname.includes('/compare-with-google-analytics')) {
    return 'var(--grey-1)'
  }

  return 'var(--dark-blue-3)'
}

export const getMobileBackgroundColor = (pathname) => {
  if (pathname === '/about' || pathname.includes('/job')) {
    {
      return 'var(--dark-blue-3)'
    }
  }

  if (pathname === '/integrations') {
    {
      return 'var(--dark-blue-3)'
    }
  }

  if (pathname === '/privacy-policy' || pathname === '/terms-of-service') {
    {
      return 'var(--grey-3)'
    }
  }

  if (pathname.includes('/blog')) {
    return 'var(--light-blue-3)'
  }

  if (pathname.includes('/case-studies')) {
    return 'var(--light-blue-3)'
  }

  if (pathname.includes('/compare-with-google-analytics')) {
    return 'var(--grey-1)'
  }

  return 'var(--dark-blue-4)'
}

export const getMobileOverlayColor = (pathname) => {
  if (pathname === '/about' || pathname.includes('/job')) {
    {
      return 'rgb(0 31 61 / 75%)'
    }
  }

  if (pathname === '/integrations') {
    {
      return 'rgb(0 31 61 / 75%)'
    }
  }

  if (pathname === '/privacy-policy' || pathname === '/terms-of-service') {
    {
      return 'rgb(193 199 208 / 85%)'
    }
  }

  if (pathname.includes('/blog')) {
    return 'rgb(179 212 255 / 65%)'
  }

  if (pathname.includes('/case-studies')) {
    return 'rgb(179 212 255 / 65%)'
  }

  if (pathname.includes('/compare-with-google-analytics')) {
    return 'rgb(179 212 255 / 65%)'
  }

  return 'rgba(0, 31, 61, 0.85)'
}

export const getMobileLinkColor = (pathname) => {
  if (pathname === '/about' || pathname.includes('/job')) {
    {
      return 'var(--light-blue-1)'
    }
  }

  if (pathname === '/integrations') {
    {
      return 'var(--light-blue-1)'
    }
  }

  if (pathname === '/privacy-policy' || pathname === '/terms-of-service') {
    {
      return 'var(--dark-blue-4)'
    }
  }

  if (pathname.includes('/blog')) {
    return 'var(--dark-blue-4)'
  }

  if (pathname.includes('/case-studies')) {
    return 'var(--dark-blue-4)'
  }

  if (pathname.includes('/compare-with-google-analytics')) {
    return 'var(--dark-blue-4)'
  }

  return 'var(--light-blue-1)'
}

export const getMobileTitleColor = (pathname) => {
  if (pathname === '/about' || pathname.includes('/job')) {
    {
      return 'rgb(179 212 255 / 50%)'
    }
  }

  if (pathname === '/integrations') {
    {
      {
        return 'rgb(179 212 255 / 50%)'
      }
    }
  }

  if (pathname === '/privacy-policy' || pathname === '/terms-of-service') {
    {
      return 'rgb(10 8 37 / 50%)'
    }
  }

  if (pathname.includes('/blog')) {
    return 'var(--dark-blue-2)'
  }

  if (pathname.includes('/case-studies')) {
    return 'var(--dark-blue-2)'
  }

  if (pathname.includes('/compare-with-google-analytics')) {
    return 'var(--dark-blue-2)'
  }

  return 'var(--light-blue-4)'
}

export const getLogo = (pathname) => {
  if (
    pathname === '/privacy-policy' ||
    pathname === '/terms-of-service' ||
    pathname.includes('/blog') ||
    pathname.includes('/case-studies') ||
    pathname.includes('/compare-with-google-analytics')
  ) {
    return <LogoBlue />
  }

  return <LogoLight />
}

export const getMenuIcon = (pathname) => {
  if (
    pathname === '/privacy-policy' ||
    pathname === '/terms-of-service' ||
    pathname.includes('/blog') ||
    pathname.includes('/case-studies') ||
    pathname.includes('/compare-with-google-analytics')
  ) {
    return <MenuIconDark />
  }

  return <MenuIconLight />
}

export const getXIcon = (pathname) => {
  if (
    pathname === '/privacy-policy' ||
    pathname === '/terms-of-service' ||
    pathname.includes('/blog') ||
    pathname.includes('/case-studies') ||
    pathname.includes('/compare-with-google-analytics')
  ) {
    return <XIconDark />
  }

  return <XIconLight />
}
