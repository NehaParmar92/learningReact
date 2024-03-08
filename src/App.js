import React, { Component } from 'react'
import NavBar from './component/NavBar'
import News from './component/News'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact element={<News key="general" pageSize={20} country="in" categorey="general" />} path="/general"></Route>
            <Route exact element={<News key="sports" pageSize={20} country="in" categorey="sports" />} path="/sports"></Route>
            <Route exact element={<News key="health" pageSize={20} country="in" categorey="health" />} path="/health"></Route>
            <Route exact element={<News key="science" pageSize={20} country="in" categorey="science" />} path="/science"></Route>
            <Route exact element={<News key="business" pageSize={20} country="in" categorey="business" />} path="/business"></Route>
            <Route exact element={<News key="entertainment" pageSize={20} country="in" categorey="entertainment" />} path="/entertainment"></Route>
            <Route exact element={<News key="technology" pageSize={20} country="in" categorey="technology" />} path="/technology"></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
