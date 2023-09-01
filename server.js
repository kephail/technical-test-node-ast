const { generate } = require("astring");
const { parseScript } = require("meriyah");
const fs = require("fs");
const fileEncoding = "utf8";

console.log("Hello from Ably!");
console.log(`${generate ? "✔" : "✖"} astring.generate`);
console.log(`${parseScript ? "✔" : "✖"} meriyah.parseScript`);

const transformVarToConst = (node) => {
  if (node.type === "VariableDeclaration" && node.kind === "var") {
    return Object.assign({}, node, {
      kind: "const",
      declarations: node.declarations.map(transformVarToConst),
    });
  }

  if (Array.isArray(node)) {
    return node.map(transformVarToConst);
  }

  if (typeof node === "object") {
    const newNode = {};
    for (const key in node) {
      newNode[key] = transformVarToConst(node[key]);
    }
    return newNode;
  }

  return node;
};

// read from file (you don't need to modify this line)
const input = fs.readFileSync("input.js", fileEncoding);

const ast = parseScript(input);
const transformedAst = transformVarToConst(ast);
const output = generate(transformedAst);

// write to file (you don't need to modify this line)
fs.writeFileSync("output.js", output, fileEncoding);
