import styled from "styled-components"

export const Container= styled.main `
display: flex;
flex-direction: column;

align-items: center;
background-color:white ;
height: 100vh;


.escreverPost{
    justify-content: flex-start;
    margin-top: 30px;

}



input{
margin: 1vh;
padding: 10px;
height: 200px;
width: 360px;
margin-top: 0.5px;
border-radius: 5%;
background-color: #EDEDED;
border: none;

@media (max-width: 390px){
             width: 280px;
         }

}



`




