import { getData } from "@/actions/todoActions";
import Todos from "@/app/ui/Todos";

export default async function Home() {
  const data = await getData();
  return (
    <div className="h-screen w-full flex flex-col items-center bg-zinc-950">
      <div className="text-4xl sm:text-7xl font-bold relative z-20 py-8">
        To-do app
      </div>
      <div className="flex justify-center flex-col md:flex-row items-center overflow-hidden md:pt-40 w-screen">
        <Todos todos={data} />
      </div>
    </div>
  );
}
