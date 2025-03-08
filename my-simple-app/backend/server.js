const express = require('express');
const cors = require('cors'); // Import the cors package
const path = require('path'); // Import the path module
const app = express();
const port = 3000;

app.use(cors()); // Use the cors middleware

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call a lazy kangaroo? Pouch potato!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the bicycle fall over? Because it was two tired!",
    "Why can't your nose be 12 inches long? Because then it would be a foot!",
    "What did one ocean say to the other ocean? Nothing, they just waved!",
    "Why do seagulls fly over the ocean? Because if they flew over the bay, they'd be bagels!",
    "What do you call fake spaghetti? An impasta!",
    "Why don’t skeletons fight each other? They don’t have the guts!",
    "Why couldn’t the leopard hide? Because he was always spotted!",
    "What did the buffalo say to his son when he left for college? Bison!",
    "Why did the golfer bring an extra pair of pants? In case he got a hole in one!",
    "What’s orange and sounds like a parrot? A carrot!",
    "Why did the math book look sad? Because it had too many problems!",
    "Why are ghosts bad at lying? Because you can see right through them!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why don’t eggs tell jokes? Because they might crack up!",
    "Why did the computer go to therapy? Because it had too many Windows open!",
    "What do you get when you cross a snowman and a vampire? Frostbite!",
    "Why did the music teacher go to jail? Because she got caught with a high note!",
    "What’s brown and sticky? A stick!",
    "Why was the belt arrested? For holding up a pair of pants!",
    "How does a penguin build its house? Igloos it together!",
    "Why don’t mountains ever get tired? Because they peak all the time!",
    "Why did the football team go to the bank? To get their quarterback!",
    "Why did the banana go to the doctor? Because it wasn’t peeling well!",
    "Why did the coffee file a police report? It got mugged!",
    "Why did the grape stop in the middle of the road? Because it ran out of juice!",
    "What do you call a factory that makes good products? A satisfactory!",
    "What do you call a can opener that doesn’t work? A can’t opener!",
    "Why was the math teacher suspicious? Too many variables!",
    "Why don’t you ever see elephants hiding in trees? Because they’re so good at it!",
    "Why did the calendar go on vacation? Because its days were numbered!",
    "What do you call an alligator in a vest? An investigator!",
    "Why did the fisherman put his money in the freezer? He wanted cold hard cash!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why don’t soccer players take showers? Because they dribble too much!",
    "Why don’t bakers ever get into trouble? Because they always knead to be good!"
];

// Simple API endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// New endpoint to get a random joke
app.get('/api/random_joke', (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.json({ joke: jokes[randomIndex] });
});

app.get('/', (req, res) => {
    res.send("Hi I like Unicorns, they rule. I also love turtles");
});

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});