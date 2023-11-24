/* @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import duckBannerImage from "assets/images/duck.png";
import zaraBannerImage from "assets/images/zara-banner.png";
import NeomLogo from "assets/images/neom-logo.jpeg";
import ZaraLogo from "assets/images/zara-logo.png";
import Button from "components/Button";
import ArrowButton from "components/ArrowButton";

const mainWrapperCss = css`
  width: 100%;
`;

const upperSectionCss = css`
  display: flex;

  height: auto;
`;
const downSectionCss = css`
  display: flex;

  height: auto;
`;
const upperLeftWrapperCss = css`
  flex-basis: 44%;
  height: auto;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${duckBannerImage});
    background-size: cover;
    background-position: center;
    transform: scale(1);
    transition: transform 0.3s ease;
    z-index: 0; /* Adjusted z-index */
  }
  &:hover:before {
    transform: scale(1.1);
  }
`;
const upperRightWrapperCss = css`
  padding-bottom: 0px;
  padding-top: 60px;
  padding-right: 60px;
  padding-left: 60px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  flex-grow: 1;
`;
const contentWrapperCss = css`
  flex-grow: 1;
`;
const headingWrapperCss = css`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const descriptionCss = css`
  font-size: 20px;
  font-weight: normal;
  margin-top: 30px;
`;
const buttonsWrapperCss = css`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const downLeftWrapperCss = css`
  padding-bottom: 20px;
  padding-top: 60px;
  padding-right: 60px;
  padding-left: 60px;
  flex-basis: 44%;
  background-color: #ffffff;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-shrink: 0;
`;

const imageWrapperCss = css`
  flex-grow: 1;
`;

const downRightWrapperCss = css`
  flex-grow: 1;
  height: auto;
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${zaraBannerImage});
    background-size: cover;
    background-position: center;
    transform: scale(1);
    transition: transform 0.3s ease;
    z-index: 0;
  }
  &:hover:before {
    transform: scale(1.1);
  }
`;

// ... (rest of the code)

const HomePage: React.FC = () => {
  return (
    <div css={mainWrapperCss}>
      <div css={upperSectionCss}>
        <div css={upperLeftWrapperCss}>
          <img
            src={duckBannerImage}
            css={{ height: "100%", width: "100%", maxHeight: 490 }}
          />
        </div>
        <div css={upperRightWrapperCss}>
          <div css={contentWrapperCss}>
            <div css={headingWrapperCss}>
              <img
                src={NeomLogo}
                alt="Neom Logo"
                css={{ width: 100, height: 100 }}
              />
              <h1 css={{ fontSize: 60, fontWeight: "bolder", color: "#000" }}>
                Made To Change
              </h1>
            </div>
            <p css={descriptionCss}>
              Discover the beauty of Neom, The way to the future of advance
              civilizations and technology
            </p>
          </div>
          <div css={buttonsWrapperCss}>
            <Button as={Link} to="#" css={{ width: "40%", height: "100%" }}>
              Have A Look
            </Button>
            <ArrowButton
              as={Link}
              to="#"
              css={{ width: "15%", height: "100%" }}
            ></ArrowButton>
          </div>
        </div>
      </div>
      <div css={downSectionCss}>
        <div css={downLeftWrapperCss}>
          <div css={imageWrapperCss}>
            <img
              src={ZaraLogo}
              css={{ width: "100%", height: "100%", flexGrow: 1 }}
            />
          </div>
          <div>
            <Button
              as={Link}
              to="#"
              css={{ width: "100%", height: "100%", margin: "0px auto" }}
            >
              Have A Look
            </Button>
          </div>
        </div>
        <div css={downRightWrapperCss}>
          <img
            src={zaraBannerImage}
            css={{ height: "100%", width: "100%", maxHeight: 550 }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
