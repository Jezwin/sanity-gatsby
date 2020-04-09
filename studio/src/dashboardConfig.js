export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8ee04c4e12d6e2d8afb574',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-studio-n2okg3uk',
                  apiId: '4cf66f2c-98a8-4ce6-9828-0020e6ccc9ef'
                },
                {
                  buildHookId: '5e8ee04c0203162bf0daf8be',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-web-5bbrftdx',
                  apiId: 'c118feb4-683c-40a8-8946-48d438264a82'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jezwin/sanity-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-web-5bbrftdx.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
