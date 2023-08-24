# Ably Test

## Node, Meriyah, Astring, an AST and You!

### Introduction

We're starting you off with a working [Node.js](https://nodejs.org/en/) project incorporating some third party dependencies which work together to help you perform the task we're setting you. Please ensure that you're using a [currently supported version of NodeJS](https://nodejs.org/en/about/releases/) when working on this task. You'll be using:

- [Meriyah](https://www.npmjs.com/package/meriyah) - a JavaScript code parser, generating an [ESTree](https://github.com/estree/estree)-compatible AST
- [Astring](https://www.npmjs.com/package/astring) - a JavaScript code generator, generating code from an [ESTree](https://github.com/estree/estree)-compliant AST

Clone this repository to your local machine. As you would expect for a Node.js project the first thing you'll need to do is:

    npm install

You should only need to install dependencies once. From that point forward you'll be running the following command to validate your work:

    npm start

Try it now! You will find that the `validate:eslint` script, which is one of the npm scripts we've configured to validate your work after your code has finished executing, is complaining about the generated code (`output.js`):

```
   8:1   error  Unexpected var, use let or const instead  no-var
   9:1   error  Unexpected var, use let or const instead  no-var
  10:31  error  Operator '+' must be spaced               space-infix-ops
```

We've done this on purpose. Sorry! And this is where we introduce...

### Your Task

#### Part 1 (we would like to see this completed)

The errors above originate in the contents of [`input.js`](input.js), but you're not going to be changing that file.

You must modify the code we've provided you in [`server.js`](server.js) in order to make `npm start` execute without errors.

#### Part 2 (optional, stretch goal - if you have the time)

*You **must not** attempt this task unless you have completed [Part 1](#part-1-we-would-like-to-see-this-completed).*

Try running:

    npm run part2

Add more code to [`server.js`](server.js) to make this execute without errors.

Again, as you would expect, you can't change [`input2.js`](input2.js).
And please ensure that, when you're finished, you can still run `npm start` successfully (i.e. your solution to [Part 1](#part-1-we-would-like-to-see-this-completed) still works).

### Rules

We need to set some boundaries so that we can assess your work fairly. So **you should not**:

- install any new dependencies, nor change the version requirements of any of the existing dependencies in [`package.json`](package.json)
- use syntax newer than [ECMA-262 6.0](http://www.ecma-international.org/ecma-262/6.0/) (a.k.a. ES6, ES2015)
- change [our JSHint configuration](.jshintrc)
- change [our ESLint configuration](.eslintrc.json)
- disable or otherwise tamper with any of our validation scripts, as triggered by our [configured](package.json) `prestart` and `poststart` scripts
- change [our Git ignore file](.gitignore), nor commit any files excluded there

Also, **you must**:

- use both [Meriyah](https://www.npmjs.com/package/meriyah) and [Astring](https://www.npmjs.com/package/astring) as integral parts of your solution
- do all the work yourself
- push your commits back to the GitHub repository so we can assess your work there

And, finally, we think **you should**:

- code and test against the version of Node.js advertised as "LTS" on the [Downloads page](https://nodejs.org/en/download/)

Other than these restrictions, please do feel free to get creative!

### Assessment Criteria

It's only fair to let you know how we will assess your work. We like to see:

- clean code
- concise, considered comments in your code
- well written commit messages - be descriptive
- a clear story so commit frequently as you go along - it really helps if we can see the evolution of your code
- creative thinking
- external references where applicable in your code comments and/or commit history - these can help us to understand the reasons behind the architectural choices you make

There is no reason to create issues or pull requests in the GitHub repository as we're happy to assess based on your linear commit history, however if you find these things useful to you then please do what's comfortable for you.

### Good Luck!

If you find anything wrong in the instructions on this page or elsewhere in the foundations we've given you in this repository then please let us know. We don't mind if you tell us something is incorrect but it turns out that it wasn't. Curiosity and polite challenge are important to us so we will always respect you for raising your hand.

The most important thing is that we want you to have the opportunity to show us your skills as well as your ability to learn new things within the scope of (what we hope is) a tight brief. If you consider the task we've outlined to be unachievable in the time or otherwise unfair then we want to know about that too.

We're looking forward to seeing how you approach this task. :grin:
