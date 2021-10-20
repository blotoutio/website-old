import MenuIconDark from '../../graphics/icons/menu-icon-dark'
import MenuIconLight from '../../graphics/icons/menu-icon-light'
import XIconDark from '../../graphics/icons/x-icon-dark'
import XIconLight from '../../graphics/icons/x-icon-light'
import LogoLight from '../../graphics/logo-light'
import LogoBlue from '../../graphics/logo-blue'
import LogoDark from '../../graphics/logo-dark'

export const getBackgroundColor = (pathname) => {
  if (pathname === '/about') {
    return 'var(--orange-10)'
  }

  if (pathname === '/integrations') {
    return 'var(--neutral-20)'
  }

  if (pathname === '/privacy-policy' || pathname === '/terms-of-service') {
    return '#f3f2f2'
  }

  if (
    pathname.includes('/blog') ||
    pathname.includes('/case-studies') ||
    pathname === '/compare-with-google-analytics'
  ) {
    return 'var(--neutral-10)'
  }

  return 'var(--neutral-100)'
}

export const getMobileBackgroundColor = (pathname) => {
  if (pathname === '/about') {
    {
      return 'var(--orange-20)'
    }
  }

  if (pathname === '/integrations') {
    {
      return 'var(--neutral-20)'
    }
  }

  if (pathname === '/privacy-policy' || pathname === '/terms-of-service') {
    {
      return '#f3f2f2'
    }
  }

  if (
    pathname.includes('/blog') ||
    pathname.includes('/case-studies') ||
    pathname === '/compare-with-google-analytics'
  ) {
    return 'var(--neutral-10)'
  }

  return 'var(--neutral-90)'
}

export const getMobileOverlayColor = (pathname) => {
  if (pathname === '/about') {
    {
      return 'rgba(255, 243, 230, ,0.85)'
    }
  }

  if (pathname === '/integrations') {
    {
      return 'rgba(0, 31, 61, ,0.75)'
    }
  }

  if (pathname === '/privacy-policy' || pathname === '/terms-of-service') {
    {
      return 'rgba(191, 204, 218, ,0.65)'
    }
  }

  if (
    pathname.includes('/blog') ||
    pathname.includes('/case-studies') ||
    pathname === '/compare-with-google-analytics'
  ) {
    return 'rgba(179, 212, 255, ,0.65)'
  }

  return 'rgba(135, 153, 175, ,0.90)'
}

export const getMobileLinkColor = (pathname) => {
  if (pathname === '/about') {
    {
      return 'var(--blue-80)'
    }
  }

  if (pathname === '/integrations') {
    {
      return 'var(--neutral-100)'
    }
  }

  if (pathname === '/privacy-policy' || pathname === '/terms-of-service') {
    {
      return 'var(--neutral-100)'
    }
  }

  if (
    pathname.includes('/blog') ||
    pathname.includes('/case-studies') ||
    pathname === '/compare-with-google-analytics'
  ) {
    return 'var(--blue-90)'
  }

  return 'var(--neutral-10)'
}

export const getMobileTitleColor = (pathname) => {
  if (pathname === '/about') {
    {
      return 'var(--neutral-60)'
    }
  }

  if (pathname === '/integrations') {
    {
      {
        return 'rgba(179 212 255 ,0.50)'
      }
    }
  }

  if (pathname === '/privacy-policy' || pathname === '/terms-of-service') {
    {
      return 'rgba(10 8 37 ,0.50)'
    }
  }

  if (
    pathname.includes('/blog') ||
    pathname.includes('/case-studies') ||
    pathname === '/compare-with-google-analytics'
  ) {
    return 'var(--neutral-60)'
  }

  return 'var(--orange-20)'
}

export const getLogo = (pathname) => {
  if (
    pathname === '/about' ||
    pathname === '/privacy-policy' ||
    pathname === '/terms-of-service' ||
    pathname.includes('/blog') ||
    pathname.includes('/case-studies') ||
    pathname === '/integrations' ||
    pathname === '/compare-with-google-analytics'
  ) {
    return <LogoBlue />
  }

  return <LogoLight />
}

export const getMenuIcon = (pathname) => {
  if (
    pathname === '/about' ||
    pathname === '/privacy-policy' ||
    pathname === '/terms-of-service' ||
    pathname.includes('/blog') ||
    pathname.includes('/case-studies') ||
    pathname === '/integrations' ||
    pathname === '/compare-with-google-analytics'
  ) {
    return <MenuIconDark />
  }

  return <MenuIconLight />
}

export const getXIcon = (pathname) => {
  if (
    pathname === '/about' ||
    pathname === '/privacy-policy' ||
    pathname === '/terms-of-service' ||
    pathname.includes('/blog') ||
    pathname.includes('/case-studies') ||
    pathname === '/integrations' ||
    pathname === '/compare-with-google-analytics'
  ) {
    return <XIconDark />
  }

  return <XIconLight />
}
