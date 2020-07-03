'use strict'

const {
  DynamoDB,
} = require('aws-sdk')

const DB = new DynamoDB.DocumentClient()

const TableName = process.env.TABLE_NAME
const Type = 'count'

const formatType = () => {
  return Type
}

const insertPKey = (location, item) => {
  item.location = location
  item.itemType = formatType()
  return item
}

const parse = (data) => {
  if (data) {
    delete data.itemType
  }
  return data
}

const upsert = async (location, count) => {
  try {
    const Item = insertPKey(location, {
      count,
    })
    const params = {
      TableName,
      Item,
    }
    await DB.put(params).promise()
    return parse(Item)
  } catch (error) {
    throw error
  }
}

const read = async (location) => {
  try {
    const Key = insertPKey(location, {})
    const params = {
      TableName,
      Key,
    }
    const data = await DB.get(params).promise()
    return parse(data.Item)
  } catch (error) {
    throw error
  }
}

const scan = async () => {
  try {
    const params = {
      TableName,
    }
    const data = await DB.scan(params).promise()
    const items = data.Items.map((item) => {
      return parse(item)
    })
    return items
  } catch (error) {
    throw error
  }
}

module.exports = {
  upsert,
  read,
  scan,
}
