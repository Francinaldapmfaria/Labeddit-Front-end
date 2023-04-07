import styled from "styled-components"



export const Container= styled.main `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:white ;
height: 100vh;
/* width: 100%; */


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

.fraseOla{
   position: relative;
   bottom:17vh ;

   
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
margin-left: 0.7rem;
font-family:sans-serif;
border-radius:2.5vh;
width:24rem;
height:6vh;
@media (max-width: 480px) {
    width: 18rem;
    margin-right: 0.8rem;
}
@media (max-width: 320px) {
    width: 14rem;
    margin-left: 0.7rem;
}


`
export const Contracts = styled.div `
font-size: 2.15vh;
font-weight: normal;
    color: #4088CB;
    text-decoration: none;

    @media (max-width: 390px){
             width: 280px;
             font-size: 2vh;
         }



`

