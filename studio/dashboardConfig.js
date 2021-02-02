export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6018bb95db391344092f238d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wf3trioi',
                  apiId: '1c7c1e49-1193-4889-a5fe-93f2eeec5d6e'
                },
                {
                  buildHookId: '6018bb95b7329f5868fc1545',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4jpebq9k',
                  apiId: 'f28bf78e-3918-4b57-9882-6261153ff366'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paulogrillo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4jpebq9k.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
