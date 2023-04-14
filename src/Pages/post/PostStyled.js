import styled from "styled-components"

export const Container= styled.div `
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
background-color:white ;
height: 100vh;
    .escreverPost{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 30px;
    /* @media (max-width: 390px){
        width: 21rem;    
         } */

    .Texto{
    width: 25rem;
    height: 120px;
    border-radius:10px;
    border: 1px solid #E5E5E5;
    background-color: #EDEDED;
    padding: 1rem;

    /* @media (max-width: 390px){
             width: 20.5rem;
         }
     */
    }

    .button1{
    margin-top: 1rem;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #FF6489, #F9B24E);
    color:#FFFFFF;
    border-style:none;
    cursor:pointer;
    font-weight:bold;
    font-size: 18px;
    font-family:sans-serif;
    border-radius:1.5vh;
    width:25rem;
    height:5vh;
    /* @media (max-width: 390px) {
    width: 23rem;
     */
      
/* }
    @media (max-width: 390px) {
    display:flex;
    align-items:center;
    justify-content:center;
    width: 21rem;
} */
    }

    /* input{
    margin: 1vh;
    padding: 10px;
    height: 200px;
    width: 360px;
    margin-top: 0.5px;
    border-radius: 5%;
    background-color: #EDEDED;
    border: none; */

    /* @media (max-width: 390px){
             width: 280px;
         } */
}
`
export const Posted = styled.div`

display:flex;
align-items: right;
justify-content:space-between;
flex-direction:column;
border: 1px solid #E5E5E5;
border-radius:15px;
width:26vw;
min-height:15vh;
margin-top: 10px;
padding:10px;
    
/* @media (max-width: 390px){
display:flex;
align-items:left;
justify-content:center;
flex-direction:column;
width: 20rem;
gap: 9px;

         } */
>p{
font-family:sans-serif;
}

.LIkeDislikeComments{
display: flex;
gap:8px;
}
`
export const Button = styled.div`

`
// export const Button1 = styled.button`
// margin-top: 1rem;
// margin-bottom: 1rem;
// background: linear-gradient(90deg, #FF6489, #F9B24E);
// color:#FFFFFF;
// border-style:none;
// cursor:pointer;
// font-weight:bold;
// font-size: 18px;
// margin-left: 0.7rem;
// font-family:sans-serif;
// border-radius:2.5vh;
// width:22rem;
// height:6vh;
// @media (max-width: 480px) {
// width: 18rem;
// margin-right: 0.8rem;
// }
// @media (max-width: 320px) {
// width: 16rem;
// margin-left: 0.7rem;
// }
// `




