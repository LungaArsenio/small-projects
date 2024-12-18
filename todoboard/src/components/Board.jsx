

export default function Board({ task, index, taskList, setTaskList }) {
  //setTaskList and taskList were passed from the parent component as props so I can modify the taskList array
  const handleDelete = () => {
    // adicionar modulo de confirmacao de exclusao de task.
        // eslint-disable-next-line react/prop-types
        let removeIndex = taskList.indexOf(task);//targetting the task object in the taskList array
    taskList.splice(removeIndex, 1)
    setTaskList([...taskList])//update the taskList array
      }

  return (

    <>
      <div className="max-w-xl flex flex-col items-center justify-center border text-center text-lg pt-3 pb-4 px-4 md:px-6 ">
        <p>{task}</p>
        <button
          onClick={handleDelete}
        className="bg-red-400 text-white rounded-lg px-1.5 py-0.5 ml-4"
        >Delete</button>
      </div>
    </>

  )
}
