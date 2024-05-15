import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    // Обязательный тег, который нужен для обозначения того, что внутри сайта испоьзуется роутинг. future - флаг, для того
    // чтобы в будущем, чтобы упростить переход на 7 версию react-router-dom
    <BrowserRouter future={{ v7_startTransition: true }}>
      <div className="App">
        {/* Тег, где хранятся сами маршруты */}
        <Routes>
          {/* Route - определённый маршрут */}
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="contacts" element={<h1>Contacts</h1>} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
