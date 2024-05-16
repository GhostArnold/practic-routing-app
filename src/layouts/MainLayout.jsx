import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';

const MainLayout = () => {
  return (
    <>
      <Menu />
      {/* Чтобы содержимое дочерних компонентов home отображалось там, где мы добавили Outlet */}
      <Outlet />
    </>
  );
};

export default MainLayout;
