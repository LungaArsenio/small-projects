

export default function Board({ task, index, taskList, setTaskList }) {
  const handleDelete = () => {
        // eslint-disable-next-line react/prop-types
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex, 1)
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
