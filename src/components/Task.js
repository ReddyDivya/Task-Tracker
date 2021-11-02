import { FaTimes } from 'react-icons/fa';//fetching react-icons i.e FaTimes meanns cross icon [x]

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''} `} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} {/*showing task text*/}
                <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)} /> {/*showing [x] icon with red color, cursor & calling delete()*/}
            </h3>
            <p>{task.day}</p> {/*showing task day*/}
        </div>
    )
}

export default Task
