import Image from 'next/image';


const juliaAvatarPath = '/Avatar.png'; 

export default function Testimonial() {
  return (
    <section className="bg-testimonial-pink py-20 px-4 text-center">
      <div className="mx-auto">
        <p className="text-red-700 font-semibold mb-3">
          Veja o que nossos colaboradores falam sobre nós
        </p>
        <h2 className="text-4xl font-semibold text-gray-900 leading-tight mb-8 lg:text-5xl">
          OptimusTech se importa com a saúde dos seus colaboradores e sempre procura nos dar todo tipo de auxílio possível.
        </h2>
        <div className="flex flex-col items-center">
          <Image 
            src={juliaAvatarPath} 
            alt="Foto de Júlia Castro" 
            className="rounded-full mb-3"
            width={60} 
            height={60}
          />
          <p className="text-lg font-semibold text-gray-900 mb-1">
            Júlia Castro
          </p>
          <p className="text-sm text-gray-600">
            Desenvolvedora Web
          </p>
        </div>
      </div>
    </section>
  );
}