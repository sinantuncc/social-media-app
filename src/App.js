import './App.css';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import StoryFeed from './components/StoryFeed';

function App() {
  return (
    <main className='grid gap-3 grid-cols-4'>
      <Menu />
      <StoryFeed />
      <Sidebar />
    </main>
  );
}

export default App;
