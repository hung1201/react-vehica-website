import React from 'react'
import { LadingCarIcon, LadingCarItem, LadingContainer, LandingBg, LandingCarItems, LandingCarName, LandingContent, LandingHead, LandingHeadItem, LandingInputBtn, LandingInputContainer, LandingInputHead, LandingInputSelectWrap, LandingInputWrapper } from './LandingEle'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaAngleDown,FaCar} from 'react-icons/fa'
const Landing = () => {
    return (
        <LadingContainer>
            <LandingBg>
            </LandingBg>
            <LandingContent>
                <LandingHead>
                    <p>Find Your <span>Perfect</span> Car</p>
                </LandingHead>
                <LandingInputWrapper>
                    <LandingInputHead>
                        <LandingHeadItem>
                            <p>All</p>
                        </LandingHeadItem>
                        <LandingHeadItem>
                            <p>New</p>
                        </LandingHeadItem>
                        <LandingHeadItem>
                            <p>Used</p>
                        </LandingHeadItem>
                    </LandingInputHead>
                    <LandingInputContainer>
                        <LandingInputSelectWrap>
                            <p>All Makes</p>
                            <FaAngleDown/>
                        </LandingInputSelectWrap>
                        <LandingInputSelectWrap>
                        <p>All Makes</p>
                            <FaAngleDown/>
                        </LandingInputSelectWrap>
                        <LandingInputSelectWrap>
                        <p>All Makes</p>
                            <FaAngleDown/>
                        </LandingInputSelectWrap>
                        <LandingInputBtn>
                            <AiOutlineSearch/>
                        </LandingInputBtn>
                    </LandingInputContainer>
                </LandingInputWrapper>

                <LandingCarItems>
                    <LadingCarItem>
                        <LadingCarIcon>
                            <FaCar/>
                        </LadingCarIcon>
                        <LandingCarName>
                            <p>Sedan</p>
                        </LandingCarName>
                    </LadingCarItem>
                    <LadingCarItem>
                        <LadingCarIcon>
                        <FaCar/>
                        </LadingCarIcon>
                        <LandingCarName>
                            <p>Sedan</p>
                        </LandingCarName>
                    </LadingCarItem>
                    <LadingCarItem>
                        <LadingCarIcon>
                        <FaCar/>
                        </LadingCarIcon>
                        <LandingCarName>
                            <p>Sedan</p>
                        </LandingCarName>
                    </LadingCarItem>
                    <LadingCarItem>
                        <LadingCarIcon>
                        <FaCar/>
                        </LadingCarIcon>
                        <LandingCarName>
                            <p>Sedan</p>
                        </LandingCarName>
                    </LadingCarItem>
                    <LadingCarItem>
                        <LadingCarIcon>
                        <FaCar/>
                        </LadingCarIcon>
                        <LandingCarName>
                            <p>Sedan</p>
                        </LandingCarName>
                    </LadingCarItem>
                </LandingCarItems>
            </LandingContent>
        </LadingContainer>
    )
}

export default Landing
