export type todoType = {
  id: number;
  text: string;
  done: boolean;
};
export type groupType = {
  id: number;
  name: string;
  groupTodo: todoType[];
};
