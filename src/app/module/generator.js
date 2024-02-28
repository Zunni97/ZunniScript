/**
 * GrammarName es el nombre que tendrá la gramática
 * se debe remplazar en las importaciones
 */

import antlr4 from "antlr4";
import ZunniScriptLexer from "../../grammar/ZunniScriptLexer.js";
import ZunniScriptParser from "../../grammar/ZunniScriptParser.js";
import CustomVisitor from "../helper/CustomVisitor.js";

export const analizar = (input) => {
  const chars = new antlr4.InputStream(input);
  const lexer = new ZunniScriptLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ZunniScriptParser(tokens);
  parser.buildParseTrees = true;

  const tree = parser.start();
  const customVisitor = new CustomVisitor();

  return customVisitor.visitStart(tree);
};