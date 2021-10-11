import styled from 'styled-components';

export const NormalButton = styled.button`
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#000000'};
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  border-radius: ${({ radius }) => radius || '4px'};
  border-style: ${({ borderStyle }) => borderStyle || 'none'};
  border: ${({ border }) => border || '0px'};
  cursor: pointer;
`;

export const NeogradButton = styled.button`
  color: #000;
  text-align: center;
  width: ${({ width }) => width || '150px'};
  height: ${({ height }) => height || '50px'};
  background-color: ${({ bg }) => bg || '#fff'};
  box-shadow: 1px 1px 40px ${({ bg }) => bg || '#fff'} inset;
  transition: all 250ms ease-in-out;
  border-radius: ${({ radius }) => radius || '4px'};
  border-style: ${({ borderStyle }) => borderStyle || 'none'};
  border: ${({ border }) => border || '0px'};
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px 0 ${({ bg }) => bg || '#fff'} inset, 0 0 10px 3px ${({ bg }) => bg || '#fff'};
    background: transparent;
    color: ${({ bg }) => bg || '#000000'};
  }
`

