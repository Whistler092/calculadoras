import React, { Component } from 'react';
import { ListGroup, ListGroupItem, FormGroup, InputGroup, FormControl, HelpBlock, Grid, Row, Col, Button } from 'react-bootstrap';
import './payrollSimulator.css';

class PayrollSimulator extends Component {
    constructor(props) {
        super(props);

        this.handleBasicChange = this.handleBasicChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            salarioBasico: 781242,
            dias: 30,
            devengado: {
                basico: 0,
                auxilioTrasporte: 0,
                total: 0
            },
            deducciones: {
                salud: 0,
                pension: 0,
                total: 0
            },
            aportesParafiscales: {
                Salud: 0,
                FondoDePensiones: 0,
                ARL: 0,
                Parafiscales: 0,
                Prima: 0,
                Cesantias: 0,
                InteresesDeCesantias: 0,
                Vacaciones: 0,
                Dotacion: 0,
                total: 0,
                subtotal: 0
            },
            netoPagado: 0
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        this.doMaths();
    }

    componentDidMount() {
        this.doMaths();
    }

    doMaths() {
        const { salarioBasico, dias } = this.state;

        /*DEVENGADOS*/
        const topeAuxilioTrasporte = 1562484;
        const auxilioTrasporte = 88211;
        const devengadoBasico = (salarioBasico / 30) * dias;
        const devengadoAuxilio = salarioBasico <= topeAuxilioTrasporte ? auxilioTrasporte : 0;
        const devengadoTotal = devengadoAuxilio + devengadoBasico;

        /*DEDUCCIONES*/
        const porcentajeSalud = 0.04;
        const porcentajePension = 0.04;
        const deduccionSalud = devengadoBasico * porcentajeSalud;
        const deduccionPension = devengadoBasico * porcentajePension;
        const deduccionTotal = deduccionSalud + deduccionPension;

        /*aportesParafiscales*/
        const porcentajeParafiscalSalud = 0.085;
        const porcentajeParafiscalFondoPensiones = 0.12;
        const porcentajeParafiscalARL = 0.0052;
        const porcentajeParafiscalParafiscales = 0.09;
        const porcentajeParafiscalPrima = 0.0833;
        const porcentajeParafiscalCesantias = 0.0833;
        const porcentajeParafiscalInteresesCesantias = 0.01;
        const porcentajeParafiscalVacaciones = 0.0417;
        const porcentajeParafiscalDotacion = 0.05;
        const parafiscalSalud = devengadoBasico * porcentajeParafiscalSalud;
        const parafiscalFondoPensiones = devengadoBasico * porcentajeParafiscalFondoPensiones;
        const parafiscalARL = devengadoBasico * porcentajeParafiscalARL;
        const parafiscalParafiscales = devengadoBasico * porcentajeParafiscalParafiscales;
        const parafiscalPrima = devengadoBasico * porcentajeParafiscalPrima;
        const parafiscalCesantias = devengadoBasico * porcentajeParafiscalCesantias;
        const parafiscalInteresesCesantias = devengadoBasico * porcentajeParafiscalInteresesCesantias;
        const parafiscalVacaciones = devengadoBasico * porcentajeParafiscalVacaciones;
        const parafiscalDotacion = devengadoBasico * porcentajeParafiscalDotacion;

        const prafiscalSubtotal = parafiscalSalud +
            parafiscalFondoPensiones +
            parafiscalARL +
            parafiscalParafiscales +
            parafiscalPrima +
            parafiscalCesantias +
            parafiscalInteresesCesantias +
            parafiscalVacaciones +
            parafiscalDotacion;

        this.setState({
            devengado: {
                basico: devengadoBasico,
                auxilioTrasporte: devengadoAuxilio,
                total: devengadoTotal
            },
            deducciones: {
                salud: deduccionSalud,
                pension: deduccionPension,
                total: deduccionTotal
            },
            netoPagado: devengadoTotal - deduccionTotal,
            aportesParafiscales: {
                Salud: parafiscalSalud,
                FondoDePensiones: parafiscalFondoPensiones,
                ARL: parafiscalARL,
                Parafiscales: parafiscalParafiscales,
                Prima: parafiscalPrima,
                Cesantias: parafiscalCesantias,
                InteresesDeCesantias: parafiscalInteresesCesantias,
                Vacaciones: parafiscalVacaciones,
                Dotacion: parafiscalDotacion,
                total: prafiscalSubtotal + devengadoTotal - deduccionTotal,
                subtotal: prafiscalSubtotal
            }
        })
    }

    formatMoney(amount, decimalCount = 2) {
        try {
            return amount.toFixed(decimalCount).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        } catch (e) {
            console.log(e)
        }
    };

    getValidationState() {
        const days = parseInt(this.state.value);
        if (days < 30 && days > 0) return 'success';
        else if (days < 0) return 'warning';
        else if (days > 30) return 'error';
        return null;
    }

    handleBasicChange(e) {
        this.setState({ salarioBasico: e.target.value });
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={12} lg={12}>
                        <h1>Calculadora de Salarios</h1>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroup.Addon>Sueldo Básico $</InputGroup.Addon>
                                    <FormControl type="text"
                                        value={this.formatMoney(this.state.salarioBasico)}
                                        onChange={this.handleBasicChange} />
                                    <InputGroup.Addon>.00</InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>

                            <FormGroup
                                controlId="formBasicText"
                                validationState={this.getValidationState()}
                            >
                                <InputGroup>
                                    <InputGroup.Addon>Días Liquidados</InputGroup.Addon>
                                    <FormControl
                                        type="text"
                                        value={this.state.dias}
                                        placeholder="Entre 1 y 30 días"
                                        onChange={this.handleBasicChange}
                                    />

                                    <FormControl.Feedback />
                                </InputGroup>
                                <HelpBlock></HelpBlock>
                            </FormGroup>
                            <Button type="submit">Calcular</Button>
                        </form>

                        <hr></hr>
                        <div className="payroll-list-output">
                            <ListGroup>
                                <ListGroupItem header="DEVENGADO" bsStyle="info">
                                    <Grid>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                                Básico
                                    </Col>
                                            <Col xs={4} md={4} className="payroll-list-money">
                                                {this.formatMoney(this.state.devengado.basico)}
                                            </Col>
                                        </Row>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                                Auxilio de Trasporte
                                    </Col>
                                            <Col xs={4} md={4} className="payroll-list-money">
                                                {this.formatMoney(this.state.devengado.auxilioTrasporte)}
                                            </Col>
                                        </Row>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                                <strong></strong>
                                            </Col>
                                            <Col xs={4} md={4} className="payroll-list-money">
                                                <strong></strong>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </ListGroupItem>
                                <ListGroupItem header="DEDUCCIONES" bsStyle="danger">
                                    <Grid>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                                Salud (4%)
                                    </Col>
                                            <Col xs={4} md={4} className="payroll-list-money">
                                                {this.formatMoney(this.state.deducciones.salud)}
                                            </Col>
                                        </Row>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                                Pension (4%)
                                    </Col>
                                            <Col xs={4} md={4} className="payroll-list-money">
                                                {this.formatMoney(this.state.deducciones.pension)}
                                            </Col>
                                        </Row>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                                <strong>Total Deducciones</strong>
                                            </Col>
                                            <Col xs={4} md={4} className="payroll-list-money">
                                                <strong>{this.formatMoney(this.state.deducciones.total)}</strong>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </ListGroupItem>
                                <ListGroupItem header="Neto Pagado" bsSize="success">
                                    <Grid>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                            </Col>
                                            <Col xs={4} md={4} className="payroll-list-money">
                                                <strong>{this.formatMoney(this.state.netoPagado)}</strong>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </ListGroupItem>
                                <ListGroupItem header="Aportes Parafiscales" bsStyle="info">
                                    <Grid>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                                Salud (8.5%)
                                    </Col>
                                            <Col xs={4} md={4} className="payroll-list-money">
                                                {this.formatMoney(this.state.aportesParafiscales.Salud)}
                                            </Col>
                                        </Row>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                                Fondo de Pensiones (12%)
                                    </Col>
                                            <Col xs={4} md={4} className="payroll-list-money">
                                                {this.formatMoney(this.state.aportesParafiscales.FondoDePensiones)}
                                            </Col>
                                        </Row>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                                ARL (0.52%)
                                    </Col>
                                            <Col xs={4} md={4} className="payroll-list-money">
                                                {this.formatMoney(this.state.aportesParafiscales.ARL)}
                                            </Col>
                                        </Row>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                                Parafiscales (9%)
                                    </Col>
                                            <Col xs={4} md={4} className="payroll-list-money">
                                                {this.formatMoney(this.state.aportesParafiscales.Parafiscales)}
                                            </Col>
                                        </Row>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                                Prima (8.33%)
                                    </Col>
                                            <Col xs={4} md={4} className="payroll-list-money" >
                                                {this.formatMoney(this.state.aportesParafiscales.Prima)}
                                            </Col>
                                        </Row>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                                Cesantias (8.33%)
                                    </Col>
                                            <Col xs={4} md={4} className="payroll-list-money" >
                                                {this.formatMoney(this.state.aportesParafiscales.Cesantias)}
                                            </Col>
                                        </Row>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                                Intereses de cesantias (1%)
                                    </Col>
                                            <Col xs={4} md={4} className="payroll-list-money">
                                                {this.formatMoney(this.state.aportesParafiscales.InteresesDeCesantias)}
                                            </Col>
                                        </Row>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                                Vacaciones (4.17%)
                                    </Col>
                                            <Col xs={4} md={4} className="payroll-list-money">
                                                {this.formatMoney(this.state.aportesParafiscales.Vacaciones)}
                                            </Col>
                                        </Row>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                                Dotacion (5%)
                                    </Col>
                                            <Col xs={4} md={4} className="payroll-list-money">
                                                {this.formatMoney(this.state.aportesParafiscales.Dotacion)}
                                            </Col>
                                        </Row>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                                <strong>SubTotal</strong>
                                            </Col>
                                            <Col xs={4} md={4} className="payroll-list-money">
                                                <strong>{this.formatMoney(this.state.aportesParafiscales.subtotal)}</strong>
                                            </Col>
                                        </Row>
                                        <Row className="show-grid">
                                            <Col xs={8} md={8}>
                                                <strong>Total</strong>
                                            </Col>
                                            <Col xs={4} md={4} className="payroll-list-money">
                                                <strong>{this.formatMoney(this.state.aportesParafiscales.total)}</strong>
                                            </Col>
                                        </Row>

                                    </Grid>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default PayrollSimulator;