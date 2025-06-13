import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './components/app-layout';
import { Children } from 'react';
import Home from './pages/Home';
import Context from './context/context';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{
      path : '/' ,
      element : <Home/>
    }],
  },
]);
function App() {
  

  return (
    <Context>
      <RouterProvider router={router} />
    </Context>
  );
}

export default App
