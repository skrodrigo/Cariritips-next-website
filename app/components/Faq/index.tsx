import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const faqs = [
  {
    value: 'item-1',
    question: 'O que é Cariri Tips?',
    answer:
      'Cariri Tips é uma plataforma que te ajuda a ser lucrativo com futebol e outros esportes! Somos especialistas em operações no Mercado Esportivo, oferecendo análises precisas e estratégias vencedoras.',
  },
  {
    value: 'item-2',
    question: 'Como posso participar do grupo no WhatsApp?',
    answer:
      'Você pode participar do nosso grupo no WhatsApp clicando no botão "Grupo do WhatsApp" na página inicial.',
  },
  {
    value: 'item-3',
    question: 'O acesso ao grupo é gratuito?',
    answer: 'Sim, o acesso ao nosso grupo no WhatsApp é totalmente gratuito.',
  },
  {
    value: 'item-4',
    question: 'Como posso obter mais informações?',
    answer:
      'Para mais informações, você pode nos contatar através do nosso site ou participar do nosso grupo no WhatsApp.',
  },
  {
    value: 'item-5',
    question: 'Quais esportes são cobertos pelo Cariri Tips?',
    answer: 'O Cariri Tips cobre apenas o esporte futebol.',
  },
  {
    value: 'item-6',
    question: 'Como posso confiar nas análises do Cariri Tips?',
    answer:
      'Nossas análises são feitas por especialistas com anos de experiência no mercado esportivo, garantindo informações precisas e confiáveis.',
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
