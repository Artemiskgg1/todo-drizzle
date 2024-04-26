"use client";
import { useRouter } from "next/navigation";
import { todoType } from "../lib/definitions";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
interface GroupTodoModalProps {
  isOpen?: Boolean;
  onClose: () => void;
  todos: todoType[];
}
const GroupTodoModal: React.FC<GroupTodoModalProps> = ({
  isOpen,
  onClose,
  todos,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      members: [],
    },
  });
  const members = watch("members");
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
  };
  return <div>GroupChatModal!</div>;
};

export default GroupTodoModal;
