import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MoviesProvider from './contexts/MoviesProvider.jsx'

createRoot(document.getElementById('root')).render(
    <MoviesProvider>
        <App />
    </MoviesProvider>
)
