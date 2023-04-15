import styled from "styled-components"

export const HeaderStyled = styled.header`

    width: 100%;
    height: 8vh;
    background-color: #EDEDED;
    display: flex;
    justify-content: space-around;

    @media (max-width: 405px){
             width: 100%;
         }


    .logoLabenu{
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        @media (max-width: 405px){
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

        @media (max-width: 405px){
             display: flex;
             width: 55px;
             margin-left: 7rem;
             align-items: center;
         }
    }
 
`

 export const Button= styled.div`
    width: 2rem;
    margin-right:3.5rem;

    @media (max-width: 405px){
             display: flex;
             width: 15px;
             margin-right: 4rem;
           
         }
 `
