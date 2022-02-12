/* ------------- Mobile Menu ------------- */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const bars = document.querySelector('.bars');
// const headline = document.querySelector('.headline');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  bars.classList.toggle('active');
  // headline.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  bars.classList.remove('active');
}));

/* ------------- Program Section ------------- */
const contributers = [

  {
    photoUrl: '../images/photo/profile1.png',
    fullName: 'Belgacem Haba',
    title: 'Senior Fellow and Vice President, Xperi Corporation',
    description: 'Dr. Haba joined Xperi (previously Tessera) in 1996 and is now its Senior Technical Fellow and vice president. Today he is heading the path finding team in the electronic R&D division.',
  },
  {
    photoUrl: '../images/photo/profile2.png',
    fullName: 'Steve Jobs',
    title: 'Chairman, chief executive officer (CEO), and co-founder of Apple Inc',
    description: "Jobs and  Steve Wozniak co-founded Apple in 1976 to sell Wozniak's Apple I personal computer. Together the duo gained fame and wealth a year later with the Apple II, one of the first highly successful mass-produced microcomputers.",
  },
  {
    photoUrl: '../images/photo/profile3.png',
    fullName: 'full name3',
    title: 'American business magnate, software developer, investor, author, and philanthropist',
    description: 'He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.',
  },
  {
    photoUrl: '../images/photo/profile4.png',
    fullName: 'Ryan Merkley',
    title: 'Ceo o Crative Commens, ex COO of the Mozilla Foudation',
    description: 'Ryan has been leading open source projacts at the Mozilla foundation such as the open source movement',
  },
  {
    photoUrl: '../images/photo/profile5.png',
    fullName: 'Yohai Benkler',
    title: 'Berkman professor of Entrepreunarial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
  },
  {
    photoUrl: '../images/photo/profile6.png',
    fullName: 'Kilnam Chon',
    title: '',
    description: 'Kham Chan helped bring the internet to Asia and is an outspoken advocate for the open web and digital commans.',
  },
];

const contributorList = document.querySelector('.contributor-list');
let card;

function addCard(nbr) {
  card = document.createElement('div');
  card.classList = 'contributor-card';
  if (nbr > 1) {
    card.classList.add('mobile-hide');
  }
  card.innerHTML = `
    <div class="contributor-img">
      <img src="${contributers[nbr].photoUrl}" alt="Contributor Photo">
    </div>
    <div class="card-container">
      <h4><b>${contributers[nbr].fullName}</b></h4>
      <p><i>${contributers[nbr].title}</i></p>
      <p>${contributers[nbr].description}</p>
    </div>
  `;
  contributorList.append(card);
}

for (let i = 0; i < contributers.length; i += 1) {
  addCard(i);
}

/* more button */
const moreBtn = document.getElementById('more-btn');
const cardHide = document.getElementsByClassName('contributor-card');
document.addEventListener('click', (e) => {
  if (e.target.id === 'more-btn') {
    for (let i = 0; i < cardHide.length; i += 1) {
      cardHide[i].classList.remove('mobile-hide');
    }
    moreBtn.style.display = 'none';
  }
});
