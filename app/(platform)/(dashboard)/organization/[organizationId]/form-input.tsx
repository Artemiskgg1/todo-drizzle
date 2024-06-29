"use client";

import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}
export const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus();
  return (
    <div>
      <Input
        id="title"
        name="title"
        required
        placeholder="Enter a Board Title"
        className="border-black border p-1"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => {
            return (
              <p key={error} className="text-rose-500">
                {error}
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
