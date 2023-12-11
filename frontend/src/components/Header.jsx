export const Header = () => {
  return (
    <header className="w-full fixed h-20 flex flex-col justify-center items-center bg-gray-0 text-gray-4 border-b-4 border-purple-2">
      <nav className="w-full max-w-7xl p-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">João Augusto</h2>
        <ul className="w-full max-w-[280px] flex items-center justify-between">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#social">Contatos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
