import { LinkContent } from "@/components/link-content"
import { Sidebar } from "@/components/sidebar"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { getNavDataBase } from '@/lib/notion'
import getNavLinks from "./links"

export const revalidate = 86400

export default async function IndexPage() {
  const groupData = await getNavDataBase()
  const navResources = await getNavLinks()
  return (
    <div className="container relative mx-auto min-h-screen w-full px-0">
      <div className="flex">
        <div className="fixed z-20 hidden min-h-screen w-[16rem] transition-all duration-300 ease-in-out sm:block ">
          <Sidebar navItems={groupData} />
        </div>
        <div className="flex-1 sm:pl-[16rem]">
          <SiteHeader navItems={[]} />
          <LinkContent navResources={groupData} />
          <SiteFooter />
        </div>
      </div>
    </div>
  )
}
