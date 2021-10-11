import { useDispatch, useSelector } from 'react-redux';
import { getButtonSettings } from '../../context/slices/buttonSettings';
import { NeogradButton, NormalButton } from '../styled/Buttons.styled';


const ViewButton = () => {
  const dispatch = useDispatch();
  const button = useSelector(getButtonSettings);

  const view = (name) => {
    switch (name) {
      case "normal":
        return (
          <NormalButton
            bg={button.colors.c1}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            borderStyle={`${button.border.type}`}
            border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Button
          </NormalButton>
        );
      case "neograd":
        return (
          <NeogradButton
            bg={button.colors.c1}
            width={`${button.sizes.width}px`}
            height={`${button.sizes.height}px`}
            borderStyle={`${button.border.type}`}
            border={`${button.border.top}px ${button.border.right}px ${button.border.bottom}px ${button.border.left}px`}
            radius={`${button.radius.top}px ${button.radius.right}px ${button.radius.bottom}px ${button.radius.left}px`}
          >
            Button
          </NeogradButton>
        );
    }
  }
  return (
    <div>
      {view(button.name)}
    </div>
  )
}

export default ViewButton
