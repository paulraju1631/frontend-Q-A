import { Category } from './category';

export const JavaScriptQuestions = [
  {
    type: 'Basic',
    question: 'What is JavaScript?',
    answer:
      'JavaScript (JS) is a lightweight, interpreted or JIT compiled programming language. <br> Most well-known as the scripting language for Web pages, many non-browser environments also use it, such as node.js and Apache CouchDB',
  },
  {
    type: 'Basic',
    question: 'Can JavaScript only run in a Web browser?',
    answer:
      'Today, JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine. <br> The browser has an embedded engine sometimes called a “JavaScript virtual machine”.',
  },
  {
    type: 'Basic',
    question: 'Can Javascript work without html?',
    answer:
      'Javascript is used "alone" to make applications. But it needs an option to show the results. <br>  <br> This can be the command line (NodeJS, browser console), a network response (NodeJS), or a graphical interface (browser with either HTML, SVG, Canvas or WebGL).',
  },
  {
    type: 'Basic',
    question: 'How does the JavaScript code get compiled in the browser?',
    answer:
      'JavaScript is considered a high level language, meaning it is human readable and has a high degree of flexibility. <br> The job of the compiler is to turn that high level code into native computer instructions. <br>  <br> ',
  },
  {
    type: 'Basic',
    question: 'What are the steps in Compilation in JS?',
    answer:
      'A simple compiler might have a four-step process: a lexer, a parser, a translator and an interpreter. <br>  <br> 1) The lexer, or lexical analyser (or scanner, or tokeniser) scans your source code and turns it into atomic units called tokens. This is most commonly achieved by pattern matching using regular expressions. <br> 2) The tokenised code is then passed through a parser to identify and encode its structure and scope into what’s called a syntax tree. <br> 3) This graph-like structure is then passed through a translator to be turned into bytecode. The simplest implementation of which would be a huge switch statement mapping tokens to their bytecode equivalent. <br> 4) The bytecode is then passed to a bytecode interpreter to be turned into native code and rendered.',
  },
  {
    type: 'Basic',
    question: 'What are JIT Compilors?',
    answer:
      '“lazy compilation” by a JIT, or Just In Time compiler. <br>  It compiles parts of your code into machine code, just in time for you to need it. ',
  },
  {
    type: 'Basic',
    question: 'What is the Event Propagation?',
    answer: `<ul> <br>     <li><a href="\&quot;...\&quot;"><img src="\&quot;...\&quot;" alt="\&quot;\&quot;">&lt;\/a&gt; <br> &lt;\/ul&gt; <br>  <br> A click on an image does not only generate a click event for the corresponding IMG element, but also for the parent A, for the grandfather LI and so on, going all the way up through all the element’s ancestors, before terminating at the window object. <br>  <br> In DOM terminology, the image is the event target, the innermost element over which the click originated. The event target, plus its ancestors, from its parent up through to the window object, form a branch in the DOM tree. For example, in the image gallery, this branch will be composed of the nodes: IMG, A, LI, UL, BODY, HTML, document, window. <br>  <br> This branch is important because it is the path along which the events propagate (or flow). This propagation is the process of calling all the listeners for the given event type, attached to the nodes on the branch. Each listener will be called with an event object that gathers information relevant to the event`,
  },
  {
    type: 'Basic',
    question: 'Phases of propagation?',
    answer:
      'The propagation is bidirectional, from the window to the event target and back. This propagation can be divided into three phases: <br>  <br> From the window to the event target parent: this is the capture phase <br> The event target itself: this is the target phase <br> From the event target parent back to the window: the bubble phase',
  },
  {
    type: 'Basic',
    question: 'What is Event Capture Phase?',
    answer:
      "In this phase only the capturer listeners are called, namely, those listeners that were registered using a value of true for the third parameter of addEventListener: <br>  <br> el.addEventListener('click', listener, true) <br>  <br> If this parameter is omitted, its default value is false and the listener is not a capturer",
  },
  {
    type: 'Basic',
    question: 'What is Event Target Phase?',
    answer:
      'In this phase all the listeners registered on the event target will be invoked, regardless of the value of their capture flag',
  },
  {
    type: 'Basic',
    question: 'What is Event Bubbling Phase?',
    answer:
      "During the event bubbling phase only the non-capturers will be called. That is, only the listeners registered with a value of false for the third parameter of addEventListener(); <br>  <br> el.addEventListener('click', listener, false) // listener doesn't capture <br> el.addEventListener('click', listener) // listener doesn't capture <br>  <br> The bubbles event property returns a Boolean value that indicates whether or not an event is a bubbling event. <br> Event bubbling directs an event to its intended target, it works like this: <br>  <br> A button is clicked and the event is directed to the button <br> If an event handler is set for that object, the event is triggered <br> If no event handler is set for that object, the event bubbles up (like a bubble in water) to the objects parent",
  },
  {
    type: 'Basic',
    question: 'Why we use closures in JavaScript?',
    answer:
      'Closures are commonly used to give objects data privacy. <br>  <br> A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain. <br> The closure has three scope chains: <br> it has access to its own scope — variables defined between its curly brackets <br> it has access to the outer function’s variables <br> it has access to the global variables',
  },
  {
    type: 'Basic',
    question: 'Example for closure?',
    answer:
      'https://medium.com/@prashantramnyc/javascript-closures-simplified-d0d23fa06ba4',
  },
  {
    type: 'Basic',
    question: 'What is the DOM?',
    answer:
      'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page. <br> Every element in a document—the document as a whole, the head, tables within the document, table headers, text within the table cells—is part of the document object model for that document, so they can all be accessed and manipulated using the DOM and a scripting language like JavaScript.',
  },
  {
    type: 'Basic',
    question: 'What is Shadow DOM?',
    answer:
      "Shadow DOM serves for encapsulation. It allows a component to have its very own “shadow” DOM tree, that can’t be accidentally accessed from the main document, may have local style rules, and more. <br>  <br> Shadow DOM is just normal DOM with two differences: 1) how it's created/used and 2) how it behaves in relation to the rest of the page. Normally, you create DOM nodes and append them as children of another element. With shadow DOM, you create a scoped DOM tree that's attached to the element, but separate from its actual children. This scoped subtree is called a shadow tree. The element it's attached to is its shadow host. Anything you add in the shadows becomes local to the hosting element, including <style>. This is how shadow DOM achieves CSS style scoping. <br>  <br> https://developers.google.com/web/fundamentals/web-components/shadowdom",
  },
  {
    type: 'Intermediate',
    question: 'Difference between ==  and ===?',
    answer:
      "The ‘==’ operator tests for abstract equality i.e. it does the necessary type conversions before doing the equality comparison. <br> But the ‘===’ operator tests for strict equality i.e it will not do the type conversion hence if the two values are not of the same type, when compared, it will return false. <br>  <br> Eg : 9 and '9'",
  },
  {
    type: 'Intermediate',
    question: 'What are the differences between null and undefined?',
    answer:
      'undefined means, value of the variable is not defined. JavaScript has a global variable undefined whose value is "undefined" and typeof undefined is also "undefined". Remember, undefined is not a constant or a keyword. undefined is a type with exactly one value: undefined. <br> Eg: <br> A declared variable without assigning any value to it <br> return statements that do not explicitly return anything <br>  <br> null means empty or non-existent value which is used by programmers to indicate “no value”. null is a primitive value and you can assign null to any variable. null is not an object, it is a primitive value. For example, you cannot add properties to it. Sometimes people wrongly assume that it is an object, because typeof null returns "object". <br> ',
  },
  {
    type: 'Intermediate',
    question:
      'What will be the output of the following code?  <br>  for(var i =0; i< 5; i++){ <br>     setTimeout( <br>         function(){ <br>         console.log(i); <br>      }, i * 1000); <br> } <br> ',
    answer:
      '5 5 5 5 5  <br> The reason for this is that, each function within the loop will be executed after the entire loop has completed and all will therefore reference the last value stored in i, which was 5. <br>  <br> https://stackoverflow.com/questions/31285911/why-let-and-var-bindings-behave-differently-using-settimeout-function',
  },
  {
    type: 'Intermediate',
    question: 'Details for array functions.',
    answer: 'https://javascript.info/array-methods#add-remove-items',
  },
  {
    type: 'Intermediate',
    question: 'Array - push,pop,shift,unshift',
    answer:
      'arr.push(...items) – adds items to the end, <br> arr.pop() – extracts an item from the end, <br> arr.shift() – extracts an item from the beginning, <br> arr.unshift(...items) – adds items to the beginning.',
  },
  {
    type: 'Intermediate',
    question: 'Array - splice',
    answer:
      'let arr = ["I", "study", "JavaScript"]; <br>  <br> arr.splice(1, 1); // from index 1 remove 1 element <br>  <br> alert( arr ); // ["I", "JavaScript"]',
  },
  {
    type: 'Intermediate',
    question: 'Array - splice',
    answer:
      'let arr = ["I", "study", "JavaScript", "right", "now"]; <br>  <br> // remove 3 first elements and replace them with another <br> arr.splice(0, 3, "Let\'s", "dance"); <br>  <br> alert( arr ) // now ["Let\'s", "dance", "right", "now"]',
  },
  {
    type: 'Intermediate',
    question: 'Array - splice',
    answer:
      'let arr = ["I", "study", "JavaScript", "right", "now"]; <br>  <br> // remove 2 first elements <br> let removed = arr.splice(0, 2); <br>  <br> alert( removed ); // "I", "study" <-- array of removed elements',
  },
  {
    type: 'Intermediate',
    question: 'Array - splice',
    answer:
      'let arr = [1, 2, 5]; <br>  <br> // from index -1 (one step from the end) <br> // delete 0 elements, <br> // then insert 3 and 4 <br> arr.splice(-1, 0, 3, 4); <br>  <br> alert( arr ); // 1,2,3,4,5',
  },
  {
    type: 'Basic',
    question: 'Diff b/w includes and  indexOf/lastIndexOf',
    answer:
      'A very minor difference of includes is that it correctly handles NaN, unlike indexOf/lastIndexOf',
  },
  {
    type: 'Intermediate',
    question: 'filter and find for array',
    answer:
      'The find method looks for a single (first) element that makes the function return true. <br>  <br> If there may be many, we can use arr.filter(fn). <br>  <br> The syntax is similar to find, but filter returns an array of all matching elements',
  },
  {
    type: 'Intermediate',
    question: 'Map for array',
    answer:
      'It calls the function for each element of the array and returns the array of results.',
  },
  {
    type: 'Advanced',
    question: 'How to deep-freeze object in Javascript?',
    answer:
      'Object.freeze(obj); <br> The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.',
  },
  {
    type: 'Advanced',
    question: 'Is javascript pass-by-reference or pass-by-value language?',
    answer: 'assignment vs mutation',
  },
  {
    type: 'Advanced',
    question: 'What is a curry function? What is its advantage?',
    answer:
      'https://www.jondjones.com/frontend/javascript/functional-programming/javascript-currying-what-is-the-point-of-currying-javascript-functions/#:~:text=The%20main%20benefit%20of%20currying,the%20same%20parameters%20a%20lot.&text=Curring%20will%20make%20your%20code,is%20written%20well%20that%20is!',
  },
  {
    type: 'Advanced',
    question: 'Why is the this operator inconsistent in javascript?',
    answer: null,
  },
  {
    type: 'Advanced',
    question: 'What is the difference between await and yield?',
    answer: 'await - async functions <br> yield - generators',
  },
  {
    type: 'Advanced',
    question: 'What is the difference between async/await and generators?',
    answer:
      'The await keyword is only to be used in async functions, while the yield keyword is only to be used in generator function*s. And those are obviously different as well - the one returns promises, the other returns generators.',
  },
  {
    type: 'Advanced',
    question: 'Is it possible to reset an ES6 generator to its initial state?',
    answer: 'No, there is no way to reset it once it is completed.',
  },
  {
    type: 'Advanced',
    question:
      'What is the difference between null, undefined and undeclared? How can we check these states?',
    answer:
      "null is a value / type <br> undefined is the initial value of a varable if it's not initialised. <br> variable without var is undeclared in js(if variable is not declared). <br> using console.log or type of",
  },
  {
    type: 'Advanced',
    question: 'What is the difference between ES6 map and weakmap?',
    answer:
      'Key in WeakMap must be of type Object (not null).(https://www.voidcanvas.com/map-weakmap-pojo/)',
  },
  {
    type: 'Advanced',
    question: 'What is temporal dead zone in ES6?',
    answer:
      'https://wsvincent.com/javascript-temporal-dead-zone/#:~:text=The%20Temporal%20Dead%20Zone%20is,keywords%2C%20but%20not%20with%20var%20.&text=In%20JavaScript%2C%20variable%20declarations%20(but,the%20top%20of%20the%20scope. <br>  <br>  <br>  <br> Using let and const instead of var',
  },
  {
    type: 'Intermediate',
    question: 'Use case when an array function cannot be used?',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'Example for destructuring an object or array in ES6?',
    answer: null,
  },
  {
    type: 'Intermediate',
    question:
      'What is the difference between forEach() and map() loops? Use case for each?',
    answer: null,
  },
  {
    type: 'Advanced',
    question: 'Compare Module Pattern and Constructor/Prototype pattern?',
    answer: null,
  },
  {
    type: 'Advanced',
    question: null,
    answer: 'https://www.interviewbit.com/javascript-interview-questions/',
  },
  {
    type: 'Intermediate',
    question: 'Closure Function',
    answer:
      'A closure is a function defined inside another function (called the parent function), and has access to variables that are declared and defined in the parent function scope. <br>  <br> The closure has access to variables in three scopes: <br>  <br> Variables declared in their own scope <br> Variables declared in a parent function scope <br> Variables declared in the global namespace',
  },
  {
    type: 'Intermediate',
    question: 'How can we check the length of an object?',
    answer: 'Object.keys(exampleObject).length',
  },
  {
    type: 'Intermediate',
    question: 'Array Functions',
    answer:
      'filter()        Creates a new array with every element in an array that pass a test <br> find()        Returns the value of the first element in an array that pass a test <br> map()\tCreates a new array with the result of calling a function for each array element <br> reduce()\tReduce the values of an array to a single value (going left-to-right) <br> slice()\tSelects a part of an array, and returns the new array <br> splice()\tAdds/Removes elements from an array',
  },
  {
    type: 'Intermediate',
    question: 'What is 3 > 2 > 1',
    answer: false,
  },
  {
    type: 'Intermediate',
    question: 'Is JS single threaded or multi?',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'Difference between promise, async and await?',
    answer: null,
  },
  {
    type: 'Advanced',
    question: 'Difference between http and https?',
    answer: null,
  },
  {
    type: 'Advanced',
    question: 'Differecnt protocols in http?',
    answer: null,
  },
  {
    type: 'Advanced',
    question: 'How the application is rendered when we give the http domain?',
    answer: null,
  },
  {
    type: 'Advanced',
    question: 'Performance improvements?',
    answer: null,
  },
  {
    type: 'Advanced',
    question: 'Coding standards?',
    answer: null,
  },
  {
    type: 'Basic',
    question: 'What are Cookies?',
    answer:
      'Cookies are data, stored in small text files, on your computer. <br>  <br> When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user. <br>  <br> Cookies were invented to solve the problem "how to remember information about the user": <br>  <br> When a user visits a web page, his/her name can be stored in a cookie. <br> Next time the user visits the page, the cookie "remembers" his/her name. <br>  <br> When a browser requests a web page from a server, cookies belonging to the page are added to the request. This way the server gets the necessary data to "remember" information about users.',
  },
  {
    type: 'Basic',
    question: 'What is Synchronous Javascript?',
    answer:
      'In Synchronous Javascript, when we run the code, the result is returned as soon as the browser can do. Only one operation can happen at a time because it is single-threaded. So, all other processes are put on hold while an operation is executing.',
  },
  {
    type: 'Basic',
    question: 'What is Asynchronous Javascript?',
    answer:
      'Some functions in Javascript requires AJAX because the response from some functions are not immediate. It takes some time and the next operation cannot start immediately. It has to wait for the function to finish in the background. In such cases, the callbacks need to be asynchronous. <br> There are some external Javascript Web APIs that allows AJAX – Asynchronous Javascript and XML. <br> In AJAX, many operations can be performed simultaneously.',
  },
  {
    type: 'Basic',
    question: 'What is a callback?',
    answer:
      'Callbacks are nothing but functions that take some time to produce a result. <br> Usually these async callbacks (async short for asynchronous) are used for accessing values from databases, downloading images, reading files etc. <br> As these take time to finish, we can neither proceed to next line because it might throw an error saying unavailable nor we can pause our program. <br> So we need to store the result and call back when it is complete.',
  },
  {
    type: 'Intermediate',
    question: 'What is callback hell?',
    answer:
      'This is a big issue caused by coding with complex nested callbacks. Here, each and every callback takes an argument that is a result of the previous callbacks. In this manner, The code structure looks like a pyramid, making it difficult to read and maintain. Also, if there is an error in one function, then all other functions get affected.',
  },
  {
    type: 'Intermediate',
    question: 'How to escape from a callback hell?',
    answer:
      'JavaScript provides an easy way of escaping from a callback hell. This is done by event queue and promises. <br> A promise is a returned object from any asynchronous function, to which callback methods can be added based on the previous function’s result. <br> Promises use .then() method to call async callbacks. We can chain as many callbacks as we want and the order is also strictly maintained. <br> Promises use .fetch() method to fetch an object from the network. It also uses .catch() method to catch any exception when any block fails. <br> So these promises are put in event queue so that they don’t block subsequent JS code. Also once the results are returned, the event queue finishes its operations. <br> There are also other helpful keywords and methods like async, wait, settimeout() to simplify and make better use of callbacks.',
  },
  {
    type: 'Intermediate',
    question:
      'JavaScript Hoisting <br>  <br> https://www.w3schools.com/js/js_hoisting.asp',
    answer:
      "Hoisting is JavaScript's default behavior of moving declarations to the top. <br> In JavaScript, a variable can be declared after it has been used. <br>  <br> In other words; a variable can be used before it has been declared.",
  },
  {
    type: 'Intermediate',
    question: 'Different types of browser storage',
    answer: null,
  },
  {
    type: 'Advanced',
    question: 'https://github.com/sadanandpai/javascript-code-challenges',
    answer: null,
  },
  {
    type: 'Basic',
    question: 'Explain Hoisting in JavaScript.',
    answer:
      'In JavaScript, we can access the variables after we have declared them.  <br>  <br> If a variable is defined at the bottom of the script, but it is called before, the declaration, in this case, JavaScript throws an error that the variable is undefined.  <br>  <br> In Javascript, hoisting is a mechanism where assigned variables and function declarations are “hoisted” to the top of their scope before executing code.  <br>  <br> Therefore, functions get moved to the top of their range regardless of whether their scope is local or global.',
  },
  {
    type: 'Basic',
    question: 'Explain Closures in JavaScript.',
    answer: null,
  },
  {
    type: 'Basic',
    question: 'Explain Callbacks in JavaScript.',
    answer: null,
  },
  {
    type: 'Advanced',
    question: 'Explain async functions in JavaScript.',
    answer: null,
  },
  {
    type: 'Basic',
    question: "Explain the difference between '==' and '===' in JavaScript.",
    answer: null,
  },
  {
    type: 'Advanced',
    question: 'Explain the purpose of constructors in JavaScript.',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'Explain NaN in JavaScript.',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'Explain var, const, let keywords in JavaScript.',
    answer: null,
  },
  {
    type: 'Intermediate',
    question:
      "Explain the difference between 'null' and 'undefined' in JavaScript.",
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'Explain the different data types in JavaScript.',
    answer: null,
  },
  {
    type: 'Advanced',
    question: "Explain 'strict mode' in JavaScript.",
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'Explain Arrow Functions in JavaScript.',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'Explain Object Destructuring in JavaScript.',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'Explain Spread Syntax or Spread Operator.',
    answer: null,
  },
  {
    type: 'Advanced',
    question: 'Explain Rest Syntax or Rest Operator.',
    answer: null,
  },
  {
    type: 'Advanced',
    question: 'Explain Higher-order functions in JavaScript.',
    answer: null,
  },
  {
    type: 'Intermediate',
    question:
      'Explain the difference between map() and forEach() in JavaScript.',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: "Explain the purpose of the 'this' operator in JavaScript.",
    answer: null,
  },
  {
    type: 'Basic',
    question: 'Explain events in JavaScript.',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'Explain setTimeout and setInterval methods in JavaScript.',
    answer: null,
  },
  {
    type: 'Advanced',
    question: 'Explain debouncing and throttling in JavaScript.',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'Explain event bubbling in JavaScript.',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'Explain the different scopes in JavaScript.',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'Explain Scope Chain in JavaScript.',
    answer: null,
  },
  {
    type: 'Intermediate',
    question:
      'When can you have an error that says Undefined Value on the screen?',
    answer: null,
  },
  {
    type: 'Advanced',
    question:
      'How is the button configuration in the Confirmation box different from the Alert box in JavaScript?',
    answer: null,
  },
  {
    type: 'Advanced',
    question:
      'On a client machine, how do you detect the server using JavaScript?',
    answer: null,
  },
  {
    type: 'Advanced',
    question:
      'What, according to you, are the differences between Java and JavaScript?',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'What are timers in JavaScript?',
    answer: null,
  },
  {
    type: 'Advanced',
    question: 'What is the use of Void (0)?',
    answer: null,
  },
  {
    type: 'Advanced',
    question: 'How can a page be forced to load another page in JavaScript?',
    answer: null,
  },
  {
    type: 'Advanced',
    question: 'What is the role of deferred scripts in JavaScript?',
    answer: null,
  },
  {
    type: 'Intermediate',
    question: 'What is event bubbling and event capturing?',
    answer:
      'Event propagation is defined as the order of events that happen on the element.  <br>  <br> When the event is fired on, the element then bubbles up the DOM tree, meaning the child node will be called first and then the parent node. This is known as event bubbling.  <br>  <br> Event capturing is opposite to event bubbling, i.e., here, first, the parent node is called up and then the child node.',
  },
  {
    type: 'Intermediate',
    question:
      'Point out the differences between local storage, session storage, and cookies.',
    answer:
      'Local storage offers the most substantial maximum storage limit and allows data storage with no expiration date. <br> In Session storage, the stored data is associated with a session. It is same like local storage except that as soon as the user closes the tab or browser, the data disappears. <br> Cookies store small size data that is to be sent back to the server. The size of data stored must be less than 4KB.',
  },
  {
    type: 'Advanced',
   "question": "Mutation in JS",
   "answer": "https:\/\/stackoverflow.com\/questions\/518000\/is-javascript-a-pass-by-reference-or-pass-by-value-language#:~:text=It's%20always%20pass%20by%20value,persist%20outside%20of%20the%20function.",
   
  },
  {
    type: 'Advanced',
   "question": "Datatypes in JS",
   "answer": "https:\/\/www.programiz.com\/javascript\/data-types",
   
  },
  {
    type: 'Advanced',
   "question": "Difference between set timeout and set interval",
   "answer": "setInterval fires again and again in intervals, while setTimeout only fires once.",
   
  },
].map((element) => ({
  ...element,
  category: Category[Category.JavaScript],
}));

export const JavaScriptOutputQuestions = [
  {
    question: 'console.log(2 == "2") ?',
    answer: `TRUE`,
  },
  {
    question: 'console.log(2 ==="2") ?',
    answer: `FALSE`,
  },
  {
    question: 'console.log(true == "true") ?',
    answer: `TRUE`,
  },
  {
    question: 'console.log(true === "true") ?',
    answer: `FALSE`,
  },
  {
    question: 'console.log(Boolean(0)) ?',
    answer: `FALSE`,
  },
  {
    question: 'console.log(!!"hello") ?',
    answer: `TRUE`,
  },
].map((element) => ({
  ...element,
  isCard: true,
  isFlipped: false,
  category: Category[Category.JavaScript],
}));
/**
 * {
      question: '',
      answer: ``
   }
    <br> 
 */
