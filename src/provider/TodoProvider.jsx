import React, {  createContext, useEffect, useState } from 'react'
import { getTaskFromLS } from '../utilities/LocalStorage'
export const TodoContext = createContext(null)
const TodoProvider = ({ children }) => {
    
    // const tasks = getTaskFromLS()
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const storedTasks = getTaskFromLS()
        setTasks(storedTasks);
        console.log(tasks);
    }, [count])
    return (
        <TodoContext.Provider value={{tasks,incrementCount}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider