import styled from "styled-components"

export const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;
background-color:white ;
height: 100vh;
gap: 0.8rem;

    @media (max-width: 405px){
    width: 24.5rem;
    display: flex;
    align-content: center;
    align-items: center;
    margin-left:0.4rem;
 
         }

.Card{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 24.5rem;
    min-height: 10rem;
    padding: 1rem;
    background: #FBFBFB;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    margin-top: 2rem;

    @media (max-width: 405px) {
    width: 22rem;
    display: flex;
    justify-content: center;
    align-items: left;
    
    
}
    .Content{
        h1 {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 400px;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        margin-right: 7rem;
        color: #6F6F6F;
        }

        h2 {
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #000000;
        }

        .LikeDislike {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 1rem;
        margin-top: 2rem;
        @media (max-width: 390px){
        width: 13rem;
        display: flex;
        align-content: center;
        align-items: center;
         }
        }
    }
}

`
export const PostComments = styled.div`
display:flex;
align-items: right;
justify-content:space-between;
flex-direction:column;
border: 1px solid #E5E5E5;
border-radius:15px;
width:25rem;
min-height:15vh;
margin-top: 10px;
padding:10px;

    @media (max-width: 405px){
             width: 22rem;
         }
   
    .LIkeDislikeComments{
        display: flex;
        gap: 8px;
    }
    .Enviadopor{
        font-family: 'IBM Plex Sans';
        font-size: 12px;
        color: #6F6F6F;
    }
    
`
export const EscreverComments = styled.div`

.Texto{
    width: 25rem;
    height: 7.5rem;
    border-radius:10px;
    border: 1px solid #E5E5E5;
    background-color: #EDEDED;
    padding: 1rem;
    @media (max-width: 405px){
    width: 22rem;
    display: flex;
    align-content: center;
    align-items: center;
    }
}

`

export const ButtonResponder = styled.div`
display:flex;
flex-direction:column;
@media (max-width: 405px) {
display: flex;
align-content: center;
align-items: center; 
width: 23rem;
    
}
    img{

    @media (max-width: 405px) {
    display:flex;
    align-items:center;
    justify-content:center;
    width: 22rem;
    height:3rem;   
}
}

`
export const Button2 = styled.button`
margin-top: 2rem;
margin-bottom: 1rem;
background: linear-gradient(90deg, #FF6489, #F9B24E);
color:#FFFFFF;
border-style:none;
cursor:pointer;
font-weight:bold;
font-size: 18px;
margin-left: 0.7rem;
font-family:sans-serif;
border-radius:2.1vh;
width:25rem;
height:6vh;

@media (max-width: 405px) {
    display:flex;
    align-items:center;
    justify-content:center;
    width: 22rem;
    margin-right: .5rem;
   
}
`
export const Button = styled.div``




