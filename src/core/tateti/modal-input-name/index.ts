import styled from "styled-components";
import InputNameModal from "./input-name-modal.component";

export default styled(InputNameModal) `

display: flex;
align-items: center;
justify-content: center;
margin: 0px auto;
width: 400px;
padding: 3rem;
border: 1px solid #ccc;
border-radius: 1em;
font-size: larger;
background-color: black;
color: #ffff;
  
ul {
list-style: none;
padding: 0;
margin: 0;
}
li + li {
margin-top: 1em;
}
input{
padding: 2%;
}
button {
font-size: 20px;
border-radius: 22%;
padding: 2%;
} 
`;