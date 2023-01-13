import config from "../content/config";

const defaultConfig = {
  title: "Diginomics",
  tagline: "Rewriting the rules of the information age",
  description:
    "Forget everything you know about the digital age. It’s not about privacy, surveillance, AI or blockchain—it’s about ownership. Because, in a digital age, who owns information owns the future.",
  author: "Rufus Pollock & Life Itself",
  // logo image
  authorLogo:
    "/img/life-itself-logo.svg",
  // url to author
  authorUrl: "https://lifeitself.us/",
  // Google analytics key e.g. G-XXXX
  analytics: "UA-102022428-3",
  showEditLink: false,
  showToc: true,
  content: "content",
  avatarPlaceholder: "/_flowershow/avatarplaceholder.png",
  contentExclude: [],
  contentInclude: [],
  blogDir: "news",
  peopleDir: "people",
  // Theme
  theme: {
    default: "dark",
    toggleIcon: "/_flowershow/theme-button.svg",
  },
  navLinks: [
    // { href: '/about', name: 'About' },
  ],
  // optional additional nextSeo content set on each page
  // see https://github.com/garmeeh/next-seo
  //  nextSeo: {
  //    openGraph: {
  //      images: [
  //        {
  //          url: 'https://image.url/...',
  //          alt: '',
  //          width: 1200,
  //          height: 627,
  //          type: 'image/png',
  //        }
  //      ]
  //    }
  //  }
};

export const siteConfig = {
  ...defaultConfig,
  ...config,
  // prevent theme object overrides for
  // values not provided in userConfig
  theme: {
    ...defaultConfig.theme,
    ...config?.theme,
  },
};
