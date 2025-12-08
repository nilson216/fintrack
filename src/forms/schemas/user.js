import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z
    .string()
    .email({
      message: 'O e-mail é inválido.',
    })
    .trim()
    .min(1, {
      message: 'O e-mail é obrigatório.',
    }),
  password: z.string().trim().min(6, {
    message: 'A senha deve ter no mínimo 6 caracteres.',
  }),
})

export const signupFormSchema = z
  .object({
    firstName: z.string().trim().min(1, {
      message: 'O nome é obrigatório.',
    }),
    lastName: z.string().trim().min(1, {
      message: 'O sobrenome é obrigatório.',
    }),
    email: z
      .string()
      .email({
        message: 'O e-mail é inválido.',
      })
      .trim()
      .min(1, {
        message: 'O e-mail é obrigatório.',
      }),
    password: z.string().min(6, {
      message: 'A senha deve ter no mínimo 6 caracteres.',
    }),
    passwordConfirmation: z.string().min(1, {
      message: 'Confirme sua senha.',
    }),
    terms: z.boolean().default(false),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'As senhas não coincidem.',
    path: ['passwordConfirmation'],
  })
  .refine((data) => data.terms === true, {
    message: 'Você precisa aceitar os termos.',
    path: ['terms'],
  })
