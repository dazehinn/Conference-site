const speakerGroup = document.querySelector('.speaker-group');

/* Array of speaker details */
const speakers = [
  {
    image: 'img/speaker_01.png',
    fullName: 'Yohai Benkler',
    title: 'Professor, Harvard Law School',
    bio: 'Focusing on a common approach in a networked environment, we created the concept of co-production based on open source software and sharing, such as Wikipedia.',
  },
  {
    image: 'img/speaker_02.png',
    fullName: 'Jeon Gilnam',
    title: 'Professor Emeritus, Korea Advanced Institute of Science and Technology (KAIST)',
    bio: 'He developed SDN, the first Internet protocol network in Asia, and led Korea first dedicated line Internet connection in 1990, opening the Internet era in earnest.',
  },
  {
    image: 'img/speaker_03.png',
    fullName: 'Soyoung Roh',
    title: 'Art Center Butterfly Director, CC Korea',
    bio: 'She opened Art Center Nabi, Korea first digital art specialized institution, and has been in office ever since.',
  },
  {
    image: 'img/speaker_04.png',
    fullName: 'Julia Reda',
    title: 'Representative of the Young Pirates of Europe',
    bio: 'European integration and youth participation in politics and democracy through online are key concerns, according to a report that could potentially impact changes to the European Union copyright laws in July.',
  },
  {
    image: 'img/speaker_05.png',
    fullName: 'Laila Tretikov',
    title: 'Wikimedia Foundation Executive Director',
    bio: 'Laila Tretikow is executive director of the Wikimedia Foundation, the nonprofit that runs Wikipedia. Wikipedia is available for free every month in 290 languages to more than 100 million people, nearly half of the worlds population.',
  },
  {
    image: 'img/speaker_06.png',
    fullName: 'Ryan Merkley',
    title: 'CEO of Creative Commons, former COO of the Mozilla Foundation',
    bio: 'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. Open government, open source, and other open movements have been actively carried out.',
  },
];

for (let i = 0; i < speakers.length; i += 1) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImg = document.createElement('img');
  cardImg.classList.add('card-img');
  cardImg.src = speakers[i].image;

  const speakerInfo = document.createElement('div');
  speakerInfo.classList.add('speaker-info');

  const speakerName = document.createElement('p');
  speakerName.classList.add('speaker-name');
  speakerName.textContent = speakers[i].fullName;

  const speakerPosition = document.createElement('p');
  speakerPosition.classList.add('speaker-position');
  speakerPosition.textContent = speakers[i].title;

  const line = document.createElement('hr');
  line.classList.add('line');

  const speakerBio = document.createElement('p');
  speakerBio.classList.add('speaker-bio');
  speakerBio.textContent = speakers[i].bio;

  speakerInfo.append(speakerName, speakerPosition, line, speakerBio);
  card.append(cardImg, speakerInfo);

  speakerGroup.appendChild(card);
}
