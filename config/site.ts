export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "jscool-发现超cool的前端资源",
  description:
    "jscool-发现超cool的前端资源",
  mainNav: [
    {
      title: "主页",
      href: "/",
    },

    {
      title: '意见反馈👉',
      href: 'https://ysgh2t14be.feishu.cn/share/base/form/shrcnkgQFjdLXDWCYZqgXMdYQsf'
    }
  ],
  umami: {
    websiteID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || ''
  },
  links: {
    blog: "https://bento.me/gorvey",
    github: "https://github.com/Gorvey"
  },
}
