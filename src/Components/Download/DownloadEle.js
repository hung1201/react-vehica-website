import styled from 'styled-components'

export const DownloadHeading = styled.div`
    width:100%;
    margin:90px 30px;
    display:flex;
`
export const ArrowIconWrapper = styled.div`
    width:52px;
    height:52px;
    border-radius:50%;
    box-shadow:0 0 20px #b5b5b5;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:20px;
    cursor: pointer;
`
export const HeadItemsWrapper = styled.div`
    display:grid;
    grid-gap:70px;
    padding:0 80px;
    grid-template-columns:repeat(4,1fr);   
`
export const HeadItem = styled.div`
    width:200px;
    background-image:url('https://demo.vehica.com/wp-content/uploads/2020/09/themeforest.png');
    background-size:contain;
    background-repeat:no-repeat;
    background-position:center;
    opacity:0.5;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        opacity:1;
        transition: all 0.3s ease;
    }
`

export const DownloadContainer = styled.div`
    width:1300px;
    margin:0 auto;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-gap:20px;
`
export const DlLeft = styled.div`
    background-color:#ff4605;
    border-radius:10px;
    height:330px;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr 1fr;
    position:relative;
    &::after{
        content:"";
        position:absolute;
        left:50%;
        width:272px;
        height:433px;
        background-repeat:no-repeat;
        background-image:url('https://demo.vehica.com/wp-content/uploads/2019/07/phone.png');
        z-index:2;
    }
`
export const DlLeftTitle = styled.div`
    color:white;
    font-size:40px;
    font-weight:600;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:60px 0 0 60px;
    p{
        margin-left:40px;
    }
`
export const DlLeftBtn = styled.div`
    padding-left:60px;
    grid-column:1/2;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const LeftBtnWrapper = styled.div`
    display:flex;
    width:186px;
    height:45px;
    background:white;
    color:#ff4605;
    border-radius:20px;
    padding-left:20px;
    cursor: pointer;
    align-items:center;
    svg{
        font-size:23px;
    }
    p{
        margin-left:20px;
        color:black;
        font-size:20px;
    }
    margin-bottom:20px;
`
export const DlRight = styled.div`
    background-color:#222732;
    border-radius:10px;
    height:330px;
    display:grid;
    grid-template-columns:1fr 1fr;
    overflow:hidden;
`
export const DlRightColLeft = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-between;
    color:white;
    padding: 60px 30px 60px 60px;
    p{
        font-size:38px;
        font-weight:600;
    }
`
export const DlRightBtnWrap = styled.div`
    width:160px;
    height:55px;
    border:1px solid #ff4605;
    border-radius:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all 0.3s ease;
    cursor: pointer;
    p{
        font-size:20px;
        font-weight:400;
    }
    &:hover{
        background-color:#ff4605;
        transition:all 0.3s ease;
    }
`
export const DlRightColRight = styled.div`
    display:flex;
    flex-direction:column;
    margin:90px 0;
`
export const DlDetail = styled.div`
    display:flex;
    align-items:center;
    margin-top:10px;
    p{
        margin-left:20px;
        color:#9198a9;
    }
    svg{
        color:#ff4605;
    }
`
export const DownloadWrapperAll = styled.div`
    overflow:hidden;
    width:100%;
    display:flex;
    flex-direction:column;
    span{
        margin-top:80px;
        width:100%;
        height:1px;
        background-color:#acacac;
    }
`
export const EmailContainer = styled.div`
    width:1300px;
    margin:50px auto;
    display:flex;
    align-items:center;
`
export const EmailTitle = styled.div`
    font-size:40px;
    font-weight:600;
`
export const EmailInputWrap = styled.div`
    display:flex;
    align-items:center;
    margin-left:60px;
`
export const EmailInput = styled.input`
    width:400px;
    height:53px;
    border-radius:10px;
    padding: 0 20px;
    font-size:16px;
    border:1px solid #777;
    outline:none;
`
export const EmailButton = styled.div`
    margin-left:10px;
    width:150px;
    height:50px;
    background-color:#ff4605;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    cursor: pointer;
    font-size:20px;
    p{
        margin-left:30px;
    }
    svg{
        margin-left:10px;
        transform:translateX(200%);
        transition:all 0.3s ease;
    }
    &:hover{
        svg{
            transform:translateX(0);
            transition:all 0.3s ease;
        }
    }
`
export const EmailDesc = styled.div`
    margin-left:60px;
    width:300px;
    height:50px;
    display:flex;
    align-items:center;
`