// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  trailingSlash: true,
  images: {
    domains: ['media.zachgollwitzer.com'],
  },
  async redirects() {
    return [
      {
        source: '/posts/2020/js-dates',
        destination: '/posts/javascript-dates',
        permanent: true,
      },
      {
        source: '/posts/2020/which-code-editor-to-learn-first',
        destination: '/posts/best-code-editors',
        permanent: true,
      },
      {
        source: '/posts/2020/rxjs-marble-diagram',
        destination: '/posts/rxjs-marble-diagrams',
        permanent: true,
      },
      {
        source: '/posts/2020/programmers-math',
        destination: '/posts/programming-math',
        permanent: true,
      },
      {
        source: '/posts/2020/frontend-backend-fullstack',
        destination: '/posts/types-web-development',
        permanent: true,
      },
      {
        source: '/posts/2020/three-lessons-angular',
        destination: '/posts/angular-lessons',
        permanent: true,
      },
      {
        source: '/posts/2020/what-is-an-api',
        destination: '/posts/application-programming-interfaces',
        permanent: true,
      },
      {
        source: '/posts/2020/passport-js',
        destination: '/posts/passport-js-course',
        permanent: true,
      },
      {
        source: '/posts/2020/too-late-to-learn-to-code',
        destination: '/posts/too-old-to-code',
        permanent: true,
      },
      {
        source: '/posts/2019/processes-bash',
        destination: '/posts/bash-processes',
        permanent: true,
      },
      {
        source: '/posts/2019/users-groups-bash',
        destination: '/posts/bash-users',
        permanent: true,
      },
      {
        source: '/posts/2019/cloud-storage',
        destination: '/posts/cloud-storage-types',
        permanent: true,
      },
      {
        source: '/posts/2019/ip-addresses',
        destination: '/posts/ip-addresses',
        permanent: true,
      },
      {
        source: '/posts/2019/networking-bash',
        destination: '/posts/bash-networking',
        permanent: true,
      },
      {
        source: '/posts/2019/javascript-this-keyword',
        destination: '/posts/javascript-this',
        permanent: true,
      },
      {
        source: '/posts/2019/ssh-bash',
        destination: '/posts/bash-ssh',
        permanent: true,
      },
      {
        source: '/posts/2019/common-bash-commands',
        destination: '/posts/intermediate-bash-commands',
        permanent: true,
      },
      {
        source: '/posts/2019/imperative-declarative',
        destination: '/posts/imperative-programming',
        permanent: true,
      },
      {
        source: '/posts/2019/bash-shell-variables',
        destination: '/posts/bash-shell-variables',
        permanent: true,
      },
      {
        source: '/posts/2019/regexp-bash',
        destination: '/posts/bash-regular-expressions',
        permanent: true,
      },
      {
        source: '/posts/2019/public-key-crypto',
        destination: '/posts/public-key-cryptography',
        permanent: true,
      },
      {
        source: '/posts/2019/bash-scripting',
        destination: '/posts/bash-scripting',
        permanent: true,
      },
      {
        source: '/posts/2019/git-crash-course',
        destination: '/posts/git-course',
        permanent: true,
      },
      {
        source: '/posts/2019/architecture-types',
        destination: '/posts/software-architecture',
        permanent: true,
      },
      {
        source:
          '/posts/2021/fullstack-developer-series/6-intermediate-javascript',
        destination: '/posts/javascript-objects',
        permanent: true,
      },
      {
        source: '/posts/2021/fullstack-developer-series/3-javascript-variables',
        destination: '/posts/javascript-variables',
        permanent: true,
      },
      {
        source:
          '/posts/2021/fullstack-developer-series/11-css-grid-crash-course',
        destination: '/posts/css-grid-course',
        permanent: true,
      },
      {
        source: '/posts/2021/fullstack-developer-series/8-css-crash-course',
        destination: '/posts/css-course',
        permanent: true,
      },
      {
        source:
          '/posts/2021/fullstack-developer-series/10-flexbox-crash-course',
        destination: '/posts/flexbox-course',
        permanent: true,
      },
      {
        source: '/posts/2021/fullstack-developer-series/introduction',
        destination: '/posts/fullstack-course-introduction',
        permanent: true,
      },
      {
        source: '/posts/2021/fullstack-developer-series/fullstack-roadmap-toc',
        destination: '/posts/fullstack-series-toc',
        permanent: true,
      },
      {
        source:
          '/posts/2021/fullstack-developer-series/9-intro-to-responsive-web-design',
        destination: '/posts/responsive-web',
        permanent: true,
      },
      {
        source:
          '/posts/2021/fullstack-developer-series/5-javascript-functions-loops-conditionals',
        destination: '/posts/javascript-functions',
        permanent: true,
      },
      {
        source: '/posts/2021/fullstack-developer-series/4-javascript-operators',
        destination: '/posts/javascript-operators',
        permanent: true,
      },
      {
        source: '/posts/2021/fullstack-developer-series/7-html-crash-course',
        destination: '/posts/html-course',
        permanent: true,
      },
      {
        source: '/posts/2021/fullstack-developer-series/1-first-program',
        destination: '/posts/first-javascript-program',
        permanent: true,
      },
      {
        source:
          '/posts/2021/fullstack-developer-series/2-what-is-javascript-and-how-is-it-used',
        destination: '/posts/what-is-javascript',
        permanent: true,
      },
    ];
  },
};

module.exports = withNx(nextConfig);
