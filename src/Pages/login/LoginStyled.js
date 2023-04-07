import styled from "styled-components"

export const Container = styled.main`
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
@media (max-width: 390px){
             width: 280px;
         }

}
.Frase{
    margin-bottom: 56px;
    font-size:18px ;
    font-family: sans-serif;
}

.Frase2{
    font-size: 14px;
    color:#F9B24E;
    margin-top: 21px;
    font-family: sans-serif;
}
`
export const Image = styled.img`
width:23.42vh ;
height:21.87vh ;
`
export const Buttons = styled.div`
display: flex;
flex-direction: column;
margin-top: 2.5rem;

.button1{
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
width:22rem;
height:6vh;
@media (max-width: 480px) {
width: 18rem;
margin-right: 0.8rem;
}
@media (max-width: 320px) {
width: 14rem;
margin-left: 0.7rem;
}
    }
    .line{
        width: 23rem;
    }
    
    .button2{
    margin-top: 1rem;
    margin-bottom: 1rem;
    color:#F9B24E;
    background-color: #FFFFFF;
    border-style:none;
    cursor:pointer;
    font-weight:bold;
    font-size: 18px;
    margin-left: 0.7rem;
    font-family:sans-serif;
    border-radius:2.5vh;
    width:22rem;
    height:6vh;
    border: 1px solid #F9B24E;
    @media (max-width: 480px) {
    width: 18rem;
    margin-right: 0.8rem;
}
    @media (max-width: 320px) {
    width: 14rem;
    margin-left: 0.7rem;
}
    }
`




