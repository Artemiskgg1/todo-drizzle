import { getData } from "@/actions/todoActions";
import { Groups } from "@/app/ui/group/Groups";
import Todos from "@/app/ui/Todos";
export default async function Home() {
  const data = await getData();
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Todos todos={data} />
    </div>
  );
}
