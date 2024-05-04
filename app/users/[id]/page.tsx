const IdPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>Id : {params.id}</h1>
    </div>
  );
};
export default IdPage;
