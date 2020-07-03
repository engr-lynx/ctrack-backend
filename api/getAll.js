'use strict'

const {
  getAll: _getAll,
} = require('../core/api-dep')

const getAll = async (event) => {
  try {
    const data = await _getAll()
    return data
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAll,
}
