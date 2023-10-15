import { useTodo } from "@/lib/frontend/hooks";
import { Button } from "@mantine/core";
import { TextInput } from '@mantine/core';
import { Textarea } from '@mantine/core';
import { useState } from "react";
import { Switch } from '@mantine/core';

export default function Todo() {
  const { todos, addTodo, removeTodo } = useTodo(["Todo #1", "Todo #2", "Todo #3"]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDesc, setNewTodoDesc] = useState('');

  const handleCreateTodo = () => {
    if (newTodoTitle && newTodoDesc) {
      addTodo(newTodoTitle, newTodoDesc);
      setNewTodoTitle('');
      setNewTodoDesc('');
    }
  }

  return (
    <div className="h-screen w-screen p-20 flex flex-row justify-between">
      <div className="h-fit-content w-3/5 p-4 flex flex-col gap-2 overflow-y-scroll">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="w-full border rounded-lg flex flex-row items-center justify-between p-4 transition ease-in-out hover:bg-blue-300 duration:200"
          >
            <h2 className="text-xl font-semibold">{todo}</h2>
            <Button className="transition ease-in-out bg-blue-500 hover:scale-110 hover:bg-blue-700 duration-200" onClick={() => removeTodo(index)}>
              Done
            </Button>
          </div>
        ))}
      </div>
      <div className="h-7/10 w-2/6 border-2 rounded-lg p-4">
        <TextInput className="mt-4"
          size="lg"
          radius="lg"
          placeholder="What todo? ..."
          value={newTodoTitle}
          onChange={(event) => setNewTodoTitle(event.target.value)}
        />
        <Switch className="mt-8"
          defaultChecked
          label="Syncronize with my phone"
        />
        <Switch className="mt-8"
          defaultChecked
          label="Set reminder Todo"
        />
        <Switch className="mt-8"
          defaultChecked
          label="I agree to sell my privacy"
        />
        <Textarea className="mt-8 mb-8"
          size="sm"
          radius="lg"
          placeholder="Describe what you have to do ..."
          value={newTodoDesc}
          onChange={(event) => setNewTodoDesc(event.target.value)}
          autosize
          minRows={5}
          maxRows={10}
        />
        <div className="w-1/1 flex justify-end">
          <Button className="transition ease-in-out bg-blue-500 hover:scale-110 hover:bg-blue-700 duration-300" size="md" radius="lg" onClick={handleCreateTodo}>
            Create Todo
          </Button>
        </div>
      </div>
    </div>
  )
}
