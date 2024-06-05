/*
 * @Author: zengzhe
 * @Date: 2024-06-05 17:31:57
 * @LastEditors: zengzhe
 * @LastEditTime: 2024-06-05 18:01:14
 * @Description:
 */
"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

// import { NavItems } from "@/app/links";
import { NavItem } from "@/lib/notion-help"

import { NotionIcon } from "./notion-icon"

export function LinkItem({ link }: { link: NavItem }) {
  return (
    <Link href={link.url} target="_blank">
      <div className="link-item-wrap">
        <div className="link-item">
          <div className="flex items-center">
            <div className="mr-3 flex h-10 w-10 overflow-hidden rounded-full">
              {/* {
              link.icon
                ? <Image
                  src={link.icon}
                  className="object-fill"
                  alt=""
                  width={40}
                  height={40}
                />
                : <span className="h-full w-full rounded-full bg-purple-500 text-center font-bold leading-10">{link.title.slice(0, 1)}</span>
            } */}
              <NotionIcon icon={link.icon} width={40} height={40}></NotionIcon>
            </div>
            <span className="text-xl font-bold text-primary">{link.name}</span>
          </div>
          <div className="mt-2 line-clamp-2 text-sm text-primary">
            {link.description}
          </div>
        </div>
      </div>
    </Link>
  )
}

export function LinkContent({ navResources }: { navResources: NavItem[] }) {
  useEffect(() => {
    // 获取鼠标位置
    const calBoxesPosition = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const items = document.querySelectorAll(".link-item-wrap")
      items.forEach((i) => {
        const { x, y } = i.getBoundingClientRect()
        i.setAttribute("style", `--x: ${clientX - x}px; --y: ${clientY - y}px`)
      })
    }
    window.addEventListener("mousemove", calBoxesPosition)
  }, [])
  return (
    <div className="w-full grow pt-4">
      <div className="mx-auto w-full px-4 md:px-6">
        {navResources.map((category) => {
          return (
            <div id={category.id} key={category.id} className="mb-12">
              <div className="my-4">
                <h1 className="mb-2 text-2xl font-bold text-primary/80 sm:text-3xl">
                  {category.name}
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {category.children.map((link) => (
                  <LinkItem link={link} key={link.id} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
