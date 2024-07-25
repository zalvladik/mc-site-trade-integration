import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Напишіть  нік')
    .min(3, 'Нік закороткий')
    .max(16, 'Нік завеликий'),

  password: yup.string().required('Напишіть  пароль').min(5, 'Пароль закороткий'),
})
