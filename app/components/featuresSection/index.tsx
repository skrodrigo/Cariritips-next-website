import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const FeaturesSection = () => {
  return (
    <div className="container flex flex-col mx-auto justify-center items-center px-4">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12 mt-12">
        Somos além da Concorrência!
      </h1>

      <div className="grid grid-cols-1 justify-between lg:grid-cols-3 gap-10  mx-auto">
        {[
          {
            title: 'Análises assertivas',
            description:
              'Receba dicas diárias baseadas em análises detalhadas de especialistas, aumentando suas chances de sucesso nas apostas esportivas.',
          },
          {
            title: 'Gestão de banca eficiente',
            description:
              'Aprenda a controlar seu capital e a fazer apostas seguras, maximizando seus lucros e minimizando os riscos.',
          },
          {
            title: 'Acompanhamento e suporte exclusivo',
            description:
              'Participe de um grupo ativo com suporte em tempo real, onde você pode tirar dúvidas e acessar estratégias vencedoras.',
          },
        ].map(feature => (
          <Card key={feature.title} className="bg-black50 border-gray ">
            <CardHeader className="flex flex-col items-center justify-center text-center">
              <CardTitle className="text-lg font-bold">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center ">
              <p className="text-normal text-zinc-400">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default FeaturesSection
