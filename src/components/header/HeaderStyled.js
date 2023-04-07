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

    .logoLabenu{
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

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
    }
    

`


 export const Button= styled.div`
    width: 20px;
    margin-right:50px;
 `
