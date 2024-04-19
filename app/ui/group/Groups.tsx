"use client";

import { groupType } from "@/app/lib/definitions";
import { FC } from "react";

import { AddGroup } from "@/app/ui/group/AddGroup"; // Import the AddGroup component

interface Props {
  groups: groupType[];
}
export const Groups: FC<Props> = ({ groups }) => {
  return (
    <div>
      <span>Your Groups</span>
      <AddGroup />
    </div>
  );
};
