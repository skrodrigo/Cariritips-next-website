import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const faqs = [
  {
    value: 'item-1',
    question: 'O que é o Cariri Tips ?',
    answer:
      'O Cariri Tips é uma plataforma inovadora que ajuda você a maximizar seus lucros com apostas em futebol e outros esportes. Somos especialistas no Mercado Esportivo, oferecendo análises detalhadas e estratégias vencedoras para orientar suas decisões.',
  },
  {
    value: 'item-2',
    question: 'Como posso me juntar ao grupo ?',
    answer:
      'Para se juntar ao nosso grupo basta clicar no botão "Quero o Grupo" disponível na página inicial do nosso site.',
  },
  {
    value: 'item-3',
    question: 'O acesso ao grupo é gratuito ?',
    answer:
      'Sim, a participação no nosso grupo é totalmente gratuita. Todos são bem-vindos!',
  },
  {
    value: 'item-4',
    question: 'Como posso obter mais informações ?',
    answer:
      'Para mais informações, você pode entrar em contato conosco através do nosso site ou participar do nosso grupo gratuito, onde teremos o prazer de responder suas dúvidas.',
  },
  {
    value: 'item-5',
    question: 'Quais esportes são cobertos ?',
    answer:
      'Atualmente, o Cariri Tips foca exclusivamente no futebol, proporcionando análises e estratégias especializadas nesse esporte.',
  },
  {
    value: 'item-6',
    question: 'Como posso confiar nas análises ?',
    answer:
      'Nossas análises são elaboradas por especialistas com vasta experiência no mercado esportivo. Trabalhamos com informações precisas e confiáveis para garantir que você tome decisões informadas.',
  },
]

const Faq = () => {
  return (
    <section className="lg:mt-20 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Dúvidas e Perguntas Frequentes
        </h2>
        <Accordion type="multiple" className="space-y-4">
          {faqs.map(({ value, question, answer }) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
