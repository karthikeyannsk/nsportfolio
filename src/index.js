/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom';

render(
  <ThemeProvider>
     <Router>
        <App />
     </Router>
  </ThemeProvider>,
  document.getElementById('root')
)
