import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { PopularBtn, PopularButtonWrap, PopularContainer, PopularContainerWrap, PopularDetail, PopularFooter, PopularFooterBtn, PopularFooterLeft, PopularFooterRight, PopularGridWrapper, PopularHead, PopularIconWrap, PopularImg, PopularImgWraper, PopularInfo, PopularInfoDetail, PopularItem, PopularName, PopularPrice, PopularTitle } from './PopularEle'

const Popular = () => {
    return (
        <PopularContainer>
            <PopularContainerWrap>
              <PopularHead>
                <PopularTitle>
                    <p>Popular Makes</p>
                </PopularTitle>
                <PopularButtonWrap>
                    <PopularBtn>
                        <p>Audi</p>
                        <p>14 Listings</p>
                    </PopularBtn>
                    <PopularBtn>
                        <p>Audi</p>
                        <p>14 Listings</p>
                    </PopularBtn>
                    <PopularBtn>
                        <p>Audi</p>
                        <p>14 Listings</p>
                    </PopularBtn>
                    <PopularBtn>
                        <p>Audi</p>
                        <p>14 Listings</p>
                    </PopularBtn>
                </PopularButtonWrap>
            </PopularHead>
            <PopularGridWrapper>
                <PopularItem>
                    <PopularImgWraper>
                        <PopularImg/>
                    </PopularImgWraper>
                    <PopularInfo>
                        <PopularName>
                            Audi A4 4-door sedan blue
                        </PopularName>
                        <PopularPrice>
                            <p>$23,000</p>
                        </PopularPrice>
                        <PopularInfoDetail>
                            <PopularDetail>
                                <p>2020</p>
                            </PopularDetail>
                            <PopularDetail>
                                <p>245,000 miles</p>
                            </PopularDetail>
                            <PopularDetail>
                                <p>Manual</p>
                            </PopularDetail>
                        </PopularInfoDetail>
                    </PopularInfo>
                </PopularItem>
                <PopularItem>
                    <PopularImgWraper>
                        <PopularImg/>
                    </PopularImgWraper>
                    <PopularInfo>
                        <PopularName>
                            Audi A4 4-door sedan blue
                        </PopularName>
                        <PopularPrice>
                            <p>$23,000</p>
                        </PopularPrice>
                        <PopularInfoDetail>
                            <PopularDetail>
                                <p>2020</p>
                            </PopularDetail>
                            <PopularDetail>
                                <p>245,000 miles</p>
                            </PopularDetail>
                            <PopularDetail>
                                <p>Manual</p>
                            </PopularDetail>
                        </PopularInfoDetail>
                    </PopularInfo>
                </PopularItem>
                <PopularItem>
                    <PopularImgWraper>
                        <PopularImg/>
                    </PopularImgWraper>
                    <PopularInfo>
                        <PopularName>
                            Audi A4 4-door sedan blue
                        </PopularName>
                        <PopularPrice>
                            <p>$23,000</p>
                        </PopularPrice>
                        <PopularInfoDetail>
                            <PopularDetail>
                                <p>2020</p>
                            </PopularDetail>
                            <PopularDetail>
                                <p>245,000 miles</p>
                            </PopularDetail>
                            <PopularDetail>
                                <p>Manual</p>
                            </PopularDetail>
                        </PopularInfoDetail>
                    </PopularInfo>
                </PopularItem>
                <PopularItem>
                    <PopularImgWraper>
                        <PopularImg/>
                    </PopularImgWraper>
                    <PopularInfo>
                        <PopularName>
                            Audi A4 4-door sedan blue
                        </PopularName>
                        <PopularPrice>
                            <p>$23,000</p>
                        </PopularPrice>
                        <PopularInfoDetail>
                            <PopularDetail>
                                <p>2020</p>
                            </PopularDetail>
                            <PopularDetail>
                                <p>245,000 miles</p>
                            </PopularDetail>
                            <PopularDetail>
                                <p>Manual</p>
                            </PopularDetail>
                        </PopularInfoDetail>
                    </PopularInfo>
                </PopularItem>
            </PopularGridWrapper>  

            <PopularFooter>
                <PopularFooterLeft>
                    <PopularIconWrap>
                        <FaAngleLeft/>
                    </PopularIconWrap>
                    <PopularIconWrap>
                        <FaAngleRight/>
                    </PopularIconWrap>
                </PopularFooterLeft>
                <PopularFooterRight>
                    <PopularFooterBtn>
                        <p>View 14 Audi</p>
                    </PopularFooterBtn>
                </PopularFooterRight>
            </PopularFooter>
            </PopularContainerWrap>
            
        </PopularContainer>
    )
}

export default Popular
