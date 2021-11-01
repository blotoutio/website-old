export const navigation_main = [
  {
    type: 'route',
    title: 'Product',
    path: 'about',
    codify_as: 'Header - Product',
  },
  {
    type: 'route',
    title: 'Integrations',
    path: 'about',
    codify_as: 'Header - Integations',
  },
  {
    type: 'category',
    title: 'Resources',
    items: [
      {
        type: 'group',
        items: [
          {
            type: 'link_internal',
            text: 'Help Center',
            url: 'https://help.blotout.io',
            codify_as: 'Header / Resources - Help Center',
          },
          {
            type: 'link_internal',
            text: 'API Documentation',
            url: 'https://docs.blotout.io',
            codify_as: 'Header / Resources - Documentation',
          },
        ],
      },
      {
        type: 'group',
        items: [
          {
            type: 'route',
            text: 'Help Center',
            path: 'case-studies',
            codify_as: 'Header / Resources - Case Studies',
          },
          {
            type: 'route',
            text: 'API Documentation',
            path: 'blog',
            codify_as: 'Header / Resources - Blog',
          },
        ],
      },
      {
        type: 'group',
        items: [
          {
            type: 'link_external',
            text: 'Slack Community',
            url: 'https://blotout-shared.slack.com',
            codify_as: 'Header / Resources - Slack Community',
          },
        ],
      },
    ],
  },
  {
    type: 'route',
    title: 'Careers',
    path: 'about',
    codify_as: 'Header - Careers',
  },
]
