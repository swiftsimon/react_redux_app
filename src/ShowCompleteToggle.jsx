import React from 'react'
import { connect } from 'react-redux'
import { mutations } from './store'


const ShowCompleteToggle = ({ showComplete, changeShowComplete }) => (
    <div>
        <label>
            Show Remaining Items Only? <input type='checkbox' checked={showComplete} onChange={ changeShowComplete }/>
        </label>

    </div>
)

const mstp = state => ({showComplete: state.showComplete})  // map state to props
const mdtp = (dispatch) => ({
    changeShowComplete(e) {
        const checked = e.target.checked 
        const action = mutations.toggleShowComplete(checked)
        dispatch(action)
    }
})

export default connect(mstp, mdtp)(ShowCompleteToggle)


