import {GamePage} from './components/pages/GamePage'
import {HomePage} from './components/pages/HomePage'
import {Footer} from './components/Footer'
import {style} from './styles/style.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import useLocalStorage from 'use-local-storage'



function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: Dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', 'Dark' ? 'Light' : 'Dark');
  const switchTheme = () => {
    
    const newTheme = theme === 'Light' ? 'Dark' : 'Light';
    setTheme(newTheme);
    const container = document.getElementById('webPage');
    let dataTheme = container.getAttribute('data-theme');

    (theme === 'Dark') ? container.setAttribute('data-theme', 'Light'): container.setAttribute('data-theme', 'Dark');
  }
  return (
    <Router data-theme={theme}>
          <Routes>
            <Route exact path="/" element={<HomePage themeCallback = {switchTheme}/>} />
            <Route exact path="/game" element={<GamePage />} />
          </Routes>
    </Router>
  );
}

export default App;
