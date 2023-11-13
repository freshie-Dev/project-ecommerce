import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalStyle from './GlobalStyles.jsx'

import { StyleProvider } from './context/Style.jsx'
import { UserProvider } from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
      <StyleProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </StyleProvider>
  </React.StrictMode>,
)


