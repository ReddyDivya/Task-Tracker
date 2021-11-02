import Task from './Task'
/*method 1 
tasks array is separate from our Tasks.js (fun)component.
To hold this in the state of Tasks.js itself, need to use it in useState() - see method 2
const tasks = [
    { id: 1, text: 'Doctors appointment', day: 'Oct 29 at 2:30pm', reminder: true },
    { id: 2, text: 'Meeting at school', day: 'Oct 30 at 5:30pm', reminder: true },
    { id: 2, text: 'Food Shopping', day: 'Oct 31 at 4pm', reminder: false }
]
*/

const Tasks = ({ tasks, onDelete, onToggle }) => {

    /*
    method 2
    creating a state of tasks using useState Hook
    const [tasks, setTask] = useState([
        { id: 1, text: 'Doctors appointment', day: 'Oct 29 at 2:30pm', reminder: true },
        { id: 2, text: 'Meeting at school', day: 'Oct 30 at 5:30pm', reminder: true },
        { id: 3, text: 'Food Shopping', day: 'Oct 31 at 4pm', reminder: false },
    ]);//tasks is name of the state, array is initial value of the tasks state
    .............................
    Note: when we use state in Tasks.js, we can't use them outside of this component. 
    To use it outside of Tasks.js, it has to be global state. see method 3 
    
    method 3: Note: if we don't want tasks's state to be in Tasks.js and want that to be in other component.
        We can access those data with contextAPI, redux. We can put in App.js, then it will become 
        global state and we can pass data whenever, wherever required.

    method 4: Note: Using it from server side i.e db.json.
    where we can fetch, delete, update, add data when server is up.(currently, we're using this approach)
    */
    return (
        <>
            {
                tasks.map((item) => <Task key={item.id} task={item} onDelete={onDelete} onToggle={onToggle} />)
            }
        </>
    )
}

export default Tasks;

