import { useState } from "react"


export default function Input({taskList, setTaskList}) {
  const [input, setInput] = useState("")

  const handleAddTask = (e) => {
    e.preventDefault()
    if (input === "") {
      alert("Please enter a task");

      return;
    }

    /**This chunk allows me to grab every element stored in my
     * task list array and add what is currently stored on the input field.
     *
     * Finally clearing the input field so that the user can add another task.
     */
    setTaskList([...taskList, input]);
    setInput("");
  }

  return (
    <form className="flex flex-row items-center gap-3">
      <input
        className="border rounded-lg py-1 px-2"
        type="text"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-violet-400 text-white py-1 px-3 rounded-lg hover:opacity-70"
        onClick={handleAddTask}>Add</button>
    </form>
  )
}

/**
 * This event handler updates the input state whenever the user types in the input field.
 * It uses the setInput function to set the new value based on the user's input
 */
