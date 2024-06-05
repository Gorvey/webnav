import Image from "next/image"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"

type Icon = PageObjectResponse["icon"] | null
export function NotionIcon({ icon, width = 20, height = 20 }: { icon: Icon, width: number, height: number }) {
    return (
        <>
            {icon?.type == "emoji" && (
                <div style={{ height, width }} className="flex h-5 w-5 items-center justify-center">
                    <div className="text-base">{icon.emoji}</div>
                </div>
            )}
            {icon?.type == "external" && (
                <Image width={width} height={height} src={icon.external.url} alt={icon.type} />
            )}
            {icon?.type == 'file' && (
                <Image width={width} height={height} src={icon.file.url} alt={icon.type} />
            )}
        </>
    )
}
