import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root/Root';
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListedBooks from './components/ListedBooks/ListedBooks';
import PagesRead from './components/PagesRead/PagesRead';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import LatestCollection from './components/LatestCollection/LatestCollection';
import Writers from './components/Writers/Writers';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json')
      },
      {
        path: "/pages",
        element: <PagesRead></PagesRead>,
        loader: () => fetch('/books.json')
      },
      
      {
        path: '/bookDetails/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json')
        
        
      },
      {
        path: "/latestCollection",
        element: <LatestCollection></LatestCollection>,
        loader: () => fetch('/LatestCollection.json'),
        
      },
      {
        path: '/writers',
        element: <Writers></Writers>,
        
      }
     












      
    ]
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
