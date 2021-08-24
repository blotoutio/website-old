import { integrationList } from '../data/integrationList'
import stylesUrl from '../styles/integrations.css'
import { capture } from '@blotoutio/sdk-core'
import { codifyClick } from '../utils'

export function meta() {
  return {
    title: 'Blotout - Integrations',
    description:
      'Cloud prem data infrastructure to capture, analyze, and activate customer data as a first-party',
    'og:title': 'Blotout - Integrations',
    'og:description':
      'Cloud prem data infrastructure to capture, analyze, and activate customer data as a first-party',
  }
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
  filterTimer = setTimeout(captureSearch, 500, [search])
}

const captureSearch = (text) => {
  if (!text) {
    return
  }
  capture('Integration - Search', { text })
}

export default function Integrations() {
  return (
    <div id='integrations'>
      <div id='integrations-header'>
        <div id='integrations-header-content'>
          <h1 id='integrations-title'>Integrations</h1>
        </div>
      </div>

      <div id='integrations-text'>
        <div id='integrations-text-content'>
          <div id='integrations-search'>
            <input
              type='text'
              placeholder='Search'
              onKeyUp={filter}
              onFocus={() => capture('Integration - Search Focus')}
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
                    codifyClick('Integration - Box', { type: integration.name })
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
  )
}
