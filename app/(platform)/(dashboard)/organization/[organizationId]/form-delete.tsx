"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export const FormDelete = () => {
  const { pending } = useFormStatus();
  return (
    <Button variant="destructive" size="sm" type="submit" disabled={pending}>
      Delete
    </Button>
  );
};
