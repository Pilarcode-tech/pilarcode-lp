export const openWhatsAppChat = (message?: string) => {
  const encodedMessage = encodeURIComponent(message || '');
  const whatsappUrl = `https://wa.me/5511918958384?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
};
