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
	 * Enter a parse tree produced by {@link ZunniScriptParser#expresiones}.
	 * @param ctx the parse tree
	 */
	void enterExpresiones(ZunniScriptParser.ExpresionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link ZunniScriptParser#expresiones}.
	 * @param ctx the parse tree
	 */
	void exitExpresiones(ZunniScriptParser.ExpresionesContext ctx);
	/**
	 * Enter a parse tree produced by the {@code declaracion}
	 * labeled alternative in {@link ZunniScriptParser#declaraciones}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracion(ZunniScriptParser.DeclaracionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code declaracion}
	 * labeled alternative in {@link ZunniScriptParser#declaraciones}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracion(ZunniScriptParser.DeclaracionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code declaracion_invalida}
	 * labeled alternative in {@link ZunniScriptParser#declaraciones}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracion_invalida(ZunniScriptParser.Declaracion_invalidaContext ctx);
	/**
	 * Exit a parse tree produced by the {@code declaracion_invalida}
	 * labeled alternative in {@link ZunniScriptParser#declaraciones}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracion_invalida(ZunniScriptParser.Declaracion_invalidaContext ctx);
	/**
	 * Enter a parse tree produced by the {@code declaracion_asignacion}
	 * labeled alternative in {@link ZunniScriptParser#declaraciones}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracion_asignacion(ZunniScriptParser.Declaracion_asignacionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code declaracion_asignacion}
	 * labeled alternative in {@link ZunniScriptParser#declaraciones}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracion_asignacion(ZunniScriptParser.Declaracion_asignacionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ZunniScriptParser#asignaciones}.
	 * @param ctx the parse tree
	 */
	void enterAsignaciones(ZunniScriptParser.AsignacionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link ZunniScriptParser#asignaciones}.
	 * @param ctx the parse tree
	 */
	void exitAsignaciones(ZunniScriptParser.AsignacionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link ZunniScriptParser#pr}.
	 * @param ctx the parse tree
	 */
	void enterPr(ZunniScriptParser.PrContext ctx);
	/**
	 * Exit a parse tree produced by {@link ZunniScriptParser#pr}.
	 * @param ctx the parse tree
	 */
	void exitPr(ZunniScriptParser.PrContext ctx);
	/**
	 * Enter a parse tree produced by {@link ZunniScriptParser#error}.
	 * @param ctx the parse tree
	 */
	void enterError(ZunniScriptParser.ErrorContext ctx);
	/**
	 * Exit a parse tree produced by {@link ZunniScriptParser#error}.
	 * @param ctx the parse tree
	 */
	void exitError(ZunniScriptParser.ErrorContext ctx);
	/**
	 * Enter a parse tree produced by {@link ZunniScriptParser#errorstart}.
	 * @param ctx the parse tree
	 */
	void enterErrorstart(ZunniScriptParser.ErrorstartContext ctx);
	/**
	 * Exit a parse tree produced by {@link ZunniScriptParser#errorstart}.
	 * @param ctx the parse tree
	 */
	void exitErrorstart(ZunniScriptParser.ErrorstartContext ctx);
	/**
	 * Enter a parse tree produced by the {@code parentesis}
	 * labeled alternative in {@link ZunniScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterParentesis(ZunniScriptParser.ParentesisContext ctx);
	/**
	 * Exit a parse tree produced by the {@code parentesis}
	 * labeled alternative in {@link ZunniScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitParentesis(ZunniScriptParser.ParentesisContext ctx);
	/**
	 * Enter a parse tree produced by the {@code SumRes}
	 * labeled alternative in {@link ZunniScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterSumRes(ZunniScriptParser.SumResContext ctx);
	/**
	 * Exit a parse tree produced by the {@code SumRes}
	 * labeled alternative in {@link ZunniScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitSumRes(ZunniScriptParser.SumResContext ctx);
	/**
	 * Enter a parse tree produced by the {@code MulDiv}
	 * labeled alternative in {@link ZunniScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterMulDiv(ZunniScriptParser.MulDivContext ctx);
	/**
	 * Exit a parse tree produced by the {@code MulDiv}
	 * labeled alternative in {@link ZunniScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitMulDiv(ZunniScriptParser.MulDivContext ctx);
	/**
	 * Enter a parse tree produced by the {@code id}
	 * labeled alternative in {@link ZunniScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterId(ZunniScriptParser.IdContext ctx);
	/**
	 * Exit a parse tree produced by the {@code id}
	 * labeled alternative in {@link ZunniScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitId(ZunniScriptParser.IdContext ctx);
	/**
	 * Enter a parse tree produced by the {@code int}
	 * labeled alternative in {@link ZunniScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterInt(ZunniScriptParser.IntContext ctx);
	/**
	 * Exit a parse tree produced by the {@code int}
	 * labeled alternative in {@link ZunniScriptParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitInt(ZunniScriptParser.IntContext ctx);
}