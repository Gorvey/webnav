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
    hostUrl: 'https://u.jscool.cn',
    src: 'https://img.jscool.cn/u-jscool-script.js',
    websiteID: '23fe9ec4-4998-4358-9235-37379a74424f'
  },
  links: {
    blog: "https://bento.me/gorvey",
    github: "https://github.com/Gorvey"
  },
}
