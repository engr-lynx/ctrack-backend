'use strict'

const {
  addCount: _addCount,
} = require('../core/api-dep')

const addCount = async (event) => {
  try {
    const body = event.body
    const data = await _addCount(body.location, body.count)
    return data
  } catch (error) {
    throw error
  }
}

module.exports = {
  addCount,
}
