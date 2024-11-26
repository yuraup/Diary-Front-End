import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/MainPage';
import DiaryList from './pages/DiaryListPage';
import DetailDiary from './pages/DetailDiaryPage';
import WritingDiary from './pages/WritingDiaryPage';
import DiaryResultPage from './pages/DiaryResultPage';
import DiarySaveCompletePage from './pages/DiarySaveCompletePage';
import TransformCompletePage from './pages/TransformCompletePage';
import './App.css';

const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '/write', element: <WritingDiary /> },
  { path: '/loading-complete', element: <TransformCompletePage /> },
  { path: '/result', element: <DiaryResultPage /> },
  { path: '/save-complete', element: <DiarySaveCompletePage /> },
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
