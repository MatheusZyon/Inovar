import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Camera, 
  Video, 
  MapPin, 
  CheckCircle, 
  MessageCircle,
  Users,
  Award
} from 'lucide-react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('showroom')

  const services = {
    showroom: {
      title: 'Cobertura de Inauguração de Showroom',
      price: 'R$ 5.500',
      description: 'Cobertura completa da inauguração do seu showroom com equipamentos profissionais',
      features: [
        'Filmagem com câmera Sony 4K profissional',
        'Captação aérea com drone certificado',
        'Cobertura de 6 horas do evento',
        'Edição profissional do material',
        '1 Short film de até 90 segundos com ambiência e introdução de elementos sonoros profissionais',
        'Material em alta resolução (4K)',
        '4 vídeos over delivery formato reels para redes sociais',
        'Envio do material bruto para acervo de material'
      ],
      icon: <Camera className="w-8 h-8" />
    },
    institutional: {
      title: 'Vídeo Institucional',
      price: 'R$ 4.700',
      description: 'Vídeo institucional profissional para apresentar sua empresa',
      features: [
        'Roteiro personalizado',
        'Filmagem com câmera Sony 4K',
        'Captação aérea com drone',
        'Entrevistas com colaboradores',
        'Edição profissional',
        'Duração de 3 a 5 minutos',
        'Vídeo formato 9:16 de até 120 segundos',
        'Roteirização e narração profissional',
        'Entrega do material bruto para acervo e utilização nas redes'
      ],
      icon: <Video className="w-8 h-8" />
    },
    recurring: {
      title: 'Combo Diária',
      price: 'R$ 2.900',
      pricePromo: 'R$ 2.000',
      priceNote: 'por obra',
      description: 'Documentação regular do progresso da sua obra ou projeto',
      features: [
        '2 Vídeos por obra, sendo 1 específico para CTA de tráfego pago (Roteiro narrado de fundo com ambiência) e 1 para foco cinematográfico do produto',
        '20 fotos profissionais por obra, mescladas entre drone e câmera',
        'Entrega do material bruto para acervo e utilização nas redes'
      ],
      icon: <MapPin className="w-8 h-8" />
    }
  }

  const whatsappNumber = "5511999999999" // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços audiovisuais da Inovar."

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sage to-sage-dark py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-charcoal">
            Serviços Audiovisuais
            <span className="block text-orange">Profissionais</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-charcoal opacity-80">
            Transformamos seus momentos especiais em memórias cinematográficas com equipamentos de última geração
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={openWhatsApp}
              className="bg-orange hover:bg-orange-dark text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-orange"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* About Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-brown max-w-3xl mx-auto">
              Oferecemos soluções audiovisuais completas com equipamentos profissionais Sony 4K e drone certificado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Equipamentos Profissionais</h3>
              <p className="text-brown">Câmera Sony 4K e drone certificado para captação aérea</p>
            </div>
            <div className="text-center">
              <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Equipe Especializada</h3>
              <p className="text-brown">Profissionais experientes em produção audiovisual</p>
            </div>
            <div className="text-center">
              <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Qualidade Garantida</h3>
              <p className="text-brown">Entrega pontual com padrão cinematográfico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Packages Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-4">
              PROPOSTAS
            </h2>
            <p className="text-xl text-brown max-w-3xl mx-auto">
              Escolha o pacote ideal para suas necessidades
            </p>
          </div>

          <div className="w-full mb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={() => setActiveTab('showroom')}
                className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 min-w-[200px] ${
                  activeTab === 'showroom'
                    ? 'bg-sage text-white shadow-lg'
                    : 'bg-white text-charcoal border-2 border-sage hover:bg-sage/10'
                }`}
              >
                Inauguração
              </button>
              <button
                onClick={() => setActiveTab('institutional')}
                className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 min-w-[200px] ${
                  activeTab === 'institutional'
                    ? 'bg-brown text-white shadow-lg'
                    : 'bg-white text-charcoal border-2 border-brown hover:bg-brown/10'
                }`}
              >
                Institucional
              </button>
              <button
                onClick={() => setActiveTab('recurring')}
                className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 min-w-[200px] ${
                  activeTab === 'recurring'
                    ? 'bg-orange text-white shadow-lg'
                    : 'bg-white text-charcoal border-2 border-orange hover:bg-orange/10'
                }`}
              >
                Combo Diária
              </button>
            </div>

            {Object.entries(services).map(([key, service]) => (
              activeTab === key && (
                <Card key={key} className="border-sage/20 shadow-lg bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="bg-sage/10 w-16 h-16 rounded-full flex items-center justify-center">
                        <div className="text-sage">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-3xl text-charcoal mb-2">
                      {service.title}
                    </CardTitle>
                    <div className="flex justify-center items-center gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-sage">
                          {service.price}
                        </div>
                        {service.priceNote && (
                          <div className="text-sm text-brown mt-1">
                            {service.priceNote}
                          </div>
                        )}
                      </div>
                      {service.pricePromo && (
                        <div className="text-center">
                          <Badge className="bg-orange text-white mb-1">Valor primeira contratação</Badge>
                          <div className="text-2xl font-bold text-orange">
                            {service.pricePromo}
                          </div>
                          {service.priceNote && (
                            <div className="text-sm text-brown mt-1">
                              {service.priceNote}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <CardDescription className="text-lg text-brown">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-1 gap-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
                          <span className="text-charcoal">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 text-center">
                      <Button 
                        onClick={openWhatsApp}
                        className="bg-sage hover:bg-sage-dark text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-sage"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Contratar Serviço
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-sage text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato conosco e transforme sua visão em realidade
          </p>
          <div className="flex justify-center">
            <Button 
              onClick={openWhatsApp}
              className="bg-orange hover:bg-orange-dark text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-orange"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">CRIA RÁPIDO</h3>
          <p className="text-gray-400 mb-4">Soluções Criativas e Audiovisuais</p>
          <p className="text-sm text-gray-500">
            © 2024 CRIA RÁPIDO. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

