import { Header } from './components/Header/Header';
import { Prompt } from './components/Prompt/Prompt';
import { Footer } from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
        <Header>Fun With AI</Header>
        
        <Prompt />

        <Footer />
    </div>
  );
}

export default App;
