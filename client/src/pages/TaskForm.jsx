import {Form, Formik} from 'formik'
import {createTaskRequest} from "../api/task.api"

function TaskForm() {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values) => {
          console.log(values)
          try {
            const response = await createTaskRequest(values)
            console.log(values)
          } catch (error) {
            console.error(error)            
          }
        }}
      >
      {({ handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <label>title</label>
          <input 
            type='text'
            name='title'
            placeholder='Write a title'
            onChange={handleChange}
          />

          <label>description</label>
          <textarea 
            name="description"
            rows="3"
            placeholder='Write a description'
            onChange={handleChange}
          ></textarea>

          <button type='submit'>Save</button>
        </Form>
      )}
      </Formik>
    </div>
  );
}

export default TaskForm

