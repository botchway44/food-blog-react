import './App.css';
import { HomePage } from './pages/Home';
import './shared/assets/css/blog-card.css';
import './shared/assets/css/nav.css';
import Nav from './shared/components/Nav.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <section
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Nav />

          <section
            className="content"
            style={{
              flex: '1 1 auto',
              display: 'flex',
              flexWrap: 'wrap',
              overflowY: 'scroll',
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </section>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
