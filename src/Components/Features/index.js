import React from 'react'
import { FeatuersHeading, FeatureBtn, FeatureRight, FeaturesContainer, FeaturesHeadLeft, FeaturesHeadRight, FeaturesInfoDetail, FeaturesLeft, FeaturesLeftDetail, FeaturesLeftImg, FeaturesLeftImgWrapper, FeaturesLeftInfo, FeaturesLeftName, FeaturesLeftPrice, FeaturesRightDetail, FeaturesRightImg, FeaturesRightImgWrapper, FeaturesRightInfo, FeaturesRightItemWrapper, FeaturesRightName, FeaturesRightPrice, FeatureWrapper,FeaturesRightInfoDetail, FeaturesFooter, FooterLeft, FooterIconWrapper, FooterRight, FooterBtn } from './FeaturesEle'
import {FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa'
const Features = () => {
    return (
        <FeaturesContainer>
            <FeatuersHeading>
                <FeaturesHeadLeft>
                    <p>Handy picked</p>
                    <h1>Features Listings</h1>
                </FeaturesHeadLeft>
                <FeaturesHeadRight>
                    <FeatureBtn>
                        <p>New</p>
                    </FeatureBtn>
                    <FeatureBtn>
                        <p>Used</p>
                    </FeatureBtn>
                </FeaturesHeadRight>
            </FeatuersHeading>
            <FeatureWrapper>
                <FeaturesLeft>
                    <FeaturesLeftImgWrapper>
                        <FeaturesLeftImg/>
                    </FeaturesLeftImgWrapper>
                    <FeaturesLeftInfo>
                    <FeaturesLeftName>
                        <p>BMW 8-serie 2-door coupe grey</p>
                    </FeaturesLeftName>
                    <FeaturesInfoDetail>
                        <FeaturesLeftDetail>
                            <p>2021</p>
                        </FeaturesLeftDetail>
                        <FeaturesLeftDetail>
                            <p>Automatic</p>
                        </FeaturesLeftDetail>
                        <FeaturesLeftDetail>
                            <p>Petrol</p>
                        </FeaturesLeftDetail>
                        <FeaturesLeftDetail>
                            <p>Front Wheel Drive</p>
                        </FeaturesLeftDetail>
                        <FeaturesLeftPrice>
                            <p>$62,000</p>
                        </FeaturesLeftPrice>
                    </FeaturesInfoDetail>
                    </FeaturesLeftInfo>
                </FeaturesLeft>
                <FeatureRight>
                    <FeaturesRightItemWrapper>
                        <FeaturesRightImgWrapper>
                        <FeaturesRightImg/>
                    </FeaturesRightImgWrapper>
                    <FeaturesRightInfo>
                    <FeaturesRightName>
                        BMW 8-serie 2-door coupe grecoupe greygrecoupe grey grecoupe grey
                    </FeaturesRightName>
                    <FeaturesRightPrice>
                            <p>$62,000</p>
                        </FeaturesRightPrice>
                    <FeaturesRightInfoDetail>
                        <FeaturesRightDetail>
                            <p>2021</p>
                        </FeaturesRightDetail>
                        <FeaturesRightDetail>
                            <p>Automatic</p>
                        </FeaturesRightDetail>
                        <FeaturesRightDetail>
                            <p>Petrol</p>
                        </FeaturesRightDetail>
                    </FeaturesRightInfoDetail>
                    </FeaturesRightInfo>
                    </FeaturesRightItemWrapper> 
                    <FeaturesRightItemWrapper>
                        <FeaturesRightImgWrapper>
                        <FeaturesRightImg/>
                    </FeaturesRightImgWrapper>
                    <FeaturesRightInfo>
                    <FeaturesRightName>
                        BMW 8-serie 2-door coupe grecoupe greygrecoupe grey grecoupe grey
                    </FeaturesRightName>
                    <FeaturesRightPrice>
                            <p>$62,000</p>
                        </FeaturesRightPrice>
                    <FeaturesRightInfoDetail>
                        <FeaturesRightDetail>
                            <p>2021</p>
                        </FeaturesRightDetail>
                        <FeaturesRightDetail>
                            <p>Automatic</p>
                        </FeaturesRightDetail>
                        <FeaturesRightDetail>
                            <p>Petrol</p>
                        </FeaturesRightDetail>
                    </FeaturesRightInfoDetail>
                    </FeaturesRightInfo>
                    </FeaturesRightItemWrapper> 
                    <FeaturesRightItemWrapper>
                        <FeaturesRightImgWrapper>
                        <FeaturesRightImg/>
                    </FeaturesRightImgWrapper>
                    <FeaturesRightInfo>
                    <FeaturesRightName>
                        BMW 8-serie 2-door coupe grecoupe greygrecoupe grey grecoupe grey
                    </FeaturesRightName>
                    <FeaturesRightPrice>
                            <p>$62,000</p>
                        </FeaturesRightPrice>
                    <FeaturesRightInfoDetail>
                        <FeaturesRightDetail>
                            <p>2021</p>
                        </FeaturesRightDetail>
                        <FeaturesRightDetail>
                            <p>Automatic</p>
                        </FeaturesRightDetail>
                        <FeaturesRightDetail>
                            <p>Petrol</p>
                        </FeaturesRightDetail>
                    </FeaturesRightInfoDetail>
                    </FeaturesRightInfo>
                    </FeaturesRightItemWrapper> 
                    <FeaturesRightItemWrapper>
                        <FeaturesRightImgWrapper>
                        <FeaturesRightImg/>
                    </FeaturesRightImgWrapper>
                    <FeaturesRightInfo>
                    <FeaturesRightName>
                        BMW 8-serie 2-door coupe grecoupe greygrecoupe grey grecoupe grey
                    </FeaturesRightName>
                    <FeaturesRightPrice>
                            <p>$62,000</p>
                        </FeaturesRightPrice>
                    <FeaturesRightInfoDetail>
                        <FeaturesRightDetail>
                            <p>2021</p>
                        </FeaturesRightDetail>
                        <FeaturesRightDetail>
                            <p>Automatic</p>
                        </FeaturesRightDetail>
                        <FeaturesRightDetail>
                            <p>Petrol</p>
                        </FeaturesRightDetail>
                    </FeaturesRightInfoDetail>
                    </FeaturesRightInfo>
                    </FeaturesRightItemWrapper> 
                </FeatureRight>
            </FeatureWrapper>
            <FeaturesFooter>
                <FooterLeft>
                    <h4>Follow us</h4>
                    <FooterIconWrapper>
                        <FaFacebookF/>
                    </FooterIconWrapper>
                    <FooterIconWrapper>
                        <FaTwitter/> 
                    </FooterIconWrapper>
                    <FooterIconWrapper>
                        <FaInstagram/>
                    </FooterIconWrapper>   
                </FooterLeft>
                <FooterRight>
                    <FooterBtn>
                        <p>View 29 New</p>
                    </FooterBtn>
                </FooterRight>
            </FeaturesFooter>
        </FeaturesContainer>
    )
}

export default Features
