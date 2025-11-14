// Write a program where the user defines a variable, set to the month they were born in. 
// Then, it should use control flow to randomly print a fortune to the console.
// Symbol	Name	Month
// ♑	Capricorn	January
// ♒	Aquarius	February
// ♓	Pisces	March
// ♈	Aries	April
// ♉	Taurus	May
// ♊	Gemini	June
// ♋	Cancer	July
// ♌	Leo	August
// ♍	Virgo	September
// ♎	Libra	October
// ♏	Scorpio	November
// ♐	Sagittarius	December
// Note: Regular horoscopes tend to be more specific to what day of the month one was born. 
// This chart is more general and only uses the month. Therefore, the symbol and name printed by this program may not be accurate.

let monthBorn = "";
function getRandomMonth() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
    return months[Math.floor(Math.random() * months.length)];
}
monthBorn = getRandomMonth();


let fortune = "";

switch (monthBorn) {
  case "January":
    fortune = "♑ Capricorn: You will find success in your career this month.";
    break;
  case "February":
    fortune = "♒ Aquarius: A new friendship will bring joy to your life.";
    break;
  case "March":
    fortune = "♓ Pisces: A surprise encounter will lead to a lasting friendship.";
    break;
  case "April":
    fortune = "♈ Aries: Your creativity will shine in unexpected ways.";
    break;
  case "May":
    fortune = "♉ Taurus: Financial opportunities are on the horizon.";
    break;
  case "June":
    fortune = "♊ Gemini: Embrace change and new experiences.";
    break;
  case "July":
    fortune = "♋ Cancer: Family bonds will strengthen this month.";
    break;
  case "August":
    fortune = "♌ Leo: Your confidence will lead you to new adventures.";
    break;
  case "September":
    fortune = "♍ Virgo: Attention to detail will pay off in your projects.";
    break;
  case "October":
    fortune = "♎ Libra: Balance in your life will bring peace and happiness.";
    break;
  case "November":
    fortune = "♏ Scorpio: Trust your instincts in important decisions.";
    break;
  case "December":
    fortune = "♐ Sagittarius: Travel opportunities will broaden your horizons.";
    break;
}

console.log(fortune);