'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ChevronRight } from 'lucide-react'
import { formSchema } from '@/app/schemas/validationSchema'

export default function AccessForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      whatsapp: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      if (!response.ok) {
        throw new Error('Erro ao enviar o formulário')
      }
      console.log('Formulário enviado com sucesso', values)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="text-white mt-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 mt-12">
          Preencha os campos e ganhe o Acesso!
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mx-auto max-w-4xl"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex text-xl flex-col">
                  <FormControl>
                    <Input
                      placeholder="Nome Completo"
                      className="w-full px-6 py-6"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex text-xl flex-col">
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="E-mail"
                      className="w-full px-6 py-6"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem className="flex text-xl flex-col">
                  <FormControl>
                    <Input
                      placeholder="Whatsapp"
                      className="w-full px-6 py-6"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-green text-white w-full py-6 mt-4"
            >
              Clique para receber o link do grupo
              <ChevronRight size={20} className="ml-2" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
