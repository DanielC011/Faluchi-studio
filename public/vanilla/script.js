/**
 * FALUCHI STUDIO - SCRIPT & CONFIGURAÇÕES
 * Altere as variáveis abaixo para atualizar links ou textos facilmente!
 */

const CONFIG = {
  nomeMarca: "FALUCHI STUDIO",
  expert: "Daniel Faluchi",
  whatsappUrl: "https://wa.me/5521989380500?text=Olá%21%20Tenho%20interesse%20em%20criar%20uma%20Landing%20Page%20para%20o%20meu%20negócio%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20da%20FALUCHI%20STUDIO.%F0%9F%9A%80",
  instagramUrl: "https://www.instagram.com/faluchi.studio/",
  email: "daniel.faluchi@gmail.com",
};

document.addEventListener("DOMContentLoaded", () => {
  // Configurar botões de WhatsApp
  const ctaButtons = document.querySelectorAll(".js-whatsapp-link");
  ctaButtons.forEach((btn) => {
    btn.href = CONFIG.whatsappUrl;
  });

  // FAQ Accordion Interativo
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.parentElement;
      const isActive = item.classList.contains("active");

      // Fechar todos
      document.querySelectorAll(".faq-item").forEach((el) => {
        el.classList.remove("active");
      });

      // Se não estava ativo, abre
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // Abrir a primeira pergunta por padrão
  const firstFaq = document.querySelector(".faq-item");
  if (firstFaq) {
    firstFaq.classList.add("active");
  }
});
