// Dark mode toggle
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

// Show daily quote
function showDailyQuote() {
  const quotes = [
      "اللهم اجعل خير عمري اخره وخير عملي خواتمه وخير ايامي يوم القاك فيه",
      "اللهم ارحم موتانا وموتي المسلمين وشافي مرضانا ومرضى المسلمين وارزقنا الفردوس الاعلى",
      "اللهم ارزقنا السعاده في الدنيا والاخرة",
      "اللهم احسن عاقبتنا في الامور كلها وأجرنا من خزي الدنيا وعذاب الآخرة"
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const dailyQuoteElement = document.getElementById('dailyQuote');
  dailyQuoteElement.textContent = quotes[randomIndex];
}

// Counter functions
function incrementCounter(counterId) {
  const counter = document.getElementById(counterId);
  let count = parseInt(counter.textContent);
  count++;
  counter.textContent = count;
}

function resetCounter(counterId) {
  const counter = document.getElementById(counterId);
  counter.textContent = '0';
}
