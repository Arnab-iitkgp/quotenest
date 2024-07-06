const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const get = document.querySelector(".get");
const spinner = document.querySelector(".spinner");
const box = document.querySelector(".box");
const dt = document.querySelector(".date");

const month = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
console.log("hello");
let date = new Date();
dt.textContent = `DATE :- ${date.getDate()} / ${
  month[date.getMonth()]
} / ${date.getFullYear()}`;
const url = "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en";
const options = {
  method: "GET",

  headers: {
    "x-rapidapi-key": "425d80c981msh695965bbdcb46a8p162ca7jsn6908b389af6a",
    "x-rapidapi-host": "quotes15.p.rapidapi.com",
  },
};

quote.innerHTML = "";
const getQuote = async function () {
  try {
    spinner.classList.remove("dis");

    box.classList.add("blr");

    let res = await fetch(url, options);
    const data = await res.json();
    box.classList.remove("blr");

    spinner.classList.add("dis");

    console.log(data);
    quote.textContent = data.content;
  } catch (error) {
    console.error("Error fetching the quote:", error);
  }
};

window.addEventListener("load", getQuote);

get.addEventListener("click", getQuote);
