import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import OnboardingPage from '../pages/OnboardingPage';
import MainPage from '../pages/MainPage';

function AppRouter() {
  return (
    <Router>
      <Routes>
        // 온보딩 페이지
        <Route path='/' element={<OnboardingPage />}></Route>

        // 메인 페이지
        <Route path='/main' element={<MainPage />}></Route>
      </Routes>
    </Router>
  )
}

export default AppRouter;