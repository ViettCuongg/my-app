import '../../MBTI/MBTIHeader/MBTIHeader.model.css';
import { FaArrowRight } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import { useEffect, useRef } from 'react';
import { SliderMBTI } from '../../../data/MBTI/MBTI';
import { Link } from 'react-router-dom';

const marqueeAnimation = keyframes`
 from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
`;
const MarqueeContainer = styled.div`
    align-items: flex-start;
    animation: ${marqueeAnimation} 84s linear infinite;
    display: flex;
    gap: 24px;
    position: absolute;
    will-change: transform;
    overflow: hidden;
    width: max-content;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
`;
const MarqueeLink = styled.a`
    background: white;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    gap: 16px;
    position: relative;
    width: 401px;
    &:hover {
        border: 2px solid yellow;
        overflow: visible;
    }
`;

const MBTIHeader = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const handleMouseEnter = () => {
            marqueeRef.current.style.animationPlayState = 'paused';
        };

        const handleMouseLeave = () => {
            marqueeRef.current.style.animationPlayState = 'running';
        };

        marqueeRef.current.addEventListener('mouseenter', handleMouseEnter);
        marqueeRef.current.addEventListener('mouseleave', handleMouseLeave);
    }, []);

    return (
        <div>
            <div className="mbti-bg-header">
                <div id="mbti-header" className="mbti-header">
                    <div className="mbti-header__top-content">
                        <div className="mbti-header__top-content--title-group">
                            <h1 className="text-5xl font-extrabold leading-10 text-center text-white uppercase tighter ">
                                Trắc nghiệm tính cách MBTI
                            </h1>
                        </div>
                        <Link to="/mbtiquizz" className="mbti-header__top-content--button">
                            Làm bài test
                            <FaArrowRight size={28} color="white" />
                        </Link>
                    </div>
                    <div className="mbti-header__personalities">
                        <MarqueeContainer ref={marqueeRef}>
                            {SliderMBTI.map((mbtiCard, i) => (
                                <MarqueeLink key={i}>
                                    <div className="mbti-header__personality--image lazyloaded">
                                        <img
                                            className="mbt-header__img--intro"
                                            src={mbtiCard.img}
                                            alt={mbtiCard.altText}
                                        />
                                    </div>

                                    <div className="mbti-header__personality--content">
                                        <div className="mbti-header__personality--content-title">{mbtiCard.title}</div>
                                        <div className="mbti-header__personality--content-short-description">
                                            {mbtiCard.detail}
                                        </div>
                                    </div>
                                </MarqueeLink>
                            ))}
                        </MarqueeContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MBTIHeader;
