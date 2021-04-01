import React from 'react'
import './login.css'
import {Form, Button, Input, FormGroup, Label, Col, Row} from 'reactstrap';
export default ()=>
    <div id="Principal">
        <Form className="Login">
            <Row form>
                <Col md="6">
                    <FormGroup>
                        <Input type="text" name="nome" placeholder="Nome" className="input"/>
                    </FormGroup>
                </Col>
                <Col md="6">
                    <FormGroup>
                        <Input type="text" name="apelido" placeholder="Apelido" className="input" />
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup>
                        <Input type="text" name="email" placeholder="Email" className="input" />
                    </FormGroup>
                </Col>
                <Col md="12">
                    <FormGroup>
                        <Input type="number" name="idade" placeholder="Idade" className="input" />
                    </FormGroup>
                </Col>
                <Col md="12">
                    <Button type="submit" block>
                        Login
                    </Button>
                </Col>
            </Row>
        </Form>
    </div>