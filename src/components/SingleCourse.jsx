import courses from '../data/course';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import NotFound from './NotFound';
import { useEffect } from 'react';
const SingleCourse = () => {
  // Хук useParams используется для получения текущих параметров маршрута
  const params = useParams();
  // Ищем объект slug которого совпадает с значением объекта params(текущем параметром)
  const course = courses.find((course) => course.slug === params.courseSlug);

  //  Хук который используется для программной навигации.
  const navigate = useNavigate();

  // Если совпадения по course не найдены, то выводим компонент NotFound
  // if (!course) {
  //   return <NotFound />;
  // }

  // Используем useEffect для выполнения перенаправления при изменении course
  // useEffect позволяет вызвать необходимое условие допустим, только тогда, когда меняется какае-та переменная из этого условия к примеру
  // useEffect - работает ассинхронно
  useEffect(() => {
    // Если курс не найден, перенаправляем на уровень выше в маршруте
    if (!course) {
      navigate('..', { relative: 'path' });
    }
    // course - useEffect выполняется только если course изменился, navigate позволяет программе понять, что изменения возможны
  }, [course, navigate]);

  return (
    <>
      {/* Выводим данные о курсе */}
      <h1>Single course</h1>
      {/* Знак "?", чтобы предотвратить ошибки, если course ничему не будет равен */}
      <h2>{course?.title}</h2>
      <h3>{course?.slug}</h3>
      <h3>{course?.id}</h3>

      {/* Ссылка на Courses */}
      {/* .. - на уровень выше, relative="path" - гарантирует, что ссылка будет работать относительно текущего пути */}
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
};

export default SingleCourse;
