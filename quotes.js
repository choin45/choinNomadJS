
const quotes = [
	{
		quote: "I never dreamed about success, I worked for it",
		author: "Estee Lauder",
	},
	{
		quote: "Do not try to be original, just try to be good.",
		author: "Paul Rand",
	},
	{
		quote: "Do not be afraid to give up the good to go for the great",
		author: "John D. Rockefeller",
	},
	{
		quote: "The fastest way to change yourself is to hang out with people who are already the way you want to be",
		author: "REid Hoffman",
	},
	{
		quote: "Some people dream of success, while other people get up every morning and make it happen",
		author: "Wayne Huizenga",
	},
	{
		quote: "The only thing worse than starting something and falling.. is not starting something",
		author: "SEth Godin",
	},
	{
		quote: "If you really want to do something, you will find a way. If you do not, you will find an excuse.",
		author: "Jim Rohn",
	},
];


const quotesText = document.querySelector('#quotes .text');
const quotesName = document.querySelector('#quotes .name');

function quotesInterval() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quotesText.classList.remove('fade-in');
  quotesName.classList.remove('fade-in');
  
  setTimeout(() => {
    quotesText.innerText = randomQuote.quote;
    quotesName.innerText = randomQuote.author;
    quotesText.classList.add('fade-in');
    quotesName.classList.add('fade-in');
  }, 1000);
}

quotesInterval();
setInterval(quotesInterval, 7000);