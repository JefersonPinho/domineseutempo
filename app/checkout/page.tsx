'use client';

import { useState } from 'react';
import { ArrowLeft, CheckCircle, Shield, Clock, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your payment processor
    console.log('Form submitted:', formData);
    alert('Redirecionando para pagamento...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/" className="flex items-center text-[#050a30] hover:text-[#3e8a36] transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="font-semibold">Voltar para a página inicial</span>
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="lg:order-2">
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-[#050a30] mb-6">Resumo do Pedido</h2>
              
              {/* Product */}
              <div className="border-b border-slate-200 pb-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-20 rounded overflow-hidden shadow-lg">
                    <img 
                      src="/capa menor.png" 
                      alt="Capa do eBook"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#050a30] mb-2">
                      Domine Seu Tempo, Transforme Sua Vida
                    </h3>
                    <p className="text-slate-600 text-sm">
                      O Guia Prático para Produtividade e Organização
                    </p>
                    <div className="mt-2">
                      <span className="text-sm text-slate-500 line-through">R$ 40,00</span>
                      <span className="text-lg font-bold text-[#3e8a36] ml-2">R$ 20,00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="text-slate-600">R$ 40,00</span>
                </div>
                <div className="flex justify-between text-[#3e8a36] font-semibold">
                  <span>Desconto promocional</span>
                  <span>-R$ 20,00</span>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <div className="flex justify-between text-xl font-bold text-[#050a30]">
                    <span>Total</span>
                    <span>R$ 20,00</span>
                  </div>
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Garantia de 7 dias</span>
                </div>
                <p className="text-green-700 text-sm">
                  Se não gostar, devolvemos 100% do seu dinheiro. Compra sem risco.
                </p>
              </div>

              {/* What's Included */}
              <div className="space-y-3">
                <h3 className="font-semibold text-[#050a30] mb-3">O que está incluído:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3e8a36]" />
                    <span className="text-slate-700 text-sm">eBook completo em PDF</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3e8a36]" />
                    <span className="text-slate-700 text-sm">9 capítulos detalhados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3e8a36]" />
                    <span className="text-slate-700 text-sm">Exercícios práticos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3e8a36]" />
                    <span className="text-slate-700 text-sm">Acesso imediato</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3e8a36]" />
                    <span className="text-slate-700 text-sm">Suporte por email</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:order-1">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold text-[#050a30] mb-2">Finalizar Compra</h1>
              <p className="text-slate-600 mb-8">
                Preencha seus dados para receber o eBook em seu email
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-[#050a30] mb-4">Dados Pessoais</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3e8a36] focus:border-transparent"
                        placeholder="Digite seu nome completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3e8a36] focus:border-transparent"
                        placeholder="Digite seu email"
                      />
                    </div>

                    <div>
                      <label htmlFor="confirmEmail" className="block text-sm font-medium text-slate-700 mb-1">
                        Confirme seu email *
                      </label>
                      <input
                        type="email"
                        id="confirmEmail"
                        name="confirmEmail"
                        value={formData.confirmEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3e8a36] focus:border-transparent"
                        placeholder="Confirme seu email"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div>
                  <h3 className="text-lg font-semibold text-[#050a30] mb-4">Informações de Pagamento</h3>
                  
                  <div className="bg-slate-50 p-6 rounded-lg mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CreditCard className="w-6 h-6 text-[#3e8a36]" />
                      <span className="font-semibold text-[#050a30]">PIX ou Cartão de Crédito</span>
                    </div>
                    <p className="text-slate-600 text-sm mb-2">
                      Após clicar em &quot;Finalizar Compra&quot;, você será redirecionado para nossa plataforma de pagamento segura.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Shield className="w-4 h-4" />
                      <span>Pagamento 100% seguro e criptografado</span>
                    </div>
                  </div>

                  <div className="text-center text-xl font-bold text-[#050a30] mb-6">
                    Total: R$ 20,00 à vista
                  </div>
                </div>

                {/* Terms */}
                <div className="text-sm text-slate-600 space-y-2">
                  <p>
                    ✅ Ao finalizar a compra, você concorda com nossos{' '}
                    <a href="#" className="text-[#3e8a36] hover:underline">Termos de Uso</a> e{' '}
                    <a href="#" className="text-[#3e8a36] hover:underline">Política de Privacidade</a>
                  </p>
                  <p>
                    ✅ Você receberá o eBook por email em até 5 minutos após a confirmação do pagamento
                  </p>
                  <p>
                    ✅ Garantia incondicional de 7 dias
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#3e8a36] hover:bg-[#2d6428] text-white py-4 px-6 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Finalizar Compra - R$ 20,00
                </button>
              </form>

              {/* Security Notice */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-blue-800 text-sm">Compra Segura</p>
                    <p className="text-blue-700 text-sm">
                      Seus dados estão protegidos com criptografia SSL de 256 bits. 
                      Não armazenamos informações de cartão de crédito.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}