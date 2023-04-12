import React from 'react';
import Navbar from './components/navbar/Navbar';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import Message from './pages/message/Message';
import Messages from './pages/messages/Messages';
import Add from './pages/add/Add';
import MyGigs from './pages/myGigs/MyGigs';
import Orders from './pages/orders/Orders';
import './app.scss';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import Pay from './pages/pay/Pay';
import Success from './pages/success/Success';

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/gigs',
          element: <Gigs />,
        },
        {
          path: '/gig/:id',
          element: <Gig />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '/mygigs',
          element: <MyGigs />,
        },
        {
          path: '/add',
          element: <Add />,
        },
        {
          path: '/messages',
          element: <Messages />,
        },
        {
          path: '/message/:id',
          element: <Message />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/pay/:id',
          element: <Pay />,
        },
        {
          path: '/success',
          element: <Success />,
        },
        {
          path: '/register',
          element: <Register />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
