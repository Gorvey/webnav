import Image from "next/image"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"

type Icon = PageObjectResponse["icon"] | null
export function NotionIcon({ icon }: { icon: Icon }) {
    return (
        <>
            {icon?.type == "emoji" && (
                <div className="flex h-5 w-5 items-center justify-center">
                    <div className="text-base">{icon.emoji}</div>
                </div>
            )}
            {icon?.type == "external" && (
                <Image width={20} height={20} src={icon.external.url} alt={icon.type} />
            )}
            {icon?.type == 'file' && (
                <Image width={20} height={20} src={icon.file.url} alt={icon.type} />
            )}
        </>
    )
}
