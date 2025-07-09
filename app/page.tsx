'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, Clock, BookOpen, Target, Zap, Shield, Star, ArrowRight, Users, TrendingUp, Award, Menu, X, Brain, Lightbulb, Timer, Focus, BarChart3, Smartphone, Coffee, Heart } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openSummary, setOpenSummary] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    { icon: Target, title: 'Elimine a procrastinação', description: 'Técnicas comprovadas para vencer a procrastinação definitivamente' },
    { icon: Focus, title: 'Maximize seu foco', description: 'Desenvolva concentração profunda e organize sua vida' },
    { icon: Timer, title: 'Otimize sua rotina', description: 'Crie sistemas eficientes que realmente funcionam' },
    { icon: Zap, title: 'Ganhe tempo livre', description: 'Tenha mais tempo para o que realmente importa' },
  ];

  const summaryItems = [
    { 
      icon: Brain,
      title: 'Capítulo 1: Neurociência da Produtividade', 
      description: 'Como seu cérebro funciona e como hackear sua mente para máxima eficiência',
      techniques: ['Neuroplasticidade aplicada', 'Dopamina e motivação', 'Estados de flow']
    },
    { 
      icon: Timer,
      title: 'Capítulo 2: Técnica Pomodoro Avançada', 
      description: 'Domine a técnica mais eficaz de gestão de tempo com variações modernas',
      techniques: ['Pomodoro tradicional', 'Timeboxing', 'Ultradian rhythms']
    },
    { 
      icon: BarChart3,
      title: 'Capítulo 3: Sistema GTD Completo', 
      description: 'Getting Things Done - metodologia completa para organização total',
      techniques: ['Captura total', 'Processamento eficaz', 'Revisão semanal']
    },
    { 
      icon: Target,
      title: 'Capítulo 4: Matriz de Eisenhower 2.0', 
      description: 'Priorização estratégica com métodos modernos de decisão',
      techniques: ['Quadrantes de prioridade', 'Análise de impacto', 'Delegação inteligente']
    },
    { 
      icon: Lightbulb,
      title: 'Capítulo 5: Psicologia Anti-Procrastinação', 
      description: 'Estratégias psicológicas baseadas em ciência comportamental',
      techniques: ['Técnica dos 2 minutos', 'Gamificação', 'Accountability systems']
    },
    { 
      icon: Smartphone,
      title: 'Capítulo 6: Stack Tecnológico de Produtividade', 
      description: 'As melhores ferramentas digitais e como integrá-las perfeitamente',
      techniques: ['Apps essenciais', 'Automações', 'Workflows digitais']
    },
    { 
      icon: Coffee,
      title: 'Capítulo 7: Rotinas de Alto Desempenho', 
      description: 'Construa rotinas matinais e noturnas de pessoas altamente produtivas',
      techniques: ['Morning routine', 'Evening routine', 'Micro-hábitos']
    },
    { 
      icon: Heart,
      title: 'Capítulo 8: Produtividade Sustentável', 
      description: 'Mantenha alta performance sem burnout e com bem-estar',
      techniques: ['Work-life balance', 'Gestão de energia', 'Recovery protocols']
    },
    { 
      icon: Award,
      title: 'Plano de Ação: Implementação Total', 
      description: 'Seu roadmap completo para transformação em 30 dias',
      techniques: ['Checklist de implementação', 'Métricas de progresso', 'Troubleshooting']
    },
  ];

  const testimonials = [
    { name: 'Ana Silva', role: 'Diretora de Marketing', text: 'Este eBook revolucionou minha abordagem ao trabalho. Consegui aumentar minha produtividade em 40% mantendo o equilíbrio.', rating: 5 },
    { name: 'Carlos Santos', role: 'Estudante de Medicina', text: 'As técnicas apresentadas me ajudaram a organizar meus estudos de forma eficiente. Recomendo para todos os estudantes.', rating: 5 },
    { name: 'Maria Oliveira', role: 'CEO Startup', text: 'Conteúdo excepcional! Implementei os métodos na minha empresa e os resultados foram impressionantes.', rating: 5 },
  ];

  const targetAudience = [
    { 
      icon: Users,
      title: 'Executivos e Profissionais', 
      description: 'Líderes que precisam otimizar tempo e aumentar resultados',
      color: 'bg-blue-600'
    },
    { 
      icon: BookOpen,
      title: 'Estudantes e Acadêmicos', 
      description: 'Que buscam excelência acadêmica com métodos eficazes',
      color: 'bg-purple-600'
    },
    { 
      icon: TrendingUp,
      title: 'Empreendedores', 
      description: 'Que desejam equilibrar crescimento profissional e pessoal',
      color: 'bg-orange-600'
    },
  ];

  const faqItems = [
    { question: 'Como recebo o eBook após a compra?', answer: 'Você receberá o link para download por email imediatamente após a confirmação do pagamento.' },
    { question: 'O conteúdo é compatível com dispositivos móveis?', answer: 'Sim! O eBook está em formato PDF otimizado para leitura em smartphones, tablets e computadores.' },
    { question: 'O conteúdo é adequado para iniciantes?', answer: 'Absolutamente! O material foi desenvolvido com linguagem clara e exemplos práticos para todos os níveis.' },
    { question: 'Como funciona a política de garantia?', answer: 'Oferecemos 7 dias de garantia incondicional. Se não estiver satisfeito, devolvemos 100% do investimento.' },
  ];

  const stats = [
    { number: '9', label: 'Capítulos Detalhados', icon: BookOpen },
    { number: '50+', label: 'Técnicas Práticas', icon: Target },
    { number: '7', label: 'Dias de Garantia', icon: Shield },
    { number: '100%', label: 'Acesso Digital', icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-[#050a30] text-white">
      {/* Compact Navigation Header */}
      <nav className="bg-[#050a30] border-b border-slate-700/50 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <div className="flex items-center">
              <h1 className="text-lg font-bold text-white">Domine Seu Tempo</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a href="#beneficios" className="text-slate-300 hover:text-[#3e8a36] px-2 py-1 text-sm font-medium transition-colors">Benefícios</a>
                <a href="#sumario" className="text-slate-300 hover:text-[#3e8a36] px-2 py-1 text-sm font-medium transition-colors">Sumário</a>
                <a href="#depoimentos" className="text-slate-300 hover:text-[#3e8a36] px-2 py-1 text-sm font-medium transition-colors">Depoimentos</a>
                <a href="#garantia" className="text-slate-300 hover:text-[#3e8a36] px-2 py-1 text-sm font-medium transition-colors">Garantia</a>
                <Link href="/checkout">
                  <button className="bg-[#3e8a36] hover:bg-[#2d6428] text-white px-4 py-1.5 rounded-lg font-semibold transition-colors text-sm shadow-lg hover:shadow-xl">
                    Comprar Agora
                  </button>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-[#3e8a36] p-1"
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#050a30] border-t border-slate-700/50">
            <div className="px-2 pt-1 pb-2 space-y-1">
              <a href="#beneficios" className="block px-3 py-1.5 text-slate-300 hover:text-[#3e8a36] font-medium text-sm">Benefícios</a>
              <a href="#sumario" className="block px-3 py-1.5 text-slate-300 hover:text-[#3e8a36] font-medium text-sm">Sumário</a>
              <a href="#depoimentos" className="block px-3 py-1.5 text-slate-300 hover:text-[#3e8a36] font-medium text-sm">Depoimentos</a>
              <a href="#garantia" className="block px-3 py-1.5 text-slate-300 hover:text-[#3e8a36] font-medium text-sm">Garantia</a>
              <Link href="/checkout">
                <button className="w-full mt-1 bg-[#3e8a36] hover:bg-[#2d6428] text-white px-4 py-1.5 rounded-lg font-semibold transition-colors text-sm">
                  Comprar Agora
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#050a30] via-[#0a1550] to-[#050a30] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            )}>
              <div className="inline-flex items-center bg-red-600/20 border border-red-500/30 text-red-400 px-4 py-2 rounded-full mb-6 font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                Oferta por tempo limitado
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Domine Seu Tempo,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8a36] to-[#4ade80]">Transforme Sua Vida</span>
              </h1>
              
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                O guia definitivo para produtividade e organização. Métodos comprovados para eliminar a procrastinação e maximizar seus resultados.
              </p>

              {/* Price */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-xl text-slate-400 line-through">R$ 40,00</span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">50% OFF</span>
                  </div>
                  <div className="text-4xl font-black text-[#3e8a36] mb-2">R$ 20,00</div>
                  <p className="text-slate-300 font-semibold">Pagamento único • Acesso vitalício</p>
                </div>
              </div>

              <Link href="/checkout">
                <button className="w-full bg-gradient-to-r from-[#3e8a36] to-[#2d6428] hover:from-[#2d6428] hover:to-[#1e4019] text-white px-6 py-3 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                  <Award className="w-6 h-6" />
                  Adquirir Agora
                  <ArrowRight className="w-6 h-6" />
                </button>
              </Link>

              <div className="mt-4 flex items-center justify-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#3e8a36]" />
                  <span>Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#3e8a36]" />
                  <span>Acesso imediato</span>
                </div>
              </div>
            </div>

            {/* Book Cover */}
            <div className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            )}>
              <div className="relative max-w-sm mx-auto">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[#3e8a36]/20 rounded-lg blur-xl"></div>
                  
                  {/* Shadow */}
                  <div className="absolute inset-0 bg-black/30 rounded-lg transform translate-x-4 translate-y-4 blur-sm"></div>
                  
                  {/* Book */}
                  <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
                    <img 
                      src="/capa menor.png" 
                      alt="Capa do eBook - Domine Seu Tempo, Transforme Sua Vida"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-gradient-to-r from-[#0a1550] to-[#050a30]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#3e8a36] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 text-[#3e8a36]">{stat.number}</div>
                <p className="text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-[#050a30]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transforme Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8a36] to-[#4ade80]">Produtividade</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Descubra métodos comprovados que vão revolucionar sua forma de trabalhar e viver
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="bg-gradient-to-br from-[#3e8a36] to-[#2d6428] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="sumario" className="py-20 bg-gradient-to-br from-[#0a1550] to-[#050a30]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Conteúdo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8a36] to-[#4ade80]">Completo</span>
            </h2>
            <p className="text-xl text-slate-300">
              9 capítulos estruturados com técnicas modernas e científicas
            </p>
          </div>
          
          <div className="space-y-4">
            {summaryItems.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300">
                <button
                  onClick={() => setOpenSummary(openSummary === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-[#3e8a36] to-[#2d6428] w-12 h-12 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                  {openSummary === index ? (
                    <ChevronUp className="w-6 h-6 text-[#3e8a36]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#3e8a36]" />
                  )}
                </button>
                {openSummary === index && (
                  <div className="px-6 pb-6 text-slate-300">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <p className="leading-relaxed mb-4">{item.description}</p>
                      <div className="space-y-2">
                        <p className="font-semibold text-[#3e8a36] text-sm">Técnicas incluídas:</p>
                        <ul className="space-y-1">
                          {item.techniques.map((technique, techIndex) => (
                            <li key={techIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-[#3e8a36]" />
                              <span>{technique}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-[#050a30]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Para Quem é <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8a36] to-[#4ade80]">Este eBook?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {targetAudience.map((target, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className={cn("w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg", target.color)}>
                  <target.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{target.title}</h3>
                <p className="text-slate-300 leading-relaxed">{target.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 bg-gradient-to-br from-[#0a1550] to-[#050a30]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Depoimentos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8a36] to-[#4ade80]">Leitores</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3e8a36] to-[#2d6428] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="garantia" className="py-20 bg-[#050a30]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#3e8a36] to-[#2d6428] w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
            <Shield className="w-16 h-16 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Garantia <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8a36] to-[#4ade80]">Incondicional</span>
          </h2>
          <p className="text-2xl text-slate-300 mb-10 leading-relaxed">
            7 dias para testar. Se não gostar, devolvemos 100% do seu investimento.
          </p>
          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10">
            <p className="text-slate-300 text-lg leading-relaxed">
              Temos total confiança na qualidade do nosso conteúdo. Por isso, oferecemos 7 dias de garantia incondicional. 
              Se por qualquer motivo você não estiver satisfeito, devolvemos 100% do seu investimento, sem perguntas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a1550] to-[#050a30]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8a36] to-[#4ade80]">Frequentes</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/10 transition-colors"
                >
                  <h3 className="font-bold text-white">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-[#3e8a36]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#3e8a36]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-300">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                      <p className="leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#050a30] via-[#0a1550] to-[#050a30]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-red-600/20 border border-red-500/30 text-red-400 px-6 py-3 rounded-full mb-8 font-bold backdrop-blur-sm">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
            Oferta por tempo limitado
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
            Pronto para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8a36] to-[#4ade80]">Transformar Sua Vida?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Não perca esta oportunidade única. Comece hoje mesmo sua jornada rumo à produtividade máxima.
          </p>
          <div className="mb-10 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3e8a36] to-[#4ade80] mb-3">
              Apenas R$ 20,00
            </div>
            <p className="text-slate-300 text-lg">Investimento único • Transformação para toda vida</p>
          </div>
          <Link href="/checkout">
            <button className="bg-gradient-to-r from-[#3e8a36] to-[#2d6428] hover:from-[#2d6428] hover:to-[#1e4019] text-white px-12 py-6 rounded-xl text-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-4 mx-auto">
              <Award className="w-8 h-8" />
              Adquirir Agora
              <ArrowRight className="w-8 h-8" />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm text-white py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#3e8a36] to-[#4ade80]">Domine Seu Tempo</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Transforme sua vida com produtividade e organização profissional.
              </p>
            </div>
            {/* <div>
              <h4 className="text-2xl font-bold mb-6">Contato</h4>
              <p className="text-slate-300 mb-2">jeffersonpinho.dev@gmail.com</p>
            </div> */}
            {/* <div>
              <h4 className="font-bold mb-6 text-lg">Legal</h4>
              <div className="space-y-3 text-slate-300">
                <p className="hover:text-[#3e8a36] transition-colors cursor-pointer">Termos de Uso</p>
                <p className="hover:text-[#3e8a36] transition-colors cursor-pointer">Política de Privacidade</p>
                <p className="hover:text-[#3e8a36] transition-colors cursor-pointer">Política de Reembolso</p>
              </div>
            </div> */}
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Domine Seu Tempo. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}