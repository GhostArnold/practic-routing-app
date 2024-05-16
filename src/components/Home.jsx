import { Outlet } from 'react-router-dom';
import Menu from './Menu';

const Home = () => {
  return (
    <>
      <Menu />
      <h1>Home</h1>
      {/* Чтобы содержимое дочерних компонентов home отображалось там, где мы добавили Outlet */}
      <Outlet />
    </>
  );
};

export default Home;
