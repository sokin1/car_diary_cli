import CalendarScreen from '../Calendar/CalendarScreen'
import * as actions from '../../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    markedDates: state.markedDates
})

const mapDispatchToProps = dispatch => ({
    onCreateNewEvent: payload => dispatch(actions.create(payload)),
    onRemoveEvent: id => dispatch(actions.remove(id))
})

const CalendarScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarScreen)

export default CalendarScreenContainer