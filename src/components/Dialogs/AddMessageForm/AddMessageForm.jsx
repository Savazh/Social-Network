import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../../common/FormsControl/FormsControls'
import { required, maxLengthCreator } from '../../../utils/validators/validators'

const maxLength360 = maxLengthCreator(360)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
          validate={[required, maxLength360]}
          name='newMessageBody' placeholder='Enter your message' />
      </div>
      <div><button>Send</button></div>
    </form>
  )
}

export default reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)