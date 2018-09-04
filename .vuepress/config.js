module.exports = {
  title: 'Open Microservice Guide',
  description: 'The open standard for reusable microservices',
  themeConfig: {
    repo: 'microservices/microservice.guide',
    repoLabel: 'Contribute',
    editLinkText: 'Edit this page on GitHub',
    editLinks: true,
    sidebar: [
      {
        title: 'Overview',
        collapsable: false,
        children: [
          '/overview/',
          '/overview/comparisons/openapi/',
          '/overview/anatomy/'
        ]
      },
      {
        title: 'Schema',
        collapsable: false,
        children: [
          '/schema/info/',
          '/schema/lifecycle/',
          '/schema/actions/',
          '/schema/interface/',
          '/schema/environment/',
          '/schema/volumes/',
          '/schema/authentication/',
          '/schema/health/',
          '/schema/requirements/',
          '/schema/metrics/',
          '/schema/logs/',
        ]
      },
      {
        title: 'Examples',
        collapsable: false,
        children: [
          '/examples/http/'
        ]
      },
      {
        title: 'CLI',
        collapsable: false,
        children: [
          '/cli/overview/',
          '/cli/validate/',
          '/cli/test/',
          '/cli/debug/'
        ]
      }
    ]
  }
};
