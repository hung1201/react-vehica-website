import styled from 'styled-components'

export const WCUContainer = styled.div`
    width:1300px;
    margin: 0 auto;
`
export const WCUHeading = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    margin: 100px 0;
    p{
        font-size:60px;
        font-weight:700;
    }
`
export const WCUGridContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-gap:20px;
    padding:0 25px;
`
export const WCUItem = styled.div`
    padding: 0 25px ;
`
export const WCUIconWrap = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const WCUIcon = styled.div`
    width:72px;
    height:72px;
    border-radius:50%;
    background-color:#ffece6;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:40px;
    color:#ff4605;
`
export const WCUName = styled.div`
    width:100%;
    margin-top:70px;
    text-align:center;
    p{
        font-size:20px;
        font-weight:600;
    }
`
export const WCUDesc = styled.div`
    width:100%;
    margin-top:40px;
    padding:0 48px;
    text-align:center;
    color:#777777;
`