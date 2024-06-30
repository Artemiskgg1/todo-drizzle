import { z } from "zod";
import { Board } from "@prisma/client"; // This is our expected output type
import { ActionState } from "@/lib/create-safe-action"; //
import { CreateBoard } from "./schema";
export type InputType = z.infer<typeof CreateBoard>;
export type ReturnType = ActionState<InputType, Board>;
