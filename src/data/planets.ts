// Facts about the eight planets, based on NASA Solar System Exploration
// (science.nasa.gov/solar-system). Numbers marked "about" are rounded averages.

export interface Planet {
  id: string;
  name: string;
  order: number; // position from the Sun
  type: string;
  cardFact: string;
  nameOrigin: string;
  discovery: string;
  madeOf: string;
  diameterKm: number;
  sizeVsEarth: string; // e.g. "0.38 × Earth"
  sizeRatio: number; // diameter ÷ Earth's diameter
  temperature: string;
  atmosphere: string;
  humans: string;
  spacecraft: string;
  mission: { name: string; launched: string; arrived: string; duration: string };
  dayLength: string;
  yearLength: string;
  moons: string;
  funFacts: string[];
}

export const PLANETS: Planet[] = [
  {
    id: "mercury", name: "Mercury", order: 1, type: "Rocky planet",
    cardFact: "Mercury is the smallest planet and the closest to the Sun.",
    nameOrigin: "Mercury is named after the speedy messenger of the Roman gods — a good name for the planet that zooms around the Sun fastest.",
    discovery: "Mercury can be seen without a telescope, so people have known about it since ancient times. Nobody knows who first spotted it.",
    madeOf: "Mercury is a rocky planet with a very large iron core. Its surface is covered in craters, a lot like our Moon.",
    diameterKm: 4879, sizeVsEarth: "About 0.38 × Earth", sizeRatio: 0.38,
    temperature: "Daytime can reach about 430 °C, but at night it drops to about −180 °C, because there is almost no air to hold the heat.",
    atmosphere: "Mercury has no real atmosphere — only a super-thin layer of gases called an exosphere (oxygen, sodium, hydrogen, helium and potassium).",
    humans: "No. It is far too hot in the day, far too cold at night and there is no air to breathe. No human has ever been there.",
    spacecraft: "Two spacecraft have visited: Mariner 10 (flybys in 1974–1975) and MESSENGER (orbited 2011–2015). BepiColombo is on its way now.",
    mission: { name: "MESSENGER", launched: "August 2004", arrived: "March 2011 (entered orbit)", duration: "About 6.5 years — it flew past Earth, Venus and Mercury to slow down enough to go into orbit." },
    dayLength: "176 Earth days (sunrise to sunrise)", yearLength: "88 Earth days", moons: "0",
    funFacts: [
      "Mercury is the fastest planet — it goes around the Sun in only 88 days.",
      "Even though it is closest to the Sun, Mercury is NOT the hottest planet. Venus is!",
      "Mercury is only a little bigger than Earth's Moon.",
      "Scientists think there may be water ice hiding in dark craters at Mercury's poles.",
    ],
  },
  {
    id: "venus", name: "Venus", order: 2, type: "Rocky planet",
    cardFact: "Venus is the hottest planet — hotter than Mercury!",
    nameOrigin: "Venus is named after the Roman goddess of love and beauty, probably because it shines so brightly in the sky.",
    discovery: "Venus is the brightest planet in our sky and has been known since ancient times. It is often called the 'morning star' or 'evening star'.",
    madeOf: "Venus is a rocky planet about the same size as Earth, with volcanoes, mountains and huge lava plains.",
    diameterKm: 12104, sizeVsEarth: "About 0.95 × Earth (almost a twin!)", sizeRatio: 0.95,
    temperature: "About 465 °C all the time — hot enough to melt lead. Its thick air traps heat like a blanket.",
    atmosphere: "Very thick, mostly carbon dioxide, with clouds of sulfuric acid. The air pressure is about 90 times stronger than on Earth.",
    humans: "No. The heat, crushing pressure and acid clouds make it impossible. No human has ever been there.",
    spacecraft: "Many! The Soviet Venera 7 was the first spacecraft to land on another planet (1970). NASA's Magellan mapped Venus with radar from 1990 to 1994.",
    mission: { name: "Magellan", launched: "May 1989", arrived: "August 1990", duration: "About 15 months." },
    dayLength: "243 Earth days (one spin)", yearLength: "225 Earth days", moons: "0",
    funFacts: [
      "A day on Venus (one spin) is longer than its year!",
      "Venus spins backwards compared with most planets, so the Sun rises in the west.",
      "Landers that reached the surface only survived a couple of hours before the heat and pressure destroyed them.",
      "Venus has no moons.",
    ],
  },
  {
    id: "earth", name: "Earth", order: 3, type: "Rocky planet",
    cardFact: "Earth is the only place we know of where life exists.",
    nameOrigin: "Earth is the only planet not named after a Greek or Roman god. Its name comes from old English and German words meaning 'the ground'.",
    discovery: "We live here! But people only learned that Earth is a planet going around the Sun about 500 years ago, thanks to Nicolaus Copernicus and later Galileo.",
    madeOf: "Earth is rocky, with an iron and nickel core. About 71% of its surface is covered by water.",
    diameterKm: 12756, sizeVsEarth: "1 × Earth — this is our measuring stick!", sizeRatio: 1,
    temperature: "On average about 15 °C, but it ranges from freezing poles to hot deserts.",
    atmosphere: "About 78% nitrogen and 21% oxygen, plus small amounts of other gases. It protects us and lets us breathe.",
    humans: "Yes! Earth is our home — about 8 billion people live here.",
    spacecraft: "Thousands of satellites orbit Earth, and astronauts live on the International Space Station. Apollo astronauts also looked back at Earth from the Moon.",
    mission: { name: "Apollo 11 (Earth to the Moon)", launched: "16 July 1969", arrived: "Landed on the Moon on 20 July 1969", duration: "About 4 days from Earth to the Moon's surface." },
    dayLength: "About 24 hours", yearLength: "About 365.25 days", moons: "1 (the Moon)",
    funFacts: [
      "Earth is the biggest of the four rocky planets.",
      "Earth is the densest planet in the Solar System.",
      "Earth's magnetic field protects us from harmful particles from the Sun and makes the beautiful auroras.",
      "That extra quarter day each year is why we have leap years.",
    ],
  },
  {
    id: "mars", name: "Mars", order: 4, type: "Rocky planet",
    cardFact: "Mars is home to Olympus Mons, the biggest volcano in the Solar System.",
    nameOrigin: "Mars is named after the Roman god of war, because its red colour reminded people of blood.",
    discovery: "Mars can be seen without a telescope and has been known since ancient times.",
    madeOf: "Mars is rocky. Its red colour comes from iron-rich minerals in the dust that have rusted (iron oxide).",
    diameterKm: 6792, sizeVsEarth: "About 0.53 × Earth (about half)", sizeRatio: 0.53,
    temperature: "On average about −60 °C. Near the equator in summer it can reach about 20 °C during the day.",
    atmosphere: "Very thin, about 95% carbon dioxide. Its air pressure is only about 1% of Earth's.",
    humans: "Not without lots of help. The air is too thin and has almost no oxygen. No human has been to Mars yet — only robots.",
    spacecraft: "Many orbiters, landers and rovers, including Curiosity and Perseverance, which are exploring Mars right now.",
    mission: { name: "Perseverance rover", launched: "30 July 2020", arrived: "18 February 2021", duration: "About 7 months." },
    dayLength: "About 24 hours 37 minutes", yearLength: "687 Earth days", moons: "2 (Phobos and Deimos)",
    funFacts: [
      "Olympus Mons is about 2.5 times as tall as Mount Everest.",
      "Mars has huge dust storms that can sometimes cover the whole planet.",
      "A helicopter called Ingenuity made the first powered flight on another planet in 2021.",
      "Mars has ice at its poles.",
    ],
  },
  {
    id: "jupiter", name: "Jupiter", order: 5, type: "Gas giant",
    cardFact: "Jupiter is the biggest planet — more than 1,300 Earths could fit inside!",
    nameOrigin: "Jupiter is named after the king of the Roman gods — perfect for the biggest planet.",
    discovery: "Jupiter is very bright and has been known since ancient times. In 1610 Galileo discovered its four biggest moons with a telescope.",
    madeOf: "Jupiter is a gas giant made mostly of hydrogen and helium. It has no solid surface to stand on.",
    diameterKm: 142984, sizeVsEarth: "About 11 × Earth across", sizeRatio: 11.2,
    temperature: "About −145 °C at the cloud tops. It gets much hotter deep inside.",
    atmosphere: "Mostly hydrogen and helium, with colourful stripes of clouds and giant storms.",
    humans: "No. There is no surface to land on, and the radiation and pressure are deadly.",
    spacecraft: "Pioneer 10 and 11, Voyager 1 and 2, Galileo, Juno and others. Juno is studying Jupiter from orbit.",
    mission: { name: "Juno", launched: "5 August 2011", arrived: "4 July 2016", duration: "About 5 years." },
    dayLength: "About 10 hours (shortest day of any planet)", yearLength: "About 12 Earth years", moons: "More than 90",
    funFacts: [
      "The Great Red Spot is a giant storm bigger than Earth that has lasted for hundreds of years.",
      "Jupiter has faint rings that are hard to see.",
      "Its moon Ganymede is the largest moon in the Solar System — bigger than Mercury.",
      "Jupiter spins faster than any other planet.",
    ],
  },
  {
    id: "saturn", name: "Saturn", order: 6, type: "Gas giant",
    cardFact: "Saturn has the most spectacular rings, made of ice and rock.",
    nameOrigin: "Saturn is named after the Roman god of farming and wealth. In the stories, he was Jupiter's father.",
    discovery: "Saturn has been known since ancient times. Galileo first saw its rings through a telescope in 1610, but he didn't know what they were.",
    madeOf: "Saturn is a gas giant made mostly of hydrogen and helium. It is the least dense planet.",
    diameterKm: 120536, sizeVsEarth: "About 9.5 × Earth across", sizeRatio: 9.45,
    temperature: "About −178 °C at the cloud tops.",
    atmosphere: "Mostly hydrogen and helium, with very fast winds.",
    humans: "No. There is no solid surface, and the conditions are deadly.",
    spacecraft: "Pioneer 11, Voyager 1 and 2, and Cassini, which orbited Saturn for 13 years.",
    mission: { name: "Cassini", launched: "15 October 1997", arrived: "1 July 2004", duration: "About 6 years and 8 months." },
    dayLength: "About 10.7 hours", yearLength: "About 29 Earth years", moons: "The most of any planet — over 200 confirmed",
    funFacts: [
      "Saturn's rings are made of billions of chunks of ice and rock — some as small as dust, some as big as houses.",
      "Saturn is less dense than water.",
      "Its moon Titan has lakes and rivers of liquid methane.",
      "There is a giant six-sided (hexagon) cloud pattern at Saturn's north pole.",
    ],
  },
  {
    id: "uranus", name: "Uranus", order: 7, type: "Ice giant",
    cardFact: "Uranus spins on its side, like a rolling ball!",
    nameOrigin: "Uranus is named after the Greek god of the sky. It is the only planet named after a Greek god instead of a Roman one.",
    discovery: "Uranus was the first planet found with a telescope. William Herschel discovered it on 13 March 1781.",
    madeOf: "Uranus is an ice giant. Most of it is a hot, dense fluid of 'icy' materials — water, methane and ammonia — around a small rocky core.",
    diameterKm: 51118, sizeVsEarth: "About 4 × Earth across", sizeRatio: 4.0,
    temperature: "It has the coldest atmosphere of any planet, reaching about −224 °C.",
    atmosphere: "Mostly hydrogen and helium, with methane, which gives Uranus its blue-green colour.",
    humans: "No. There is no solid surface to stand on, and it is freezing cold.",
    spacecraft: "Only one: Voyager 2 flew past in January 1986.",
    mission: { name: "Voyager 2", launched: "20 August 1977", arrived: "24 January 1986 (flyby)", duration: "About 8.5 years." },
    dayLength: "About 17 hours", yearLength: "About 84 Earth years", moons: "More than 25",
    funFacts: [
      "Uranus is tilted about 98°, so it orbits the Sun on its side.",
      "Because of the tilt, each pole gets about 42 years of sunlight and then 42 years of darkness.",
      "Uranus has 13 known rings.",
      "Most of its moons are named after characters from Shakespeare's plays.",
    ],
  },
  {
    id: "neptune", name: "Neptune", order: 8, type: "Ice giant",
    cardFact: "Neptune has the fastest winds in the Solar System.",
    nameOrigin: "Neptune is named after the Roman god of the sea — a good match for its deep blue colour.",
    discovery: "Neptune was found using maths! Scientists noticed Uranus was being pulled by something unseen. Urbain Le Verrier predicted where it was, and Johann Galle spotted it in 1846.",
    madeOf: "Neptune is an ice giant, like Uranus: a fluid of water, methane and ammonia around a small rocky core.",
    diameterKm: 49528, sizeVsEarth: "About 3.9 × Earth across", sizeRatio: 3.9,
    temperature: "About −214 °C on average.",
    atmosphere: "Mostly hydrogen and helium, with methane that helps make it blue.",
    humans: "No. It is extremely cold and has no solid surface.",
    spacecraft: "Only one: Voyager 2 flew past in August 1989.",
    mission: { name: "Voyager 2", launched: "20 August 1977", arrived: "25 August 1989 (flyby)", duration: "About 12 years." },
    dayLength: "About 16 hours", yearLength: "About 165 Earth years", moons: "16 known",
    funFacts: [
      "Winds on Neptune can blow faster than 2,000 km per hour.",
      "Neptune is the farthest planet from the Sun.",
      "Its biggest moon, Triton, orbits backwards compared with Neptune's spin.",
      "Neptune has completed only about one orbit since it was discovered in 1846.",
    ],
  },
];

export function getPlanet(id: string): Planet | undefined {
  return PLANETS.find((p) => p.id === id);
}
