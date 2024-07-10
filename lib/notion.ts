import { Client } from '@notionhq/client'
import { toGroupData } from './notion-help'
import type { PageObjectResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints"

const notion = new Client({
  auth: process.env.NOTIONAUTH,
})
const databaseID = process.env.NOTIONDATABASEID || ''
export const queryDataBaseAllList = async () => {
  let allData = [] as PageObjectResponse[];
  let hasMore = true;
  let startCursor = undefined;

  while (hasMore) {
    const response: QueryDatabaseResponse = await queryDataBase({ start_cursor: startCursor });
    allData = [...allData, ...response.results as PageObjectResponse[]];
    hasMore = response.has_more;
    startCursor = response.next_cursor || undefined;
  }

  return allData;
};
export const queryDataBase = async ({
  start_cursor
}: { start_cursor: string | undefined }) => {
  return notion.databases.query({
    database_id: databaseID,
    start_cursor,
    page_size: 100,
    filter: {
      property: 'is-hidden',
      checkbox: {
        "equals": false
      }
    },
    sorts: [{
      property: 'group',
      direction: 'ascending'
    }, {
      property: 'order',
      direction: 'ascending'
    }]
  })

}
export const retrieveDataBase = async () => {
  let response = await notion.databases.retrieve({
    database_id: databaseID,
  })
  if (response.properties.group.type == 'select') {
    return response.properties.group
  }

}

export const getGroupData = async () => {
  let groups = await retrieveDataBase()
  let results = await queryDataBaseAllList()
  if (!groups) {
    return []
  }
  let data = toGroupData(groups, results)

  return data
}
