import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCheckAuth } from 'src/hooks/useCheckAuth'
import { useLogin } from 'src/hooks/useLogin'
import { RoutesPath } from 'src/router/routes'

export const useSignInPage = () => {
  const { isSuccess, isLoading: isLoadingCheckAuth } = useCheckAuth()
  const navigation = useNavigate()

  if (isSuccess) navigation(RoutesPath.PROFILE)

  const [credential, setCredential] = useState({ username: '', password: '' })
  const [errors, setErrors] = useState({ username: '', password: '' })

  const updateCredential = ({
    username,
    password,
  }: {
    username?: string
    password?: string
  }) => {
    if (username !== undefined) {
      setCredential({ ...credential, username })
    }

    if (password !== undefined && password.length < 16) {
      setCredential({ ...credential, password })
    }
  }

  useEffect(() => {
    const result = { username: '', password: '' }

    const nameLength = credential.username.length
    const passwordLength = credential.password.length

    if (nameLength > 16) result.username = 'Нікнейм задовгий'

    if (nameLength < 3) result.username = 'Нікнейм закороткий'

    if (nameLength === 0) result.username = 'Напишіть нік'

    if (passwordLength > 16) result.password = 'Пароль задовгий'

    if (passwordLength < 5) result.password = 'Пароль закороткий'

    if (passwordLength === 0) result.password = 'Напишіть пароль'

    setErrors(result)
  }, [credential.password, credential.username])

  const { isError, isLoading, mutate } = useLogin()

  const handleSubmit = (): void => mutate(credential)

  return {
    isError,
    isLoading,
    updateCredential,
    handleSubmit,
    password: credential.password,
    username: credential.username,
    errors,
    isLoadingCheckAuth,
  }
}
