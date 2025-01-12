import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import { MainPage } from '@/pages/main';
import { SearchPage } from '@/pages/search';
import { MovieDetailsPage } from '@/pages/details';
import { ViewAllPage } from '@/pages/viewAll';
import { ErrorPage } from '@/pages/error';

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/search-result', element: <SearchPage /> },
      { path: 'details/:id', element: <MovieDetailsPage />},
      { path: 'view-all/:category', element: <ViewAllPage />},
    ],
  },
]);
