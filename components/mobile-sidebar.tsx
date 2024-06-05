/*
 * @Author: zengzhe
 * @Date: 2024-06-05 17:31:57
 * @LastEditors: zengzhe
 * @LastEditTime: 2024-06-05 18:11:18
 * @Description:
 */
"use client"

import { NavItem } from "@/lib/notion-help"

// import { CategoryWithLinks, NavItems } from "@/app/links"

import { Sidebar } from "./sidebar"

interface SidebarProps {
  className?: string
  navItems: NavItem[]
  setShowMobileSidebar: Function
}

export function MobileSidebar({
  navItems,
  setShowMobileSidebar,
}: SidebarProps) {
  return (
    <>
      <div className="fixed inset-0 z-20 mx-0 h-screen w-60">
        <Sidebar navItems={navItems} />
      </div>
      <div
        className="fixed inset-0 z-10 h-full w-full bg-gray-900/50 dark:bg-gray-900/50"
        onClick={() => setShowMobileSidebar(false)}
      ></div>
    </>
  )
}
