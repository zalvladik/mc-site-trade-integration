import { useEffect, useState } from 'react'
import { useLogin } from 'src/hooks/useLogin'

export const useSignInPage = () => {
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

    if (credential.username.length > 16) {
      result.username = 'Нікнейм задовгий'
    }

    if (credential.username.length < 3) {
      result.username = 'Нікнейм закороткий'
    }

    if (credential.password.length > 16) {
      result.password = 'Пароль задовгий'
    }

    if (credential.password.length < 3) {
      result.password = 'Пароль закороткий'
    }

    if (credential.username.length === 0) {
      result.username = 'Напишіть нік'
    }

    if (credential.password.length === 0) {
      result.password = 'Напишіть пароль'
    }

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
  }
}
