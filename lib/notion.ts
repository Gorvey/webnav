import { Client } from '@notionhq/client'
import { toGroupData } from './notion-help'
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"

const notion = new Client({
  auth: process.env.NOTIONAUTH,
})
const databaseID = 'ce5480c97868423aacca062b0e7bde04'
export const getNavDataBase = () => {
  return notion.databases.query({
    database_id: process.env.NOTIONDATABASEID || '',
    // filter: {
    //   property: 'group',
    //   select: {
    //     equals: '资料\\博客',
    //   },
    // },
  }).then(({ results }) => {
    return toGroupData(results as PageObjectResponse[])

  })
}
export const retrieveNavDataBase = () => {
  return notion.databases.retrieve({
    database_id: databaseID,
  })
  //   .then(({properties})=>{
  //     let group= Object.values(properties ).find(property=>{
  //       return property.name === 'group'
  //       })
  //       if (group && group.type === 'select') {
  //           return group.select;
  //         }
  //     })
}
