import { useState } from 'react';
import './App.css';
import FlagButtons from './components/flag_buttons/FlagButtons';
import WelcomeText from './components/welcome_text/WelcomeText';

function App() {
    const [langue, setLangue] = useState("EN");

    const switchLangue = (new_langue) => {
        setLangue(new_langue);
    }

    return (
        <div className="App">
            <header className="App-header">
                <FlagButtons switchLangue={switchLangue}/>
                <WelcomeText langue={langue}/>
            </header>
        </div>
    );
}

export default App;
