import styled from 'styled-components'

export const PopularContainer = styled.div`
    width:100%;
    padding: 48px 0;
    background-color:#eff3fa;
`
export const PopularContainerWrap = styled.div`
width:1300px;
margin:0 auto;
`
export const PopularHead = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    width:100%;
`
export const PopularTitle = styled.div`
    p{
        font-size:60px;
        font-weight:bolder;
    }
`
export const PopularButtonWrap = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
`
export const PopularBtn = styled.div`
    width:120px;
    height:65px;
    background-color:#fafbfe;
    border-radius:10px;
    margin-left:10px;
    cursor: pointer;
    display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    p:first-child{
        font-weight:600;
    }
    p:last-child{
        font-size:14px;
        color:#9499a8;
    }
    &:first-child{
        margin-left:0;
        border:1px solid #ff4605;
        background-color:#fff0eb;
        p{
            color:#ff4605;
        }
    }
`

export const PopularGridWrapper = styled.div`
    width:100%;
    margin-top:48px;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    grid-gap:20px;
`
export const PopularItem = styled.div`
cursor: pointer;
overflow:hidden;
width:100%;
height:310px;
border-radius:10px;
`
export const PopularImgWraper = styled.div`
width:100%;
height:170px;
overflow:hidden;
`
export const PopularImg = styled.div`
    width:100%;
height:100%;
background-image: url('https://demo.vehica.com/wp-content/uploads/2020/08/5.jpg');
background-repeat:none;
background-size:cover;
background-position:center;
transition: all 0.3s ease;
&:hover{
    transform:scale(1.1);
        transition: all 0.3s ease;
}
`
export const PopularInfo = styled.div`
        height:calc(100% - 170px);
    background-color:#222732;
    color:white;
    padding: 0 20px;
    display:flex;
    flex-direction:column;
    overflow:hidden;
`
export const PopularName = styled.div`
    overflow: hidden;
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin-top:20px;
`
export const PopularPrice = styled.div`
     margin-top:10px;
    font-size:20px;
    font-weight:600;
`
export const PopularInfoDetail = styled.div`
    display:flex;
    align-items:center;
    margin-top:15px;
    border-top: 1px solid #7A7A7A;
`
export const PopularDetail = styled.div`
    height:30px;
    margin-top:10px;
    display:flex;
    align-items:center;
    cursor: pointer;
    padding: 0 10px;
    border-radius:10px;
    cursor: pointer;
    p{
        font-size:14px;
    }
    &:first-child{
        background-color:#ff4605;
    }
`
export const PopularFooter = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    margin-top:48px;
`
export const PopularFooterLeft = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;

`
export const PopularIconWrap = styled.div`
    width:56px;
    height:56px;
    background-color:white;
    cursor: pointer;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:24px;
    margin-right:16px;
`
export const PopularFooterRight = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
`
export const PopularFooterBtn = styled.div`
        width:150px;
    height:50px;
    background-color:#ff4605;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    cursor: pointer;
    font-size:20px;
`