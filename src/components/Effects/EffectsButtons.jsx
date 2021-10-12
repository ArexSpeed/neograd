import { useDispatch, useSelector } from 'react-redux';
import { getButtonSettings, setButtonName } from '../../context/slices/buttonSettings';

import { BehindBorderButton ,BehindShadowButton,BorderMoveButton, BorderMoveLightButton, GradientButton, GradientRadialButton, HalfMoveButton, HideBorderButton, NeogradButton, NeogradReverseButton, NeonBorderButton, NeonButton, NeonReflexButton, NormalButton, NormalHoverButton, SlideCircleButton, SlideDownButton, SlideLeftButton, SlideRightButton, SlideUpButton, SurroundBorderButton } from '../styled/Buttons.styled';

const EffectsButtons = () => {
  const dispatch = useDispatch();
  const button = useSelector(getButtonSettings);
  return (
    <div className="effects__container">
      <NormalButton 
        bgPrimary={button.colors.c1} 
        bgSecondary={button.colors.c2} 
        width="150px"
        height="50px"
        borderStyle={`${button.border.type}`}
        border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
        radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
        onClick={() => dispatch(setButtonName('normal'))}
        >
          Normal
        </NormalButton>
        <NormalHoverButton
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          borderStyle={`${button.border.type}`}
          border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
          radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          onClick={() => dispatch(setButtonName('normal-hover'))}
         >
          Hover
        </NormalHoverButton>
        <NeogradButton
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          borderStyle={`${button.border.type}`}
          border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
          radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          onClick={() => dispatch(setButtonName('neograd'))}
        >
          Button
        </NeogradButton>
        <NeogradReverseButton 
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          borderStyle={`${button.border.type}`}
          border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
          radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          onClick={() => dispatch(setButtonName('neograd-reverse'))}
        >
          Button
        </NeogradReverseButton>
        <GradientButton
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          borderStyle={`${button.border.type}`}
          border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
          radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          onClick={() => dispatch(setButtonName('gradient'))}
        >
          Gradient
        </GradientButton>
        <GradientRadialButton 
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          borderStyle={`${button.border.type}`}
          border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
          radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          onClick={() => dispatch(setButtonName('gradient'))}
        >
          Radial
        </GradientRadialButton>
        <NeonButton
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          borderStyle={`${button.border.type}`}
          border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
          radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          onClick={() => dispatch(setButtonName('neon'))}
        >
          Neon
        </NeonButton>
        <NeonBorderButton
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          borderStyle={`${button.border.type}`}
          border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
          radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          onClick={() => dispatch(setButtonName('neon-border'))}
        >
          Neon
        </NeonBorderButton>
        <NeonReflexButton
           bgPrimary={button.colors.c1} 
           bgSecondary={button.colors.c2} 
           width="150px"
           height="50px"
           borderStyle={`${button.border.type}`}
           border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
           radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
           onClick={() => dispatch(setButtonName('neon-reflex'))}
        >
          Reflex
        </NeonReflexButton>
        <BorderMoveButton
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          borderStyle={`${button.border.type}`}
          border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
          radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          onClick={() => dispatch(setButtonName('border-move'))}
        >
          Move
        </BorderMoveButton>
        <BorderMoveLightButton
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          borderStyle={`${button.border.type}`}
          border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
          radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          onClick={() => dispatch(setButtonName('border-move-light'))}
        >
          Move
        </BorderMoveLightButton>
        <SlideLeftButton
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          onClick={() => dispatch(setButtonName('slide-left'))}
        >
          Slide
        </SlideLeftButton>
        <SlideRightButton
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          onClick={() => dispatch(setButtonName('slide-right'))}
        >
          Slide
        </SlideRightButton>
        <SlideDownButton
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          onClick={() => dispatch(setButtonName('slide-down'))}
        >
          Slide
        </SlideDownButton>
        <SlideUpButton
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          onClick={() => dispatch(setButtonName('slide-up'))}
        >
          Slide
        </SlideUpButton>
        <SlideCircleButton
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          onClick={() => dispatch(setButtonName('slide-circle'))}
        >
          Slide
        </SlideCircleButton>
        <BehindBorderButton
         bgPrimary={button.colors.c1} 
         bgSecondary={button.colors.c2} 
         width="150px"
         height="50px"
         radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
         onClick={() => dispatch(setButtonName('behind-border'))}
         >
          Border
        </BehindBorderButton>
        <BehindShadowButton
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          onClick={() => dispatch(setButtonName('behind-shadow'))}
         >
          Shadow
        </BehindShadowButton>
        <HideBorderButton
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          onClick={() => dispatch(setButtonName('hide-border'))}
        >
          Hide
        </HideBorderButton>
        <SurroundBorderButton
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          onClick={() => dispatch(setButtonName('surround-border'))}
        >
          Surround
        </SurroundBorderButton>
        <HalfMoveButton
          bgPrimary={button.colors.c1} 
          bgSecondary={button.colors.c2} 
          width="150px"
          height="50px"
          onClick={() => dispatch(setButtonName('half-move'))}
        >
          Move
        </HalfMoveButton>
    </div>
  )
}

export default EffectsButtons;
