"use client";
import { FC, useState } from "react";
import { todoType } from "@/app/lib/definitions";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import {
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo,
} from "@/actions/todoActions";
import { lusitana } from "@/app/ui/fonts";
interface Props {
  todos: todoType[];
}

const Todos: FC<Props> = ({ todos }) => {
  const [todoItems, setTodoItems] = useState<todoType[]>(todos);
  const createTodo = (text: string) => {
    const id = (todoItems.at(-1)?.id || 0) + 1;
    addTodo(id, text);
    setTodoItems((prev) => [...prev, { id: id, text, done: false }]);
  };
  const changeTodoText = (id: number, text: string) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
    editTodo(id, text);
  };
  const toggleIsTodoDone = (id: number) => {
    setTodoItems((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
    toggleTodo(id);
  };
  const deleteTodoItem = (id: number) => {
    setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
    deleteTodo(id);
  };
  const [createGroup, setCreateGroup] = useState(false);
  return (
    <>
      <main className="flex mx-auto max-w-xl w-full h-screen flex-col items-center p-8">
        <AddTodo createTodo={createTodo} />
        <div className="w-full flex flex-col mt-8 gap-2">
          {todoItems.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              changeTodoText={changeTodoText}
              toggleIsTodoDone={toggleIsTodoDone}
              deleteTodoItem={deleteTodoItem}
            />
          ))}
        </div>
        <button
          className="p-2 bg-zinc-700 rounded-lg hover:bg-slate-700"
          onClick={() => setCreateGroup(true)}
        >
          Create Group
        </button>
      </main>
    </>
  );
};
export default Todos;
