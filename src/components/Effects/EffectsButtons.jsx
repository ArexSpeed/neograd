import { useDispatch, useSelector } from 'react-redux';
import { getButtonSettings, setButtonName } from '../../context/slices/buttonSettings';

import { NeogradButton, NormalButton } from '../styled/Buttons.styled';

const EffectsButtons = () => {
  const dispatch = useDispatch();
  const button = useSelector(getButtonSettings);
  return (
    <div className="effects__container">
      <NormalButton 
        bg={button.colors.c1} 
        width="150px"
        height="50px"
        borderStyle={`${button.border.type}`}
        border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
        radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
        onClick={() => dispatch(setButtonName('normal'))}
        />
        <NeogradButton
          bg={button.colors.c1} 
          width="150px"
          height="50px"
          borderStyle={`${button.border.type}`}
          border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
          radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          onClick={() => dispatch(setButtonName('neograd'))}
        >
          Button
        </NeogradButton>
    </div>
  )
}

export default EffectsButtons;
