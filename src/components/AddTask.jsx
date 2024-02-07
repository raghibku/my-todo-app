import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { addTaskToLS } from '../utilities/LocalStorage';
import { TodoContext } from '../provider/TodoProvider';

const AddTask = () => {
    const { incrementCount } = useContext(TodoContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const priority = form.priority.value;

        const newTask = {
            id: uuidv4(),
            title,
            taskStatus: "incomplete",
            priority,
        }
        console.log(newTask)
        addTaskToLS(newTask)
        incrementCount();
    }
    return (
        <div className='flex justify-center items-center'>
            <form className='flex flex-col justify-center items-center bg-gray-200 p-6 w-[80%] md:w-[400px] gap-4' onSubmit={handleSubmit}>
                <div className='flex flex-row gap-4'>
                    <h1 className='text-xl font-semibold'>Title :</h1>
                    <input className='border-2 border-gray-800 rounded-sm w-[60%]' type="text" name='title' required/>
                </div>

                <div className='flex flex-row gap-4'>
                    <h1 className='text-xl font-semibold'>Priority :</h1>
                    <select name="priority" required>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <button className='px-4 py-2 mx-4 rounded-md  font-semibold border-2 bg-gradient-to-r from-cyan-400 to-cyan-800 text-white' type='submit'>Add Task</button>
            </form>
        </div>
    )
}

export default AddTask