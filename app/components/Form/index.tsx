import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronRight } from 'lucide-react'

export default function Form() {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12 mt-12">
          Preencha os campos e ganhe o Acesso!
        </h2>
        <form className="space-y-4 mx-auto">
          <div className="flex text-xl flex-col">
            <label className="block text-left mb-1" htmlFor="name">
              Seu Nome:
            </label>
            <Input
              id="name"
              placeholder="Rodrigo Carvalho"
              className="w-full px-6 py-6"
            />
          </div>
          <div className="flex text-xl flex-col">
            <label className="block text-left mb-1" htmlFor="email">
              Email:
            </label>
            <Input
              id="email"
              type="email"
              placeholder="rodrigosk@email.com"
              className="w-full px-6 py-6"
            />
          </div>
          <div className="flex text-xl flex-col">
            <label className="block text-left mb-1" htmlFor="whatsapp">
              Whatsapp:
            </label>
            <Input
              id="whatsapp"
              placeholder="88 9 9999-9999"
              className="w-full px-6 py-6"
            />
          </div>
          <Button className="bg-green text-white w-full py-6 mt-4">
            Clique para receber o link do grupo
            <ChevronRight size={20} className="ml-2" />
          </Button>
        </form>
      </div>
    </div>
  )
}
