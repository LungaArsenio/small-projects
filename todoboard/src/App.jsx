import Board from "./components/Board"
import Input from "./components/Input"
import { useState } from "react"

function App() {
  const [taskList, setTaskList] = useState([])
  return (
    <>
      <div className="flex flex-col items-center justify-center py-8 gap-4">
        <h1 className="text-xl font-semibold">Todo Board</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>
        <div className="flex flex-col grid grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 gap-4">
        {taskList.map((task, index) =>
          <Board
            key={index}
            task={task}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        )}
        </div>
    </>
  )
}

export default App
