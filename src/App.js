import { Prompt } from './components/Prompt/Prompt';
import { Responses } from './components/Responses/Responses';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
        <Header>Fun With AI</Header>
        
        <Prompt />
        <Responses />

        <Footer />
    </div>
  );
}

export default App;
