import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MoviesProvider from './contexts/MoviesProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MoviesProvider>
            <App />
        </MoviesProvider>
    </BrowserRouter>
)
