import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  background-image: linear-gradient(45deg, #a31d58, #f39d84);
  border: 0;
  border-radius: 15px;
  padding: 10px 15px;
  ${props => (props.full ? 'width: 100%;' : '')} color: white;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  transition: all 300ms;

  &:focus {
    outline: 0;
  }

  &:hover {
    filter: brightness(1.1);
  }
`
const PrimaryBtn = props => <Button {...props}>{props.children}</Button>

export default PrimaryBtn
