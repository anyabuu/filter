let text = 'SUCK Lorem FUCK Fuck SuCk ipsum dolor sit amet, fuck consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.';


function filterOutBadWords(text) {
    let arrayWithoutBadWords;

    let textArray = text.split(' ');

    arrayWithoutBadWords = textArray.filter(function(word) { 

            if (word.toUpperCase() !== "fuck".toUpperCase() && word.toUpperCase() !== "suck".toUpperCase()) {
                return word;
            }
    });

    return arrayWithoutBadWords.join(' ');
 
}

console.log(filterOutBadWords(text));


