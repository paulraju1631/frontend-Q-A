import { Category } from './category';

export const JavaScriptQuestions = [
  {
    question: 'What is JavaScript?',
    answer: `JavaScript (JS) is a lightweight, interpreted or JIT compiled programming language.
    Most well-known as the scripting language for Web pages, many non-browser environments also use it, such as node.js and Apache CouchDB`,
  },
  {
    question: 'Can JavaScript only run in a Web browser?',
    answer: `JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.`,
  },
  {
    question: 'Can Javascript work without html?',
    answer: `Javascript is used "alone" to make applications. But it needs an option to show the results.
    <br>
    This can be the command line (NodeJS, browser console), a network response (NodeJS), or a graphical interface (browser with either HTML, SVG, Canvas or WebGL).`,
  },
  {
    question: 'How does the JavaScript code get compiled in the browser?',
    answer: `JavaScript is considered a high level language, meaning it is human readable and has a high degree of flexibility.
    <br>
    The job of the compiler is to turn that high level code into native computer instructions.`,
  },
  {
    question: 'What are the compilation steps in JS?',
    answer: `A simple compiler might have a four-step process: a lexer, a parser, a translator and an interpreter.
    <br>
    1) The lexer, or lexical analyser (or scanner, or tokeniser) scans your source code and turns it into atomic units called tokens. This is most commonly achieved by pattern matching using regular expressions.
    <br>
    2) The tokenised code is then passed through a parser to identify and encode its structure and scope into what’s called a syntax tree.
    <br>
    3) This graph-like structure is then passed through a translator to be turned into bytecode. The simplest implementation of which would be a huge switch statement mapping tokens to their bytecode equivalent.
    <br>
    4) The bytecode is then passed to a bytecode interpreter to be turned into native code and rendered.`,
  },
].map((element) => ({
  ...element,
  //   isFlipped: false,
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
