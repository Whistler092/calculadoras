import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import './App.css';
import CreditSimulator from './creditSimulator';
import PayrollSimulator from './payrollSimulator';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 2
    };
  }

  handleSelect(key) {
    console.log(`selected ${key}`);
    this.setState({ key });
  }

  render() {
    return (
      <div className="App">

        <Tabs
          activeKey={this.state.key}
          onSelect={this.handleSelect}
          id="controlled-tab"
        >
          <Tab eventKey={1} title="Simulador de Créditos">
            <CreditSimulator />
          </Tab>
          <Tab eventKey={2} title="Simulador de Sueldos">
            <PayrollSimulator />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
