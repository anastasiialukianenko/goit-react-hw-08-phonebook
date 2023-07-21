import styled from "@emotion/styled";

export const FormWrap = styled.form`
  padding: 20px;
  width: 400px;

  font-size: 20px;
  border-radius: 4px;
  border: 2px solid hotpink;
  display: flex;
  flex-direction: column;
  gap:20px;
  `

  export const Input = styled.input`
 margin-left: 25px;
  `

   export const Button = styled.button`
 width: 140px;
 background-color: blue;
 color: white;
  `

export const DeleteButton = styled.button`
 width: 80px;
 margin-left: 15px;
 background-color: blue;
 color: white;
 &:hover {
    background-color: hotpink;
  `