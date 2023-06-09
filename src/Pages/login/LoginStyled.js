import styled from "styled-components"

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:white ;
height: 95vh;
/* width: 100%; */


input{
margin: 1vh;
padding: 1rem;
width: 21.5rem;
margin-top: 0.5px;
/* @media (max-width: 390px){
             width: 21rem;
         } */

}
.Frase{
    margin-bottom: 56px;
    font-size:18px ;
    font-family: sans-serif;

    /* @media (max-width: 390px) {
    display: flex;
    margin-right:7rem;
    justify-content: center;
    align-items: center;
    font-size: 14px;
} */
}

.Frase2{
    font-size: 14px;
    color:#F9B24E;
    margin-top: 21px;
    font-family: sans-serif;
}
`
export const Image = styled.img`
/* display: flex;
justify-content: center;
align-items: center; */
width:23.42vh ;
height:21.87vh ;

/* @media (max-width: 390px) {
    display: flex;
    width: 23rem;
    height: 10rem;
    margin-right:6rem;
    justify-content: center;
    align-items: center;
} */
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
/* @media (max-width: 390px) {
width: 18rem;
margin-right: 0.8rem;
}
@media (max-width: 390px) {
    margin-left: 0.7rem;
    width: 15rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
} */
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
    /* @media (max-width: 390px) {
        width: 18rem;
        margin-right: 0.8rem;
}
    @media (max-width: 390px) {
    margin-left: 0.7rem;
    width: 15rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
} */
    }
`




