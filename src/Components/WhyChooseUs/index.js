import React from 'react'
import { WCUContainer, WCUDesc, WCUGridContainer, WCUHeading, WCUIcon, WCUIconWrap, WCUItem, WCUName } from './WCUEle'
import {GiRibbonMedal} from 'react-icons/gi'
const WCU = () => {
    return (
        <WCUContainer>
            <WCUHeading>
                <p>Why choose us?</p>
            </WCUHeading>
            <WCUGridContainer>
                <WCUItem>
                    <WCUIconWrap>
                        <WCUIcon>
                            <GiRibbonMedal/>
                        </WCUIcon>
                    </WCUIconWrap>
                    <WCUName>
                        <p>Wide range of brands</p>
                    
                    </WCUName>
                    <WCUDesc>
                        <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
                    </WCUDesc>
                </WCUItem>
                <WCUItem>
                    <WCUIconWrap>
                        <WCUIcon>
                            <GiRibbonMedal/>
                        </WCUIcon>
                    </WCUIconWrap>
                    <WCUName>
                        <p>Wide range of brands</p>
                    
                    </WCUName>
                    <WCUDesc>
                        <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
                    </WCUDesc>
                </WCUItem>
                <WCUItem>
                    <WCUIconWrap>
                        <WCUIcon>
                            <GiRibbonMedal/>
                        </WCUIcon>
                    </WCUIconWrap>
                    <WCUName>
                        <p>Wide range of brands</p>
                    
                    </WCUName>
                    <WCUDesc>
                        <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
                    </WCUDesc>
                </WCUItem>
            </WCUGridContainer>
        </WCUContainer>
    )
}

export default WCU
