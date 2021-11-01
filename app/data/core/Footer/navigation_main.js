export const navigation_main = [
  {
    type: 'category',
    title: 'Product',
    items: [
      {
        type: 'route_with_hash',
        text: 'Overview',
        path: './',
        hash: 'overview',
        codify_as: 'Footer / Product - Overview',
      },
      {
        type: 'route',
        text: 'Integrations',
        path: 'integrations',
        codify_as: 'Footer / Product - Integrations',
      },
      {
        type: 'route_with_hash',
        text: 'For Marketers',
        path: './',
        hash: 'marketers',
        codify_as: 'Footer / Product - Marketers',
      },
      {
        type: 'route_with_hash',
        text: 'For Product Managers',
        path: './',
        hash: 'product-managers',
        codify_as: 'Footer / Product - For Product Managers',
      },
      {
        type: 'route_with_hash',
        text: 'For Engineers',
        path: './',
        hash: 'engineers',
        codify_as: 'Footer / Product - For Engineers',
      },
    ],
  },
  {
    type: 'category',
    title: 'Documentation',
    items: [
      {
        type: 'link_internal',
        text: 'Help Center',
        url: 'https://help.blotout.io',
        codify_as: 'Footer / Documentation - Help Center',
      },
      {
        type: 'link_internal',
        text: 'API Documentation',
        url: 'https://docs.blotout.io',
        codify_as: 'Footer / Documentation - API Documentation',
      },
    ],
  },
  {
    type: 'category',
    title: 'Resources',
    items: [
      {
        type: 'link_internal',
        text: 'Core Features',
        url: 'https://help.blotout.io/core-features',
        codify_as: 'Footer / Resources - Core Features',
      },
      {
        type: 'link_internal',
        text: 'Creating Utility',
        url: 'https://help.blotout.io/creating-utility',
        codify_as: 'Footer / Resources - Creating Utility',
      },
      {
        type: 'route',
        text: 'Case Studies',
        url: 'case-studies',
        codify_as: 'Footer / Resources - Case Studies',
      },
      {
        type: 'link_external',
        text: 'Slack Community',
        url: 'https://blotout-shared.slack.com',
        codify_as: 'Footer / Resources - Slack Community',
      },
    ],
  },
  {
    type: 'category',
    title: 'Company',
    items: [
      {
        type: 'link_external',
        text: 'Careers',
        url: 'https://jobs.lever.co/blotout',
        codify_as: 'Footer / Company - Careers',
      },
      {
        type: 'route',
        text: 'About',
        path: 'about',
        codify_as: 'Footer / Company - About',
      },
      {
        type: 'route',
        text: 'Blog',
        path: 'blog',
        codify_as: 'Footer / Company - Blog',
      },
      {
        type: 'link_internal',
        text: 'Roadmap',
        url: 'https://help.blotout.io/roadmap',
        codify_as: 'Footer / Company - Roadmap',
      },
    ],
  },
]
