import * as types from '../actions/ActionTypes'

const initialState = {
    markedDates: {}
}

function calendar(state = initialState, action) {
    const { markedDates } = state

    switch(action.type) {
        case types.CREATE:
            return {
                markedDates: {
                    ...markedDates,
                    [action.payload.date]: {
                        type: action.payload.type,
                        description: action.payload.description
                    }
                }
            }
        case types.REMOVE:
            return {
                markedDates
            }
        default:
            return state
    }
}

export default calendar