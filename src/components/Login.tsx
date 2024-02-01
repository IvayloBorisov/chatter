import React, { useRef } from "react";
import { v4 as uuidV4 } from 'uuid';
import { Button, Container, Form } from "react-bootstrap";

interface LoginProps {
    onSubmitID: (id: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onSubmitID }): JSX.Element => {

    const idRef = useRef<HTMLInputElement | null>(null);

    const onSubmitLoginFormHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        onSubmitID(idRef.current!.value);
    }

    const onClickCreateIDHandler = (): void => {
        onSubmitID(uuidV4());
    }

    return(
        <Container className="d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
            <Form onSubmit={ onSubmitLoginFormHandler } className="w-50">
                <Form.Group className="mb-3">
                    <Form.Label>Enter Your ID</Form.Label>
                    <Form.Control ref={ idRef } type="text"/>
                </Form.Group>
                <Button type='submit' className="me-3">Login</Button>
                <Button onClick={ onClickCreateIDHandler } variant='secondary'>Create new ID</Button>
            </Form>
        </Container>
    )
}
