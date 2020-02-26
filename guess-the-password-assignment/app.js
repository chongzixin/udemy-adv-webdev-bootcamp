$(() => {
  const wordCount = 10;
  let guessCount = 4;
  let password = '';

  $('#start').on('click', () => {
    $('#start-screen').toggleClass('hide show');
    $('#game-screen').toggleClass('hide show');
    startGame();
  });

  function startGame() {
    // get random words and append them to the DOM
    let wordList = $('#word-list');
    // 'words' variable is from words.js
    let randomWords = getRandomValues(words); // eslint-disable-line no-undef
    randomWords.forEach(word => {
      wordList.append(`<li>${word}</li>`);
    });

    // set a secret password and the guess count display
    password = getRandomValues(randomWords, 1)[0];
    setGuessCount(guessCount);

    // add update listener for clicking on a word
    wordList.on('click', 'li', updateGame);
  }

  let getRandomValues = (array, numberOfVals=wordCount) => shuffle(array).slice(0, numberOfVals);

  function shuffle(array) {
    let arrayCopy = array.slice();
    for (let idx1 = arrayCopy.length - 1; idx1 > 0; idx1--) {
      // generate a random index between 0 and idx1 (inclusive)
      let idx2 = Math.floor(Math.random() * (idx1 + 1));

      // swap elements at idx1 and idx2
      [arrayCopy[idx1], arrayCopy[idx2]] = [arrayCopy[idx2], arrayCopy[idx1]];
    }
    return arrayCopy;
  }

  function setGuessCount(newCount) {
    guessCount = newCount;
    $('#guesses-remaining').text(`Guesses remaining: ${guessCount}.`);
  }

  function updateGame(e) {
    let tgt = $(e.target);
    let wordList = $('#word-list');
    // if (e.target.tagName === 'LI' && !e.target.classList.contains('disabled')) {
    if(!tgt.hasClass('disabled')) {
      // grab guessed word, check it against password, update view
      var guess = tgt.text();
      var similarityScore = compareWords(guess, password);
      tgt.addClass('disabled');
      tgt.text(`${guess} --> Matching Letters: ${similarityScore}`);
      setGuessCount(guessCount - 1);

      // check whether the game is over
      if (similarityScore === password.length) {
        $('#winner').toggleClass('hide show');
        wordList.off();
      } else if (guessCount === 0) {
        $('#loser').toggleClass('hide show');
        wordList.off();
      }
    }
  }

  function compareWords(word1, word2) {
    if (word1.length !== word2.length) {
      throw 'Words must have the same length';
    }
    return [...word1].reduce((acc, next, i) => {
      if(next === word2[i]) acc++;
      return acc;
    }, 0);
  }
});
