import { useState, useEffect } from 'react'; //hooks
import { BrowserRouter as Router, Route } from 'react-router-dom'; //routing
import Header from './components/Header';//header (fun)component
import Footer from './components/Footer';//footer (fun)component
import Tasks from './components/Tasks';//Tasks (fun)component
import AddTask from './components/AddTask';//AddTask (fun)component
import About from './components/About';//About (fun)component

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);//used for maintaing state to toggle Add & Close btns
  const [tasks, setTasks] = useState([]);//used for maintaing state for all the Tasks

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks(); //fetching tasks from server 
      setTasks(tasksFromServer);//setting fetched tasks to setTasks
    }

    getTasks();
  }, [])

  // Fetch Tasks - fetching all Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');//fetching tasks from server at 5000 port
    const data = await res.json();//making it in a json response

    return data;//returning json data from fetchTasks()
  }

  // Fetch Task - fetching individual Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);//fetching individual task from server at 5000 port
    const data = await res.json();//making it in a json response

    return data;//returning json data from fetchTask()
  }

  // Add Task - adding individual task to the server
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks',//fetching tasks from server at 5000 port
      {
        method: 'POST',//POST because sending data to the server
        headers: {
          'Content-type': 'application/json',//json because it's a json data
        },
        body: JSON.stringify(task),//task is a JSON object as an argument, returns JSON text in string format.
      })

    const data = await res.json();//making it in a json response

    setTasks([...tasks, data]);//setting all tasks first and then adding newly added task i.e data here.

    {
      /*no need of this code now
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = { id, ...task }
      setTasks([...tasks, newTask])
      */
    }
  }

  // Delete Task - delete individual task using id
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, //fetching individual task from server at 5000 port
      {
        method: 'DELETE',//DELETE because trying to delete data from the server
      })

    //We should control the response status to decide if we will change the state or not.
    res.status === 200//if response status is 200(successful)
      ? setTasks(tasks.filter((task) => task.id !== id))//filter the data without the deleted task
      : alert('Error Deleting This Task');//raise an error alert
  }

  // Toggle Reminder - for setting priority to the task on double click
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);//fetching individual task from server at 5000 port
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };//giving individual task data & then updating reminder value 

    const res = await fetch(`http://localhost:5000/tasks/${id}`, //fetching individual task from server at 5000 port
      {
        method: 'PUT',//PUT because trying to update data to the server
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),//task is a JSON object as an argument, returns JSON text in string format.
      })

    const data = await res.json();//making it in a json response

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task//assigning individual task data & then updating reminder value
      )
    )
  }

  return (
    <Router>
      <div className='container'>
        <Header
          onAddOrClose={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}{/*show add task form based upon Add or Close btns */}
        <Route
          path='/'//for this path [http://localhost:3013/], shows list of tasks and Add btn
          exact
          render={() => (
            <>
              {/*shows lists of tasks */}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                'No Tasks To Show'
              )}
            </>
          )}
        />
        <Route path='/about' exact component={About} />
        <Footer />
      </div>
    </Router >
  )
}

export default App