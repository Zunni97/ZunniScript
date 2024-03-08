/**
 * GrammarName es el nombre que tendrá la gramática
 * se debe remplazar en las importaciones
 */

import antlr4 from "antlr4";
import ZunniScriptLexer from "../../grammar/ZunniScriptLexer.js";
import ZunniScriptParser from "../../grammar/ZunniScriptParser.js";
import CustomVisitor from "../helper/CustomVisitor.js";

class ExprErrorListener extends antlr4.error.ErrorListener{
  constructor(CustomVisitor){
    super()
    this.visitor = CustomVisitor
  }

  syntaxError (recognizer, offendingSymbol, line, column, msg, err) {
    this.visitor.errors.push(`Error de sintaxis en linea: ${line}`);
  }
}

export const analizar = (input) => {
  const chars = new antlr4.InputStream(input);
  const lexer = new ZunniScriptLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const customVisitor = new CustomVisitor();
  
  const parser = new ZunniScriptParser(tokens);
  parser.buildParseTrees = true;
  parser.removeErrorListeners();
  parser.addErrorListener(new ExprErrorListener(customVisitor));


  const tree = parser.start();

  return customVisitor.visitStart(tree);
};