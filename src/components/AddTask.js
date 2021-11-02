import { useState } from 'react';//hook

//each input(text, day, reminder) is going to have it's own piece of state - using useState()
const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    //called on a form submission
    const onSubmitHndlr = (e) => {
        e.preventDefault();//prevents submitting the form

        if (!text) //validation fot text input i.e task
        {
            alert('Please add a task');
            return;
        }

        onAdd({ text, day, reminder });//passing newly added task's data as an arguments on "Save Task" btn
        setText('');//setting default value
        setDay('');//setting default value
        setReminder(false);//setting default value as false
    }

    return (
        <form className="add-form" onSubmit={onSubmitHndlr} >
            <div className="form-control">
                <label>Task</label>
                <input type='text' value={text} placeholder='Add Task' onChange={(e) => setText(e.target.value)} required />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type='text' value={day} placeholder='Add Day & Time' onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type='checkBox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask;