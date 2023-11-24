/* @jsxImportSource @emotion/react */
import * as React from "react";
import { Suspense } from "react";
import { css } from "@emotion/react";
import SideNavigation from "../components/SideNav";

const rootCss = css`
  height: 100%;
  background-attachment: fixed;
  overflow: auto;
  display: flex;
  gap: 2px;
  align-items: stretch;
`;

const leftSectionCss = css`
  width: 8%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const rightSectionCss = css`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const tabs = ["Studio", "Shop", "Index"];
  return (
    <div css={rootCss}>
      <div css={leftSectionCss}>
        <SideNavigation tabTitle={tabs} />
      </div>

      <div css={rightSectionCss}>
        <Suspense>{children}</Suspense>
      </div>
    </div>
  );
};

export default MainLayout;
