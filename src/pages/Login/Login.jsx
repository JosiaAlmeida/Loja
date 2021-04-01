import React from 'react'
import './login.css'
import {Form, Button, Input, FormGroup, Label} from 'reactstrap';
export default ()=>
    <div id="Principal">
        <Form className="Login">
            <FormGroup>
                <Input type="text" name="nome" placeholder="Digite o nome" />
            </FormGroup>
        </Form>
    </div>