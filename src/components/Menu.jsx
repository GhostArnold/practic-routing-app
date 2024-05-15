import { Link } from 'react-router-dom';

// Компонент Menu представляет навигационное меню, содержащее ссылки для перехода между различными страницами приложения.
const Menu = () => {
  return (
    // Навигационное меню обернуто в тег <nav>, чтобы обозначить его навигационный характер.
    <nav>
      {/* <Link> - это элемент, который позволяет пользователю перейти на другую страницу, щелкнув по ней */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contact</Link>
    </nav>
  );
};

export default Menu;
