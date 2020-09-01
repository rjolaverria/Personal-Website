import React, { useRef, useState } from 'react';
import { Container, Head, Button } from './styles';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Code = ({ children, language, title, ...restProps }) => {
    const code = useRef(null);
    const [copied, setCopied] = useState(false);
    return (
        <Container {...restProps}>
            {title ? (
                <Head>
                    <h3>{title}</h3>
                </Head>
            ) : (
                <Head>
                    {language === 'javascript' ? (
                        <i
                            className='fab fa-js'
                            style={{ color: '#F0DB4F' }}
                        ></i>
                    ) : language === 'html' ? (
                        <i
                            className='fab fa-html5'
                            style={{ color: '#E34C26' }}
                        ></i>
                    ) : language === 'python' ? (
                        <i
                            className='fab fa-python'
                            style={{ color: '#4B8BBE' }}
                        ></i>
                    ) : language === 'jsx' ? (
                        <i
                            className='fab fa-react'
                            style={{ color: '#61DBFB' }}
                        ></i>
                    ) : (
                        ''
                    )}
                    {copied && <span>Copied to clipboard</span>}
                    {
                        <Button
                            onClick={() => {
                                code.current.select();
                                document.execCommand('copy');
                                setCopied(true);
                                setTimeout(() => setCopied(false), 5000);
                            }}
                        >
                            <i className='far fa-copy'></i>
                        </Button>
                    }
                </Head>
            )}

            <input
                ref={code}
                type='text'
                value={children}
                style={{ zIndex: -200, position: 'absolute' }}
                readOnly
            />

            <SyntaxHighlighter
                language={language}
                style={{ margin: 0, ...a11yDark }}
            >
                {children}
            </SyntaxHighlighter>
        </Container>
    );
};

export default Code;