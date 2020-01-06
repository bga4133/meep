import React, { Component } from 'react'
import Logo1  from '../images/logo.png'
import styled from 'styled-components'

// styled component
const HeaderComponent = styled.header`
    background-color:#ffc107;
    width:100%;
    height:13vh;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    font-family: 'Poppins', sans-serif;
    font-size:25px;
`;

export default class Header extends Component {
    render() {
        return (
            <HeaderComponent>
                <img src={Logo1} className="logo" alt={Logo1}/>
            </HeaderComponent>
        )
    }
}
