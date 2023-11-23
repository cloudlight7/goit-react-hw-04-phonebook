import styled from 'styled-components'

export const Element = styled.li`
     width: 420px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  justify-content: space-between;
  background: #EDFBD8;
  border-radius: 8px;
  border: 1px solid #84D65A;
  box-shadow: 0px 0px 5px -3px #111;
  margin: 5px;
`
export const Text = styled.p`
    font-size: 15px;
    
    margin-right: 5px;
    &:last-child{
       margin-right: 0; 
    }
`

export const Button = styled.button`
      font-family: monospace;
  background-color: #84D65A;
  color: #345a21;
  border: none;
  border-radius: 8px;
  width: 80px;
  height: 35px;
  transition: .3s;

  &:hover{
      background-color: #ff3718;
  box-shadow: 0 0 7px 5px #df0e0a;
  color: #a70303;
  }
`

