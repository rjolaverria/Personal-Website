import React, { useState, useContext, useEffect, createContext } from 'react';
import { Container, Mobile, Items, Social, Tab, ToggleMobile } from './styles';
import { LockBody, ReleaseBody } from '../../global-styles';

const NavbarContext = createContext();

const Navbar = ({ children }) => {
    const [visible, setVisibility] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.screen.width >= 450) {
                setVisibility(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <NavbarContext.Provider value={{ setVisibility }}>
            <Container visible={visible}>{children}</Container>
            <Mobile visible={visible}>
                <ToggleMobile
                    visible={visible}
                    onClick={() => setVisibility(!visible)}
                />
                {visible ? <LockBody /> : <ReleaseBody />}
            </Mobile>
        </NavbarContext.Provider>
    );
};

Navbar.Items = function NavbarItems({ children, ...restProps }) {
    const { setVisibility } = useContext(NavbarContext);
    return (
        <Items
            onClick={() => {
                setVisibility(false);
            }}
            {...restProps}
        >
            {children}
        </Items>
    );
};

Navbar.Social = ({ children, ...restProps }) => (
    <Social {...restProps}>{children}</Social>
);

Navbar.Tab = ({ children, ...restProps }) => (
    <Tab {...restProps}>{children}</Tab>
);

export default Navbar;
