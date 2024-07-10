import type { PageObjectResponse, DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import { get } from './utils'

export type NavGroup = {
  id: string,
  name: string,
  children: NavItem[]
}
export type NavItem = {
  id: string,
  icon: PageObjectResponse["icon"],
  name: string,
  url: string,
  description: string,
  groupID: string
}


export const toGroupData = (groups: DatabaseObjectResponse['properties']['group'], results: PageObjectResponse[]) => {
  if (groups.type !== 'select') {
    return []
  }
  let navGroups: NavGroup[] = groups.select.options.map(v => {
    return {
      id: v.id,
      name: v.name,
      children: []
    }
  })
  results.forEach((page) => {
    let result = {
      id: page.id,
      icon: page.icon,
      name: '',
      url: '',
      description: '',
      groupID: ''
    }
    Object.keys(page.properties).forEach((key, index) => {
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
        case 'group':
          if ('select' in prop) {
            value = get(prop, 'select.id')
            result['groupID'] = value
          }

      }
    }, [])

    let current = navGroups.find(v => v.id === result.groupID)
    if (result.name && result.url) {
      current?.children.push(result)
    }
  })

  return navGroups.filter(navGroup => {
    return navGroup.children.length
  })
}
