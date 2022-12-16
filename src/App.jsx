import { About } from './components/about/About';
import { Blogs } from './components/blogs/Blogs';
import { Header } from './components/header/Header';
import { Intro } from './components/intro/Intro';
import { SayHello } from './components/sayHello/SayHello';
import { Works } from './components/works/Works';

function App() {
  return (
    <div className="app">
      <Header/>
      <Intro/>
      <About/>
      <Works/>
      <Blogs/>
      <SayHello/>
    </div>
  );
}

export default App;
