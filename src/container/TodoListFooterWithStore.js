import { connect } from 'react-redux'

import { totalCompleted } from '../store/todos/selectors'
import TodoFooter from '../components/TodoFooter'

function mapStateToProps(state) {
  return {
    totalCompleted: totalCompleted(state)
  }
}

export default connect(mapStateToProps)(TodoFooter)
