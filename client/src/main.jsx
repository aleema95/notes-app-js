import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './redux/store/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss'
import Register from './components/Register/Register';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3010';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/register",
    element: <Register />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
