import { useDispatch, useSelector } from "react-redux";
import { getButtonSettings } from "../../context/slices/buttonSettings";
import {
  BehindBorderButton,
  BehindShadowButton,
  BorderMoveButton,
  BorderMoveLightButton,
  GradientButton,
  GradientRadialButton,
  HalfMoveButton,
  HideBorderButton,
  NeogradButton,
  NeogradReverseButton,
  NeonBorderButton,
  NeonButton,
  NeonReflexButton,
  NormalButton,
  NormalHoverButton,
  SlideCircleButton,
  SlideDownButton,
  SlideLeftButton,
  SlideRightButton,
  SlideUpButton,
  SurroundBorderButton,
} from "../styled/Buttons.styled";

const ViewButton = () => {
  const dispatch = useDispatch();
  const button = useSelector(getButtonSettings);

  const view = (name) => {
    switch (name) {
      case "normal":
        return (
          <NormalButton
            bgPrimary={button.colors.c1}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            borderStyle={`${button.border.type}`}
            border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Button
          </NormalButton>
        );
      case "normal-hover":
        return (
          <NormalHoverButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            borderStyle={`${button.border.type}`}
            border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Hover
          </NormalHoverButton>
        );
      case "neograd":
        return (
          <NeogradButton
            bgPrimary={button.colors.c1}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            borderStyle={`${button.border.type}`}
            border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Button
          </NeogradButton>
        );
      case "neograd-reverse":
        return (
          <NeogradReverseButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            borderStyle={`${button.border.type}`}
            border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Button
          </NeogradReverseButton>
        );
      case "gradient":
        return (
          <GradientButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            borderStyle={`${button.border.type}`}
            border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Gradient
          </GradientButton>
        );
      case "gradient-radial":
        return (
          <GradientRadialButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            borderStyle={`${button.border.type}`}
            border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Radial
          </GradientRadialButton>
        );
      case "neon":
        return (
          <NeonButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            borderStyle={`${button.border.type}`}
            border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Neon
          </NeonButton>
        );
      case "neon-border":
        return (
          <NeonBorderButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            borderStyle={`${button.border.type}`}
            border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Neon
          </NeonBorderButton>
        );
      case "neon-reflex":
        return (
          <NeonReflexButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            borderStyle={`${button.border.type}`}
            border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Reflex
          </NeonReflexButton>
        );
      case "border-move":
        return (
          <BorderMoveButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            borderStyle={`${
              button.border.type !== "none" ? button.border.type : "solid"
            }`}
            border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Move
          </BorderMoveButton>
        );
      case "border-move-light":
        return (
          <BorderMoveLightButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            borderStyle={`${
              button.border.type !== "none" ? button.border.type : "solid"
            }`}
            border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Move
          </BorderMoveLightButton>
        );
      case "slide-left":
        return (
          <SlideLeftButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Slide
          </SlideLeftButton>
        );
      case "slide-right":
        return (
          <SlideRightButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Slide
          </SlideRightButton>
        );
      case "slide-down":
        return (
          <SlideDownButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Slide
          </SlideDownButton>
        );
      case "slide-up":
        return (
          <SlideUpButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Slide
          </SlideUpButton>
        );
      case "slide-circle":
        return (
          <SlideCircleButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Slide
          </SlideCircleButton>
        );
      case "behind-border":
        return (
          <BehindBorderButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Border
          </BehindBorderButton>
        );
      case "behind-shadow":
        return (
          <BehindShadowButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Shadow
          </BehindShadowButton>
        );
      case "hide-border":
        return (
          <HideBorderButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
          >
            Hide
          </HideBorderButton>
        );
      case "surround-border":
        return (
          <SurroundBorderButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
          >
            Surround
          </SurroundBorderButton>
        );
      case "half-move":
        return (
          <HalfMoveButton
            bgPrimary={button.colors.c1}
            bgSecondary={button.colors.c2}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
          >
            Move
          </HalfMoveButton>
        );
    }
  };
  return (
    <div className="viewBox" style={{ background: button.colors.bg }}>
      {view(button.name)}
    </div>
  );
};

export default ViewButton;
