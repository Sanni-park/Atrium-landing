const buttonContent = [
  {
    month: 'August',
    year: '2019',
    content:
      'One humid and hot summer day, Atrium was born on a design thinking workshop in Seoul. The designers behind the idea were inspired to create a platform, and with it, a new era of social media.',
  },
  {
    month: 'December',
    year: '2019',
    content:
      'After months of consideration, Atrium is taken off of the Shelf of Ideas. The project is picked up by one of the original creators, who dives into research and begins the reinvention of the project.',
  },
  {
    month: 'January',
    year: '2020',
    content:
      "Atrium is a team of two once again. Our research continues; it's an ocean of academic papers and books and discussions. Until one day, we suddenly have an idea: how could we make this into a game?",
  },
  {
    month: 'March',
    year: '2020',
    content:
      "Surveying begins through various gaming communities on Reddit and Twitter. We accumulate hundreds of answers in a couple of days, which proves the power of games - and that we're on the right track.",
  },
  {
    month: 'July',
    year: '2020',
    content:
      'We’re launching our landing page for a couple of reasons: to get in touch with you guys once again, hoping that we can create meaningful new connections, and of course, to introduce our work.',
  },
];

function setDevelopmentContent(index) {
  console.log(index);
  const year = document.getElementById('development-year');
  const month = document.getElementById('development-month');
  const content = document.getElementById('development-content');
  year.innerText = buttonContent[index].year;
  month.innerText = buttonContent[index].month;
  content.innerText = buttonContent[index].content;
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0';
  } else {
    document.getElementById('navbar').style.top = '-110px';
  }
  prevScrollpos = currentScrollPos;
};
