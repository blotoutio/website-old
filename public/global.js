(function() {
  var head=document.getElementsByTagName('head')[0];
  var script=document.createElement('script');
  script.type='text/javascript';
  script.src="https://download.blotout.io/v1.0/sdks/bosdk.js";
  script.onreadystatechange=analytics;
  script.onload=analytics;
  head.appendChild(script)
})()

function analytics() {
  bojs.init({token:'ZWBQ5E48ND3VTPB',endpointUrl:'https://sales.blotout.io/sdk',customDomain:'blotout.io'})

  document.querySelectorAll('a').forEach(item => {
  item.addEventListener('click', event => {
    if (!event || !event.target || !event.target.dataset) {
      return
    }

    const name = event.target.dataset["event"]
    if (!name) {
      return
    }

    bojs.logEvent(`click-${name}`)
  })
})
}
