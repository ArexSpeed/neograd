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
              <span>background: {button.colors.c1};</span>
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
              <span>background: transparent;</span>
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
              <span>background: {button.colors.c1};</span>
              <span>color: #000;</span>
              <span>transition: all 250ms ease-in-out;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
          </div>
          );
      case 'neograd':
        return (
          <div className="codeBox__snippet">
             <span className="codeBox__snippet-title">{`.button {`}</span>
              <span>background: linear-gradient(60deg, {button.colors.c1}, {button.colors.c2});</span>
              <span>color: #000;</span>
              <span>text-align: center;</span>
              <span>width: {button.sizes.width}px;</span>
              <span>height: {button.sizes.height}px;</span>
              <span>box-shadow: 1px 1px 40px {button.colors.c1} inset;</span>
              <span>border: {button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px;</span>
              {button.border.top > 0 && (
              <>
                <span>border-style: {button.border.type};</span>
                <span>border-color: {button.colors.c1};</span>
              </>
              )}
              <span>border-radius: {button.radius.top}px;</span>
              <span>transition: all 250ms ease-in-out;</span>
              <span>cursor: pointer;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover {`}</span>
              <span>box-shadow: inset 0 0 10px {button.colors.c1}, 0 0 10px 3px {button.colors.c1};</span>
              <span>background: transparent;</span>
              <span>color: {button.colors.c1}</span>
            <span className="codeBox__snippet-title">{`}`}</span>
          </div>
        );
      case 'neograd-reverse': 
          return (
            <div className="codeBox__snippet">
             <span className="codeBox__snippet-title">{`.button {`}</span>
             <span>background: transparent;</span>
             <span>color: {button.colors.c1}</span>
             <span>text-align: center;</span>
             <span>width: {button.sizes.width}px;</span>
             <span>height: {button.sizes.height}px;</span>
             <span>box-shadow: inset 0 0 10px {button.colors.c1}, 0 0 10px 3px {button.colors.c1};</span>
             <span>border: {button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px;</span>
             {button.border.top > 0 && (
              <>
                <span>border-style: {button.border.type};</span>
                <span>border-color: {button.colors.c1};</span>
              </>
              )}
             <span>border-radius: {button.radius.top}px;</span>
             <span>transition: all 250ms ease-in-out;</span>
             <span>cursor: pointer;</span>
             <span className="codeBox__snippet-title">{`}`}</span>
             <span className="codeBox__snippet-title">{`.button:hover {`}</span>
              <span>background: linear-gradient(60deg, {button.colors.c1}, {button.colors.c2});</span>
              <span>color: #000;</span>
              <span>box-shadow: inset 1px 1px 40px {button.colors.c1};</span>
              <span className="codeBox__snippet-title">{`}`}</span>
            </div>
          );
      case 'gradient': 
          return (
            <div className="codeBox__snippet">
            <span className="codeBox__snippet-title">{`.button {`}</span>
            <span>background: linear-gradient(60deg, {button.colors.c1}, {button.colors.c2});</span>
            <span>color: #000;</span>
            <span>width: {button.sizes.width}px;</span>
            <span>height: {button.sizes.height}px;</span>
            <span>border: {button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px;</span>
            {button.border.top > 0 && (
              <>
                <span>border-style: {button.border.type};</span>
                <span>border-color: {button.colors.c1};</span>
              </>
              )}
             <span>border-radius: {button.radius.top}px;</span>
             <span>transition: all 250ms ease-in-out;</span>
             <span>cursor: pointer;</span>
             <span className="codeBox__snippet-title">{`}`}</span>
             <span className="codeBox__snippet-title">{`.button:hover {`}</span>
             <span>box-shadow: inset -3px 3px 10px {button.colors.c1}, inset 3px -3px 10px {button.colors.c2} </span>
             <span className="codeBox__snippet-title">{`}`}</span>
            </div>
          );
      case 'gradient-radial':
        return (
          <div className="codeBox__snippet">
          <span className="codeBox__snippet-title">{`.button {`}</span>
          <span>background: radial-gradient({button.colors.c1}, {button.colors.c2});</span>
          <span>color: #000;</span>
          <span>width: {button.sizes.width}px;</span>
          <span>height: {button.sizes.height}px;</span>
          <span>border: {button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px;</span>
          {button.border.top > 0 && (
            <>
              <span>border-style: {button.border.type};</span>
              <span>border-color: {button.colors.c1};</span>
            </>
            )}
           <span>border-radius: {button.radius.top}px;</span>
           <span>transition: all 250ms ease-in-out;</span>
           <span>cursor: pointer;</span>
           <span className="codeBox__snippet-title">{`}`}</span>
           <span className="codeBox__snippet-title">{`.button:hover {`}</span>
           <span>box-shadow: inset -3px 3px 10px {button.colors.c1}, inset 3px -3px 10px {button.colors.c2} </span>
           <span className="codeBox__snippet-title">{`}`}</span>
          </div>
        );
      case 'neon': 
            return (
              <div className="codeBox__snippet">
              <span className="codeBox__snippet-title">{`.button {`}</span>
                <span>background: linear-gradient(60deg, {button.colors.c1}, {button.colors.c2});</span>
                <span>color: #000;</span>
                <span>width: {button.sizes.width}px;</span>
                <span>height: {button.sizes.height}px;</span>
                <span>box-shadow:  0 0 5px {button.colors.c1}, 0 0 25px {button.colors.c1},
                                   0 0 5px {button.colors.c2}, 0 0 25px {button.colors.c2};
                </span>
                <span>border: {button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px;</span>
                {button.border.top > 0 && (
                  <>
                    <span>border-style: {button.border.type};</span>
                    <span>border-color: {button.colors.c1};</span>
                  </>
                )}
                <span>border-radius: {button.radius.top}px;</span>
                <span>transition: all 250ms ease-in-out;</span>
                <span>cursor: pointer;</span>
                <span className="codeBox__snippet-title">{`}`}</span>
                <span className="codeBox__snippet-title">{`.button:hover {`}</span>
                <span>box-shadow:  0 0 5px {button.colors.c1}, 0 0 25px {button.colors.c1}, 0 0 50px {button.colors.c1},
                                   0 0 5px {button.colors.c2}, 0 0 25px {button.colors.c2}, 0 0 50px {button.colors.c2};
                </span>
                <span className="codeBox__snippet-title">{`}`}</span>
              </div>
            );
      case 'neon-border':
        return (
          <div className="codeBox__snippet">
              <span className="codeBox__snippet-title">{`.button {`}</span>
                <span>background: transparent;</span>
                <span>color: {button.colors.c1};</span>
                <span>width: {button.sizes.width}px;</span>
                <span>height: {button.sizes.height}px;</span>
                <span>box-shadow: 0 0 15px {button.colors.c1}, 0 0 15px 3px ${button.colors.c2} inset;</span>
                <span>border: {button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px;</span>
                {button.border.top > 0 && (
                  <>
                    <span>border-style: {button.border.type};</span>
                    <span>border-color: {button.colors.c1};</span>
                  </>
                )}
                <span>border-radius: {button.radius.top}px;</span>
                <span>transition: all 250ms ease-in-out;</span>
                <span>cursor: pointer;</span>
              <span className="codeBox__snippet-title">{`}`}</span>
              <span className="codeBox__snippet-title">{`.button:hover {`}</span>
              <span>box-shadow: 0 0 10px {button.colors.c1}, 0 0 10px 3px ${button.colors.c2} inset;</span>
                <span className="codeBox__snippet-title">{`}`}</span>
           </div>
        );
      case 'neon-reflex': 
          return (
            <div className="codeBox__snippet">
              <span className="codeBox__snippet-title">{`.button {`}</span>
                <span>background: linear-gradient(45deg, {button.colors.c1}, {button.colors.c2});</span>
                <span>color: #000;</span>
                <span>width: {button.sizes.width}px;</span>
                <span>height: {button.sizes.height}px;</span>
                <span>border: {button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px;</span>
                {button.border.top > 0 && (
                  <>
                    <span>border-style: {button.border.type};</span>
                    <span>border-color: {button.colors.c1};</span>
                  </>
                )}
                <span>border-radius: {button.radius.top}px;</span>
                <span>letter-spacing: 4px;</span>
                <span>-webkit-box-reflect: below 1px linear-gradient(transparent, #0005);</span>
                <span>transition: all 250ms ease-in-out;</span>
                <span>cursor: pointer;</span>
              <span className="codeBox__snippet-title">{`}`}</span>
              <span className="codeBox__snippet-title">{`.button:hover {`}</span>
                <span>box-shadow:  0 0 5px {button.colors.c1}, 0 0 25px {button.colors.c1}, 0 0 50px {button.colors.c1},
                                   0 0 5px {button.colors.c2}, 0 0 25px {button.colors.c2}, 0 0 50px {button.colors.c2};
                </span>
                <span>color: #000;</span>
                <span className="codeBox__snippet-title">{`}`}</span>
            </div>
          );
        case 'border-move':
          return (
            <div className="codeBox__snippet">
            <span className="codeBox__snippet-title">{`.button {`}</span>
              <span>background: transparent;</span>
              <span>color: {button.colors.c1};</span>
              <span>width: {button.sizes.width}px;</span>
              <span>height: {button.sizes.height}px;</span>
              <span>border: none;</span>
              <span>border-radius: {button.radius.top}px;</span>
              <span>overflow: hidden;</span>
              <span>cursor: pointer;</span>
              <span>position: relative;</span>
              <span className="codeBox__snippet-title">{`}`}</span>
              <span className="codeBox__snippet-title">{`.button::before {`}</span>
              <span>content: "";</span>
              <span>position: absolute;</span>
              <span>top: 0;</span>
              <span>left: 0;</span>
              <span>width: 10px;</span>
              <span>height: 10px;</span>
              <span>border-top: 2px {button.border.type} {button.colors.c1};</span>
              <span>border-left: 2px {button.border.type} {button.colors.c1};</span>
              <span>border-radius: inherit;</span>
              <span>transition: all 250ms ease-in-out;</span>
              <span className="codeBox__snippet-title">{`}`}</span>
              <span className="codeBox__snippet-title">{`.button::after {`}</span>
              <span>content: "";</span>
              <span>position: absolute;</span>
              <span>bottom: 0;</span>
              <span>right: 0;</span>
              <span>width: 10px;</span>
              <span>height: 10px;</span>
              <span>border-bottom: 2px {button.border.type} {button.colors.c2};</span>
              <span>border-right: 2px {button.border.type} {button.colors.c2};</span>
              <span>border-radius: inherit;</span>
              <span>transition: all 250ms ease-in-out;</span>
              <span className="codeBox__snippet-title">{`}`}</span>
              <span className="codeBox__snippet-title">{`.button:hover::before {`}</span>
              <span>width: 100%;</span>
              <span>height: 100%;</span>
              <span className="codeBox__snippet-title">{`}`}</span>
              <span className="codeBox__snippet-title">{`.button:hover::after {`}</span>
              <span>width: 100%;</span>
              <span>height: 100%;</span>
              <span className="codeBox__snippet-title">{`}`}</span>
            </div>
          );
      case 'border-move-light':
        return (
          <div className="codeBox__snippet">
          <span className="codeBox__snippet-title">{`.button {`}</span>
            <span>background: transparent;</span>
            <span>color: {button.colors.c1};</span>
            <span>width: {button.sizes.width}px;</span>
            <span>height: {button.sizes.height}px;</span>
            <span>border: none;</span>
            <span>border-radius: {button.radius.top}px;</span>
            <span>overflow: hidden;</span>
            <span>cursor: pointer;</span>
            <span>position: relative;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover {`}</span>
            <span>background: {button.colors.c1};</span>
            <span>color: #000000;</span>
            <span>box-shadow: 0 0 20px {button.colors.c1};</span>
            <span>border: none;</span>
            <span>transition-delay: 0.25s;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button::before {`}</span>
            <span>position: absolute;</span>
            <span>content: "";</span>
            <span>top: 0;</span>
            <span>left: 0;</span>
            <span>width: 10px;</span>
            <span>height: 10px;</span>
            <span>border-top: 2px {button.border.type} {button.colors.c1};</span>
            <span>border-left: 2px {button.border.type} {button.colors.c1};</span>
            <span>border-radius: inherit;</span>
            <span>transition: all 500ms ease-in-out;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button::after {`}</span>
            <span>position: absolute;</span>
            <span>content: "";</span>
            <span>bottom: 0;</span>
            <span>right: 0;</span>
            <span>width: 10px;</span>
            <span>height: 10px;</span>
            <span>border-bottom: 2px {button.border.type} {button.colors.c2};</span>
            <span>border-right: 2px {button.border.type} {button.colors.c2};</span>
            <span>border-radius: inherit;</span>
            <span>transition: all 500ms ease-in-out;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover::before {`}</span>
            <span>width: 100%;</span>
            <span>height: 100%;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover::after {`}</span>
            <span>width: 100%;</span>
            <span>height: 100%;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
          </div>
        );
      case 'slide-left':
        return (
          <div className="codeBox__snippet">
          <span className="codeBox__snippet-title">{`.button {`}</span>
            <span>background: transparent;</span>
            <span>color: {button.colors.c1};</span>
            <span>text-align: center;</span>
            <span>width: {button.sizes.width}px;</span>
            <span>height: {button.sizes.height}px;</span>
            <span>border: none;</span>
            <span>border-radius: {button.radius.top}px;</span>
            <span>box-shadow: 0px 0px 5px {button.colors.c1};</span>
            <span>transition: all 250ms ease-in-out;</span>
            <span>overflow: hidden;</span>
            <span>cursor: pointer;</span>
            <span>position: relative;</span>
            <span>z-index: 1;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover {`}</span>
            <span>color: #000;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button::after {`}</span>
            <span>position: absolute;</span>
            <span>content: "";</span>
            <span>background: linear-gradient(60deg, {button.colors.c1} 0%, {button.colors.c2} 100%);</span>
            <span>top: 0;</span>
            <span>left: 0;</span>
            <span>width: 0;</span>
            <span>height: 100%;</span>
            <span>transition: all 1s ease-in-out;</span>
            <span>border-radius: inherit;</span>
            <span>z-index: -1;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover::after {`}</span>
            <span>width: 100%;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
          </div>
        );
    case 'slide-right':
      return (
        <div className="codeBox__snippet">
        <span className="codeBox__snippet-title">{`.button {`}</span>
          <span>background: transparent;</span>
          <span>color: {button.colors.c1};</span>
          <span>text-align: center;</span>
          <span>width: {button.sizes.width}px;</span>
          <span>height: {button.sizes.height}px;</span>
          <span>border: none;</span>
          <span>border-radius: {button.radius.top}px;</span>
          <span>box-shadow: 0px 0px 5px {button.colors.c1};</span>
          <span>transition: all 250ms ease-in-out;</span>
          <span>overflow: hidden;</span>
          <span>cursor: pointer;</span>
          <span>position: relative;</span>
          <span>z-index: 1;</span>
          <span className="codeBox__snippet-title">{`}`}</span>
          <span className="codeBox__snippet-title">{`.button:hover {`}</span>
          <span>color: #000;</span>
          <span className="codeBox__snippet-title">{`}`}</span>
          <span className="codeBox__snippet-title">{`.button::after {`}</span>
          <span>position: absolute;</span>
          <span>content: "";</span>
          <span>background: linear-gradient(60deg, {button.colors.c1} 0%, {button.colors.c2} 100%);</span>
          <span>top: 0;</span>
          <span>right: 0;</span>
          <span>width: 0;</span>
          <span>height: 100%;</span>
          <span>transition: all 1s ease-in-out;</span>
          <span>border-radius: inherit;</span>
          <span>z-index: -1;</span>
          <span className="codeBox__snippet-title">{`}`}</span>
          <span className="codeBox__snippet-title">{`.button:hover::after {`}</span>
          <span>width: 100%;</span>
          <span className="codeBox__snippet-title">{`}`}</span>
        </div>
      );
    case 'slide-down':
      return (
        <div className="codeBox__snippet">
        <span className="codeBox__snippet-title">{`.button {`}</span>
          <span>background: transparent;</span>
          <span>color: {button.colors.c1};</span>
          <span>text-align: center;</span>
          <span>width: {button.sizes.width}px;</span>
          <span>height: {button.sizes.height}px;</span>
          <span>border: none;</span>
          <span>border-radius: {button.radius.top}px;</span>
          <span>box-shadow: 0px 0px 5px {button.colors.c1};</span>
          <span>transition: all 250ms ease-in-out;</span>
          <span>overflow: hidden;</span>
          <span>cursor: pointer;</span>
          <span>position: relative;</span>
          <span>z-index: 1;</span>
          <span className="codeBox__snippet-title">{`}`}</span>
          <span className="codeBox__snippet-title">{`.button:hover {`}</span>
          <span>color: #000;</span>
          <span className="codeBox__snippet-title">{`}`}</span>
          <span className="codeBox__snippet-title">{`.button::after {`}</span>
          <span>position: absolute;</span>
          <span>content: "";</span>
          <span>background: linear-gradient(60deg, {button.colors.c1} 0%, {button.colors.c2} 100%);</span>
          <span>bottom: 0;</span>
          <span>left: 0;</span>
          <span>width: 100%;</span>
          <span>height: 0;</span>
          <span>transition: all 1s ease-in-out;</span>
          <span>border-radius: inherit;</span>
          <span>z-index: -1;</span>
          <span className="codeBox__snippet-title">{`}`}</span>
          <span className="codeBox__snippet-title">{`.button:hover::after {`}</span>
          <span>height: 100%;</span>
          <span className="codeBox__snippet-title">{`}`}</span>
        </div>
      );
      case 'slide-up':
        return (
          <div className="codeBox__snippet">
          <span className="codeBox__snippet-title">{`.button {`}</span>
            <span>background: transparent;</span>
            <span>color: {button.colors.c1};</span>
            <span>text-align: center;</span>
            <span>width: {button.sizes.width}px;</span>
            <span>height: {button.sizes.height}px;</span>
            <span>border: none;</span>
            <span>border-radius: {button.radius.top}px;</span>
            <span>box-shadow: 0px 0px 5px {button.colors.c1};</span>
            <span>transition: all 250ms ease-in-out;</span>
            <span>overflow: hidden;</span>
            <span>cursor: pointer;</span>
            <span>position: relative;</span>
            <span>z-index: 1;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover {`}</span>
            <span>color: #000;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button::after {`}</span>
            <span>position: absolute;</span>
            <span>content: "";</span>
            <span>background: linear-gradient(60deg, {button.colors.c1} 0%, {button.colors.c2} 100%);</span>
            <span>top: 0;</span>
            <span>left: 0;</span>
            <span>width: 100%;</span>
            <span>height: 0;</span>
            <span>transition: all 1s ease-in-out;</span>
            <span>border-radius: inherit;</span>
            <span>z-index: -1;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover::after {`}</span>
            <span>height: 100%;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
          </div>
        );
        case 'slide-circle':
          return (
            <div className="codeBox__snippet">
            <span className="codeBox__snippet-title">{`.button {`}</span>
              <span>background: transparent;</span>
              <span>color: {button.colors.c1};</span>
              <span>text-align: center;</span>
              <span>width: {button.sizes.width}px;</span>
              <span>height: {button.sizes.height}px;</span>
              <span>border: none;</span>
              <span>border-radius: {button.radius.top}px;</span>
              <span>box-shadow: 0px 0px 5px {button.colors.c1};</span>
              <span>transition: all 250ms ease-in-out;</span>
              <span>overflow: hidden;</span>
              <span>cursor: pointer;</span>
              <span>position: relative;</span>
              <span>z-index: 1;</span>
              <span className="codeBox__snippet-title">{`}`}</span>
              <span className="codeBox__snippet-title">{`.button:hover {`}</span>
              <span>color: #000;</span>
              <span>box-shadow: 0px 0px 10px ${button.colors.c1};</span>
              <span className="codeBox__snippet-title">{`}`}</span>
              <span className="codeBox__snippet-title">{`.button::after {`}</span>
              <span>position: absolute;</span>
              <span>content: "";</span>
              <span>background: radial-gradient({button.colors.c1}, {button.colors.c2});</span>
              <span>top: 50%;</span>
              <span>left: 50%;</span>
              <span>transform: translate(-50%, -50%);</span>
              <span>width: 0;</span>
              <span>height: 0;</span>
              <span>transition: all 0.5s ease-in-out;</span>
              <span>border-radius: inherit;</span>
              <span>z-index: -1;</span>
              <span className="codeBox__snippet-title">{`}`}</span>
              <span className="codeBox__snippet-title">{`.button:hover::after {`}</span>
              <span>width: 300px;</span>
              <span>height: 300px;</span>
              <span className="codeBox__snippet-title">{`}`}</span>
            </div>
          );
      case 'behind-border':
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-title">{`.button {`}</span>
              <span>background: {button.colors.c1};</span>
              <span>border: none;</span>
              <span>width: {button.sizes.width}px;</span>
              <span>height: {button.sizes.height}px;</span>
              <span>border-radius: {button.radius.top}px;</span>
              <span>transition: all 0.25s ease-in;</span>
              <span>cursor: pointer;</span>
              <span>position: relative;</span>
              <span>z-index: 1;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button::before, .button::after {`}</span>
              <span>position: absolute;</span>
              <span>content: "";</span>
              <span>top: 0;</span>
              <span>left: 0;</span>
              <span>width: 100%;</span>
              <span>height: 100%;</span>
              <span>opacity: 0.5;</span>
              <span>z-index: -1;</span>
              <span>border-radius: inherit;</span>
              <span>transition: all 0.25s ease-in;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover {`}</span>
              <span>top: 0;</span>
              <span>left: 0;</span>
              <span>transition: all 0.25s ease-in;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover::before {`}</span>
              <span>top: -15px;</span>
              <span>left: 15px;</span>
              <span>transition: all 0.35s ease-in;</span>
              <span>border: 2px solid {button.colors.c1};</span>
              <span>box-shadow: 0 0 20px {button.colors.c1};</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover::after {`}</span>
              <span>top: 15px;</span>
              <span>left: -15px;</span>
              <span>transition: all 0.35s ease-in;</span>
              <span>border: 2px solid {button.colors.c2};</span>
              <span>box-shadow: 0 0 20px {button.colors.c2};</span>
            <span className="codeBox__snippet-title">{`}`}</span>
          </div>
        );
      case 'behind-shadow':
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-title">{`.button {`}</span>
              <span>background: {button.colors.c1};</span>
              <span>border: none;</span>
              <span>width: {button.sizes.width}px;</span>
              <span>height: {button.sizes.height}px;</span>
              <span>border-radius: {button.radius.top}px;</span>
              <span>transition: all 0.25s ease-in;</span>
              <span>cursor: pointer;</span>
              <span>position: relative;</span>
              <span>z-index: 1;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button::before, .button::after {`}</span>
              <span>position: absolute;</span>
              <span>content: "";</span>
              <span>top: 0;</span>
              <span>left: 0;</span>
              <span>width: 100%;</span>
              <span>height: 100%;</span>
              <span>opacity: 0.5;</span>
              <span>z-index: -1;</span>
              <span>border-radius: inherit;</span>
              <span>transition: all 0.25s ease-in;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover {`}</span>
              <span>top: 0;</span>
              <span>left: 0;</span>
              <span>transition: all 0.25s ease-in;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover::before {`}</span>
              <span>top: -15px;</span>
              <span>left: 15px;</span>
              <span>transition: all 0.35s ease-in;</span>
              <span>background: {button.colors.c1};</span>
              <span>box-shadow: 0 0 20px {button.colors.c1};</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover::after {`}</span>
              <span>top: 15px;</span>
              <span>left: -15px;</span>
              <span>transition: all 0.35s ease-in;</span>
              <span>background: {button.colors.c2};</span>
              <span>box-shadow: 0 0 20px {button.colors.c2};</span>
            <span className="codeBox__snippet-title">{`}`}</span>
          </div>
        );
      case 'hide-border':
          return (
            <div className="codeBox__snippet">
            <span className="codeBox__snippet-title">{`.button {`}</span>
              <span>background: transparent;</span>
              <span>color: {button.colors.c1};</span>
              <span>border: none;</span>
              <span>width: {button.sizes.width}px;</span>
              <span>height: {button.sizes.height}px;</span>
              <span>line-height: {button.sizes.height}px;</span>
              <span>transition: all 0.35s ease-in;</span>
              <span>cursor: pointer;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button::before, .button::after {`}</span>
              <span>border: 1px solid {button.colors.c1};</span>
              <span>bottom: 0px;</span>
              <span>content: " ";</span>
              <span>display: block;</span>
              <span>margin: 0 auto;</span>
              <span>position: relative;</span>
              <span>transition: all 350ms ease-in-out;</span>
              <span>width: 0;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover::before, .button:hover::after {`}</span>
              <span>border-color: {button.colors.c1};</span>
              <span>transition: width 350ms ease-in-out;</span>
              <span>width: 100%;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover::before {`}</span>
              <span>bottom: auto;</span>
              <span>top: 0;</span>
              <span>width: 100%;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            </div>
          );
      case 'surround-border': 
            return (
              <div className="codeBox__snippet">
              <span className="codeBox__snippet-title">{`.button {`}</span>
                <span>background: {button.colors.c1};</span>
                <span>width: {button.sizes.width}px;</span>
                <span>height: {button.sizes.height}px;</span>
                <span>border: none;</span>
                <span>border-radius: {button.radius.top};</span>
                <span>cursor: pointer;</span>
                <span>position: relative;</span>
              <span className="codeBox__snippet-title">{`}`}</span>
              <span className="codeBox__snippet-title">{`.button::before {`}</span>
                <span>position: absolute;</span>
                <span>content: "";</span>
                <span>border-radius: inherit;</span>
                <span>width: 0;</span>
                <span>height: 0;</span>
                <span>border: 5px solid {button.colors.c1};</span>
                <span>top: 50%;</span>
                <span>left: 50%;</span>
                <span>transform: translate(-50%, -50%);</span>
                <span>opacity: 0;</span>
                <span>transition: all 0.3s ease-in-out 0s;</span>
              <span className="codeBox__snippet-title">{`}`}</span>
              <span className="codeBox__snippet-title">{`.button:hover::before {`}</span>
                <span>opacity: 1;</span>
                <span>width: 115%;</span>
                <span>height: 130%;</span>
              <span className="codeBox__snippet-title">{`}`}</span>
              </div>
            );
      case 'half-move':
        return (
          <div className="codeBox__snippet">
          <span className="codeBox__snippet-title">{`.button {`}</span>
            <span>background: transparent;</span>
            <span>color: #fff;</span>
            <span>margin: 0 auto;</span>
            <span>width: {button.sizes.width}px;</span>
            <span>height: {button.sizes.height}px;</span>
            <span>border: none;</span>
            <span>outline: none;</span>
            <span>border-radius: {button.radius.top};</span>
            <span>cursor: pointer;</span>
            <span>position: relative;</span>
            <span>z-index: 1;</span>
          <span className="codeBox__snippet-title">{`}`}</span>
          <span className="codeBox__snippet-title">{`.button::before, .button::after {`}</span>
              <span>content: "";</span>
              <span>position: absolute;</span>
              <span>height: 100%;</span>
              <span>width: 50%;</span>
              <span>transform: skewX(30deg);</span>
              <span>transition: all 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);</span>
              <span>background: {button.colors.c1};</span>
              <span>z-index: -1;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button::before {`}</span>
              <span>top: -20%;</span>
              <span>left: 0rem;</span>
              <span>background: {button.colors.c1};</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button::after {`}</span>
              <span>top: 20%;</span>
              <span>left: 50%;</span>
              <span>background: {button.colors.c2};</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover::after, .button:hover::before {`}</span>
              <span>top: 0;</span>
              <span>transform: skewx(0deg);</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover::after {`}</span>
              <span>left: 0;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
            <span className="codeBox__snippet-title">{`.button:hover::before {`}</span>
              <span>left: 50%;</span>
            <span className="codeBox__snippet-title">{`}`}</span>
          </div>
        );

    }
  }
  return (
    <div className="codeBox">
      {code(button.name)}
    </div>
  )
};


export default ButtonCSS;
