/*
 * @Author: zengzhe
 * @Date: 2024-06-03 16:48:13
 * @LastEditors: zengzhe
 * @LastEditTime: 2024-07-11 09:31:16
 * @Description:
 */
export function SiteFooter() {
  return (
    <div className="relative mx-auto w-full text-sm md:px-6">
      <footer className="block py-4">
        <div className="mx-auto">
          <hr className="border-b-1 mb-4 border-gray-200" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="flex w-full items-center px-4 md:w-4/12">
              <div className="mb-2 text-center md:mb-0 md:text-left">
                <a
                  href="https://bento.me/gorvey"
                  target="_blank"
                  className="text-blueGray-500 py-1 text-center text-sm font-semibold md:text-left"
                  rel="noreferrer"
                >
                  Copyright © 2024 Gorvey
                </a>
              </div>
              <div className="mb-2 ml-2 text-center md:mb-0 md:text-left">
                <a
                  href="https://us.umami.is/share/QYz4bK4Guzz9wvRZ/jscool.cn"
                  target="_blank"
                  className="text-blueGray-500 py-1 text-center text-sm font-semibold md:text-left"
                  rel="noreferrer"
                >
                  网站统计数据
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
