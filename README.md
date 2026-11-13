# Cosmic Quest

Build Cosmic Quest — An Interactive Space Exploration Web App 🚀

Build a colorful, interactive educational web application called Cosmic Quest, designed for children aged 8–14.

The app should let children explore the eight planets of our Solar System, discover exoplanets, learn interesting scientific facts, take quizzes and collect celestial rewards.

I am a complete beginner in programming. Please generate clean, organized, beginner-friendly code and explain important parts when needed.

1. Technology

Use:

React

JavaScript

HTML and CSS

Vite if appropriate

Browser localStorage for saving progress

Use free technologies. Do not require paid subscriptions, API keys or a complicated backend.

2. Design and appearance

Create a colorful, playful, modern space-themed design.

Use:

Purple, blue, pink and orange as main colors.

Attractive planet illustrations.

Stars, galaxies and colorful space backgrounds.

Rounded cards and friendly buttons.

Smooth animations and transitions.

Clear, readable fonts.

Make the app responsive for computers, tablets and phones.

The design should feel like an exciting space adventure, not a school textbook.

3. Homepage — Two main exploration sections

The homepage must prominently display TWO separate sections.

Section 1: Our Solar System

Show an attractive illustration of the Solar System.

Title: "Explore Our Solar System"

Subtitle: "Meet the eight planets orbiting our Sun!"

Include an Explore button that opens a separate Solar System page.

Section 2: Beyond Our Solar System

Show an attractive illustration of colorful exoplanets and distant stars.

Title: "Discover Exoplanets"

Subtitle: "Explore mysterious worlds beyond our Solar System!"

Include a Discover button that opens a separate exoplanet page.

Both sections should be equally prominent on the homepage.

Also include:

Cosmic Quest logo.

Welcome message.

Featured planet of the day.

A preview of the user's planet collection.

4. Solar System page

Display eight clickable planet cards:

Mercury

Venus

Earth

Mars

Jupiter

Saturn

Uranus

Neptune

Each card should show:

Planet illustration.

Planet name.

One interesting fact.

Clicking a card should open its individual planet information page.

5. Individual planet information pages

Create a separate information page for every planet.

Include these sections:

Why is the planet named that?

Discovery and history.

What is it made of?

Size compared with Earth.

Temperature.

Atmosphere.

Could humans live there?

Have spacecraft visited it?

How long did a particular spacecraft mission take?

Interesting and unusual facts.

Use simple explanations suitable for children aged 8–14.

Present the information using colorful cards, illustrations, comparisons and interesting facts.

At the bottom, include a prominent "Take the Quiz" button.

6. Exoplanets page

Create a separate section called "Beyond Our Solar System".

Explain what exoplanets are in simple language.

Include:

Featured exoplanets.

Individual information pages for featured exoplanets.

A search bar for finding exoplanets by name.

Available information such as planet name, host star and other scientific details.

Start with a small collection of verified exoplanets.

Organize the project so that a searchable live connection to NASA's Exoplanet Archive can be added later.

Do not pretend that sample data is live NASA data.

7. Quiz system

Every planet should have its own quiz.

Each quiz must contain:

10 multiple-choice questions.

Four answer options per question.

One correct answer.

A progress bar.

Immediate feedback after each answer.

A short explanation of the correct answer.

A final results screen.

Questions must be based on the information provided on the planet's information page.

Create a question bank so that users receive different questions when they retry.

8. New celestial reward system

Replace the previous Sun and Moon reward system completely.

I want a reward ladder based on quiz scores, following the size order of Solar System planets.

Use these exact score ranges:

90–100%: Sun

80–89%: Jupiter

70–79%: Saturn

60–69%: Uranus

50–59%: Neptune

40–49%: Earth

30–39%: Venus

20–29%: Mars

10–19%: Mercury

0–9%: Pluto

Important scientific distinction:

The Sun is a star.

Pluto is a dwarf planet.

The other eight are planets.

Display the earned celestial body with an attractive illustration and a fun congratulatory message.

For low scores, encourage children to keep learning and retry.

9. My Planet Collection

Create a separate collection page.

Display all the celestial rewards the user has earned.

Each reward should show:

Illustration.

Name.

Quiz score that earned it.

Whether it has been collected.

Also show:

Planets the user has explored.

Quiz history.

Progress through the app.

Save progress using localStorage.

10. Navigation

Create a navigation bar containing:

Home

Solar System

Exoplanets

My Collection

All navigation links, buttons, cards and interactive elements must work.

11. Scientific accuracy

Use reliable scientific information from official sources such as NASA.

Do not invent scientific facts, discovery dates or spacecraft travel times.

Clearly distinguish confirmed information from estimates.

Do not claim humans have visited planets where they have not.

Use simple, age-appropriate explanations.

12. Development requirements

I am a first-time developer.

Please:

Build a working application, not just a visual mockup.

Organize code into reusable components and sensible files.

Make all navigation and interactive features functional.

Test the full journey: Homepage → Planet → Information → Quiz → Results → Reward Collection.

Make sure scores are calculated correctly.

Save progress using localStorage.

Fix errors before finishing.

Explain how to run the app and where the important files are.

Do not add unnecessary complicated features.

Build the first working version with all these sections. We can add advanced features and live NASA data integration later.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2467ab6c-36c3-5d15-8092-67072e8b0808).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
