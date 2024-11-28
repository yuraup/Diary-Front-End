import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/MainPage';
import DiaryList from './pages/DiaryListPage';
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
  { path: '/diary-list', element: <DiaryList /> },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
