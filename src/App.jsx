import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


const App = () => {
    const [mode, setMode] = useState("light")
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type,
        })
        setInterval(() => {
            setAlert(null);
        }, 3000);
    }
    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "grey";
            showAlert("Dark mode is enabled", "success");
            document.title = "TextUtils Dark mode enabled";
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Light mode is enabled", "success");
            document.title = "TextUtils Light mode enabled";
        }

        setInterval(() => {
            document.title = "Use TextUtils";
        }, 1500);

        setInterval(() => {
            document.title = "Best Website ";
        }, 2000);

    }
    return (
        <>
      =
                {/* <Navbar title="TextUtils-premium" about="About-premium"/>
            <Navbar title="TextUtils-premium" about={4} /> */}
                <Navbar title='TextUtils' about='About' mode={mode} toggle={toggleMode} />
                <Alert alert={alert} />
              
                    
                        <div className="container">
                            <TextForm heading="Enter the Text to Analyse below" showAlert={showAlert} mode={mode} />
                        </div>
                  
                          
        </>
    )
}

export default App;