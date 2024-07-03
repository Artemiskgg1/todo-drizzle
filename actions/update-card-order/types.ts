import { z } from "zod";
import { Card } from "@prisma/client"; // This is our expected output type
import { ActionState } from "@/lib/create-safe-action"; //
import { UpdateCardOrder } from "./schema";
export type InputType = z.infer<typeof UpdateCardOrder>;
export type ReturnType = ActionState<InputType, Card[]>;
