import './App.css';
import CounterView from './app/features/counter/CounterView';
import PostView from './app/features/posts/PostView';

function App() {
  return (
    <div className="App">
      <CounterView />
      <PostView />
    </div>
  );
}

export default App;
