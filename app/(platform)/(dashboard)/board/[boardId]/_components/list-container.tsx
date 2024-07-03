"use client";
import { ListWithCards } from "@/types";
import { List } from "@prisma/client";
import { ListForm } from "./list-form";
interface listContainerProps {
  data: ListWithCards[];
  boardId: string;
}
export const ListContainer = ({ data, boardId }: listContainerProps) => {
  return (
    <div>
      <ol>
        <ListForm />
        <div className="flex-shrink-0 w-1" />
      </ol>
    </div>
  );
};
