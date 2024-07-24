import {
  ButtonText,
  Container,
  StyledVscLoading,
} from 'src/components/DefaultButton/styles'
import type { DefaultButtonProps } from 'src/components/DefaultButton/types'
import { useDefaultButton } from 'src/components/DefaultButton/useDefaultButton'

const DefaultButton = ({
  color,
  children,
  disabled = false,
  isLoading,
  style,
  textStyle,
  ...props
}: DefaultButtonProps): JSX.Element => {
  const { textButtonRef, containerRef } = useDefaultButton()

  return (
    <Container
      ref={containerRef}
      style={{
        opacity: disabled ? 0.4 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
        ...style,
      }}
      {...props}
    >
      <div className="button_left" />
      <div className="button_center" />
      <div className="button_right" />

      <ButtonText ref={textButtonRef} style={textStyle}>
        {isLoading ? <StyledVscLoading size={30} /> : children}
      </ButtonText>
    </Container>
  )
}

export default DefaultButton
