import type { ChangeEvent } from 'react'
import {
  Container,
  Description,
  ErrorMessage,
  FormContainer,
  FormImage,
  InputWrapper,
  StyledDefaultButton,
} from 'src/pages/SignInPage/styles'
import { useSignInPage } from 'src/pages/SignInPage/useSignInPage'

import InputSignIn from 'src/features/InputSignIn'

const SignInPage = (): JSX.Element => {
  const { errors, isLoading, updateCredential, handleSubmit, password, username } =
    useSignInPage()

  return (
    <Container>
      <FormImage>
        <FormContainer>
          <InputWrapper>
            <InputSignIn
              name="firstName"
              type="firstName"
              placeholder="Нік"
              value={username}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                updateCredential({ username: event.target.value })
              }}
            />
            {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <InputSignIn
              placeholder="Пароль"
              name="password"
              type="password"
              value={password}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                updateCredential({ password: event.target.value })
              }}
            />
            {errors.password ? <ErrorMessage>{errors.password}</ErrorMessage> : null}
          </InputWrapper>

          <StyledDefaultButton
            disabled={
              isLoading || Boolean(errors.password) || Boolean(errors.username)
            }
            isLoading={isLoading}
            onClick={handleSubmit}
          >
            Підтвердити
          </StyledDefaultButton>

          <Description>Реєстрація проходить тільки через заявку</Description>
          <Description>Пароль і логін такий же як у вас на сервері</Description>
        </FormContainer>
      </FormImage>
    </Container>
  )
}

export default SignInPage
