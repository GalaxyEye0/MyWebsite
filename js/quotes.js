const quotes = [
    {
        quote: "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해.",
        author: "찰리 채플린",
    },
    {
        quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
        author: "L.론허바드",
    },
    {
        quote: "한번의 실패와 영원한 실패를 혼동하지 마라",
        author: "F.스콧 핏제랄드",
    },
    {
        quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
        author: "괴테",
    },
    {
        quote: "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
        author: "괴테",
    },
    {
        quote: "사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다",
        author: "생택쥐베리",
    },
    {
        quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
        author: "헨리 포드",
    },
    {
        quote: "이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
        author: "탈무드",
    },
    {
        quote: "실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
        author: "하버드대학",
    },
    {
        quote: "중요한 건 당신이 어떻게 시작했는가가 아니라 어떻게 끝내는가 이다.",
        author: "앤드류 매튜스",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.round(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;