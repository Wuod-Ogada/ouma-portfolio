import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './app.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PortfolioContextProvider from './context/PortfolioContext.jsx'

 const repoName = 'ouma-portfolio';

createRoot(document.getElementById('root')).render(
  
    <StrictMode>
      <BrowserRouter basename={`/${repoName}/`}>
        <PortfolioContextProvider>
          <App />
        </PortfolioContextProvider>   
      </BrowserRouter>
    </StrictMode>
 
)
