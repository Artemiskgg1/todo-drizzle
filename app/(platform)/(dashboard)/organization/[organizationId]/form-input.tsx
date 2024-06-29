interface FormInputProps {
  errors?: {
    title?: string[];
  };
}
export const FormInput = ({ errors }: FormInputProps) => {
  return (
    <div>
      <input
        id="title"
        name="title"
        required
        placeholder="Enter a Board Title"
        className="border-black border p-1"
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
