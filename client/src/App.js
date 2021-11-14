
import React from 'react'
import Page from "./components/Page"
import Header from "./components/Header"
import {DataProvider} from './components/GlobalState'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
         <Header />
         <Page />
          </div>
          </Router>
          </DataProvider>
  );
}

export default App;
