import React from 'react';
import { Container, Head, Button } from './styles';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useAlert } from '../../hooks';

const Code = ({ children, language, title, ...restProps }) => {
    const setAlert = useAlert();

    let icon;
    switch (language) {
        case 'javascript':
            icon = <i className='fab fa-js' style={{ color: '#F0DB4F' }}></i>;
            break;
        case 'html':
            icon = (
                <i className='fab fa-html5' style={{ color: '#E34C26' }}></i>
            );
            break;
        case 'python':
            icon = (
                <i className='fab fa-python' style={{ color: '#4B8BBE' }}></i>
            );
            break;
        case 'jsx':
            icon = (
                <i className='fab fa-react' style={{ color: '#61DBFB' }}></i>
            );
            break;
        default:
            icon = null;
    }

    const handleCopy = () => {
        navigator.clipboard
            .writeText(children)
            .then(() => setAlert('Copied to clipboard'));
    };

    return (
        <Container {...restProps}>
            <Head>
                {title ? (
                    <h3>{title}</h3>
                ) : (
                    <>
                        {icon}
                        <Button onClick={handleCopy}>
                            <i className='far fa-copy'></i>
                        </Button>
                    </>
                )}
            </Head>
            <SyntaxHighlighter language={language} style={a11yDark}>
                {children}
            </SyntaxHighlighter>
        </Container>
    );
};

export default Code;
