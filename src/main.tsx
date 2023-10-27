
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@/assets/tailwind/tailwind.css"
import './index.css'
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from './context/ContextProvider.tsx'
import defineRouter from './router/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(

  <ContextProvider>
    <RouterProvider router={defineRouter} />
  </ContextProvider>
)
