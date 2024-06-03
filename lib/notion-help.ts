import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import { get } from './utils'

export type NavItem = {
    id: string,
    icon: PageObjectResponse["icon"],
    name: string,
    url: string,
    description: string,
    parentID: string | undefined,
    children: NavItem[]
}

const recurrenceFilter = (arr: NavItem[], parentID: any) => {
    let data: NavItem[] = [];
    arr.forEach(item => {
        if (item.parentID === parentID) {
            item.children = recurrenceFilter(arr, item.id)
            data.push(item)
        }
    });
    return data
}
export const toGroupData = (results: PageObjectResponse[]) => {
    let data = results.map((page): NavItem => {
        let result = {
            id: page.id,
            icon: page.icon,
            name: '',
            url: '',
            description: '',
            parentID: '',
            children: []
        }
        Object.keys(page.properties).reduce((acc: NavItem[], key, index) => {
            let value = ''
            let prop = page.properties[key]
            switch (key) {
                case 'Name':
                    value = get(prop, 'title[0].plain_text', '')
                    result['name'] = value
                case 'url':
                    if ('url' in prop) {
                        value = prop.url || ''
                        result['url'] = value
                    }
                case 'description':
                    if ('rich_text' in prop) {
                        value = get(prop, 'rich_text[0].plain_text', '')
                        result['description'] = value
                    }
                case 'parent-item':
                    if ('relation' in prop) {
                        value = get(prop, 'relation[0].id')
                        result['parentID'] = value
                    }

            }
            return acc
        }, [])

        return result
    })

    let groupData = recurrenceFilter(data, undefined)

    return groupData
}