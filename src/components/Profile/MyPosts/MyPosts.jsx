import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControl/FormsControls'

const maxLength180 = maxLengthCreator(180)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='newPostText' component={Textarea} placeholder={'Post message'}
          validate={[required, maxLength180]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const MyPosts = React.memo((props) => {

  let postsElements = [...props.posts]
      .reverse()
      .map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
})

const AddNewPostFormRedux = reduxForm({ form: 'AddNewPostForm' })(AddNewPostForm)

export default MyPosts
