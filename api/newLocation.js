'use strict'

const {
  newLocation: _newLocation,
} = require('../core/api-dep')

const newLocation = async (event) => {
  try {
    const body = event.body
    const data = await _newLocation(body.location, body.count)
    return data
  } catch (error) {
    throw error
  }
}

module.exports = {
  newLocation,
}
