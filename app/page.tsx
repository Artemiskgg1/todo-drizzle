import { getData } from "@/actions/todoActions";
import AddTodo from "@/app/ui/AddTodo";
import Todos from "@/app/ui/Todos";
export default async function Home() {
  const data = await getData();
  return <Todos todos={data} />;
}
