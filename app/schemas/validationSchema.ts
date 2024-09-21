import * as z from 'zod'

export const formSchema = z.object({
  name: z.string().min(4, 'O nome é obrigatório'),
  email: z.string().email('Formato de email inválido'),
  whatsapp: z
    .string()
    .min(10, 'O número de WhatsApp deve ter no mínimo 10 dígitos'),
})
