import styled from "styled-components"

export const HeaderStyled = styled.header`
   /* display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
    background-color:#EDEDED ;
    height:8vh;
    width: 100%;
    flex-direction: row;
    justify-content: space-around; */
    /* overflow: -moz-hidden-unscrollable; */
    width: 100%;
    height: 8vh;
    background-color: #EDEDED;
    display: flex;
    justify-content: space-around;

    @media (max-width: 390px){
             width: 17rem;
         }


    .logoLabenu{
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        @media (max-width: 390px){
            display: flex;
            align-items: center;
             width: 17rem;
         }

        img{
            width: 40px;
            height: 40px;
        }

    }

    .botao{
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        @media (max-width: 390px){
             display: flex;
             width: 55px;
             margin-left: 4rem;
             align-items: center;
             
         }
       
    }
 
`

 export const Button= styled.div`
    width: 2rem;
    margin-right:3.5rem;

    @media (max-width: 390px){
             display: flex;
             width: 15px;
             margin-right: 4rem;
           
             
         }

   
 
 `
