import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import { element } from './routes/Routes'
import { Provider } from 'react-redux'
import { store } from './global/store'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store ={store}>
       <RouterProvider router={element}/>
       <ToastContainer/>

    </Provider>
   
    {/* <App /> */}
  </StrictMode>,
)
