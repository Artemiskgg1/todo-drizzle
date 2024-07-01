import { z } from "zod";

export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

export type ActionState<TInput, TOutput> = {
  fieldErrors?: FieldErrors<TInput>;
  error?: string | null;
  data?: TOutput;
};

export const createSafeAction = <TInput, TOutput>(
  schema: z.Schema<TInput>,
  handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
  return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
    const validationResult = schema.safeParse(data);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      const formattedErrors: FieldErrors<TInput> = Object.keys(
        fieldErrors
      ).reduce((acc, key) => {
        const typedKey = key as keyof TInput;
        acc[typedKey] =
          fieldErrors[key as keyof typeof fieldErrors]?.map((e: string) => e) ||
          [];
        return acc;
      }, {} as FieldErrors<TInput>);

      return {
        fieldErrors: formattedErrors,
      };
    }
    return handler(validationResult.data);
  };
};
