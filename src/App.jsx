import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/MainPage';
import DiaryList from './pages/DiaryListPage';
import DetailDiary from './pages/DetailDiaryPage';
import WritingDiary from './pages/WritingDiaryPage';
import './App.css';

// createBrowserRouter로 라우트 정의
const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '/write', element: <WritingDiary /> },
  { path: '/diary/:id', element: <DetailDiary /> },
  { path: '/diary-list', element: <DiaryList /> },
  { path: '/diary-list/:id', element: <DetailDiary /> },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
