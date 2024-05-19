// Делаем импорт массива объектов
import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import courses from '../data/course';
import { useEffect, useState } from 'react';

const SORT_KEYS = ['title', 'slug', 'id'];

// Функция для сортировки
function sortCourses(courses, key) {
  // Создаем копию массива, чтобы не изменять исходный массив
  const sortedCourses = [...courses];
  // Если ключ undefined (его нету), то массив курсов выводится в оригинальном порядке
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  // Сортируем массив по значению ключа
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  // Возвращаем отсортированный массив
  return sortedCourses;
}

const Courses = () => {
  // useLocation - хук, который возвращает информацию о строке текущего URL адреса
  const location = useLocation();
  // Записываем переменную результат свойства объекта location - search. Это например ?sort=id (сохранит в объекте "id")
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  // useState - хук, который сохраняет значение ключа для сортировки
  const [sortKey, setSortKey] = useState(query.sort);
  console.log(sortKey);
  // Вызываем функцию сортировки с массивом курсов и ключом сортировки
  console.log(sortCourses(courses, sortKey));
  // Создаем состояние для отсортированных курсов, начальное значение - результат сортировки
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      // Если ключ недопустим, перенаправляем на текущий маршрут без параметров сортировки и сбрасываем состояния
      navigate('.');
      setSortKey();
      setSortedCourses([...courses]);
    }
  }, [sortKey, navigate]);

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      {/* Используем метод map для итерации по массиву sortedCourses. Course - текущий объект */}
      {sortedCourses.map((course) => {
        return (
          // to - маршрут, className - для стилизации, course.title - выводим названия наших курсов
          <Link to={course.slug} key={course.id} className="courseLink">
            {course.title}
          </Link>
        );
      })}
    </>
  );
};

export default Courses;
