import { yupResolver } from '@hookform/resolvers/yup'

import { useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useLogin } from 'src/hooks/useLogin'
import type { SignInFormT } from 'src/pages/SignInPage/types'
import { validationSchema } from 'src/pages/SignInPage/validationSchema'

export const useSignInPage = () => {
  const {
    handleSubmit,
    trigger,
    formState: { errors, isValid },
    control,
    setValue,
  } = useForm<SignInFormT>({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  const { isError, isLoading, mutate } = useLogin()

  const signIn = ({ username, password }: SignInFormT): void => {
    mutate({ username, password })
  }

  const formValues = useWatch({
    control,
  })

  const isFormFilled = formValues.username && formValues.password

  useEffect(() => {
    const checkAutofill = () => {
      const usernameInput = document.querySelector<HTMLInputElement>(
        'input[name="username"]',
      )
      const passwordInput = document.querySelector<HTMLInputElement>(
        'input[name="password"]',
      )

      if (usernameInput && passwordInput) {
        const username = usernameInput.value
        const password = passwordInput.value

        if (username) setValue('username', username)

        if (password) setValue('password', password)

        trigger()
      }
    }

    checkAutofill()

    const observer = new MutationObserver(checkAutofill)
    const config = { attributes: true, childList: true, subtree: true }

    observer.observe(document.body, config)

    return () => observer.disconnect()
  }, [setValue, trigger])

  return {
    errors,
    control,
    trigger,
    isError,
    isLoading,
    isFormFilled: !isFormFilled || !isValid,
    handleSubmit: handleSubmit(signIn),
  }
}
