// Embeddable Quote Generator Component
(function() {
  // Function to get a random quote from an API
  async function getRandomQuote() {
    try {
      // const response = await fetch('https://api.quotable.io/random');
      const response = await fetch('https://favqs.com/api/qotd');
      if (!response.ok) {
        throw new Error('Network response was not ok | 404 Found ');
      }
      const data = await response.json();
      return `${data.content} - ${data.author}`;
    } catch (error) {
      console.error('Failed to fetch quote:', error);
      return 'An error occurred. Please try again later.';
    }
  }

  // Function to create and display the quote element
  async function displayQuote() {
    const quoteContainer = document.getElementById('quote-generator');
    if (!quoteContainer) {
      const newQuoteContainer = document.createElement('div');
      newQuoteContainer.id = 'quote-generator';
      newQuoteContainer.className = 'quote-container';
      newQuoteContainer.innerText = await getRandomQuote();

      // Create refresh button
      const refreshButton = document.createElement('button');
      refreshButton.innerText = 'Refresh Quote';
      refreshButton.className = 'refresh-button';
      refreshButton.onclick = async function() {
        newQuoteContainer.innerText = await getRandomQuote();
      };

      document.body.appendChild(newQuoteContainer);
      document.body.appendChild(refreshButton);
    } else {
      quoteContainer.innerText = await getRandomQuote();
    }
  }

  // Display the quote when the page is loaded
  document.addEventListener('DOMContentLoaded', displayQuote);
})();