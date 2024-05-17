// Делаем импорт массива объектов
import { Link } from 'react-router-dom';
import courses from '../data/course';

const Courses = () => {
  return (
    <>
      <h1>Courses</h1>
      {/* Используем метод map для итерации по массиву courses. Course - текущий объект */}
      {courses.map((course) => {
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
