import { integrationList } from '../data/integrationList'
import stylesUrl from '../styles/integrations.css'

export function meta() {
  return {
    title: 'Blotout - Integrations',
    description:
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

const filter = (event) => {
  let search = event.target.value.toLowerCase()
  console.log(event.target.value)
  document.querySelectorAll('.integration-text').forEach(function (item) {
    let text = item.innerText.toLowerCase()
    if (text.match(search)) {
      item.parentNode.style.display = 'block'
    } else {
      item.parentNode.style.display = 'none'
    }
  })
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
          {/* <div id='integrations-tab'>
            <div id='integrations-tab-item'>Target</div>
            <div id='integrations-tab-item'>Source</div>
          </div> */}
          <div id='integrations-search'>
            <input type='text' placeholder='Search' onKeyUp={filter} />
          </div>
          <div id='integrations-list'>
            {integrationList.map((integration) => {
              return (
                <div className='integration' key={integration.git_url}>
                  <div className='integration-icon'>
                    <img src={integration.icon_url} />
                  </div>
                  <div className='integration-text'>{integration.name}</div>
                  <a href={integration.git_url} className='integration-link'>
                    GitHub
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
