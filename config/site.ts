/*
 * @Author: zengzhe
 * @Date: 2024-06-03 16:48:13
 * @LastEditors: zengzhe
 * @LastEditTime: 2024-07-09 20:12:00
 * @Description:
 */
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
      title: '关于',
      href: '/'
    },
    {
      title: '反馈',
      href: 'https://github.com/Gorvey/webnav/issues/new'
    }
  ],
  links: {
    blog: "https://zmix.cn",
    github: "https://github.com/Gorvey"
  },
}
