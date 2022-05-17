import { Prompt } from './components/Prompt/Prompt';
import { Responses } from './components/Responses/Responses';

import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1 className="App-logo">Fun with AI</h1>
        </header>
        
        <Prompt />
        <Responses />
    </div>
  );
}

export default App;
