import { z } from "zod";
import { List } from "@prisma/client"; // This is our expected output type
import { ActionState } from "@/lib/create-safe-action"; //
import { UpdateListOrder } from "./schema";
export type InputType = z.infer<typeof UpdateListOrder>;
export type ReturnType = ActionState<InputType, List[]>;
