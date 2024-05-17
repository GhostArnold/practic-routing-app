import courses from '../data/course';
import { Link, useParams } from 'react-router-dom';
const SingleCourse = () => {
  // Хук useParams используется для получения текущих параметров маршрута
  const params = useParams();
  // Ищем объект slug которого совпадает с значением объекта params(текущем параметром)
  const course = courses.find((course) => course.slug === params.courseSlug);
  // Логируем параметры маршрута в консоль
  console.log(params);
  return (
    <>
      {/* Выводим данные о курсе */}
      <h1>Single course</h1>
      <h2>{course.title}</h2>
      <h3>{course.slug}</h3>
      <h3>{course.id}</h3>

      {/* Ссылка на Courses */}
      {/* .. - на уровень выше, relative="path" - гарантирует, что ссылка будет работать относительно текущего пути */}
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
};

export default SingleCourse;
