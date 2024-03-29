import React, { Component } from 'react';
import { Table, FormGroup, InputGroup, FormControl, Button, Grid, Row, Col } from 'react-bootstrap';

class CreditSimulator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            monto: 0,
            tasa: 10.02,
            meses: 12,
            total: 0,
            totalIntereses: 0
        };
    }


    componentDidMount() {
        this.generatePayments();

    }

    handleChange = (event) => {
        let monto = event.target.value;
        this.setState({
            monto
        });
    }
    handleRateChange = (event) => {
        this.setState({
            tasa: event.target.value,
        })
    }
    handleMonthsChange = (event) => {

        this.setState({
            meses: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.generatePayments();
    }

    generatePayments() {
        const cuotas = [];
        /*console.log("generatePayments", this.state.monto);*/

        if (this.state.monto === 0 || this.state.monto === "") {
            this.setState({
                cuotas: null
            })
            return;
        }
        let montoInicial = parseFloat(this.state.monto);
        cuotas.push({
            id: 0,
            renta: 0,
            intereses: 0,
            amortizacion: 0,
            capital: this.formatMoney(montoInicial)
        })

        const tasa = this.convertPercentage(this.state.tasa) / 12;
        const renta = (montoInicial /
            (
                (1 - Math.pow((1 + tasa), -this.state.meses))
                / tasa));

        let monto = this.state.monto;
        let total = 0;
        let totalIntereses = 0;
        for (let index = 0; index < this.state.meses; index++) {

            const intereses = monto * tasa;
            const amortizacion = renta - (intereses);
            monto -= amortizacion;

            totalIntereses += intereses;
            total += renta;

            cuotas.push({
                id: index + 1,
                renta: this.formatMoney(renta),
                intereses: this.formatMoney(intereses),
                amortizacion: this.formatMoney(amortizacion),
                capital: this.formatMoney(monto)
            })
        }
        //let sum = cuotas.reduce((prev, cur) => return prev + cur.renta, 0);
        this.setState({
            cuotas,
            total: this.formatMoney(total),
            totalIntereses: this.formatMoney(totalIntereses)
        })
    }

    formatMoney(amount, decimalCount = 2) {
        try {
            return amount.toFixed(decimalCount).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        } catch (e) {
            console.log(e)
        }
    };

    convertPercentage(num) {
        return (num / 100);
    }

    obtenerCuotas() {
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
    }


    render() {
        return (
            <Grid>

                <Row className="show-grid">
                    <Col xs={12} md={12} lg={12}>
                        <h1>Calculadora de crédito</h1>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon>Monto Prestamo $</InputGroup.Addon>
                                    <FormControl type="text"
                                        value={this.state.monto}
                                        placeholder="Digita el monto de tu prestamo"
                                        onChange={this.handleChange} />
                                    <InputGroup.Addon>.00</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Button>
                                        <Button>Número de meses</Button>
                                    </InputGroup.Button>
                                    <FormControl type="text"
                                        value={this.state.meses}
                                        placeholder="Digita el número de meses"
                                        onChange={this.handleMonthsChange} />

                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Button>
                                        <Button>Tasa efectiva anual (%EA)</Button>
                                    </InputGroup.Button>
                                    <FormControl type="text"
                                        value={this.state.tasa}
                                        placeholder="Digita la tasa efectiva anual"
                                        onChange={this.handleRateChange} />
                                    <InputGroup.Addon>%</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                            <Button type="submit">Calcular</Button>
                        </form>
                        <br />
                        {
                            this.state.cuotas ?
                                <div>
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
                                    <p>Pagará {this.state.total} y {this.state.totalIntereses} en intereses</p>
                                </div>
                                : <p>Digitar un valor de Monto</p>
                        }
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default CreditSimulator;
