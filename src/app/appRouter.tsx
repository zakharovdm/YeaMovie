import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import { MainPage } from '@/pages/main';
import { SearchPage } from '@/pages/search';
import { MovieDetailsPage } from '@/pages/details';

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>404</div>,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/search-result', element: <SearchPage /> },
      { path: 'details/:id', element: <MovieDetailsPage />}
    ],
  },
]);
