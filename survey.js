const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :)? `, (name) => {
  rl.question(`What's an activity you like doing? `, (activity) => {
    rl.question(`What do you listen to while doing that? `, (listen) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (favMeal) => {
        rl.question(`What's your favourite thing to eat for that meal? `, (specificInFavMeal) => {
          rl.question(`Which sport is your absolute favourite? `, (sport) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (power) => {
              
              console.log(`${name} likes to ${activity} while listening to ${listen}. ${name}'s favourite sport is ${sport}. Favourite meal? ${favMeal}. Favourite thing to eat in that meal? ${specificInFavMeal}. Last but not the least, ${name}'s superpower is ${power}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
