import React, { useState, useContext, useEffect } from 'react';
import { Container, Message, Progress, Inner, Close } from './styles';
import { AppContext } from '../../context/AppContext';

const Alert = ({ children, time = 5, ...restProps }) => {
    const { alert, setAlert } = useContext(AppContext);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (alert) {
            setVisible(true);
        }
    }, [alert]);

    return (
        <>
            {visible && (
                <Container
                    {...restProps}
                    time={time}
                    onAnimationEnd={() => {
                        setVisible(false);
                        setAlert('');
                    }}
                >
                    <Inner>
                        <Message>{alert}</Message>
                        <Progress {...restProps} time={time} />
                        <Close
                            onClick={() => {
                                setVisible(false);
                                setAlert('');
                            }}
                        />
                    </Inner>
                </Container>
            )}
            {children}
        </>
    );
};

export default Alert;
