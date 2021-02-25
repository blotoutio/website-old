!function(){window.trends=window.trends||function(){(trends.stubs=trends.stubs||[]).push(arguments)};const t=document.createElement("script");t.type="text/javascript",t.src="https://assets.blotout.io/beta/sdk/index.js",t.async=!0;const e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}();

trends('init', {
  token: 'ZWBQ5E48ND3VTPB',
  endpointUrl: 'https://sales.blotout.io/sdk',
  customDomain: 'blotout.io'
})

window.onload = function () {
  document.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', event => {
      if (!event || !event.target || !event.target.dataset) {
        return
      }

      const name = event.target.dataset.event
      if (!name) {
        return
      }

      let referrer
      try {
        referrer = JSON.parse(window.sessionStorage.getItem('_trendsData')).referrer
      } catch (e) { }

      if (!referrer) {
        referrer = 'none'
      }

      trends('capture', `click-${name}`, {
        date: new Intl.DateTimeFormat('en-US').format(Date.now()),
        referrer
      }, {
        method: 'beacon'
      })
    })
  })
}
