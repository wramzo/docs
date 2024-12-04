// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'Tardionchain',
    description: 'Building the first digital tardigrade life form on chain',
    image: 'https://tardionchain.xyz/tardi.png',
    socials: {
      twitter: 'tardionchain',
      github: 'tardionchain',
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
