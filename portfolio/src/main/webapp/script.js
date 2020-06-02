// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Cycles through greetings in different languages for front page. 
 */
const greetings =['Hi, nice to meet you!', '¡Hola, encantado de conocerte!', '你好，很高興見到你', 'Salut! Enchanté!'];
var textElement = document.getElementById("changeText");
textElement.innerHTML = greetings[0];
var counter = 1;
var intervalLength = setInterval(change, 2000);
document.getElementById("messagesBtn").addEventListener("click", getMessages);

function change() {
    textElement.innerHTML = greetings[counter];
    counter++;
    if (counter >= greetings.length) {
        counter = 0;
    }
}

function getMessages() {
    fetch('/data').then(response => response.json()).then((messages) => {
        const messageListElement = document.getElementById("messages-container");
        messageListElement.innerHTML = '';
        messageListElement.appendChild(
            createListElement(messages[0]));
        messageListElement.appendChild(
            createListElement(messages[1]));
        messageListElement.appendChild(
            createListElement(messages[2]));
    });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}