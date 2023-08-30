// Simulated AI recommendation logic
function getGiftRecommendations(occasion, recipient) {
  const giftData = {
      birthday: [
          "Personalized cake",
          "Party decorations",
          "Gourmet chocolates",
          "Funny T-shirt"
      ],
      anniversary: [
          "Romantic dinner for two",
          "Custom couple portrait",
          "Engraved jewelry",
          "Weekend getaway package"
      ],
      graduation: [
          "Inspiring book",
          "Tech gadget",
          "Gift card for professional attire",
          "Custom diploma frame"
      ],
      default: [
          "Scented candles",
          "Handmade craft",
          "Books",
          "Subscription box"
      ]
  };

  // Determine the set of gifts based on the occasion
  const recommendedGifts = giftData[occasion.toLowerCase()] || giftData.default;

  return recommendedGifts;
}

document.addEventListener('DOMContentLoaded', () => {
  const generateGiftBtn = document.getElementById('generateGiftBtn');
  const giftList = document.getElementById('giftList');

  generateGiftBtn.addEventListener('click', () => {
      const occasionInput = document.getElementById('occasionInput');
      const recipientInput = document.getElementById('recipientInput');

      const occasion = occasionInput.value;
      const recipient = recipientInput.value;

      // Simulate AI recommendation
      const recommendedGifts = getGiftRecommendations(occasion, recipient);

      // Display recommended gifts
      giftList.innerHTML = recommendedGifts
          .map(gift => `<div class="gift">${gift}</div>`)
          .join('');
  });
});
