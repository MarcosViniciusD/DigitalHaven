import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Posts/>
    <Form/>
  </StrictMode>,
)
