const astring = require("astring");
const { parseScript } = require("meriyah");
const fs = require("fs");
const fileEncoding = "utf8";

console.log("Hello from Ably!");
console.log(`${astring.generate ? "✔" : "✖"} astring.generate`);
console.log(`${parseScript ? "✔" : "✖"} meriyah.parseScript`);

const transformAST = (node) => {
  // replace var with const
  if (node.type === "VariableDeclaration" && node.kind === "var") {
    return Object.assign({}, node, {
      kind: "const",
      declarations: node.declarations.map(transformAST),
    });
  }

  // Remove async keyword from async functions
  if (node.type === "FunctionDeclaration" && node.async) {
    return Object.assign({}, node, {
      async: false,
    });
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

//Custom generator for astring to convert await to promise
const customGenerator = Object.assign({}, astring.GENERATOR, {
  AwaitExpression: function (node, state) {
    this[node.argument.type](node.argument, state);
    state.write(".then((result) => { ");
    state.write("console.log(result);");
    state.write(" })");
  },
});

const addNewlineAfterImport = (code) => {
  return code.replace(/(const .+ = require\(.+\);)/, "$1\n");
};

// read from file (you don't need to modify this line)
const input = fs.readFileSync("input.js", fileEncoding);
const input2 = fs.readFileSync("input2.js", fileEncoding);

const ast = parseScript(input);
const ast2 = parseScript(input2);

const transformedAst = transformAST(ast);
const transformedAst2 = transformAST(ast2);

const output = astring.generate(transformedAst);
const output2 = astring
  .generate(transformedAst2, { generator: customGenerator })
  .replace(/"/g, "'");

const modifiedOutput2 = addNewlineAfterImport(output2);

// write to file (you don't need to modify this line)
fs.writeFileSync("output.js", output, fileEncoding);
fs.writeFileSync("output2.js", modifiedOutput2, fileEncoding);
