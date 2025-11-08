// src/pages/Contato.jsx
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Carrinho() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_rwqvxjp", 
        "template_yg9go43", 
        form.current,
        "dwW73keIseEf01SbI" 
      )
      .then(
        () => {
          setIsSending(false);
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          console.error("Erro ao enviar email:", error);
          setIsSending(false);
        }
      );
  };

  return (
    <section className="w-full flex flex-col items-center justify-center text-white">
      <div className="w-full md:w-2/3 bg-[#2A2E33] rounded-2xl p-8 shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Entre em Contato
        </h1>
        <p className="text-center text-[#d1d5db] mb-8">
          Tem um projeto, dúvida ou apenas quer conversar?  
          Envie uma mensagem e entrarei em contato o mais breve possível.
        </p>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm mb-1 text-[#d1d5db]">
              Nome
            </label>
            <input
              type="text"
              name="from_name"
              id="name"
              required
              className="p-3 rounded-lg bg-[#1e2124] border border-gray-600 focus:outline-none focus:border-red-700 transition"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-1 text-[#d1d5db]">
              E-mail
            </label>
            <input
              type="email"
              name="from_email"
              id="email"
              required
              className="p-3 rounded-lg bg-[#1e2124] border border-gray-600 focus:outline-none focus:border-red-700 transition"
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm mb-1 text-[#d1d5db]">
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="p-3 rounded-lg bg-[#1e2124] border border-gray-600 focus:outline-none focus:border-red-700 transition resize-none"
              placeholder="Digite sua mensagem..."
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="bg-red-800 hover:bg-red-700 transition text-white font-semibold py-3 rounded-lg shadow-md mt-2"
          >
            {isSending ? "Enviando..." : "Enviar Mensagem"}
          </button>

          {sent && (
            <p className="text-green-400 text-center mt-2">
              ✅ Mensagem enviada com sucesso!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
