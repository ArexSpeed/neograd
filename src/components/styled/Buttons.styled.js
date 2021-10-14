import styled from 'styled-components';

export const NormalButton = styled.button`
  background-color: ${({ bgPrimary }) => bgPrimary || '#fff'};
  color: ${({ color }) => color || '#000000'};
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  border-radius: ${({ radius }) => radius || '4px'};
  border-style: ${({ borderStyle }) => borderStyle || 'none'};
  border: ${({ border }) => border || '0px'};
  cursor: pointer;
`;

export const NormalHoverButton = styled.button`
  background-color: transparent;
  color: ${({ bgPrimary }) => bgPrimary};
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  border: ${({ border }) => border || '0px'};
  border-color: ${({ bgPrimary }) => bgPrimary || '#fff'};
  border-style: ${({ borderStyle }) => borderStyle || 'none'};
  border-radius: ${({ radius }) => radius || '4px'};
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ bgPrimary }) => bgPrimary || '#fff'};
    color: #000;
    transition: all 250ms ease-in-out;
  }
`;

export const NeogradButton = styled.button`
  background: linear-gradient(60deg, ${({ bgPrimary }) => bgPrimary}, ${({ bgSecondary }) => bgSecondary});
  color: #000;
  text-align: center;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  box-shadow: 1px 1px 40px ${({ bgPrimary }) => bgPrimary || '#fff'} inset;
  border: ${({ border }) => border || '0px'};
  border-style: ${({ borderStyle }) => borderStyle || 'none'};
  border-radius: ${({ radius }) => radius || '4px'};
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px 0 ${({ bgPrimary }) => bgPrimary || '#fff'} inset, 0 0 10px 3px ${({ bgSecondary }) => bgSecondary || '#fff'};
    background: transparent;
    color: ${({ bgPrimary }) => bgPrimary || '#000000'};
  }
`;

export const NeogradReverseButton = styled.button`
  background: transparent;
  color: ${({ bgPrimary }) => bgPrimary || '#000'};
  text-align: center;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  box-shadow: 0 0 10px 0 ${({ bgPrimary }) => bgPrimary || '#fff'} inset, 0 0 10px 3px ${({ bgSecondary }) => bgSecondary || '#fff'};
  border: ${({ border }) => border || '0px'};
  border-style: ${({ borderStyle }) => borderStyle || 'none'};
  border-radius: ${({ radius }) => radius || '4px'};
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    background: linear-gradient(60deg, ${({ bgPrimary }) => bgPrimary}, ${({ bgSecondary }) => bgSecondary});
    box-shadow: 1px 1px 40px ${({ bgPrimary }) => bgPrimary || '#fff'} inset;
    color: #000;
  }
`

export const GradientButton = styled.button`
  background: linear-gradient(60deg, ${({ bgPrimary }) => bgPrimary}, ${({ bgSecondary }) => bgSecondary});
  color: #000;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  border: ${({ border }) => border || '0px'};
  border-style: ${({ borderStyle }) => borderStyle || 'none'};
  border-radius: ${({ radius }) => radius || '4px'};
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: inset -3px 3px 10px ${({ bgPrimary }) => bgPrimary},
                inset 3px -3px 10px ${({ bgSecondary }) => bgSecondary}
  }
`;

export const GradientRadialButton = styled.button`
  background: radial-gradient(${({ bgPrimary }) => bgPrimary}, ${({ bgSecondary }) => bgSecondary});
  color: #000;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  border: ${({ border }) => border || '0px'};
  border-style: ${({ borderStyle }) => borderStyle || 'none'};
  border-radius: ${({ radius }) => radius || '4px'};
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: inset -3px 3px 10px ${({ bgPrimary }) => bgPrimary},
                inset 3px -3px 10px ${({ bgSecondary }) => bgSecondary}
  }
`;

export const NeonButton = styled.button`
  background: linear-gradient(60deg, ${({ bgPrimary }) => bgPrimary}, ${({ bgSecondary }) => bgSecondary});
  color: #000;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  box-shadow: 0 0 5px ${({ bgPrimary }) => bgPrimary}, 0 0 25px ${({ bgPrimary }) => bgPrimary},
      0 0 5px ${({ bgSecondary }) => bgSecondary}, 0 0 25px ${({ bgSecondary }) => bgSecondary};
  border: ${({ border }) => border || '0px'};
  border-style: ${({ borderStyle }) => borderStyle || 'none'};
  border-radius: ${({ radius }) => radius || '4px'};
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px ${({ bgPrimary }) => bgPrimary}, 0 0 25px ${({ bgPrimary }) => bgPrimary}, 0 0 50px ${({ bgPrimary }) => bgPrimary},
      0 0 5px ${({ bgSecondary }) => bgSecondary}, 0 0 25px ${({ bgSecondary }) => bgSecondary}, 0 0 50px ${({ bgSecondary }) => bgSecondary};
  }
`;

export const NeonBorderButton = styled.button`
  background: transparent;
  color: ${({ bgPrimary }) => bgPrimary};
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  box-shadow: 0 0 15px ${({ bgPrimary }) => bgPrimary}, 0 0 15px 3px ${({ bgSecondary }) => bgSecondary} inset;
  border: ${({ border }) => border || '0px'};
  border-style: ${({ borderStyle }) => borderStyle || 'none'};
  border-radius: ${({ radius }) => radius || '4px'};
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px ${({ bgPrimary }) => bgPrimary}, 0 0 10px 3px ${({ bgSecondary }) => bgSecondary} inset;
  }
`;

export const NeonReflexButton = styled.button`
  background: linear-gradient(45deg, ${({ bgPrimary }) => bgPrimary}, ${({ bgSecondary }) => bgSecondary});
  color: #000;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  border: ${({ border }) => border || '0px'};
  border-style: ${({ borderStyle }) => borderStyle || 'none'};
  border-radius: ${({ radius }) => radius || '4px'};
  letter-spacing: 4px;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  transition: all 250ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #000;
    box-shadow: 0 0 5px ${({ bgPrimary }) => bgPrimary}, 0 0 25px ${({ bgPrimary }) => bgPrimary}, 0 0 50px ${({ bgPrimary }) => bgPrimary},
      0 0 5px ${({ bgSecondary }) => bgSecondary}, 0 0 25px ${({ bgSecondary }) => bgSecondary}, 0 0 50px ${({ bgSecondary }) => bgSecondary};
  }
`;

export const BorderMoveButton = styled.button`
  background: transparent;
  color: ${({ bgPrimary }) => bgPrimary || '#fff'};
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  border: none;
  border-radius: ${({ radius }) => radius || '4px'};
  overflow: hidden;
  cursor: pointer;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-top: 2px ${({ borderStyle }) => borderStyle || 'solid'} ${({ bgPrimary }) => bgPrimary};
    border-left: 2px ${({ borderStyle }) => borderStyle || 'solid'} ${({ bgPrimary }) => bgPrimary};
    border-radius: inherit;
    transition: all 250ms ease-in-out;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px ${({ borderStyle }) => borderStyle || 'solid'} ${({ bgSecondary }) => bgSecondary};
    border-right: 2px ${({ borderStyle }) => borderStyle || 'solid'} ${({ bgSecondary }) => bgSecondary};
    border-radius: inherit;
    transition: 0.5s;
  }
  &:hover:before {
    width: 100%;
    height: 100%;
  }
  &:hover::after {
    width: 100%;
    height: 100%;
  }
`;

export const BorderMoveLightButton = styled.button`
  background: transparent;
  color: ${({ bgPrimary }) => bgPrimary || '#fff'};
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  border: none;
  border-radius: ${({ radius }) => radius || '4px'};
  overflow: hidden;
  cursor: pointer;
  position: relative;
  &:hover {
    background: ${({ bgPrimary }) => bgPrimary};
    box-shadow: 0 0 20px ${({ bgPrimary }) => bgPrimary};;
    border: none;
    color: #000000;
    transition-delay: 0.25s;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-top: 2px ${({ borderStyle }) => borderStyle || 'solid'} ${({ bgPrimary }) => bgPrimary};
    border-left: 2px ${({ borderStyle }) => borderStyle || 'solid'} ${({ bgPrimary }) => bgPrimary};
    border-radius: inherit;
    transition: 0.5s;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px ${({ borderStyle }) => borderStyle || 'solid'} ${({ bgSecondary }) => bgSecondary};
    border-right: 2px ${({ borderStyle }) => borderStyle || 'solid'} ${({ bgSecondary }) => bgSecondary};
    border-radius: inherit;
    transition: 0.5s;
  }
  &:hover:before {
    width: 100%;
    height: 100%;
  }
  &:hover::after {
    width: 100%;
    height: 100%;
  }
`;

export const SlideLeftButton = styled.button`
  background: transparent;
  color: ${({ bgPrimary }) => bgPrimary};
  text-align: center;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  border: none;
  border-radius: ${({ radius }) => radius || '4px'};
  box-shadow: 0px 0px 5px ${({ bgPrimary }) => bgPrimary};
  overflow: hidden;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    transition: all 1s;
    border-radius: inherit;
    background: linear-gradient(60deg, ${({ bgPrimary }) => bgPrimary} 0%, ${({ bgSecondary }) => bgSecondary} 100%);
    z-index: -1;
  }
  &:hover {
    color: #000;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const SlideRightButton = styled.button`
  background: transparent;
  color: ${({ bgPrimary }) => bgPrimary};
  text-align: center;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  border: none;
  border-radius: ${({ radius }) => radius || '4px'};
  box-shadow: 0px 0px 5px ${({ bgPrimary }) => bgPrimary};
  overflow: hidden;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    transition: all 1s;
    border-radius: inherit;
    background: linear-gradient(60deg, ${({ bgPrimary }) => bgPrimary} 0%, ${({ bgSecondary }) => bgSecondary} 100%);
    z-index: -1;
  }
  &:hover {
    color: #000;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const SlideDownButton = styled.button`
  background: transparent;
  color: ${({ bgPrimary }) => bgPrimary};
  text-align: center;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  border: none;
  border-radius: ${({ radius }) => radius || '4px'};
  box-shadow: 0px 0px 5px ${({ bgPrimary }) => bgPrimary};
  overflow: hidden;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: all 1s;
    border-radius: inherit;
    background: linear-gradient(60deg, ${({ bgPrimary }) => bgPrimary} 0%, ${({ bgSecondary }) => bgSecondary} 100%);
    z-index: -1;
  }
  &:hover {
    color: #000;
  }
  &:hover::after {
    height: 100%;
  }
`;

export const SlideUpButton = styled.button`
  background: transparent;
  color: ${({ bgPrimary }) => bgPrimary};
  text-align: center;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  border: none;
  border-radius: ${({ radius }) => radius || '4px'};
  box-shadow: 0px 0px 5px ${({ bgPrimary }) => bgPrimary};
  overflow: hidden;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: all 1s;
    border-radius: inherit;
    background: linear-gradient(60deg, ${({ bgPrimary }) => bgPrimary} 0%, ${({ bgSecondary }) => bgSecondary} 100%);
    z-index: -1;
  }
  &:hover {
    color: #000;
  }
  &:hover::after {
    height: 100%;
  }
`;

export const SlideCircleButton = styled.button`
  background: transparent;
  color: ${({ bgPrimary }) => bgPrimary};
  text-align: center;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  border: none;
  border-radius: ${({ radius }) => radius || '4px'};
  box-shadow: 0px 0px 5px ${({ bgPrimary }) => bgPrimary};
  overflow: hidden;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &::after {
    position: absolute;
    content: "";
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    color: #000;
    transition: all 0.5s ease-in-out;
    border-radius: 100%;
    background: radial-gradient(${({ bgPrimary }) => bgPrimary}, ${({ bgSecondary }) => bgSecondary});
    z-index: -1;
  }
  &:hover {
    box-shadow: 0px 0px 10px ${({ bgPrimary }) => bgPrimary};
    color: #000;
    &::after {
      height: 300px;
      width: 300px;
    }
  }
`;

export const BehindBorderButton = styled.button`
  background: ${({ bgPrimary }) => bgPrimary};
  border: none;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  border-radius: ${({ radius }) => radius || '4px'};
  transition: all 0.25s ease-in;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: -1;
    border-radius: inherit;
    transition: all 0.25s ease-in;
  }
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: -1;
    border-radius: inherit;
    transition: all 0.25s ease-in;
  }
  &:hover {
    top: 0;
    left: 0;
    transition: all 0.25s ease-in;
    &::before {
      top: -15px;
      left: 15px;
      transition: all 0.35s ease-in;
      border: 2px solid ${({ bgPrimary }) => bgPrimary};
      box-shadow: 0 0 20px ${({ bgPrimary }) => bgPrimary};
    }
    &::after {
      top: 15px;
      left: -15px;
      transition: all 0.35s ease-in;
      border: 2px solid ${({ bgPrimary }) => bgPrimary};
      box-shadow: 0 0 20px ${({ bgPrimary }) => bgPrimary};
    }
  }
`;

export const BehindShadowButton = styled.button`
  background: ${({ bgPrimary }) => bgPrimary};
  border: none;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  border-radius: ${({ radius }) => radius || '4px'};
  transition: all 0.25s ease-in;
  cursor: pointer;
  z-index: 1;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: -1;
    border-radius: inherit;
  }
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: -1;
    border-radius: inherit;
  }
  &:hover {
    top: 0;
    left: 0;
    &::before {
      top: -15px;
      left: 15px;
      transition: all 0.35s ease-in;
      background: ${({ bgPrimary }) => bgPrimary};
      box-shadow: 0 0 20px ${({ bgPrimary }) => bgPrimary};
    }
    &::after {
      top: 15px;
      left: -15px;
      transition: all 0.35s ease-in;
      background: ${({ bgPrimary }) => bgPrimary};
      box-shadow: 0 0 20px ${({ bgPrimary }) => bgPrimary};
    }
  }
`;

export const HideBorderButton = styled.button`
  background: transparent;
  color: ${({ bgPrimary }) => bgPrimary};
  border: none;
  line-height: ${({ height }) => height || '50px'};
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  transition: all 0.35s ease-in;
  cursor: pointer;
  &:after,
  &:before {
    border: 1px solid ${({ bgPrimary }) => bgPrimary};
    bottom: 0px;
    content: " ";
    display: block;
    margin: 0 auto;
    position: relative;
    transition: all 350ms ease-in-out;
    width: 0;
  }

  &:hover:after,
  &:hover:before {
    border-color: ${({ bgPrimary }) => bgPrimary};
    transition: width 350ms ease-in-out;
    width: 100%;
  }

  &:hover:before {
    bottom: auto;
    top: 0;
    width: 100%;
  }
`;

export const SurroundBorderButton = styled.button`
  background: ${({ bgPrimary }) => bgPrimary};
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  border: none;
  border-radius: ${({ radius }) => radius || '4px'};
  cursor: pointer;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    border-radius: inherit;
    width: 0;
    height: 0;
    border: 5px solid ${({ bgPrimary }) => bgPrimary};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover::before {
    opacity: 1;
    width: 115%;
    height: 130%;
  }
`;

export const HalfMoveButton = styled.button`
  background: transparent;
  color: #fff;
  margin: 0 auto;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  outline: none;
  border: none;
  border-radius: ${({ radius }) => radius || '4px'};
  cursor: pointer;
  z-index: 1;
  position: relative;
  &::after,
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 50%;
    transform: skewX(30deg);
    transition: all 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    background: ${({ bgPrimary }) => bgPrimary};
    z-index: -1;
  }
  &::before {
    top: -20%;
    left: 0rem;
    background: ${({ bgPrimary }) => bgPrimary};
  }
  &::after {
    top: 20%;
    left: 50%;
    background: ${({ bgSecondary }) => bgSecondary};
  }
  &:hover {
    &::before,
    &::after {
      top: 0;
      transform: skewx(0deg);
    }
    &::after {
      left: 0;
    }
    &::before {
      left: 50%;
    }
  }
`;