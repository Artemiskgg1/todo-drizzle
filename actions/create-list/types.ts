import { z } from "zod";
import { List } from "@prisma/client"; // This is our expected output type
import { ActionState } from "@/lib/create-safe-action"; //
import { CreateList } from "./schema";
export type InputType = z.infer<typeof CreateList>;
export type ReturnType = ActionState<InputType, List>;
