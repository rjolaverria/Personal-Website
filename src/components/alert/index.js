import React, { useState, useContext, createContext } from 'react';
import { Container, Message, Progress, Inner, Close } from './styles';

const AlertContext = createContext();

const Alert = ({ children, ...restProps }) => {
    const [message, setMessage] = useState('This is an Alert');
    const [visible, setVisible] = useState(false);
    const [time, setTime] = useState(5);

    return (
        <AlertContext.Provider value={{ setMessage, setVisible, setTime }}>
            {visible && (
                <Container
                    {...restProps}
                    time={time}
                    onAnimationEnd={() => {
                        setVisible(false);
                        setMessage('');
                    }}
                >
                    <Inner>
                        <Message>{message}</Message>
                        <Progress {...restProps} time={time} />
                        <Close onClick={() => setVisible(false)} />
                    </Inner>
                </Container>
            )}
            {children}
        </AlertContext.Provider>
    );
};

Alert.useAlert = function useAlert() {
    const { setMessage, setVisible, setTime } = useContext(AlertContext);
    const setAlert = (message, time) => {
        setVisible(true);
        setMessage(message);
        if (time) {
            setTime(time);
        }
    };

    return setAlert;
};

export default Alert;