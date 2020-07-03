'use strict'

const {
  upsert,
  read,
  scan,
} = require('../resources/dynamodb')

const getCount = async (location) => {
  try {
    const item = await read(location)
    return item
  } catch (error) {
    throw error
  }
}

const getAll = async () => {
  try {
    const items = await scan()
    return items
  } catch (error) {
    throw error
  }
}

const addCount = async (location, count) => {
  try {
    const item = await read(location)
    const newCount = item.count + count
    const newItem = await upsert(location, newCount)
    return newItem
  } catch (error) {
    throw error
  }
}

const newLocation = async (location, count) => {
  try {
    const item = await upsert(location, count)
    return item
  } catch (error) {
    throw error
  }
}

module.exports = {
  getCount,
  getAll,
  addCount,
  newLocation,
}
