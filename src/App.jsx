import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
function App() {
  return (
    // Обязательный тег, который нужен для обозначения того, что внутри сайта испоьзуется роутинг. future - флаг, для того
    // чтобы в будущем, чтобы упростить переход на 7 версию react-router-dom
    <BrowserRouter future={{ v7_startTransition: true }}>
      <div className="App">
        {/* Тег, где хранятся сами маршруты */}
        <Routes>
          {/* Route - определённый маршрут */}
          {/* Помещаем все маршруты в маршрут home, чтобы её содержимое отражалось на всех других страницах */}
          <Route path="/" element={<Home />}>
            <Route
              path="about"
              element={
                <h1>
                  <About />
                </h1>
              }
            />
            <Route
              path="contacts"
              element={
                <h1>
                  <Contact />
                </h1>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
