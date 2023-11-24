/* @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import WambleWhiteImage from "assets/images/Wamblex-white.png";
import WambleBlackImage from "assets/images/Wamblex-black.png";

const containerCss = css`
  width: 100%;
  height: auto;
  padding: 30px 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 70px;
  border-right: 1px solid lightgray;
`;

const topLogoWrapperCss = css`
  border: 1px solid lightgray;
  width: 80px;
`;
const logoCss = css`
  padding: 20px;
  position: relative;
  background: linear-gradient(to top, transparent 50%, #000 50%);
  background-size: 100% 200%;
  background-position: 0% -100%;
  transition: background-position 0.5s ease-in-out, color 0.5s;
  &:hover {
    background-position: 0% 0%;
    color: #fff;
  }
`;

const contentTabsWrapperCss = css`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  justify-content: flex-end;
`;

const tabWrapperCss = css`
  padding: 20px;
  width: 80px;
  max-width: 90%;
  margin: 0 auto;
  max-height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  border: 1px solid lightgray;
  justify-content: center;
  background-color: #d9d9d9;
  transition: background-color 0.5s;
  position: relative;
  overflow: hidden;

  &:hover {
    border: 1px solid black;
  }
`;
const disabledtabCss = css`
  padding: 20px;
  width: 80px;
  max-height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  justify-content: center;
  filter: blur(1px);
  background-color: #f9f9f9;
  font-weight: 100;
`;

const bottomMenuWrapperCss = css`
  border: 1px solid lightgray;
  width: 80px;
`;
const menuCss = css`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  background: linear-gradient(to right, transparent 50%, #000 50%);
  background-size: 200% 100%;
  transition: background-position 0.5s ease-in-out, color 0.5s;
  &:hover {
    background-position: -100% 0;
    color: #fff;
  }
`;

const horizontalLineCss = css`
  border: 0.5px solid #726c6c;
`;

interface SideNavigationProps {
  tabTitle: string[];
}

const SideNavigation: React.FC<SideNavigationProps> = ({ tabTitle }) => {
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const [imgSrc, setImgSrc] = useState<string>(WambleBlackImage);

  const handleTabHover = (index: number | null) => {
    setHoveredTab(index);
  };
  const renderTabs = () => {
    return (
      <div>
        {tabTitle.map((tab, index) => (
          <div
            key={index}
            css={
              index === hoveredTab || hoveredTab === null
                ? tabWrapperCss
                : disabledtabCss
            }
            onMouseEnter={() => handleTabHover(index)}
            onMouseLeave={() => handleTabHover(null)}
          >
            {tab.split("").map((char, charIndex) => (
              <div key={charIndex}>{char}</div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div css={containerCss}>
      <div css={topLogoWrapperCss}>
        <div
          css={logoCss}
          onMouseEnter={() => setImgSrc(WambleWhiteImage)}
          onMouseLeave={() => setImgSrc(WambleBlackImage)}
        >
          <img src={imgSrc} />
        </div>
      </div>
      <div css={contentTabsWrapperCss}>{renderTabs()}</div>
      <div css={bottomMenuWrapperCss}>
        <div css={menuCss}>
          <span css={horizontalLineCss}></span>
          <span css={horizontalLineCss}></span>
          <span css={horizontalLineCss}></span>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
