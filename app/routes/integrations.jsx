import { integrationList } from '../data/integrationList'
import stylesUrl from '../styles/integrations.css'
import { tag } from '@blotoutio/edgetag-sdk-js'
import { codifyClick, metaInfo } from '../utils'

import SubHeader from '~/components/core/SubHeader'

export function meta() {
  return metaInfo('Integrations')
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ]
}

let filterTimer
const filter = (event) => {
  let search = event.target.value.toLowerCase()
  document.querySelectorAll('.integration-text').forEach(function (item) {
    let text = item.innerText.toLowerCase()
    if (text.match(search)) {
      item.parentNode.style.display = 'block'
    } else {
      item.parentNode.style.display = 'none'
    }
  })

  clearTimeout(filterTimer)
  filterTimer = setTimeout(captureSearch, 500, search)
}

const captureSearch = (text) => {
  if (!text) {
    return
  }
  tag(
    'Integration - Search',
    { text },
    { blotoutCloud: true, googleAnalytics4: true }
  )
}

export default function Integrations() {
  return (
    <div className='integrations-new'>
      <SubHeader heading='Integrations' />
      <div id='integrations'>
        <div id='integrations-text'>
          <div id='integrations-text-content'>
            <div id='integrations-search'>
              <input
                type='text'
                placeholder='Search'
                onKeyUp={filter}
                onFocus={() =>
                  tag('Integration - Search Focus', {}, { blotoutCloud: true })
                }
              />
            </div>
            <div id='integrations-list'>
              {integrationList.map((integration) => {
                return (
                  <a
                    href={integration.git_url}
                    className='integration'
                    key={integration.git_url}
                    onClick={() =>
                      codifyClick('Integration - Box', {
                        type: integration.name,
                      })
                    }
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='integration-icon'>
                      <img src={integration.icon_url} />
                    </div>
                    <div className='integration-text'>{integration.name}</div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
