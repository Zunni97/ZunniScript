// Generated from c://Users//Zunni Rojas//Desktop//cleanProyect//clean-project//grammar//ZunniScript.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class ZunniScriptParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, MUL=4, DIV=5, SUM=6, RES=7, INICIO=8, IMPRIMIR=9, 
		LLAVE_ABIERTA=10, LLAVE_CERRADA=11, INT=12, ID=13, ID_invalido=14, IGUAL=15, 
		PARENT_ABIERTO=16, PARENT_CERRADO=17, WS=18;
	public static final int
		RULE_start = 0, RULE_contenido = 1, RULE_expresiones = 2, RULE_declaraciones = 3, 
		RULE_imprimir = 4, RULE_asignaciones = 5, RULE_pr = 6, RULE_expr = 7;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "contenido", "expresiones", "declaraciones", "imprimir", "asignaciones", 
			"pr", "expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'zint'", "'floz'", "'zhar'", "'*'", "'/'", "'+'", "'-'", "'iniciar'", 
			"'zimp'", "'{'", "'}'", null, null, null, "'='", "'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "MUL", "DIV", "SUM", "RES", "INICIO", "IMPRIMIR", 
			"LLAVE_ABIERTA", "LLAVE_CERRADA", "INT", "ID", "ID_invalido", "IGUAL", 
			"PARENT_ABIERTO", "PARENT_CERRADO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "ZunniScript.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ZunniScriptParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StartContext extends ParserRuleContext {
		public TerminalNode INICIO() { return getToken(ZunniScriptParser.INICIO, 0); }
		public TerminalNode LLAVE_ABIERTA() { return getToken(ZunniScriptParser.LLAVE_ABIERTA, 0); }
		public ContenidoContext contenido() {
			return getRuleContext(ContenidoContext.class,0);
		}
		public TerminalNode LLAVE_CERRADA() { return getToken(ZunniScriptParser.LLAVE_CERRADA, 0); }
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(16);
			match(INICIO);
			setState(17);
			match(LLAVE_ABIERTA);
			setState(18);
			contenido();
			setState(19);
			match(LLAVE_CERRADA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ContenidoContext extends ParserRuleContext {
		public List<ExpresionesContext> expresiones() {
			return getRuleContexts(ExpresionesContext.class);
		}
		public ExpresionesContext expresiones(int i) {
			return getRuleContext(ExpresionesContext.class,i);
		}
		public ContenidoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contenido; }
	}

	public final ContenidoContext contenido() throws RecognitionException {
		ContenidoContext _localctx = new ContenidoContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_contenido);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(24);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8718L) != 0)) {
				{
				{
				setState(21);
				expresiones();
				}
				}
				setState(26);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpresionesContext extends ParserRuleContext {
		public ImprimirContext imprimir() {
			return getRuleContext(ImprimirContext.class,0);
		}
		public DeclaracionesContext declaraciones() {
			return getRuleContext(DeclaracionesContext.class,0);
		}
		public AsignacionesContext asignaciones() {
			return getRuleContext(AsignacionesContext.class,0);
		}
		public ExpresionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expresiones; }
	}

	public final ExpresionesContext expresiones() throws RecognitionException {
		ExpresionesContext _localctx = new ExpresionesContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_expresiones);
		try {
			setState(30);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IMPRIMIR:
				enterOuterAlt(_localctx, 1);
				{
				setState(27);
				imprimir();
				}
				break;
			case T__0:
			case T__1:
			case T__2:
				enterOuterAlt(_localctx, 2);
				{
				setState(28);
				declaraciones();
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 3);
				{
				setState(29);
				asignaciones();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionesContext extends ParserRuleContext {
		public DeclaracionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaraciones; }
	 
		public DeclaracionesContext() { }
		public void copyFrom(DeclaracionesContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class Declaracion_asignacionContext extends DeclaracionesContext {
		public PrContext pr() {
			return getRuleContext(PrContext.class,0);
		}
		public TerminalNode ID() { return getToken(ZunniScriptParser.ID, 0); }
		public TerminalNode IGUAL() { return getToken(ZunniScriptParser.IGUAL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public Declaracion_asignacionContext(DeclaracionesContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class Declaracion_invalidaContext extends DeclaracionesContext {
		public Token invalido;
		public PrContext pr() {
			return getRuleContext(PrContext.class,0);
		}
		public TerminalNode ID_invalido() { return getToken(ZunniScriptParser.ID_invalido, 0); }
		public TerminalNode INT() { return getToken(ZunniScriptParser.INT, 0); }
		public Declaracion_invalidaContext(DeclaracionesContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionContext extends DeclaracionesContext {
		public PrContext pr() {
			return getRuleContext(PrContext.class,0);
		}
		public TerminalNode ID() { return getToken(ZunniScriptParser.ID, 0); }
		public DeclaracionContext(DeclaracionesContext ctx) { copyFrom(ctx); }
	}

	public final DeclaracionesContext declaraciones() throws RecognitionException {
		DeclaracionesContext _localctx = new DeclaracionesContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_declaraciones);
		int _la;
		try {
			setState(43);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				_localctx = new DeclaracionContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(32);
				pr();
				setState(33);
				match(ID);
				}
				break;
			case 2:
				_localctx = new Declaracion_invalidaContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(35);
				pr();
				setState(36);
				((Declaracion_invalidaContext)_localctx).invalido = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==INT || _la==ID_invalido) ) {
					((Declaracion_invalidaContext)_localctx).invalido = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 3:
				_localctx = new Declaracion_asignacionContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(38);
				pr();
				setState(39);
				match(ID);
				setState(40);
				match(IGUAL);
				setState(41);
				expr(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImprimirContext extends ParserRuleContext {
		public TerminalNode IMPRIMIR() { return getToken(ZunniScriptParser.IMPRIMIR, 0); }
		public TerminalNode PARENT_ABIERTO() { return getToken(ZunniScriptParser.PARENT_ABIERTO, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PARENT_CERRADO() { return getToken(ZunniScriptParser.PARENT_CERRADO, 0); }
		public ImprimirContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_imprimir; }
	}

	public final ImprimirContext imprimir() throws RecognitionException {
		ImprimirContext _localctx = new ImprimirContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_imprimir);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			match(IMPRIMIR);
			setState(46);
			match(PARENT_ABIERTO);
			setState(47);
			expr(0);
			setState(48);
			match(PARENT_CERRADO);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AsignacionesContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ZunniScriptParser.ID, 0); }
		public TerminalNode IGUAL() { return getToken(ZunniScriptParser.IGUAL, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public AsignacionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asignaciones; }
	}

	public final AsignacionesContext asignaciones() throws RecognitionException {
		AsignacionesContext _localctx = new AsignacionesContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_asignaciones);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(50);
			match(ID);
			setState(51);
			match(IGUAL);
			setState(52);
			expr(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrContext extends ParserRuleContext {
		public PrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pr; }
	}

	public final PrContext pr() throws RecognitionException {
		PrContext _localctx = new PrContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_pr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(54);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 14L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprContext extends ParserRuleContext {
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParentesisContext extends ExprContext {
		public TerminalNode PARENT_ABIERTO() { return getToken(ZunniScriptParser.PARENT_ABIERTO, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode PARENT_CERRADO() { return getToken(ZunniScriptParser.PARENT_CERRADO, 0); }
		public ParentesisContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SumResContext extends ExprContext {
		public Token op;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode SUM() { return getToken(ZunniScriptParser.SUM, 0); }
		public TerminalNode RES() { return getToken(ZunniScriptParser.RES, 0); }
		public SumResContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MulDivContext extends ExprContext {
		public Token op;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode MUL() { return getToken(ZunniScriptParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(ZunniScriptParser.DIV, 0); }
		public MulDivContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdContext extends ExprContext {
		public TerminalNode ID() { return getToken(ZunniScriptParser.ID, 0); }
		public IdContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IntContext extends ExprContext {
		public TerminalNode INT() { return getToken(ZunniScriptParser.INT, 0); }
		public IntContext(ExprContext ctx) { copyFrom(ctx); }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 14;
		enterRecursionRule(_localctx, 14, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INT:
				{
				_localctx = new IntContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(57);
				match(INT);
				}
				break;
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(58);
				match(ID);
				}
				break;
			case PARENT_ABIERTO:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(59);
				match(PARENT_ABIERTO);
				setState(60);
				expr(0);
				setState(61);
				match(PARENT_CERRADO);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(73);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(71);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
					case 1:
						{
						_localctx = new MulDivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(65);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(66);
						((MulDivContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==MUL || _la==DIV) ) {
							((MulDivContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(67);
						expr(6);
						}
						break;
					case 2:
						{
						_localctx = new SumResContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(68);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(69);
						((SumResContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==SUM || _la==RES) ) {
							((SumResContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(70);
						expr(5);
						}
						break;
					}
					} 
				}
				setState(75);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 7:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 5);
		case 1:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0012M\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0005"+
		"\u0001\u0017\b\u0001\n\u0001\f\u0001\u001a\t\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0003\u0002\u001f\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0003\u0003,\b\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007@\b\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0005\u0007H\b\u0007\n\u0007\f\u0007K\t\u0007\u0001\u0007\u0000\u0001"+
		"\u000e\b\u0000\u0002\u0004\u0006\b\n\f\u000e\u0000\u0004\u0002\u0000\f"+
		"\f\u000e\u000e\u0001\u0000\u0001\u0003\u0001\u0000\u0004\u0005\u0001\u0000"+
		"\u0006\u0007M\u0000\u0010\u0001\u0000\u0000\u0000\u0002\u0018\u0001\u0000"+
		"\u0000\u0000\u0004\u001e\u0001\u0000\u0000\u0000\u0006+\u0001\u0000\u0000"+
		"\u0000\b-\u0001\u0000\u0000\u0000\n2\u0001\u0000\u0000\u0000\f6\u0001"+
		"\u0000\u0000\u0000\u000e?\u0001\u0000\u0000\u0000\u0010\u0011\u0005\b"+
		"\u0000\u0000\u0011\u0012\u0005\n\u0000\u0000\u0012\u0013\u0003\u0002\u0001"+
		"\u0000\u0013\u0014\u0005\u000b\u0000\u0000\u0014\u0001\u0001\u0000\u0000"+
		"\u0000\u0015\u0017\u0003\u0004\u0002\u0000\u0016\u0015\u0001\u0000\u0000"+
		"\u0000\u0017\u001a\u0001\u0000\u0000\u0000\u0018\u0016\u0001\u0000\u0000"+
		"\u0000\u0018\u0019\u0001\u0000\u0000\u0000\u0019\u0003\u0001\u0000\u0000"+
		"\u0000\u001a\u0018\u0001\u0000\u0000\u0000\u001b\u001f\u0003\b\u0004\u0000"+
		"\u001c\u001f\u0003\u0006\u0003\u0000\u001d\u001f\u0003\n\u0005\u0000\u001e"+
		"\u001b\u0001\u0000\u0000\u0000\u001e\u001c\u0001\u0000\u0000\u0000\u001e"+
		"\u001d\u0001\u0000\u0000\u0000\u001f\u0005\u0001\u0000\u0000\u0000 !\u0003"+
		"\f\u0006\u0000!\"\u0005\r\u0000\u0000\",\u0001\u0000\u0000\u0000#$\u0003"+
		"\f\u0006\u0000$%\u0007\u0000\u0000\u0000%,\u0001\u0000\u0000\u0000&\'"+
		"\u0003\f\u0006\u0000\'(\u0005\r\u0000\u0000()\u0005\u000f\u0000\u0000"+
		")*\u0003\u000e\u0007\u0000*,\u0001\u0000\u0000\u0000+ \u0001\u0000\u0000"+
		"\u0000+#\u0001\u0000\u0000\u0000+&\u0001\u0000\u0000\u0000,\u0007\u0001"+
		"\u0000\u0000\u0000-.\u0005\t\u0000\u0000./\u0005\u0010\u0000\u0000/0\u0003"+
		"\u000e\u0007\u000001\u0005\u0011\u0000\u00001\t\u0001\u0000\u0000\u0000"+
		"23\u0005\r\u0000\u000034\u0005\u000f\u0000\u000045\u0003\u000e\u0007\u0000"+
		"5\u000b\u0001\u0000\u0000\u000067\u0007\u0001\u0000\u00007\r\u0001\u0000"+
		"\u0000\u000089\u0006\u0007\uffff\uffff\u00009@\u0005\f\u0000\u0000:@\u0005"+
		"\r\u0000\u0000;<\u0005\u0010\u0000\u0000<=\u0003\u000e\u0007\u0000=>\u0005"+
		"\u0011\u0000\u0000>@\u0001\u0000\u0000\u0000?8\u0001\u0000\u0000\u0000"+
		"?:\u0001\u0000\u0000\u0000?;\u0001\u0000\u0000\u0000@I\u0001\u0000\u0000"+
		"\u0000AB\n\u0005\u0000\u0000BC\u0007\u0002\u0000\u0000CH\u0003\u000e\u0007"+
		"\u0006DE\n\u0004\u0000\u0000EF\u0007\u0003\u0000\u0000FH\u0003\u000e\u0007"+
		"\u0005GA\u0001\u0000\u0000\u0000GD\u0001\u0000\u0000\u0000HK\u0001\u0000"+
		"\u0000\u0000IG\u0001\u0000\u0000\u0000IJ\u0001\u0000\u0000\u0000J\u000f"+
		"\u0001\u0000\u0000\u0000KI\u0001\u0000\u0000\u0000\u0006\u0018\u001e+"+
		"?GI";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}