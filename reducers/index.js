import { combineReducers } from 'redux'
import CalendarReducer from './calendarReducer'

export default combineReducers({
    calendar: CalendarReducer
})