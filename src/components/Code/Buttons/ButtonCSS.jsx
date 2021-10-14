import { useDispatch, useSelector } from "react-redux";
import { getButtonSettings } from "../../../context/slices/buttonSettings";
import React from 'react'

const ButtonCSS = () => {
  const button = useSelector(getButtonSettings);

  const code = (name) => {
    switch(name) {
      case 'normal':
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-title">{`.button {`}</span>
              <span>background-color: {button.colors.c1};</span>
              <span>color: #000000;</span>
              <span>width: {button.sizes.width}px;</span>
              <span>height: {button.sizes.height}px;</span>
              <span>border-radius: {button.radius.top}px;</span>
              <span>border-style: {button.border.type};</span>
              <span>border: {button.border.top}px;</span>
              <span>cursor: pointer;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
          </div>
          );
        case 'normal-hover':
          return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-title">{`.button {`}</span>
              <span>background-color: transparent;</span>
              <span>color: {button.colors.c1};</span>
              <span>width: {button.sizes.width}px;</span>
              <span>height: {button.sizes.height}px;</span>
              <span>border: {button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px;</span>
              <span>border-radius: {button.radius.top}px;</span>
              <span>border-style: {button.border.type};</span>
              <span>border-color: {button.colors.c1};</span>
              <span>transition: all 250ms ease-in-out;</span>
              <span>cursor: pointer;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover {`}</span>
              <span>background-color: {button.colors.c1};</span>
              <span>color: #000;</span>
              <span>transition: all 250ms ease-in-out;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
          </div>
          )
    }
  }
  return (
    <div className="codeBox">
      {code(button.name)}
    </div>
  )
};


export default ButtonCSS;
