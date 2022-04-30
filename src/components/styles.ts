import styled from "styled-components";


export const HeaderWrapper = styled.header`
    background-color: #3b4047;
    width:100%;
    > img{
        width: 200px;
        height: 60px;
        margin: 14px;

    }
`;
export const CountryHeaderWrapper = styled.h2`
    color: #CCC;
    margin: 20px auto;
    color: #638C1C;
`;
export const CountryListWrapper = styled.section`
 display:flex;
 justify-content: center;
 align-items: center;
 margin: 0 auto;
 width: 100%;
 min-width: 600px;
 flex-direction: column;
 >div.filter-container{
     display:flex;
     flex-direction: row;
     width: 43%;
     margin: 20px auto;
 }
`;

export const SeachBoxWrapper = styled.div`
       display:flex;
        width:100%;
        margin: 0 auto;
        padding:0px;
        position:relative;
        min-height:40px;
        position: relative;
        > .search-input{
            width:98%;
            border: solid 2px #ccc;
            font-size: 14px;
        }
        > .search-input:focus{
            outline: 0;
        }
        >span{
            position: absolute;
            right: 12px;
            top: 10px;
            font-size: 20px;
            color: #444444;
            cursor: pointer;
        }
`;

export const SelectBoxWrapper = styled.div`
        >select{
            min-height: 40px;
            font-size: 14px;
            color: #444444;
        }
`

export const CountryItemListWrapper = styled.div`
    display: grid;
    grid-template: repeat(2, 1fr)/repeat(2, 1fr);
`;

export const CountryItemWrapper = styled.div`
        min-height: 100px;
        width: 300px;
        border: 1px solid gray;
        background-color: #638C1C;
        margin: 8px;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
        &:hover{
            transform: scale(1.1);
        }
        > div{
            margin: 8px;
            >span{
                font-weight: bold;
            }
        }
`;

export const CountryDetailWrapper = styled.div`
         display:grid;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
        >button{
            padding: 10px;
            background-color: #638C1C;
            font-size: 14px;
            font-weight: bold;
            position: fixed;
            top: 110px;
            left: 20px;
            color: #FFFFFF;
            cursor: pointer;
        }
`;
