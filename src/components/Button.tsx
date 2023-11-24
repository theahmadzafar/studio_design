/* @jsxImportSource @emotion/react */
import React, { forwardRef } from "react";
import { css } from "@emotion/react";

const buttonCss = css`
  display: inline-block;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #000;
  background-color: transparent;
  outline: none;
  transition: background-color 0.3s ease;
  position: relative;
  transform-style: preserve-3d;
  text-decoration: none;
  color: #000;

  &:hover {
    background-color: #dddddd;
    color: #ffffff;
  }

  &:active {
    background-color: #aaaaaa;
  }
`;

const animationCss = css`
  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background: #000;
    transform: translate3D(0, -100%, 0);
    transition: all 0.5s;
    z-index: -1;
  }

  &:after {
    transform: translate3D(0, 100%, 0);
  }

  &:hover:before,
  &:hover:after {
    transform: translate3D(0, -50%, 0);
  }

  &:hover:after {
    transform: translate3D(0, 50%, 0);
  }
`;

interface ButtonProps<T extends React.ElementType> {
  as?: T;
  compact?: boolean;
}
const Button = forwardRef(
  <T extends React.ElementType = "button">(
    {
      as,
      compact = false,
      children,
      ...rest
    }: ButtonProps<T> &
      Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
    ref?: React.ComponentPropsWithRef<T>["ref"]
  ) => {
    const Component = as || "button";
    return (
      <Component css={[buttonCss, animationCss]} {...rest} ref={ref}>
        {children}
      </Component>
    );
  }
);

export default Button;
