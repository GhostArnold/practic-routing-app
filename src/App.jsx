import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import MainLayout from './layouts/MainLayout';
import Courses from './components/Courses';
import SingleCourse from './components/SingleCourse';
function App() {
  return (
    // Обязательный тег, который нужен для обозначения того, что внутри сайта испоьзуется роутинг. future - флаг, для того
    // чтобы в будущем, чтобы упростить переход на 7 версию react-router-dom
    <BrowserRouter future={{ v7_startTransition: true }}>
      <div className="App">
        {/* Тег, где хранятся сами маршруты */}
        <Routes>
          {/* Route - определённый маршрут */}
          <Route path="/" element={<MainLayout />}>
            {/* index - значит, что маршрут по умолчанию, который в родительском маршруте */}
            <Route element={<Home />} index />
            <Route path="courses" element={<Courses />} />
            {/* Отдельный курс, который идёт как дополнение к маршруту course, называется параметр маршрута */}
            <Route path="courses/:courseSlug" element={<SingleCourse />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
