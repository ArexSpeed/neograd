import { useDispatch, useSelector } from "react-redux";
import { getButtonSettings } from "../../../context/slices/buttonSettings";

const ButtonRSC = () => {
  const button = useSelector(getButtonSettings);

  const code = (name) => {
    switch (name) {
      case "normal":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              {button.colors.c1 === button.colors.c2 ? (<span>background-color: {'${({ bgPrimary }) => bgPrimary || "#fff"}'};</span>) : (<span>background: {'linear-gradient(90deg, ${({ bgPrimary }) => bgPrimary}, ${({ bgSecondary }) => bgSecondary}'};</span>)}
              <span>color: {'${({ color }) => color || "#000000"}'};</span>
              <span>width: {'${({ width }) => width || "150px"}'};</span>
              <span>height: {'${({ height }) => height || "50px"}'};</span>
              <span>border-radius: {'${({ radius }) => radius || "4px"}'};</span>
              <span>border-style: {'${({ borderStyle }) => borderStyle || "none"}'};</span>
              <span>border: {'${({ border }) => border || "0px"}'};</span>
              <span>cursor: pointer;</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              {button.colors.c1 !== button.colors.c2 && <span>bgSecondary="{button.colors.c2}"</span>}
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>borderStyle="{button.border.type}"</span>
              <span> border="{button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px"</span>
              <span> radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "normal-hover":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background-color: transparent;</span>
              <span>color: {'${({ color }) => color || "#000000"}'};</span>
              <span>width: {'${({ width }) => width || "150px"}'};</span>
              <span>height: {'${({ height }) => height || "50px"}'};</span>
              <span>border-radius: {'${({ radius }) => radius || "4px"}'};</span>
              <span>border-style: {'${({ borderStyle }) => borderStyle || "none"}'};</span>
              <span>border: {'${({ border }) => border || "0px"}'};</span>
              <span>transition: all 250ms ease-in-out;</span>
              <span>cursor: pointer;</span>
              <span>{`&:hover {`}</span>
                {button.colors.c1 === button.colors.c2 ? (<span>background-color: {'${({ bgPrimary }) => bgPrimary || "#fff"}'};</span>) : (<span>background: {'linear-gradient(90deg, ${({ bgPrimary }) => bgPrimary}, ${({ bgSecondary }) => bgSecondary}'};</span>)}
                <span>color: #000;</span>
                <span>transition: all 250ms ease-in-out;</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              {button.colors.c1 !== button.colors.c2 && <span>bgSecondary="{button.colors.c2}"</span>}
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>borderStyle="{button.border.type}"</span>
              <span>border="{button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px"</span>
              <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "neograd":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background:{"linear-gradient(60deg, ${({ bgPrimary }) => bgPrimary}, ${({ bgSecondary }) => bgSecondary});"}</span>
              <span>color: {'"#000000"'};</span>
              <span>text-align: center;</span>
              <span>width: {'${({ width }) => width || "150px"}'};</span>
              <span>height: {'${({ height }) => height || "50px"}'};</span>
              <span>box-shadow: {'-5px -5px 40px ${({ bgPrimary }) => bgPrimary || "#fff"}, 5px 5px 40px ${({ bgSecondary }) => bgSecondary || "#fff"};'}</span>
              <span>border-radius: {'${({ radius }) => radius || "4px"}'};</span>
              <span>border-style: {'${({ borderStyle }) => borderStyle || "none"}'};</span>
              <span>border: {'${({ border }) => border || "0px"}'};</span>
              <span>transition: all 250ms ease-in-out;</span>
              <span>cursor: pointer;</span>
              <span>{`&:hover {`}</span>
                <span>background: transparent;</span>
                <span>box-shadow: {'-5px 0px 10px ${({ bgPrimary }) => bgPrimary || "#fff"}, 5px 0px 10px ${({ bgSecondary }) => bgSecondary || "#fff"};'}</span>
                <span>color: {'${({ bgPrimary }) => bgPrimary || "#000000"};'}</span>
                <span>transition: all 250ms ease-in-out;</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              <span>bgSecondary="{button.colors.c2}" </span>
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>borderStyle="{button.border.type}"</span>
              <span>border="{button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px"</span>
              <span> radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "neograd-reverse":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background: transparent;</span>
              <span>color: {'${({ bgPrimary }) => bgPrimary || "#000"};'}</span>
              <span>text-align: center;</span>
              <span>width: {'${({ width }) => width || "150px"}'};</span>
              <span>height: {'${({ height }) => height || "50px"}'};</span>
              <span>box-shadow: {'-5px 0px 10px ${({ bgPrimary }) => bgPrimary || "#fff"}, 5px 0px 10px ${({ bgSecondary }) => bgSecondary || "#fff"};'}</span>
              <span>border-radius: {'${({ radius }) => radius || "4px"}'};</span>
              <span>border-style: {'${({ borderStyle }) => borderStyle || "none"}'};</span>
              <span>border: {'${({ border }) => border || "0px"}'};</span>
              <span>transition: all 250ms ease-in-out;</span>
              <span>cursor: pointer;</span>
              <span>{`&:hover {`}</span>
                <span>background: {"linear-gradient(60deg, ${({ bgPrimary }) => bgPrimary}, ${({ bgSecondary }) => bgSecondary});"}</span>
                <span>box-shadow: {'-5px -5px 40px ${({ bgPrimary }) => bgPrimary || "#fff"}, 5px 5px 40px ${({ bgSecondary }) => bgSecondary || "#fff"};'}</span>
                <span>color: {'"#000000";'}</span>
                <span>transition: all 250ms ease-in-out;</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              <span>bgSecondary="{button.colors.c2}" </span>
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>borderStyle="{button.border.type}"</span>
              <span>border="{button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px"</span>
              <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "gradient":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background: {"linear-gradient(60deg, ${({ bgPrimary }) => bgPrimary}, ${({ bgSecondary }) => bgSecondary});"}</span>
              <span>color: {'"#000"'};</span>
              <span>width: {'${({ width }) => width || "150px"}'};</span>
              <span>height: {'${({ height }) => height || "50px"}'};</span>
              <span>box-shadow: {'1px 1px 10px ${({ bgPrimary }) => bgPrimary || "#fff"} inset, 0 0 10px 3px ${({ bgSecondary }) => bgSecondary || "#fff"};'}</span>
              <span>border: {'${({ border }) => border || "0px"}'};</span>
              <span>border-style: {'${({ borderStyle }) => borderStyle || "none"}'};</span>
              <span>border-radius: {'${({ radius }) => radius || "4px"}'};</span>
              <span>transition: all 250ms ease-in-out;</span>
              <span>cursor: pointer;</span>
              <span>{`&:hover {`}</span>
                <span>box-shadow: {"inset -3px 3px 10px ${({ bgPrimary }) => bgPrimary}, inset 3px -3px 10px ${({ bgSecondary }) => bgSecondary}"};</span>
                <span>transition: all 250ms ease-in-out;</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              <span>bgSecondary="{button.colors.c2}" </span>
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>borderStyle="{button.border.type}"</span>
              <span>border="{button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px"</span>
              <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "gradient-radial":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background: {"radial-gradient(${({ bgPrimary }) => bgPrimary}, ${({ bgSecondary }) => bgSecondary});"}</span>
              <span>color: {'"#000"'};</span>
              <span>width: {'${({ width }) => width || "150px"}'};</span>
              <span>height: {'${({ height }) => height || "50px"}'};</span>
              <span>border: {'${({ border }) => border || "0px"}'};</span>
              <span>border-style: {'${({ borderStyle }) => borderStyle || "none"}'};</span>
              <span>border-radius: {'${({ radius }) => radius || "4px"}'};</span>
              <span>transition: all 250ms ease-in-out;</span>
              <span>cursor: pointer;</span>
              <span>{`&:hover {`}</span>
                <span>box-shadow:{"inset -3px 3px 10px ${({ bgPrimary }) => bgPrimary}, inset 3px -3px 10px ${({ bgSecondary }) => bgSecondary}"};</span>
                <span>transition: all 250ms ease-in-out;</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              <span>bgSecondary="{button.colors.c2}" </span>
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>borderStyle="{button.border.type}"</span>
              <span>border="{button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px"</span>
              <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "neon":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background: {"linear-gradient(60deg, ${({ bgPrimary }) => bgPrimary}, ${({ bgSecondary }) => bgSecondary});"}</span>
              <span>color: {'"#000"'};</span>
              <span>width: {'${({ width }) => width || "150px"}'};</span>
              <span>height: {'${({ height }) => height || "50px"}'};</span>
              <span>box-shadow: {"0 0 5px ${({ bgPrimary }) => bgPrimary}, 0 0 25px ${({ bgPrimary }) => bgPrimary}, 0 0 5px ${({ bgSecondary }) => bgSecondary}, 0 0 25px ${({ bgSecondary }) => bgSecondary};"}</span>
              <span>border: {'${({ border }) => border || "0px"}'};</span>
              <span>border-style: {'${({ borderStyle }) => borderStyle || "none"}'};</span>
              <span>border-radius: {'${({ radius }) => radius || "4px"}'};</span>
              <span>transition: all 250ms ease-in-out;</span>
              <span>cursor: pointer;</span>
              <span>{`&:hover {`}</span>
                <span>box-shadow: {"0 0 5px ${({ bgPrimary }) => bgPrimary}, 0 0 25px ${({ bgPrimary }) => bgPrimary}, 0 0 50px ${({ bgPrimary }) => bgPrimary}, 0 0 5px ${({ bgSecondary }) => bgSecondary}, 0 0 25px ${({ bgSecondary }) => bgSecondary}, 0 0 50px ${({ bgSecondary }) => bgSecondary}"};</span>
                <span>transition: all 250ms ease-in-out;</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              <span>bgSecondary="{button.colors.c2}" </span>
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>borderStyle="{button.border.type}"</span>
              <span>border="{button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px"</span>
              <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "neon-border":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background: transparent;</span>
              <span>color: {"${({ bgPrimary }) => bgPrimary};"}</span>
              <span>width: {'${({ width }) => width || "150px"}'};</span>
              <span>height: {'${({ height }) => height || "50px"}'};</span>
              <span>box-shadow: {"0 0 15px ${({ bgPrimary }) => bgPrimary}, 0 0 15px 3px ${({ bgSecondary }) => bgSecondary};"}</span>
              <span>border: {'${({ border }) => border || "0px"}'};</span>
              <span>border-style: {'${({ borderStyle }) => borderStyle || "none"}'};</span>
              <span>border-radius: {'${({ radius }) => radius || "4px"}'};</span>
              <span>transition: all 250ms ease-in-out;</span>
              <span>cursor: pointer;</span>
              <span>{`&:hover {`}</span>
                <span>box-shadow: {"0 0 10px ${({ bgPrimary }) => bgPrimary}, 0 0 10px 3px ${({ bgSecondary }) => bgSecondary} inset"};</span>
                <span>transition: all 250ms ease-in-out;</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              <span>bgSecondary="{button.colors.c2}" </span>
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>borderStyle="{button.border.type}"</span>
              <span>border="{button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px"</span>
              <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
             <span>{"> Text </Button>"}</span>
          </div>
        );
      case "neon-reflex":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background:{"linear-gradient(45deg, ${({ bgPrimary }) => bgPrimary}, ${({ bgSecondary }) => bgSecondary});"}</span>
              <span>color: {"#000"}</span>
              <span>width: {'${({ width }) => width || "150px"}'};</span>
              <span>height: {'${({ height }) => height || "50px"}'};</span>
              <span>border: {'${({ border }) => border || "0px"}'};</span>
              <span>border-style: {'${({ borderStyle }) => borderStyle || "none"}'};</span>
              <span>border-radius: {'${({ radius }) => radius || "4px"}'};</span>
              <span>letter-spacing: 4px;</span>
              <span>-webkit-box-reflect: below 1px linear-gradient(transparent,#0005);</span>
              <span>transition: all 250ms ease-in-out;</span>
              <span>cursor: pointer;</span>
              <span>{`&:hover {`}</span>
                <span>color: #000;</span>
                <span>box-shadow:{"0 0 5px ${({ bgPrimary }) => bgPrimary}, 0 0 25px ${({ bgPrimary }) => bgPrimary}, 0 0 50px ${({ bgPrimary }) => bgPrimary}, 0 0 5px ${({ bgSecondary }) => bgSecondary}, 0 0 25px ${({ bgSecondary }) => bgSecondary}, 0 0 50px ${({ bgSecondary }) => bgSecondary};"}</span>
                <span>transition: all 250ms ease-in-out;</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              <span>bgSecondary="{button.colors.c2}" </span>
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>borderStyle="{button.border.type}"</span>
              <span>border="{button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px"</span>
              <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "border-move":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background: transparent;</span>
              <span>color: {'${({ bgPrimary }) => bgPrimary || "#fff"};'}</span>
              <span>width: {'${({ width }) => width || "150px"}'};</span>
              <span>height: {'${({ height }) => height || "50px"}'};</span>
              <span>border: {"none"};</span>
              <span>border-radius: {'${({ radius }) => radius || "4px"}'};</span>
              <span>overflow: hidden;</span>
              <span>cursor: pointer;</span>
              <span>position: relative;</span>
              <span>{"&::before {"}</span>
                <span>content: "";</span>
                <span>position: absolute;</span>
                <span>top: 0;</span>
                <span>left: 0;</span>
                <span>width: 10px;</span>
                <span>height: 10px;</span>
                <span>border-top: 2px {'${({ borderStyle }) => borderStyle || "solid"} ${({ bgPrimary }) => bgPrimary};'}</span>
                <span>border-left: 2px {'${({ borderStyle }) => borderStyle || "solid"} ${({ bgPrimary }) => bgPrimary};'}</span>
                <span>border-radius: inherit;</span>
                <span>transition: all 250ms ease-in-out;</span>
              <span>{"}"}</span>
              <span>{"&::after {"}</span>
                <span>content: "";</span>
                <span>position: absolute;</span>
                <span>bottom: 0;</span>
                <span>right: 0;</span>
                <span>width: 10px;</span>
                <span>height: 10px;</span>
                <span>border-bottom: 2px {'${({ borderStyle }) => borderStyle || "solid"} ${({ bgPrimary }) => bgPrimary};'}</span>
                <span>border-right: 2px {'${({ borderStyle }) => borderStyle || "solid"} ${({ bgPrimary }) => bgPrimary};'}</span>
                <span>border-radius: inherit;</span>
                <span>transition: all 250ms ease-in-out;</span>
              <span>{"}"}</span>
              <span>{"&:hover::before,"}</span>
              <span>{"&:hover::after {"}</span>
                <span>width: 100%;</span>
                <span>height: 100%;</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              <span>bgSecondary="{button.colors.c2}" </span>
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>borderStyle="{button.border.type}"</span>
              <span>border="{button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px"</span>
              <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "border-move-light":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background: transparent;</span>
              <span>color: {'${({ bgPrimary }) => bgPrimary || "#fff"};'}</span>
              <span>width: {'${({ width }) => width || "150px"}'};</span>
              <span>height: {'${({ height }) => height || "50px"}'};</span>
              <span>border: {"none"};</span>
              <span>border-radius: {'${({ radius }) => radius || "4px"}'};</span>
              <span>overflow: hidden;</span>
              <span>cursor: pointer;</span>
              <span>position: relative;</span>
              <span>{"&:hover {"}</span>
                <span>background: {"${({ bgPrimary }) => bgPrimary};"}</span>
                <span>box-shadow: {"0 0 20px ${({ bgPrimary }) => bgPrimary};"}</span>
                <span>border: none;</span>
                <span>color: #000000;</span>
                <span>transition-delay: 0.25s;</span>
              <span>{"}"}</span>
              <span>{"&::before {"}</span>
                <span>content: "";</span>
                <span>position: absolute;</span>
                <span>top: 0;</span>
                <span>left: 0;</span>
                <span>width: 10px;</span>
                <span>height: 10px;</span>
                <span>border-top: 2px {'${({ borderStyle }) => borderStyle || "solid"} ${({ bgPrimary }) => bgPrimary};'}</span>
                <span>border-left: 2px {'${({ borderStyle }) => borderStyle || "solid"} ${({ bgPrimary }) => bgPrimary};'}</span>
                <span>border-radius: inherit;</span>
                <span>transition: all 500ms ease-in-out;</span>
              <span>{"}"}</span>
              <span>{"&::after {"}</span>
                <span>content: "";</span>
                <span>position: absolute;</span>
                <span>bottom: 0;</span>
                <span>right: 0;</span>
                <span>width: 10px;</span>
                <span>height: 10px;</span>
                <span>border-bottom: 2px {'${({ borderStyle }) => borderStyle || "solid"} ${({ bgPrimary }) => bgPrimary};'}</span>
                <span>border-right: 2px {'${({ borderStyle }) => borderStyle || "solid"} ${({ bgPrimary }) => bgPrimary};'}</span>
                <span>border-radius: inherit;</span>
                <span>transition: all 250ms ease-in-out;</span>
              <span>{"}"}</span>
              <span>{"&:hover::before,"}</span>
              <span>{"&:hover::after {"}</span>
                <span>width: 100%;</span>
                <span>height: 100%;</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              <span>bgSecondary="{button.colors.c2}" </span>
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>borderStyle="{button.border.type}"</span>
              <span>border="{button.border.top}px {button.border.right}px {button.border.bottom}px {button.border.left}px"</span>
              <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "slide-left":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background: transparent;</span>
              <span>color: {'${({ bgPrimary }) => bgPrimary || "#fff"};'}</span>
              <span>text-align: center;</span>
              <span>width: {"${({ width }) => width};"}</span>
              <span>height: {"${({ height }) => height};"}</span>
              <span>border: none;</span>
              <span>border-radius: {"${({ radius }) => radius};"}</span>
              <span>box-shadow: {"0px 0px 5px ${({ bgPrimary }) => bgPrimary};"}</span>
              <span>overflow: hidden;</span>
              <span>transition: all 0.25s ease-in-out;</span>
              <span>cursor: pointer;</span>
              <span>position: relative;</span>
              <span>z-index: 1;</span>
              <span>{"&::after {"}</span>
                <span>position: absolute;</span>
                <span>content: "";</span>
                <span>top: 0;</span>
                <span>left: 0;</span>
                <span>width: 0;</span>
                <span>height: 100%;</span>
                <span>transition: all 1s;</span>
                <span>border-radius: inherit;</span>
                <span>background: {"linear-gradient(60deg, ${({ bgPrimary }) => bgPrimary} 0%, ${({ bgSecondary }) => bgSecondary} 100%);"}</span>
                <span>z-index: -1;</span>
              <span>{"}"}</span>
              <span>{"&:hover {"}</span>
                <span>color: #000;</span>
              <span>{"}"}</span>
              <span>{"&:hover::after {"}</span>
                <span>width: 100%;</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              <span>bgSecondary="{button.colors.c2}" </span>
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "slide-right":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background: transparent;</span>
              <span>color: {'${({ bgPrimary }) => bgPrimary || "#fff"};'}</span>
              <span>text-align: center;</span>
              <span>width: {"${({ width }) => width};"}</span>
              <span>height: {"${({ height }) => height};"}</span>
              <span>border: none;</span>
              <span>border-radius: {"${({ radius }) => radius};"}</span>
              <span>box-shadow: {"0px 0px 5px ${({ bgPrimary }) => bgPrimary};"}</span>
              <span>overflow: hidden;</span>
              <span>transition: all 0.25s ease-in-out;</span>
              <span>cursor: pointer;</span>
              <span>position: relative;</span>
              <span>z-index: 1;</span>
              <span>{"&::after {"}</span>
                <span>position: absolute;</span>
                <span>content: "";</span>
                <span>top: 0;</span>
                <span>right: 0;</span>
                <span>width: 0;</span>
                <span>height: 100%;</span>
                <span>transition: all 1s;</span>
                <span>border-radius: inherit;</span>
                <span>background: {"linear-gradient(60deg, ${({ bgPrimary }) => bgPrimary} 0%, ${({ bgSecondary }) => bgSecondary} 100%);"}</span>
                <span>z-index: -1;</span>
              <span>{"}"}</span>
              <span>{"&:hover {"}</span>
                <span>color: #000;</span>
              <span>{"}"}</span>
              <span>{"&:hover::after {"}</span>
                <span>width: 100%;</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              <span>bgSecondary="{button.colors.c2}" </span>
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "slide-down":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background: transparent;</span>
              <span>color: {'${({ bgPrimary }) => bgPrimary || "#fff"};'}</span>
              <span>text-align: center;</span>
              <span>width: {"${({ width }) => width};"}</span>
              <span>height: {"${({ height }) => height};"}</span>
              <span>border: none;</span>
              <span>border-radius: {"${({ radius }) => radius};"}</span>
              <span>box-shadow: {"0px 0px 5px ${({ bgPrimary }) => bgPrimary};"}</span>
              <span>overflow: hidden;</span>
              <span>transition: all 0.25s ease-in-out;</span>
              <span>cursor: pointer;</span>
              <span>position: relative;</span>
              <span>z-index: 1;</span>
              <span>{"&::after {"}</span>
                <span>position: absolute;</span>
                <span>content: "";</span>
                <span>bottom: 0;</span>
                <span>left: 0;</span>
                <span>width: 100%;</span>
                <span>height: 0;</span>
                <span>transition: all 1s;</span>
                <span>border-radius: inherit;</span>
                <span>background: {"linear-gradient(60deg, ${({ bgPrimary }) => bgPrimary} 0%, ${({ bgSecondary }) => bgSecondary} 100%);"}</span>
                <span>z-index: -1;</span>
              <span>{"}"}</span>
              <span>{"&:hover {"}</span>
                <span>color: #000;</span>
              <span>{"}"}</span>
              <span>{"&:hover::after {"}</span>
                <span>height: 100%;</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              <span>bgSecondary="{button.colors.c2}" </span>
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "slide-up":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background: transparent;</span>
              <span>color: {'${({ bgPrimary }) => bgPrimary || "#fff"};'}</span>
              <span>text-align: center;</span>
              <span>width: {"${({ width }) => width};"}</span>
              <span>height: {"${({ height }) => height};"}</span>
              <span>border: none;</span>
              <span>border-radius: {"${({ radius }) => radius};"}</span>
              <span>box-shadow: {"0px 0px 5px ${({ bgPrimary }) => bgPrimary};"}</span>
              <span>overflow: hidden;</span>
              <span>transition: all 0.25s ease-in-out;</span>
              <span>cursor: pointer;</span>
              <span>position: relative;</span>
              <span>z-index: 1;</span>
              <span>{"&::after {"}</span>
                <span>position: absolute;</span>
                <span>content: "";</span>
                <span>top: 0;</span>
                <span>left: 0;</span>
                <span>width: 100%;</span>
                <span>height: 0;</span>
                <span>transition: all 1s;</span>
                <span>border-radius: inherit;</span>
                <span>background: {"linear-gradient(60deg, ${({ bgPrimary }) => bgPrimary} 0%, ${({ bgSecondary }) => bgSecondary} 100%);"} </span>
                <span>z-index: -1;</span>
              <span>{"}"}</span>
              <span>{"&:hover {"}</span>
                <span>color: #000;</span>
              <span>{"}"}</span>
              <span>{"&:hover::after {"}</span>
                <span>height: 100%;</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
            <span>bgPrimary="{button.colors.c1}"</span>
            <span>bgSecondary="{button.colors.c2}" </span>
            <span>width="{button.sizes.width}px"</span>
            <span>height="{button.sizes.height}px"</span>
            <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "slide-circle":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background: transparent;</span>
              <span>color: {'${({ bgPrimary }) => bgPrimary || "#fff"};'}</span>
              <span>text-align: center;</span>
              <span>width: {"${({ width }) => width};"}</span>
              <span>height: {"${({ height }) => height};"}</span>
              <span>border: none;</span>
              <span>border-radius: {"${({ radius }) => radius};"}</span>
              <span>box-shadow: {"0px 0px 5px ${({ bgPrimary }) => bgPrimary};"}</span>
              <span>overflow: hidden;</span>
              <span>transition: all 0.25s ease-in-out;</span>
              <span>cursor: pointer;</span>
              <span>position: relative;</span>
              <span>z-index: 1;</span>
              <span>{"&::after {"}</span>
                <span>position: absolute;</span>
                <span>content: "";</span>
                <span>top: 50%;</span>
                <span>left: 50%;</span>
                <span>transform: translate(-50%, -50%);</span>
                <span>width: 0;</span>
                <span>height: 0;</span>
                <span>transition: all 0.5s ease-in-out;</span>
                <span>border-radius: 100%;</span>
                <span>background: {"radial-gradient(${({ bgPrimary }) => bgPrimary}, ${({ bgSecondary }) => bgSecondary});"}</span>
                <span>z-index: -1;</span>
              <span>{"}"}</span>
              <span>{"&:hover {"}</span>
                <span>box-shadow: {"0px 0px 10px ${({ bgPrimary }) => bgPrimary};"}</span>
                <span>color: #000;</span>
              <span>{"&::after {"}</span>
                <span>height: 300px;</span>
                <span>width: 300px;</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              <span>bgSecondary="{button.colors.c2}" </span>
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "behind-border":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background: {'${({ bgPrimary }) => bgPrimary || "#fff"};'}</span>
              <span>color: {"#000"};</span>
              <span>width: {"${({ width }) => width};"}</span>
              <span>height: {"${({ height }) => height};"}</span>
              <span>border: none;</span>
              <span>border-radius: {"${({ radius }) => radius};"}</span>
              <span>transition: all 0.25s ease-in-out;</span>
              <span>cursor: pointer;</span>
              <span>position: relative;</span>
              <span>z-index: 1;</span>
              <span>{"&::after,"}</span>
              <span>{"&::before {"}</span>
                <span>position: absolute;</span>
                <span>content: "";</span>
                <span>top: 0;</span>
                <span>left: 0;</span>
                <span>width: 100%;</span>
                <span>height: 100%;</span>
                <span>opacity: 0.5;</span>
                <span>transition: all 250ms ease-in-out;</span>
                <span>border-radius: inherit;</span>
                <span>z-index: -1;</span>
              <span>{"}"}</span>
              <span>{"&:hover {"}</span>
                <span>top: 0;</span>
                <span>left: 0;</span>
                <span>transition: all 250ms ease-in;</span>
              <span>{"&::before {"}</span>
                <span>top: -15px;</span>
                <span>left: 15px;</span>
                <span>transition: all 350ms ease-in;</span>
                <span>border: {"2px solid ${({ bgPrimary }) => bgPrimary};"}</span>
                <span>box-shadow: {"0 0 20px ${({ bgPrimary }) => bgPrimary};"}</span>
              <span>{"}"}</span>
              <span>{"&::after {"}</span>
                <span>top: 15px;</span>
                <span>left: -15px;</span>
                <span>transition: all 350ms ease-in;</span>
                <span>border: {"2px solid ${({ bgPrimary }) => bgPrimary};"}</span>
                <span>box-shadow: {"0 0 20px ${({ bgPrimary }) => bgPrimary};"}</span>
              <span>{"}"}</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              <span>bgSecondary="{button.colors.c2}" </span>
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "behind-shadow":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}
            </span>
              <span>background: {'${({ bgPrimary }) => bgPrimary || "#fff"};'}</span>
              <span>color: {"#000"};</span>
              <span>width: {"${({ width }) => width};"}</span>
              <span>height: {"${({ height }) => height};"}</span>
              <span>border: none;</span>
              <span>border-radius: {"${({ radius }) => radius};"}</span>
              <span>transition: all 0.25s ease-in-out;</span>
              <span>cursor: pointer;</span>
              <span>position: relative;</span>
              <span>z-index: 1;</span>
              <span>{"&::after,"}</span>
              <span>{"&::before {"}</span>
                <span>position: absolute;</span>
                <span>content: "";</span>
                <span>top: 0;</span>
                <span>left: 0;</span>
                <span>width: 100%;</span>
                <span>height: 100%;</span>
                <span>opacity: 0.5;</span>
                <span>transition: all 250ms ease-in-out;</span>
                <span>border-radius: inherit;</span>
                <span>z-index: -1;</span>
              <span>{"}"}</span>
              <span>{"&:hover {"}</span>
                <span>top: 0;</span>
                <span>left: 0;</span>
                <span>transition: all 250ms ease-in;</span>
              <span>{"&::before {"}</span>
                <span>top: -15px;</span>
                <span>left: 15px;</span>
                <span>transition: all 350ms ease-in;</span>
                <span>background: {"${({ bgPrimary }) => bgPrimary};"}</span>
                <span>box-shadow: {"0 0 20px ${({ bgPrimary }) => bgPrimary};"}</span>
              <span>{"}"}</span>
              <span>{"&::after {"}</span>
                <span>top: 15px;</span>
                <span>left: -15px;</span>
                <span>transition: all 350ms ease-in;</span>
                <span>background: {"${({ bgSecondary }) => bgSecondary};"}</span>
                <span>box-shadow: {"0 0 20px ${({ bgSecondary }) => bgSecondary};"}</span>
              <span>{"}"}</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              <span>bgSecondary="{button.colors.c2}" </span>
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "hide-border":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background: {"transparent;"}</span>
              <span>color: {"${({ bgPrimary }) => bgPrimary};"}</span>
              <span>line-height: {'${({ height }) => height || "50px"};'}</span>
              <span>width: {"${({ width }) => width};"}</span>
              <span>height: {"${({ height }) => height};"}</span>
              <span>border: none;</span>
              <span>transition: all 0.25s ease-in-out;</span>
              <span>cursor: pointer;</span>
              <span>{"&::after,"}</span>
              <span>{"&::before {"}</span>
                <span>border: 1px solid {"${({ bgPrimary }) => bgPrimary};"}</span>
                <span>bottom: 0px;</span>
                <span>content: " ";</span>
                <span>display: block;</span>
                <span>margin: 0 auto;</span>
                <span>position: relative;</span>
                <span>transition: all 350ms ease-in-out;</span>
                <span>width: 0;</span>
              <span>{"}"}</span>
              <span>{"&:hover::after,"}</span>
              <span>{"&:hover::before {"}</span>
                <span>border-color: {"${({ bgPrimary }) => bgPrimary};"}</span>
                <span>transition: width 350ms ease-in-out;</span>
                <span>width: 100%;</span>
              <span>{"}"}</span>
              <span>{"&:hover::before {"}</span>
                <span>bottom: auto;</span>
                <span>top: 0;</span>
                <span>width: 100%;</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              <span>bgSecondary="{button.colors.c2}" </span>
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "surround-border":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background: {"${({ bgPrimary }) => bgPrimary};"}</span>
              <span>color: {"#000"}</span>
              <span>width: {"${({ width }) => width};"}</span>
              <span>height: {"${({ height }) => height};"}</span>
              <span>border: none;</span>
              <span>transition: all 0.25s ease-in-out;</span>
              <span>cursor: pointer;</span>
              <span>position: relative;</span>
              <span>{"&::before {"}</span>
                <span>position: absolute;</span>
                <span>content: "";</span>
                <span>border-radius: inherit;</span>
                <span>width: 0;</span>
                <span>height: 0;</span>
                {button.colors.c1 === button.colors.c2 ? (<span>border: {"5px solid ${({ bgPrimary }) => bgPrimary};"}</span>) : (<span>border: {"5px solid ${({ bgSecondary }) => bgSecondary};"}</span>)}
                <span>top: 50%;</span>
                <span>left: 50%;</span>
                <span>transform: translate(-50%, -50%);</span>
                <span>opacity: 0;</span>
                <span>transition: all 0.3s ease-in-out 0s;</span>
              <span>{"}"}</span>
              <span>{"&:hover::before {"}</span>
                <span>opacity: 1;</span>
                <span>width: 115%;</span>
                <span>height: 130%;</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
            <span>bgPrimary="{button.colors.c1}"</span>
            {button.colors.c1 !== button.colors.c2 && <span>bgSecondary="{button.colors.c2}" </span>}
            <span>width="{button.sizes.width}px"</span>
            <span>height="{button.sizes.height}px"</span>
            <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
      case "half-move":
        return (
          <div className="codeBox__snippet">
            <span className="codeBox__snippet-comment">//Styled components code</span>
            <span className="codeBox__snippet-title">{`import styled from 'styled-components';`}</span>
            <br />
            <span className="codeBox__snippet-title">{"export const Button = styled.button`"}</span>
              <span>background: transparent;</span>
              <span>color: #fff;</span>
              <span>margin: 0 auto;</span>
              <span>width: {"${({ width }) => width};"}</span>
              <span>height: {"${({ height }) => height};"}</span>
              <span>outline: none;</span>
              <span>border: none;</span>
              <span>border-radius: {"${({ radius }) => radius};"}</span>
              <span>cursor: pointer;</span>
              <span>z-index: 1;</span>
              <span>position: relative;</span>
              <span>{"&::before,"}</span>
              <span>{"&::after {"}</span>
                <span>content: "";</span>
                <span>position: absolute;</span>
                <span>height: 100%;</span>
                <span>width: 50%;</span>
                <span>transform: skewX(30deg);</span>
                <span>transition: all 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);</span>
                <span>background: {"${({ bgPrimary }) => bgPrimary};"}</span>
                <span>z-index: -1;</span>
              <span>{"}"}</span>
              <span>{"&::before {"}</span>
                <span>top: -20%;</span>
                <span>left: 0rem;</span>
                <span>background: {"${({ bgPrimary }) => bgPrimary};"}</span>
              <span>{"}"}</span>
              <span>{"&::after {"}</span>
                <span>top: 20%;</span>
                <span>left: 50%;</span>
                <span>background: {"${({ bgSecondary }) => bgSecondary};"}</span>
              <span>{"}"}</span>
              <span>{"&:hover {"}</span>
              <span>{"&::before, "}</span>
              <span>{"&::after {"}</span>
                <span>top: 0;</span>
                <span>transform: skewx(0deg);</span>
              <span>{"}"}</span>
              <span>{"&::after {"}</span>
                <span>left: 0;</span>
              <span>{"}"}</span>
              <span>{"&::before {"}</span>
                <span>left: 50%;</span>
              <span>{"}"}</span>
              <span>{"}"}</span>
            <span className="codeBox__snippet-title">{"`;"}</span>
            <br />
            <br />
            <span className="codeBox__snippet-comment">//React button</span>
            <span className="codeBox__snippet-title">{`<Button`}</span>
              <span>bgPrimary="{button.colors.c1}"</span>
              <span>bgSecondary="{button.colors.c2}" </span>
              <span>width="{button.sizes.width}px"</span>
              <span>height="{button.sizes.height}px"</span>
              <span>radius="{button.radius.top}px {button.radius.right}px {button.radius.bottom}px {button.radius.left}px"</span>
            <span>{"> Text </Button>"}</span>
          </div>
        );
    }
  };
  return <div className="codeBox">{code(button.name)}</div>;
};

export default ButtonRSC;
