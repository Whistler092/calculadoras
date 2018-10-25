import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { monto: 30000000 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  componentDidMount(){
    this.generatePayments();

  }

  handleChange(event) {
    this.setState({
      monto: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.generatePayments();
  }

  generatePayments(){
    const cuotas = [];
    cuotas.push({
      id: 0,
      renta: 0,
      intereses: 0,
      amortizacion: 0 ,
      capital: this.formatMoney(this.state.monto)
    })

    const periodo = 60;
    const tasa = 0.09/12;
    const renta = (this.state.monto / 
          (
            (1 - Math.pow((1+tasa), -periodo))
            /tasa));

    let monto = this.state.monto;
    for (let index = 0; index < periodo; index++) {

      const intereses = monto * tasa; 
      const amortizacion = renta - (intereses);
      monto -=  amortizacion;

      cuotas.push({
        id: index +1,
        renta: this.formatMoney(renta),
        intereses: this.formatMoney(intereses),
        amortizacion: this.formatMoney(amortizacion) ,
        capital: this.formatMoney(monto)
      })
    }

    this.setState({
      cuotas
    })
  }

  formatMoney(amount, decimalCount = 2) {
    try {
      return amount.toFixed(decimalCount).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    } catch (e) {
      console.log(e)
    }
  };

  obtenerCuotas(){
    return (
      this.state.cuotas.map(i => 
        <tr key={i.id}>
          <td>#{i.id}</td>
          <td>{i.renta}</td>
          <td>{i.intereses}</td>
          <td>{i.amortizacion}</td>
          <td>{i.capital}</td>
        </tr>
        )
    )
    /* return (
      this.state.cuotas.map(i => 
        <ListGroup key={i.id}>
          <ul>Cuota # {i.id} - Renta: {i.renta}</ul>
          <ul>
              <strong>Intereses:</strong> {i.intereses}   
              <strong> Amortización:</strong> {i.amortizacion}   
              <strong> Capital:</strong> {i.capital}</ul>
      </ListGroup>)
    ) */
  }
  

  render() {
    return (
      <div className="App">
        <h1>Calculadora de crédito</h1>
        <form onSubmit={this.handleSubmit}>
          <Grid >
            <Row className="show-grid">
              <Col xs={12} md={8}>
              <label>
                Monto Crédito:
              </label>
              </Col>
              <Col xs={6} md={4}>
                 <input type="text" name="name" value={this.state.monto} onChange={this.handleChange} />
              </Col>
              <Col xs={6} md={4}>
                <input type="submit" value="Submit" />
              </Col>
            </Row>
          </Grid>
        </form>
        <br />
        {
          this.state.cuotas ? 
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Vlr. Cuota</th>
                <th>Intereses</th>
                <th>Amortización</th>
                <th>Saldo</th>
              </tr>
            </thead>
            <tbody>
              {this.obtenerCuotas()}
              </tbody>
            </Table>
           : <p>Digitar un valor de Monto</p>
        }
      </div>
    );
  }
}

export default App;
