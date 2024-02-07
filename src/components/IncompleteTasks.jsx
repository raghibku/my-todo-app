import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../provider/TodoProvider'
import { completeTaskinLS, deleteTaskinLS } from '../utilities/LocalStorage';
import LowPriority from './LowPriority';


const IncompleteTasks = () => {
    const { tasks, incrementCount } = useContext(TodoContext);
    const LowPriorityTasks = tasks.filter(task => task.priority == 'low' && task.taskStatus == 'incomplete')
    const HighPriorityTasks = tasks.filter(task => task.priority == 'high' && task.taskStatus == 'incomplete')
    const MediumPriorityTasks = tasks.filter(task => task.priority == 'medium' && task.taskStatus == 'incomplete')
    const CompletedTasks = tasks.filter(task => task.taskStatus == 'complete')


    const handleComplete = (id) => {
        completeTaskinLS(id)
        incrementCount();
    }
    const handleDelete = (id) => {
        deleteTaskinLS(id)
        incrementCount();
    }


    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-semibold my-4'>Number of Total tasks: {tasks.length}</h1>
            <h1 className='text-2xl font-semibold my-4'>Number of Completed tasks: {CompletedTasks.length}</h1>

            <div className='flex flex-col md:flex-row justify-center items-start gap-4'>
                
                <div className='flex flex-col justify-center items-center'>
                    {
                        HighPriorityTasks.length > 0 &&
                        <div className='bg-gradient-to-b from-red-400 p-2 rounded-lg'>
                            <h1 className='text-xl font-semibold text-white'>High Priority</h1>
                            <LowPriority props={{ tasks: HighPriorityTasks, handleComplete, handleDelete }} />
                        </div>}

                    {MediumPriorityTasks.length > 0 &&
                        <div className='bg-gradient-to-b from-yellow-400 p-2 rounded-lg'>
                            <h1 className='text-xl font-semibold text-white'>Medium Priority</h1>
                            <LowPriority props={{ tasks: MediumPriorityTasks, handleComplete, handleDelete }} />
                        </div>}

                    {LowPriorityTasks.length > 0 &&
                        <div className='bg-gradient-to-b from-emerald-400 p-2 rounded-lg'>
                            <h1 className='text-xl font-semibold text-white'>Low Priority</h1>
                            <LowPriority props={{ tasks: LowPriorityTasks, handleComplete, handleDelete }} />
                        </div>}

                </div>
                {CompletedTasks.length > 0 &&
                    <div className='flex flex-col justify-center items-center bg-gradient-to-b from-teal-400 w-full p-2 rounded-lg'>
                        <h1 className='text-xl font-semibold text-white'>Completed</h1>
                        <LowPriority props={{ tasks: CompletedTasks, handleComplete, handleDelete }} />
                    </div>}
            </div>

        </div>
    )
}

export default IncompleteTasks