"use client";

import { createBoard } from "@/actions/create-board";

import { FormSubmit } from "@/components/form/form-submit";
import { useAction } from "@/hooks/use-action";
import FormInput from "@/components/form/form-input";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: () => {
      console.log("Board created successfully");
    },
    onError: (error) => {
      console.error("Error creating board", error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    console.log({ title });
    execute({ title });
  };
  const formattedErrors = {
    title: fieldErrors?.title ? [fieldErrors.title] : undefined,
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput label="Board Title" id="title" errors={formattedErrors} />
      </div>
      <FormSubmit>Save</FormSubmit>
    </form>
  );
};
