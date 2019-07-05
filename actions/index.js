import * as types from './ActionTypes'

export const create = (payload) => ({
    type: types.CREATE,
    payload
})

export const remove = (id) => ({
    type: types.REMOVE,
    id
})