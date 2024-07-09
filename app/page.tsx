/*
 * @Author: zengzhe
 * @Date: 2024-06-05 17:31:57
 * @LastEditors: zengzhe
 * @LastEditTime: 2024-07-09 18:23:06
 * @Description:
 */
import { getGroupData } from "@/lib/notion"
import { LinkContent } from "@/components/link-content"
import { Sidebar } from "@/components/sidebar"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

// import getNavLinks from "./links"

export const revalidate = 86400

export default async function IndexPage() {
  const groupData = await getGroupData()
  // const navResources = await getNavLinks()
  return (
    <div className="container relative mx-auto min-h-screen w-full px-0">
      {/* <div className="fixed z-20 hidden min-h-screen w-[16rem] transition-all duration-300 ease-in-out sm:block ">
        </div> */}
      <div className="flex-1 ">
        <SiteHeader navItems={groupData} />
        <div className="flex">
          <div className="hidden w-[18rem] shrink-0  sm:block ">
            <div className="fixed  min-h-screen  transition-all duration-300 ease-in-out">
              <Sidebar navItems={groupData} />
            </div>
          </div>
          <LinkContent navResources={groupData} />
        </div>

        <SiteFooter />
      </div>
    </div>
  )
}
