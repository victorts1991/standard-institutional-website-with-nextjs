import React from 'react';

export default function OpportunityCTA() {
  return (
    <section className={`bg-testimonial-pink py-20 px-4 text-center`}>
      <div className="max-w-xl mx-auto">
        
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          Acompanhe as nossas oportunidades
        </h2>
        
        <p className="text-gray-600 mb-8">
          Seja o primeiro a saber quando novas vagas serão abertas!
        </p>

        <form className="flex justify-center mb-10 space-x-2">
          
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full max-w-sm px-4 py-3 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-red-700 
                       text-gray-700 placeholder-gray-500"
          />
          
          <button
            type="submit"
            className="px-6 py-3 bg-red-800 text-white font-medium 
                       rounded-lg hover:bg-red-900 transition duration-150 cursor-pointer"
            
          >
            Cadastrar
          </button>
        </form>

        <p className="text-sm text-gray-500">
          © 2025 OptimusTech. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
}