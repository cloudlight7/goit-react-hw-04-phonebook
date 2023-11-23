import styled from 'styled-components'

export const FormCard = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #e8e8e8;
  box-shadow: 2px 2px 10px #ccc;
`
export const FormBox = styled.div`
  margin-bottom: 15px;
`
export const InputName = styled.label`
   font-size: 18px;
  margin-bottom: 5px;
`
export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: 0.5s;
`
export const Button = styled.button`
  width: 100%;
  background-color: #333;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover{
      background-color: #ccc;
  color: black;
  }
`