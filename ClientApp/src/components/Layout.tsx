import React from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

interface Props {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <div>
            <NavMenu />
            <Container>
                {children}
            </Container>
        </div>
    );
}

export { Layout };
