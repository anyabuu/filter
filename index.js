let text = 'suck SUCK Lorem eeeEeee ipsum dolor FUCK Fuck ipsum dolor SuCk ipsum dolor sit amet, eEEeeee fuck consectetur adipiscing elit, eeeeeee sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.';
let badPhrase = 'fuck suck eeeeeee';

function filterOutBadWords(text, badPhrase) {


    let textArray = text.split(' ');
    let badArray = badPhrase.split(' ');



    let arrayWithoutBadWords = textArray.filter(function(word) { 

      let isWordBad = badArray.some(function(badWord) {
          if (badWord.toLowerCase() === word.toLowerCase()) {
              return true;
          } else {
              return false;
          }
        })

        if (isWordBad === false) {
            return word;
        }

    });
    

    return arrayWithoutBadWords.join(' ');
 
}

console.log(filterOutBadWords(text, badPhrase));


