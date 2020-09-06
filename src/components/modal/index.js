import React, { useState, useContext, createContext } from 'react';
import { Container, Overlay, Inner, Content, Title, Close } from './styles';
import { LockBody, ReleaseBody } from '../../global-styles';
import { Button } from '../';

const ModalContext = createContext();

const Modal = ({ children, ...restProps }) => {
    const [display, setDisplay] = useState(true);
    return (
        <ModalContext.Provider value={{ display, setDisplay }}>
            {display ? (
                <Container {...restProps}>
                    <LockBody />
                    <Overlay>
                        <Inner>
                            <Close onClick={() => setDisplay(false)} />
                            {children}
                        </Inner>
                    </Overlay>
                </Container>
            ) : (
                <ReleaseBody />
            )}
        </ModalContext.Provider>
    );
};

Modal.Content = ({ children, ...restProps }) => (
    <Content {...restProps}>{children}</Content>
);

Modal.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);

Modal.Exit = function ExitButton({ children, ...restProps }) {
    const { setDisplay } = useContext(ModalContext);
    return (
        <Button
            primary
            {...restProps}
            onClick={() => {
                setDisplay(false);
            }}
        >
            {children}
        </Button>
    );
};

export default Modal;
