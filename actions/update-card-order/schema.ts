import { z } from "zod";
export const UpdateCardOrder = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      order: z.number(),
      listId: z.string(),
      title: z.string(),
    })
  ),
  boardId: z.string(),
});
