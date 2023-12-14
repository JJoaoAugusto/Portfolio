export const Header = () => {
  return (
    <header className="w-full fixed h-20 z-10 flex flex-col justify-center items-center bg-gray-0 text-gray-4 border-b-4 border-purple-2">
      <nav className="w-full max-w-7xl p-8 gap-1 flex flex-col lg:flex-row items-center justify-between">
        <h2 className="text-2xl font-bold">João Augusto Vieira</h2>
        <ul className="w-full max-w-[280px] flex items-center justify-between">
          <li>
            <a
              href="#home"
              className="flex border-b-[1px]  border-gray-2 text-gray-2 hover:border-gray-3 hover:text-gray-3"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="flex border-b-[1px]  border-gray-2 text-gray-2 hover:border-gray-3 hover:text-gray-3"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#social"
              className="flex border-b-[1px]  border-gray-2 text-gray-2 hover:border-gray-3 hover:text-gray-3"
            >
              Contatos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
