import './App.css';
import ScrollBarSection from './components/MenuScroll/scrollSection';
import NavBar from './components/Navigation/navbar';
import StaticSideBar from './components/StaticSideBarContainer/staticSideBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <StaticSideBar />
      <ScrollBarSection />
    </div>
  );
}

export default App;
