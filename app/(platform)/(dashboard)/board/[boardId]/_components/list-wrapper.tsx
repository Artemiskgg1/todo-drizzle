interface ListWeapperProps {
  children: React.ReactNode;
}
export const ListWrapper = ({ children }: ListWeapperProps) => {
  return <ol className="shrink-0 h-full w-[272px] select-none">{children}</ol>;
};
export default ListWrapper;
