import styled from "styled-components"

export const Container= styled.main `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:white ;
height: 100vh;
width: 100%;

input{
margin: 1vh;
padding: 15px;
width: 345px;
margin-top: 0.5px;
/* margin-bottom: 56px; */
@media (max-width: 390px){
             width: 280px;
         }

}

.Frase{
    margin-bottom: 56px;
    font-size:18px ;
    font-family: sans-serif;
}

`
export const Image = styled.img `
width:23.42vh ;
height:21.87vh ;


`
export const Buttons = styled.div `
    margin-top: 30px;

    @media (max-width: 590px){
             width: 380px;
         }

         /* max-width- qdo chegar quebra */
         @media (max-width: 390px){
             width: 100px;
             justify-content: center;
             align-items: center;
             margin-left: -280px;

             
         }


`

export const Button = styled.div `
margin: 1vh;

      

`



