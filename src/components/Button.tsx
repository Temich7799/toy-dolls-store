import * as React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
    font-family: 'Amatic SC';
    font-size: 24px;
    width: 200px;
    height: 50px;
    border:none;
    background-color: #F7F7F7;
    background: linear-gradient(0deg, rgba(247,247,247,1) 60%, rgba(255,255,255,1) 100%);
    cursor: pointer;
    :hover {
        box-shadow: 0px 0px 12px -2px rgba(0,0,0,0.5);
    }
`;

type ButtonProps = {
    children: JSX.Element | string
}

const Button = (props: ButtonProps) => {

    const { children } = props;

    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}

export default Button;