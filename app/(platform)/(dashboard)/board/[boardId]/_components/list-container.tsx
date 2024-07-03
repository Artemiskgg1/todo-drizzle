"use client";
import { ListWithCards } from "@/types";
import { List } from "@prisma/client";
import { ListForm } from "./list-form";
import { useEffect, useState } from "react";
import { ListItem } from "./list-item";
interface listContainerProps {
  data: ListWithCards[];
  boardId: string;
}
export const ListContainer = ({ data, boardId }: listContainerProps) => {
  const [orderedData, setOrderedData] = useState(data);
  useEffect(() => {
    setOrderedData(data);
  }, [data]);
  return (
    <div>
      <ol className="flex gap-x-3 h-full">
        {orderedData.map(
          (list, index) => {
            return <ListItem key={list.id} index={index} data={list} />;
          },
          [data]
        )}
        <ListForm />
        <div className="flex-shrink-0 w-1" />
      </ol>
    </div>
  );
};
