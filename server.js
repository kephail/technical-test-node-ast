const { generate } = require("astring");
const { parseScript } = require("meriyah");
const fs = require("fs");
const fileEncoding = "utf8";

console.log("Hello from Ably!");
console.log(`${generate ? "✔" : "✖"} astring.generate`);
console.log(`${parseScript ? "✔" : "✖"} meriyah.parseScript`);

const transformAST = (node) => {
  if (node.type === "VariableDeclaration" && node.kind === "var") {
    return Object.assign({}, node, {
      kind: "const",
      declarations: node.declarations.map(transformAST),
    });
  }

  if (node.type === "FunctionDeclaration" && node.async) {
    console.dir(node, { depth: null });
  }

  if (Array.isArray(node)) {
    return node.map(transformAST);
  }

  if (typeof node === "object") {
    const newNode = {};
    for (const key in node) {
      newNode[key] = transformAST(node[key]);
    }
    return newNode;
  }

  return node;
};

// read from file (you don't need to modify this line)
const input = fs.readFileSync("input.js", fileEncoding);
const input2 = fs.readFileSync("input2.js", fileEncoding);

const ast = parseScript(input);
const ast2 = parseScript(input2);

// console.dir(ast2, { depth: null });

const transformedAst = transformAST(ast);
const transformedAst2 = transformAST(ast2);
const output = generate(transformedAst);

// write to file (you don't need to modify this line)
fs.writeFileSync("output.js", output, fileEncoding);
fs.writeFileSync("output2.js", output, fileEncoding);
