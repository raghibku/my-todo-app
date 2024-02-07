import React, { useContext, useState } from 'react'
import { TodoContext } from '../provider/TodoProvider'
import { updateTaskinLS } from '../utilities/LocalStorage';
const LowPriority = ({ props }) => {
    const { tasks, handleComplete, handleDelete } = props
    const { incrementCount } = useContext(TodoContext);
    const [editor, setEditor] = useState(false)
    const [openId, setopenId] = useState(null)
    const handleEdit = (id) => {

        setEditor(!editor);
        setopenId(id)
        incrementCount();
        console.log(editor, id)
    }
    const updateTask = (id, e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const priority = form.priority.value;

        const newTask = {
            id,
            title,
            taskStatus: "incomplete",
            priority,
        }
        console.log(newTask);
        updateTaskinLS(id, newTask);
        // addTaskToLS(newTask)
        incrementCount();
    }
    return (
        <div className='w-full'>
            {
                tasks && tasks.map((task) => {
                    return (
                        <div className='p-4 ' key={task.id}>
                            {
                                (editor && openId == task.id) ?
                                    <form onSubmit={(e) => { updateTask(task.id, e) }}  className='flex flex-col justify-center items-center gap-4 bg-gray-200 p-4 rounded-lg'>

                                        <input className='text-2xl font-bold w-[200px] md:w-[200px] uppercase' required type="text" name='title' defaultValue={task.title}></input>
                                        <div className='flex flex-row gap-4'>
                                            <h1 className='text-xl font-semibold'>Priority :</h1>
                                            <select name="priority" required defaultValue={task.priority}>
                                                <option value="low">Low</option>
                                                <option value="medium">Medium</option>
                                                <option value="high">High</option>
                                            </select>
                                        </div>
                                        <div className='flex gap-4'>
                                            <button className='px-4 py-2 mx-4 rounded-md  font-semibold border-2 bg-gradient-to-r from-cyan-400 to-cyan-800 text-white' type='submit'>Update Task</button>

                                            <button className='px-4 py-2 mx-4 rounded-md  font-semibold border-2 border-blue-400 text-blue-400 ' onClick={() => { handleEdit(task.id) }}>Cancel</button>

                                        </div>

                                    </form> :
                                    <div className='bg-gray-200 p-4 rounded-lg'>
                                        <div className='gap-7 w-full flex flex-col justify-center items-center'>
                                            <h1 className='text-2xl font-bold uppercase w-[100px] md:w-[200px] flex justify-center items-center text-wrap'>{task.title}</h1>
                                            <div className='flex flex-row justify-center items-center gap-8'>
                                                <h2 className='text-lg font-semibold text-gray-700'>Status: {task.taskStatus}</h2>
                                                <h3 className='text-lg font-semibold text-gray-700'>Priority: {task.priority}</h3>
                                            </div>

                                        </div>

                                        <div className='flex flex-col md:flex-row justify-center items-center'>
                                            {
                                                task.taskStatus == "incomplete" &&
                                                <button className='px-4 py-2 w-full mx-2 rounded-md  font-semibold border-2 border-green-400 text-green-400' onClick={() => { handleComplete(task.id) }}>Complete</button>

                                            }
                                            <button className='px-4 py-2 w-full m-2 rounded-md  font-semibold border-2 border-red-400 text-red-400' onClick={() => { handleDelete(task.id) }}>Delete</button>
                                            <button className='px-4 py-2 w-full mx-2 rounded-md  font-semibold border-2 border-blue-400 text-blue-400 ' onClick={() => { handleEdit(task.id) }}>Edit</button>
                                        </div>
                                    </div>

                            }

                        </div>
                    )
                })
            }
        </div>
    )
}

export default LowPriority