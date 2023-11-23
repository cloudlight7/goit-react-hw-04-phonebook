import styled from 'styled-components'

export const Input = styled.input`
      padding: 10px;
  width: 120px;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0px 2px 3px 2px #345a21;
  font-size: 18px;
  transition: width 0.3s;
  margin: 10px;

  &:focus{
  outline: 1px solid #84D65A;
  box-shadow: none;
  width: 230px;
  box-shadow: -1px 9px 16px 5px #345a21;
  }
  &::placeholder {
  color: #345a21;
}
`