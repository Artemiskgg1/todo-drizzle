import { currentUser } from "@clerk/nextjs/server";

const ProtectedPage = () => {
    const user = currentUser();
  return (
    <div>
      <h1>Protected Page!</h1>
    </div>
  );
};
export default ProtectedPage;
