import type { DataLoader } from '@remix-run/core'

const articles: BlogArticle[] = [
  {
    title: 'The Hypocrisy in Privacy',
    description: `Featuring Apple and AdobeSetting ContextIt was a huge win for web consumers when Apple took up the 
    cause of protecting user privacy. Since 2017, the company has steadily improved the Intelligent 
    Tracking Prevention (ITP) feature in WebKit, the engine...`,
    date: '2020-10-26',
    link: 'https://medium.com/@blotout/the-hypocrisy-in-privacy-ab6240bd3139?source=rss-311788da9428------2'
  },
  {
    title: 'Blotout 360 for Publishers and SSPs',
    description: `Across brands, agencies, publishers, SSP’s, DSPs, and CDPs, the ad tech industry has invested 
    billions of dollars to find the right audiences, place media, and analyze results in an efficient manner. 
    “Easy” is a word that comes to mind when one thinks...`,
    date: '2020-10-19',
    link: 'https://medium.com/@blotout/blotout-360-for-publishers-and-ssps-c8df94159de9?source=rss-311788da9428------2'
  },
  {
    title: 'Announcing Blotout V0.1',
    description: `The world’s first client computed, privacy by design, product analytics SDK for application and 
    web developers.Recommended pre-readingPrivacy has muscle at the device edgePrivacy by trust vs. 
    Privacy by designKiss: making privacy by design...`,
    date: '2020-6-22',
    link: 'https://medium.com/@blotout/announcing-blotout-v0-1-e6b938b4e0ca?source=rss-311788da9428------2'
  },
  {
    title: 'Good read Mike Raab; thanks for sharing. Most acknowledgement for what I believe was true!',
    description: 'Good read Mike Raab; thanks for sharing. Most acknowledgement for what I believe was true!',
    date: '2020-3-5',
    link: 'https://medium.com/@blotout/good-read-mike-raab-thanks-for-sharing-most-acknowledgement-for-what-i-believe-was-true-963495fbbf05?source=rss-311788da9428------2'
  },
  {
    title: 'Kiss: making privacy by design easy!',
    description: `KISS: keep it simple, stupid. It is the paradigm that drives the mindset of big tech. That is 
    how we got to this consumer experience where big tech has put us to sleep while invading our four 
    walls without us even noticing.`,
    date: '2020-1-15',
    link: 'https://medium.com/@blotout/kiss-making-privacy-by-design-easy-19316b08107d?source=rss-311788da9428------2'
  },
  {
    title: 'Privacy by trust vs. Privacy by design',
    description: `Valuing consumer privacyThe topic of consumer data privacy needs no introduction. We have hit a stage 
    in technology development where ensuring that users data stays in user control is both critical and necessary.`,
    date: '2019-12-14',
    link: 'https://medium.com/@blotout/privacy-by-trust-vs-privacy-by-design-b03e381f7070?source=rss-311788da9428------2'
  },
  {
    title: 'Privacy has muscle at the device edge!',
    description: `Privacy is inversely proportional to data collectedWe have become a data driven economy with a 
    massive thirst for granular data points, enabling technology and business to accelerate. Data is collected and 
    collated in the cloud via privacy notices...`,
    date: '2019-11-17',
    link: 'https://medium.com/@blotout/privacy-has-muscle-at-the-device-edge-dd442c026ba4?source=rss-311788da9428------2'
  }
]

export const loader: DataLoader = async () => {
  return {
    articles
  }
}
