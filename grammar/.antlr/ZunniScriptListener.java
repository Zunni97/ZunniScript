// Generated from c://Users//Zunni Rojas//Desktop//cleanProyect//clean-project//grammar//ZunniScript.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link ZunniScriptParser}.
 */
public interface ZunniScriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link ZunniScriptParser#start}.
	 * @param ctx the parse tree
	 */
	void enterStart(ZunniScriptParser.StartContext ctx);
	/**
	 * Exit a parse tree produced by {@link ZunniScriptParser#start}.
	 * @param ctx the parse tree
	 */
	void exitStart(ZunniScriptParser.StartContext ctx);
	/**
	 * Enter a parse tree produced by {@link ZunniScriptParser#contenido}.
	 * @param ctx the parse tree
	 */
	void enterContenido(ZunniScriptParser.ContenidoContext ctx);
	/**
	 * Exit a parse tree produced by {@link ZunniScriptParser#contenido}.
	 * @param ctx the parse tree
	 */
	void exitContenido(ZunniScriptParser.ContenidoContext ctx);
	/**
	 * Enter a parse tree produced by {@link ZunniScriptParser#declaraciones}.
	 * @param ctx the parse tree
	 */
	void enterDeclaraciones(ZunniScriptParser.DeclaracionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link ZunniScriptParser#declaraciones}.
	 * @param ctx the parse tree
	 */
	void exitDeclaraciones(ZunniScriptParser.DeclaracionesContext ctx);
}