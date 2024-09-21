import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const faqs = [
  {
    value: 'item-1',
    question: 'O que é o Cariri Tips?',
    answer:
      'O Cariri Tips é uma plataforma inovadora que ajuda você a maximizar seus lucros com apostas em futebol e outros esportes. Somos especialistas no Mercado Esportivo, oferecendo análises detalhadas e estratégias vencedoras para orientar suas decisões.',
  },
  {
    value: 'item-2',
    question: 'Como posso me juntar ao grupo?',
    answer:
      'Para se juntar ao nosso grupo , basta clicar no botão "Quero o Grupo" disponível na página inicial do nosso site.',
  },
  {
    value: 'item-3',
    question: 'O acesso ao grupo é gratuito?',
    answer:
      'Sim, a participação no nosso grupo é totalmente gratuita. Todos são bem-vindos!',
  },
  {
    value: 'item-4',
    question: 'Como posso obter mais informações?',
    answer:
      'Para mais informações, você pode entrar em contato conosco através do nosso site ou participar do nosso grupo gratuito, onde teremos o prazer de responder suas dúvidas.',
  },
  {
    value: 'item-5',
    question: 'Quais esportes são cobertos pelo Cariri Tips?',
    answer:
      'Atualmente, o Cariri Tips foca exclusivamente no futebol, proporcionando análises e estratégias especializadas nesse esporte.',
  },
  {
    value: 'item-6',
    question: 'Como posso confiar nas análises do Cariri Tips?',
    answer:
      'Nossas análises são elaboradas por especialistas com vasta experiência no mercado esportivo. Trabalhamos com informações precisas e confiáveis para garantir que você tome decisões informadas.',
  },
]

export default function Faq() {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12 mt-12 ">
          Dúvidas e Perguntas Frequentes
        </h2>
        <div className="flex flex-col ">
          <Accordion type="multiple" className="space-y-4 ">
            {faqs.map(faq => (
              <AccordionItem
                key={faq.value}
                value={faq.value}
                className="flex flex-col"
              >
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
