// Question banks — every question is answered on that planet's information page.
// Each quiz picks 10 random questions from the bank and shuffles the answers,
// so a retry feels different.

export interface Question {
  question: string;
  correct: string;
  wrong: [string, string, string];
  explanation: string;
}

const q = (question: string, correct: string, wrong: [string, string, string], explanation: string): Question => ({ question, correct, wrong, explanation });

export const QUESTION_BANK: Record<string, Question[]> = {
  mercury: [
    q("Who is Mercury named after?", "The Roman messenger god", ["The Roman god of war", "The Greek god of the sky", "The Roman god of the sea"], "Mercury was the speedy messenger of the Roman gods."),
    q("Where is Mercury in the Solar System?", "Closest planet to the Sun", ["Farthest planet from the Sun", "Between Earth and Mars", "Between Jupiter and Saturn"], "Mercury is the first planet from the Sun."),
    q("How long is a year on Mercury?", "88 Earth days", ["365 Earth days", "225 Earth days", "12 Earth years"], "Mercury zooms around the Sun in just 88 days."),
    q("Which planet is the hottest — even hotter than Mercury?", "Venus", ["Mars", "Jupiter", "Earth"], "Venus's thick atmosphere traps heat, so it is hotter than Mercury."),
    q("How big is Mercury compared with Earth?", "About 0.38 × Earth", ["About the same size", "About 4 × Earth", "About 11 × Earth"], "Mercury is the smallest planet, only about 38% as wide as Earth."),
    q("What does Mercury's surface look like?", "Covered in craters, like the Moon", ["Covered in oceans", "Covered in thick clouds", "Made of gas"], "Mercury's cratered surface looks a lot like our Moon."),
    q("Why does Mercury get so cold at night?", "It has almost no air to hold heat", ["It is far from the Sun", "It is made of ice", "It has many moons blocking light"], "Without a real atmosphere, heat escapes into space at night."),
    q("What is inside Mercury?", "A very large iron core", ["A core of ice", "Liquid water", "Mostly hydrogen gas"], "Mercury has a huge iron core compared with its size."),
    q("How many moons does Mercury have?", "0", ["1", "2", "16"], "Mercury has no moons."),
    q("Which spacecraft orbited Mercury from 2011 to 2015?", "MESSENGER", ["Juno", "Cassini", "Perseverance"], "MESSENGER was the first spacecraft to orbit Mercury."),
    q("About how long did MESSENGER take to get into orbit around Mercury?", "About 6.5 years", ["About 4 days", "About 7 months", "About 12 years"], "It launched in 2004 and entered orbit in 2011."),
    q("Have humans ever visited Mercury?", "No, never", ["Yes, in 1969", "Yes, in 2011", "Yes, astronauts live there"], "No human has ever been to Mercury — only robotic spacecraft."),
    q("Daytime on Mercury can reach about…", "430 °C", ["15 °C", "−60 °C", "−224 °C"], "Mercury's days are scorching, about 430 °C."),
  ],
  venus: [
    q("Who is Venus named after?", "The Roman goddess of love and beauty", ["The king of the Roman gods", "The Roman god of farming", "The Greek god of the sky"], "Venus shines so beautifully it was named after the goddess of love and beauty."),
    q("What is the temperature on Venus?", "About 465 °C", ["About 15 °C", "About −60 °C", "About −178 °C"], "Venus is about 465 °C — hot enough to melt lead."),
    q("Why is Venus so hot?", "Its thick atmosphere traps heat", ["It is the closest planet to the Sun", "It has volcanoes erupting everywhere", "It is made of fire"], "Its thick carbon dioxide air works like a heat-trapping blanket."),
    q("What are Venus's clouds made of?", "Sulfuric acid", ["Water", "Methane", "Ice crystals"], "Venus has clouds of sulfuric acid."),
    q("What is Venus's atmosphere mostly made of?", "Carbon dioxide", ["Oxygen", "Hydrogen", "Nitrogen"], "Venus's air is mostly carbon dioxide."),
    q("How strong is the air pressure on Venus compared with Earth?", "About 90 times stronger", ["About the same", "About 1% of Earth's", "About half"], "The pressure is about 90 times what we feel on Earth."),
    q("Which is longer on Venus?", "A day (one spin) is longer than a year", ["A year is much longer than a day", "They are exactly equal", "Venus doesn't spin"], "One spin takes 243 Earth days; one orbit takes 225."),
    q("Which direction does Venus spin?", "Backwards compared with most planets", ["The same way as Earth", "It does not spin at all", "On its side"], "Venus spins backwards, so the Sun rises in the west."),
    q("How big is Venus compared with Earth?", "Almost the same size", ["Much smaller, like the Moon", "About 4 times bigger", "About 11 times bigger"], "Venus is about 0.95 × Earth's width — nearly a twin."),
    q("Which was the first spacecraft to land on another planet?", "Venera 7 on Venus", ["Apollo 11 on Mars", "Juno on Jupiter", "Voyager 2 on Neptune"], "The Soviet Venera 7 landed on Venus in 1970."),
    q("How long did Magellan take to travel to Venus?", "About 15 months", ["About 4 days", "About 6.5 years", "About 12 years"], "Magellan launched in May 1989 and arrived in August 1990."),
    q("How many moons does Venus have?", "0", ["1", "2", "More than 90"], "Venus has no moons."),
    q("Could humans live on Venus?", "No — heat, pressure and acid make it impossible", ["Yes, it is just like Earth", "Yes, but only in winter", "Yes, in its oceans"], "Venus is one of the most hostile places in the Solar System."),
  ],
  earth: [
    q("Where does the name 'Earth' come from?", "Old English and German words meaning 'the ground'", ["A Roman god", "A Greek god", "A famous astronomer"], "Earth is the only planet not named after a god."),
    q("How much of Earth's surface is covered by water?", "About 71%", ["About 10%", "About 50%", "About 99%"], "About 71% of Earth is covered by water."),
    q("What gas makes up most of Earth's air?", "Nitrogen", ["Oxygen", "Carbon dioxide", "Helium"], "Earth's air is about 78% nitrogen and 21% oxygen."),
    q("About how much of Earth's air is oxygen?", "21%", ["78%", "95%", "1%"], "Oxygen is about 21% of the air we breathe."),
    q("What is Earth's average temperature?", "About 15 °C", ["About 465 °C", "About −60 °C", "About 100 °C"], "Earth averages about 15 °C."),
    q("What is Earth's core made of?", "Iron and nickel", ["Ice", "Hydrogen gas", "Water"], "Earth has an iron and nickel core."),
    q("How long does Earth take to go around the Sun?", "About 365.25 days", ["24 hours", "88 days", "687 days"], "One year is about 365.25 days."),
    q("Why do we have leap years?", "Because a year is about a quarter day longer than 365 days", ["Because the Moon speeds up", "Because Earth stops spinning", "Because of solar flares"], "Every 4 years the extra quarter days add up to one extra day."),
    q("How many moons does Earth have?", "1", ["0", "2", "16"], "Earth has one Moon."),
    q("About how long did Apollo 11 take to reach the Moon's surface?", "About 4 days", ["About 7 months", "About 5 years", "About 1 hour"], "Apollo 11 launched on 16 July 1969 and landed on 20 July."),
    q("What does Earth's magnetic field do?", "Protects us from harmful particles from the Sun", ["Makes Earth spin", "Creates the oceans", "Holds the Moon in place"], "The magnetic field shields us and causes auroras."),
    q("Which is the densest planet in the Solar System?", "Earth", ["Jupiter", "Saturn", "Mercury"], "Earth is the densest planet."),
    q("Earth is the biggest of which group of planets?", "The four rocky planets", ["The gas giants", "The ice giants", "The dwarf planets"], "Mercury, Venus, Earth and Mars are rocky — Earth is the biggest."),
  ],
  mars: [
    q("Who is Mars named after?", "The Roman god of war", ["The Roman messenger god", "The Roman god of the sea", "The Roman goddess of love"], "Its red colour reminded people of the god of war."),
    q("What gives Mars its red colour?", "Rusty iron minerals in the dust", ["Red oceans", "Hot lava everywhere", "Red clouds of acid"], "Iron oxide (rust) in the dust makes Mars red."),
    q("What is the biggest volcano in the Solar System?", "Olympus Mons on Mars", ["Mount Everest on Earth", "Maxwell Montes on Venus", "The Great Red Spot"], "Olympus Mons is about 2.5 times as tall as Mount Everest."),
    q("How big is Mars compared with Earth?", "About half as wide", ["Twice as wide", "Exactly the same", "11 times as wide"], "Mars is about 0.53 × Earth's width."),
    q("What is Mars's air mostly made of?", "Carbon dioxide", ["Oxygen", "Nitrogen", "Methane"], "Mars's thin air is about 95% carbon dioxide."),
    q("How thick is Mars's air compared with Earth's?", "About 1% of Earth's pressure", ["About 90 times thicker", "Exactly the same", "Twice as thick"], "Mars has a very thin atmosphere."),
    q("What is the average temperature on Mars?", "About −60 °C", ["About 465 °C", "About 15 °C", "About −214 °C"], "Mars is cold, averaging about −60 °C."),
    q("How many moons does Mars have?", "2", ["0", "1", "More than 90"], "Mars has two small moons, Phobos and Deimos."),
    q("How long is a day on Mars?", "About 24 hours 37 minutes", ["About 10 hours", "243 Earth days", "176 Earth days"], "A Mars day is just a little longer than Earth's."),
    q("How long did Perseverance take to reach Mars?", "About 7 months", ["About 4 days", "About 5 years", "About 12 years"], "It launched in July 2020 and landed in February 2021."),
    q("Have humans been to Mars?", "No — only robots so far", ["Yes, in 1969", "Yes, in 2021", "Yes, people live there now"], "No human has been to Mars yet."),
    q("What was Ingenuity?", "A helicopter that flew on Mars", ["A Mars moon", "A volcano", "A rocket that carried people"], "Ingenuity made the first powered flight on another planet in 2021."),
    q("How long is a year on Mars?", "687 Earth days", ["88 Earth days", "365 Earth days", "84 Earth years"], "Mars takes 687 Earth days to orbit the Sun."),
  ],
  jupiter: [
    q("Who is Jupiter named after?", "The king of the Roman gods", ["The Roman god of war", "The Greek god of the sky", "The Roman god of farming"], "The biggest planet is named after the king of the gods."),
    q("What type of planet is Jupiter?", "Gas giant", ["Rocky planet", "Ice giant", "Dwarf planet"], "Jupiter is made mostly of hydrogen and helium."),
    q("What is Jupiter mostly made of?", "Hydrogen and helium", ["Rock and iron", "Water and ice", "Carbon dioxide"], "Like the Sun, Jupiter is mostly hydrogen and helium."),
    q("About how many times wider than Earth is Jupiter?", "About 11 times", ["About 2 times", "About 4 times", "About 100 times"], "Jupiter is about 11 Earths wide."),
    q("What is the Great Red Spot?", "A giant storm bigger than Earth", ["A volcano", "A red moon", "An ocean"], "It is a huge storm that has lasted hundreds of years."),
    q("Which planet has the shortest day?", "Jupiter", ["Earth", "Venus", "Mercury"], "Jupiter spins once in about 10 hours."),
    q("Who discovered Jupiter's four biggest moons in 1610?", "Galileo", ["William Herschel", "Johann Galle", "Copernicus"], "Galileo spotted them with his telescope."),
    q("What is the largest moon in the Solar System?", "Ganymede", ["Titan", "Our Moon", "Triton"], "Jupiter's moon Ganymede is even bigger than Mercury."),
    q("Can you stand on Jupiter?", "No — it has no solid surface", ["Yes, on its rocky crust", "Yes, but only at the poles", "Yes, on its ice"], "Jupiter is a gas giant with no solid surface."),
    q("Which spacecraft is studying Jupiter from orbit?", "Juno", ["MESSENGER", "Magellan", "Perseverance"], "Juno arrived at Jupiter in 2016."),
    q("How long did Juno take to reach Jupiter?", "About 5 years", ["About 7 months", "About 4 days", "About 12 years"], "Juno launched in 2011 and arrived in 2016."),
    q("How long is a year on Jupiter?", "About 12 Earth years", ["88 Earth days", "About 1 Earth year", "About 165 Earth years"], "Jupiter takes about 12 Earth years to orbit the Sun."),
    q("Does Jupiter have rings?", "Yes, faint ones", ["No, never", "Only Saturn has rings", "Yes, the brightest in the Solar System"], "Jupiter has faint rings that are hard to see."),
  ],
  saturn: [
    q("Who is Saturn named after?", "The Roman god of farming and wealth", ["The king of the Roman gods", "The Roman messenger god", "The Roman god of the sea"], "In the myths, Saturn was Jupiter's father."),
    q("What are Saturn's rings made of?", "Chunks of ice and rock", ["Solid gold", "Gas clouds", "Liquid water"], "Billions of icy and rocky pieces make up the rings."),
    q("Saturn is less dense than…", "Water", ["Air", "Jupiter's moons", "Nothing — it's the densest"], "Saturn is the least dense planet — less dense than water."),
    q("What type of planet is Saturn?", "Gas giant", ["Rocky planet", "Ice giant", "Dwarf planet"], "Saturn is a gas giant like Jupiter."),
    q("Who first saw Saturn's rings through a telescope?", "Galileo", ["William Herschel", "Urbain Le Verrier", "Copernicus"], "Galileo saw them in 1610 but didn't know what they were."),
    q("Which spacecraft orbited Saturn for 13 years?", "Cassini", ["Juno", "Voyager 2", "MESSENGER"], "Cassini arrived in 2004."),
    q("How long did Cassini take to reach Saturn?", "About 6 years and 8 months", ["About 4 days", "About 15 months", "About 12 years"], "It launched in 1997 and arrived in 2004."),
    q("What does Saturn's moon Titan have?", "Lakes of liquid methane", ["Oceans of lava", "Forests", "Rings"], "Titan has lakes and rivers of liquid methane."),
    q("What strange shape is at Saturn's north pole?", "A six-sided hexagon", ["A perfect square", "A triangle", "A star"], "A giant hexagon-shaped cloud pattern swirls there."),
    q("Which planet has the most moons?", "Saturn", ["Jupiter", "Earth", "Neptune"], "Saturn has over 200 confirmed moons."),
    q("How long is a year on Saturn?", "About 29 Earth years", ["About 12 Earth years", "About 84 Earth years", "687 Earth days"], "Saturn takes about 29 Earth years to orbit the Sun."),
    q("What is the temperature at Saturn's cloud tops?", "About −178 °C", ["About 465 °C", "About 15 °C", "About 430 °C"], "Saturn's cloud tops are about −178 °C."),
    q("About how many times wider than Earth is Saturn?", "About 9.5 times", ["About 2 times", "About 0.5 times", "About 50 times"], "Saturn is about 9.5 Earths wide."),
  ],
  uranus: [
    q("Who is Uranus named after?", "The Greek god of the sky", ["The Roman god of the sea", "The Roman god of war", "The king of the Roman gods"], "It is the only planet named after a Greek god."),
    q("Who discovered Uranus in 1781?", "William Herschel", ["Galileo", "Johann Galle", "Copernicus"], "Herschel discovered it on 13 March 1781."),
    q("What was special about how Uranus was discovered?", "It was the first planet found with a telescope", ["It was found by a spacecraft", "It was found using only maths", "Ancient people always knew it"], "Uranus was the first planet discovered with a telescope."),
    q("What is unusual about the way Uranus spins?", "It spins on its side", ["It doesn't spin", "It spins faster than light", "It spins only in summer"], "Uranus is tilted about 98°."),
    q("What gives Uranus its blue-green colour?", "Methane gas", ["Oceans of water", "Copper", "Green plants"], "Methane in the atmosphere gives it that colour."),
    q("What type of planet is Uranus?", "Ice giant", ["Rocky planet", "Gas giant", "Dwarf planet"], "Uranus is made mostly of 'icy' water, methane and ammonia."),
    q("Which planet has the coldest atmosphere?", "Uranus", ["Neptune", "Mars", "Mercury"], "Uranus can reach about −224 °C."),
    q("How many spacecraft have visited Uranus?", "One — Voyager 2", ["None", "Five", "Over twenty"], "Only Voyager 2 has flown past Uranus, in 1986."),
    q("How long did Voyager 2 take to reach Uranus?", "About 8.5 years", ["About 7 months", "About 4 days", "About 12 years"], "It launched in 1977 and flew past in 1986."),
    q("How long is a year on Uranus?", "About 84 Earth years", ["About 12 Earth years", "About 29 Earth years", "About 165 Earth years"], "Uranus takes about 84 Earth years to orbit the Sun."),
    q("Most of Uranus's moons are named after…", "Characters from Shakespeare's plays", ["Roman emperors", "Famous scientists", "Greek islands"], "Names like Miranda and Titania come from Shakespeare."),
    q("About how many times wider than Earth is Uranus?", "About 4 times", ["About 11 times", "About the same", "About half"], "Uranus is about 4 Earths wide."),
    q("How many known rings does Uranus have?", "13", ["0", "1", "100"], "Uranus has 13 known rings."),
  ],
  neptune: [
    q("Who is Neptune named after?", "The Roman god of the sea", ["The Greek god of the sky", "The Roman god of war", "The Roman messenger god"], "Its deep blue colour fits the god of the sea."),
    q("How was Neptune discovered?", "Using maths to predict where it was", ["By Galileo in 1610", "By a spacecraft", "Ancient people always knew it"], "Le Verrier predicted its position and Galle found it in 1846."),
    q("In what year was Neptune discovered?", "1846", ["1610", "1781", "1969"], "Johann Galle spotted it in 1846."),
    q("Which planet has the fastest winds?", "Neptune", ["Earth", "Mars", "Venus"], "Neptune's winds can top 2,000 km per hour."),
    q("Which planet is the farthest from the Sun?", "Neptune", ["Uranus", "Saturn", "Pluto"], "Neptune is the eighth and farthest planet. (Pluto is a dwarf planet.)"),
    q("What type of planet is Neptune?", "Ice giant", ["Rocky planet", "Gas giant", "Star"], "Like Uranus, Neptune is an ice giant."),
    q("What is Neptune's biggest moon?", "Triton", ["Titan", "Ganymede", "Phobos"], "Triton orbits backwards compared with Neptune's spin."),
    q("Which spacecraft flew past Neptune in 1989?", "Voyager 2", ["Cassini", "Juno", "Magellan"], "Voyager 2 is the only spacecraft to visit Neptune."),
    q("How long did Voyager 2 take to reach Neptune?", "About 12 years", ["About 7 months", "About 5 years", "About 4 days"], "It launched in 1977 and flew past Neptune in 1989."),
    q("How long is a year on Neptune?", "About 165 Earth years", ["About 84 Earth years", "About 29 Earth years", "365 days"], "Neptune takes about 165 Earth years to orbit the Sun."),
    q("What is Neptune's average temperature?", "About −214 °C", ["About 15 °C", "About 465 °C", "About −60 °C"], "Neptune is freezing, about −214 °C."),
    q("Could humans live on Neptune?", "No — it is freezing with no solid surface", ["Yes, in its oceans", "Yes, astronauts visited", "Yes, on its rocky crust"], "Neptune is far too cold and has nowhere to stand."),
    q("How many known moons does Neptune have?", "16", ["0", "2", "Over 200"], "Neptune has 16 known moons."),
  ],
};

export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

/** Builds a fresh 10-question quiz with shuffled questions and answers. */
export function buildQuiz(planetId: string, count = 10): QuizQuestion[] {
  const bank = QUESTION_BANK[planetId] ?? [];
  return shuffle(bank)
    .slice(0, count)
    .map((item) => {
      const options = shuffle([item.correct, ...item.wrong]);
      return { question: item.question, options, answerIndex: options.indexOf(item.correct), explanation: item.explanation };
    });
}
