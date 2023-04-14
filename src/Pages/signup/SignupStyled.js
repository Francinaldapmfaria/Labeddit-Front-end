import styled from "styled-components"

export const Container= styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:white ;
height: 100vh;
/* @media (max-width: 390px){
    height: 45rem;
 
         } */
   
input{
display: flex;
flex-direction: column;
margin: 1vh;
padding: 15px;
width: 345px;
margin-top: 0.5px;

/* @media (max-width: 390px){
    display: flex;
    flex-direction: column;
         width: 13rem;
         height: 2rem;
        
        
         
         } */
}
.todosInputs{
    @media (max-width: 395px){
       /* margin-top: 2rem; */
       margin-left: 1rem;
         }
   
}
.fraseOla{
position: relative;
bottom:17vh ;

/* @media (max-width: 390px){
         display: flex;
         font-size: 27px;
         margin-right: 8.5rem;
         
         } */
}
`
export const Image = styled.img `
width:23.42vh ;
height:21.87vh ;
`
export const Button = styled.button `
margin: 1vh;
margin-top: 1rem;
margin-bottom: 1rem;
background: linear-gradient(90deg, #FF6489, #F9B24E);
color:#FFFFFF;
border-style:none;
cursor:pointer;
font-weight:bold;
font-size: 18px;


font-family:sans-serif;
border-radius:2.5vh;
width:21.5rem;
height:6vh;
/* @media (max-width: 390px) {
    width: 23rem;
}
@media (max-width: 390px) {
    display:flex;
    align-items:center;
    justify-content:center;
    width: 21rem;
} */
`
export const Contracts = styled.div `
font-size: 12px;
font-weight: normal;
color: black;
text-decoration: none;
margin-top: 10px;

/* @media (max-width: 390px) {
    display: flex;
    flex-direction:column;
    /* justify-content: center;
  align-items: center; */
  
} */

.contrato{
    /* @media (max-width: 390px) {
        
  font-size: 12px;
  
} */
}


.concordo{
    display: flex;
    margin-top: 12px;
    .checkbox{
        width: 0.8rem;
    }
    /* @media (max-width: 390px) {
  font-size: 12px;
}

}

    @media (max-width: 390px){
             width: 280px;
             font-size: 2vh;
         } */



`

