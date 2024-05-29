// Theme
import AppTheme from './theme/themeProvider'
// Components
import MainMenu from 'src/pages/MainMenu'
import Game from 'src/pages/Game'
import About from './pages/About'
// Router
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <AppTheme>
        <Routes>
          <Route path='/' element={<MainMenu />} />
          <Route path='/play' element={<Game />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </AppTheme>
    </>
  )
}

export default App
