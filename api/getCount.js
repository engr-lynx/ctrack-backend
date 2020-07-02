'use strict'

const {
  getCount: _getCount,
} = require('../core/api-dep')

const getCount = async (event) => {
  try {
    const query = event.query
    const data = await _getCount(query.location)
    return data
  } catch (error) {
    throw error
  }
}

module.exports = {
  getCount,
}
