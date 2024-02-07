import './App.css'
import AddTask from './components/AddTask'
import IncompleteTasks from './components/IncompleteTasks'

function App() {

  return (
    <>
      <h1 className='text-3xl font-serif font-bold'>TODO APP</h1>
      <AddTask/>
      <IncompleteTasks/>
    </>
  )
}

export default App
