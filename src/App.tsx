// import { useState } from 'react';
// import reactLogo from './shared/assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import './shared/assets/css/blog-card.css';
import './shared/assets/css/nav.css';

import { BlogCard } from './shared/components/BlogCard.component';
import { Header } from './shared/components/Header.component';
import Nav from './shared/components/Nav.component';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
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
          <Header />
          <BlogCard showImage={true} />
          <BlogCard showImage={true} />
          <BlogCard showImage={true} />
          <BlogCard showImage={true} />
          <BlogCard showImage={true} />
          <BlogCard showImage={true} />
          <BlogCard showImage={true} />
          <BlogCard showImage={true} />
          <BlogCard showImage={true} />
        </section>
      </section>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
