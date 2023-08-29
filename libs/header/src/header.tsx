/* eslint-disable-next-line */
export interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="flex w-full top-0 sticky py-3  shadow-lg bg-white">
      <h1 className="capitalize text-blue-400">Welcome to {title}</h1>
    </header>
  );
}

export default Header;
