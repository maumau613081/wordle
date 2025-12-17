const inputField = document.getElementById('userInput');
const enterButton = document.getElementById('enterBtn');
const resultList = document.getElementById('resultList');

let answer = '';
let AnswerArray = [];

function reset(){
    inputField.value = '';
    resultList.innerHTML = '';
    answer = getRandomWord();
    AnswerArray = answer.split('');
    enterButton.disabled = false;
    inputField.focus();
}

function getRandomWord(){
    const wordList = ['which', 'there', 'their', 'about', 'would', 'these', 'other', 'words', 'could', 'write',
'first', 'water', 'where', 'after', 'years', 'right', 'think', 'three', 'great', 'place',
'sound', 'still', 'every', 'small', 'found', 'might', 'those', 'under', 'world', 'since',
'state', 'never', 'while', 'house', 'least', 'party', 'ready', 'night', 'taken', 'close',
'short', 'doing', 'class', 'money', 'study', 'count', 'leave', 'group', 'being', 'forth',
'whole', 'field', 'power', 'stand', 'range', 'major', 'force', 'space', 'order', 'light',
'truth', 'human', 'along', 'later', 'using', 'issue', 'thing', 'going', 'given', 'fully',
'level', 'table', 'begin', 'start', 'above', 'sense', 'paper', 'voice', 'match', 'image',
'local', 'shall', 'topic', 'owner', 'scene', 'claim', 'usual', 'drive', 'basis', 'chief',
'style', 'title', 'total', 'raise', 'added', 'shown', 'bring', 'heart', 'round', 'offer',
'score', 'staff', 'stock', 'store', 'reach', 'value', 'price', 'trade', 'worth', 'chair',
'board', 'floor', 'front', 'glass', 'stone', 'sight', 'piece', 'shape', 'cause', 'death',
'event', 'force', 'story', 'woman', 'model', 'trial', 'limit', 'month', 'north', 'south',
'ocean', 'coast', 'river', 'plain', 'build', 'extra', 'apply', 'check', 'cover', 'enter',
'exist', 'fight', 'final', 'fixed', 'guard', 'imply', 'judge', 'label', 'legal', 'limit',
'maker', 'meant', 'model', 'occur', 'owner', 'paint', 'panel', 'prime', 'radio', 'raise',
'range', 'ratio', 'ready', 'scale', 'scene', 'scope', 'sense', 'serve', 'share', 'shift',
'sight', 'solar', 'solve', 'sound', 'spend', 'sport', 'staff', 'stage', 'start', 'state',
'stock', 'store', 'study', 'style', 'taken', 'terms', 'those', 'throw', 'title', 'total',
'touch', 'trade', 'train', 'treat', 'trial', 'unity', 'until', 'usual', 'value', 'visit',
'voice', 'waste', 'watch', 'water', 'while', 'whole', 'woman', 'world', 'worry', 'yield',
'young', 'youth', 'yours', 'zeros', 'zones', 'alive', 'angry', 'crazy', 'dirty', 'empty',
'funny', 'happy', 'heavy', 'loose', 'lucky', 'proud', 'quiet', 'rough', 'sharp', 'solid'];
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

function checkArray1(inputArray, answerArray){
    let ScoredHTML = '';
    const scoreArray = new Array(answerArray.length).fill(0);
    for (let i = 0; i < scoreArray.length; i++){
        if (inputArray[i] === answerArray[i]){
            scoreArray[i] = 2;
            answerArray[i] = null;
        }
    };
    for (let i = 0; i < scoreArray.length; i++){
        if (answerArray.includes(inputArray[i]) && scoreArray[i] !== 2){
            scoreArray[i] = 1;
            answerArray[answerArray.indexOf(inputArray[i])] = null;
        }
    };
    for (let i = 0; i < scoreArray.length; i++){
        if (scoreArray[i] === 2){
            ScoredHTML += `<span class="correct-pos">${inputArray[i]}</span>`;
        } else if (scoreArray[i] === 1){
            ScoredHTML += `<span class="correct-cha">${inputArray[i]}</span>`;
        } else {
            ScoredHTML += `<span class="wrong-cha">${inputArray[i]}</span>`;
        }
    }
        
    return ScoredHTML;
}

reset();

enterButton.addEventListener('click', function(){
    const inputValue = inputField.value.toLowerCase();
    const inputArray = inputValue.split('');

    if (inputArray.length !== AnswerArray.length){
        alert(`Please enter a ${AnswerArray.length}-letter word.`);
        return;
    }

    AnswerArray = answer.split('');
    const resultHTML = checkArray1(inputArray, AnswerArray);
    const newListItem = document.createElement('li');
    newListItem.innerHTML = resultHTML;
    resultList.appendChild(newListItem);
    inputField.value = '';
    if (inputValue === answer){
        alert('Congratulations! You guessed the correct word!');
        reset();
    }
});
