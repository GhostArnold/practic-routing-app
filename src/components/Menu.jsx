import { NavLink } from 'react-router-dom';

// Компонент Menu представляет навигационное меню, содержащее ссылки для перехода между различными страницами приложения.
const Menu = () => {
  return (
    // Навигационное меню обернуто в тег <nav>, чтобы обозначить его навигационный характер.
    <nav>
      {/* По умолчанию active класс добавляется к <NavLink> компоненту, когда он активен, поэтому вы можете использовать CSS для его оформления. */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};

export default Menu;
