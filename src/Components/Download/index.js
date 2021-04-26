import React from 'react'
import {FaAndroid, FaAngleLeft,FaAngleRight, FaApple} from 'react-icons/fa'
import { ArrowIconWrapper, DlDetail, DlLeft, DlLeftBtn, DlLeftTitle, DlRight, DlRightBtnWrap, DlRightColLeft, DlRightColRight, DownloadContainer, DownloadHeading, DownloadWrapperAll, EmailButton, EmailContainer, EmailDesc, EmailInput, EmailInputWrap, EmailTitle, HeadItem, HeadItemsWrapper, LeftBtnWrapper } from './DownloadEle'
import {AiFillCheckCircle} from 'react-icons/ai'
import {SiMinutemailer} from 'react-icons/si'
const Download = () => {
    return (
        <DownloadWrapperAll>
            <DownloadHeading>
                <ArrowIconWrapper>
                    <FaAngleLeft/>
                </ArrowIconWrapper>
                <HeadItemsWrapper>
                    <HeadItem>

                    </HeadItem>
                    <HeadItem>
                        
                    </HeadItem>
                    <HeadItem>
                        
                    </HeadItem>
                    <HeadItem>
                        
                    </HeadItem>
                </HeadItemsWrapper>
                <ArrowIconWrapper>
                    <FaAngleRight/>
                </ArrowIconWrapper>
            </DownloadHeading>
            <DownloadContainer>
                <DlLeft>
                    <DlLeftTitle>
                        <p>Download our app</p>
                    </DlLeftTitle>
                    <DlLeftBtn>
                        <LeftBtnWrapper>
                            <FaApple/>
                            <p>For iOS</p>
                        </LeftBtnWrapper>
                        <LeftBtnWrapper>
                            <FaAndroid/>
                            <p>For Android</p>
                        </LeftBtnWrapper>
                    </DlLeftBtn>
                </DlLeft>
                <DlRight>
                    <DlRightColLeft>
                        <p>How to buy a car?</p>
                        <DlRightBtnWrap>
                                <p>Read more</p>
                        </DlRightBtnWrap>
                    </DlRightColLeft>
                    <DlRightColRight>
                        <DlDetail>
                            <AiFillCheckCircle/>
                        <p>Praesent nibh luctus viverra</p>
                        </DlDetail>
                        <DlDetail>
                            <AiFillCheckCircle/>
                        <p>Praesent nibh luctus viverra</p>
                        </DlDetail>
                        <DlDetail>
                            <AiFillCheckCircle/>
                        <p>Praesent nibh luctus viverra</p>
                        </DlDetail>
                        <DlDetail>
                            <AiFillCheckCircle/>
                        <p>Praesent nibh luctus viverra</p>
                        </DlDetail>
                        <DlDetail>
                            <AiFillCheckCircle/>
                        <p>Praesent nibh luctus viverra</p>
                        </DlDetail>
                    </DlRightColRight>
                </DlRight>
            </DownloadContainer>
            <span></span>
            <EmailContainer>
                <EmailTitle>
                    <p>Newsletter</p>
                </EmailTitle>
                <EmailInputWrap>
                    <EmailInput placeholder="Your email address"/>
                    <EmailButton>
                        <p>Sign up</p>
                        <SiMinutemailer/>
                    </EmailButton>
                </EmailInputWrap>
                <EmailDesc>
                    <p>Subscribe to our newsletter and stay updated with our offer </p>
                </EmailDesc>
                
            </EmailContainer>
        </DownloadWrapperAll>
    )
}

export default Download
