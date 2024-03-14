// Generated from c://Users//Zunni Rojas//Desktop//cleanProyect//clean-project//grammar//CommonLexerRules.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class CommonLexerRules extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		INICIO=1, IMPRIMIR=2, IF=3, LLAVE_ABIERTA=4, LLAVE_CERRADA=5, INT=6, ID=7, 
		ID_invalido=8, IF_COND=9, MUL=10, DIV=11, SUM=12, RES=13, IGUAL=14, PARENT_ABIERTO=15, 
		PARENT_CERRADO=16, WS=17;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"INICIO", "IMPRIMIR", "IF", "LLAVE_ABIERTA", "LLAVE_CERRADA", "INT", 
			"ID", "ID_invalido", "IF_COND", "MUL", "DIV", "SUM", "RES", "IGUAL", 
			"PARENT_ABIERTO", "PARENT_CERRADO", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'cecz'", "'zimp'", "'zi'", "'{'", "'}'", null, null, null, null, 
			"'*'", "'/'", "'+'", "'-'", "'='", "'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "INICIO", "IMPRIMIR", "IF", "LLAVE_ABIERTA", "LLAVE_CERRADA", "INT", 
			"ID", "ID_invalido", "IF_COND", "MUL", "DIV", "SUM", "RES", "IGUAL", 
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


	public CommonLexerRules(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "CommonLexerRules.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0011Z\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0004\u00056\b\u0005\u000b"+
		"\u0005\f\u00057\u0001\u0006\u0004\u0006;\b\u0006\u000b\u0006\f\u0006<"+
		"\u0001\u0007\u0004\u0007@\b\u0007\u000b\u0007\f\u0007A\u0001\b\u0001\b"+
		"\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001"+
		"\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u0010\u0004\u0010U\b\u0010\u000b\u0010\f\u0010V\u0001\u0010\u0001\u0010"+
		"\u0000\u0000\u0011\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005"+
		"\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019"+
		"\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011\u0001\u0000\u0005\u0001"+
		"\u000009\u0002\u0000AZaz\u0005\u0000++--09AZaz\u0002\u0000<<>>\u0003\u0000"+
		"\t\n\r\r  ]\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000"+
		"\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000"+
		"\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000"+
		"\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000"+
		"\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000"+
		"\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000"+
		"\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000"+
		"\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000"+
		"\u0000!\u0001\u0000\u0000\u0000\u0001#\u0001\u0000\u0000\u0000\u0003("+
		"\u0001\u0000\u0000\u0000\u0005-\u0001\u0000\u0000\u0000\u00070\u0001\u0000"+
		"\u0000\u0000\t2\u0001\u0000\u0000\u0000\u000b5\u0001\u0000\u0000\u0000"+
		"\r:\u0001\u0000\u0000\u0000\u000f?\u0001\u0000\u0000\u0000\u0011C\u0001"+
		"\u0000\u0000\u0000\u0013E\u0001\u0000\u0000\u0000\u0015G\u0001\u0000\u0000"+
		"\u0000\u0017I\u0001\u0000\u0000\u0000\u0019K\u0001\u0000\u0000\u0000\u001b"+
		"M\u0001\u0000\u0000\u0000\u001dO\u0001\u0000\u0000\u0000\u001fQ\u0001"+
		"\u0000\u0000\u0000!T\u0001\u0000\u0000\u0000#$\u0005c\u0000\u0000$%\u0005"+
		"e\u0000\u0000%&\u0005c\u0000\u0000&\'\u0005z\u0000\u0000\'\u0002\u0001"+
		"\u0000\u0000\u0000()\u0005z\u0000\u0000)*\u0005i\u0000\u0000*+\u0005m"+
		"\u0000\u0000+,\u0005p\u0000\u0000,\u0004\u0001\u0000\u0000\u0000-.\u0005"+
		"z\u0000\u0000./\u0005i\u0000\u0000/\u0006\u0001\u0000\u0000\u000001\u0005"+
		"{\u0000\u00001\b\u0001\u0000\u0000\u000023\u0005}\u0000\u00003\n\u0001"+
		"\u0000\u0000\u000046\u0007\u0000\u0000\u000054\u0001\u0000\u0000\u0000"+
		"67\u0001\u0000\u0000\u000075\u0001\u0000\u0000\u000078\u0001\u0000\u0000"+
		"\u00008\f\u0001\u0000\u0000\u00009;\u0007\u0001\u0000\u0000:9\u0001\u0000"+
		"\u0000\u0000;<\u0001\u0000\u0000\u0000<:\u0001\u0000\u0000\u0000<=\u0001"+
		"\u0000\u0000\u0000=\u000e\u0001\u0000\u0000\u0000>@\u0007\u0002\u0000"+
		"\u0000?>\u0001\u0000\u0000\u0000@A\u0001\u0000\u0000\u0000A?\u0001\u0000"+
		"\u0000\u0000AB\u0001\u0000\u0000\u0000B\u0010\u0001\u0000\u0000\u0000"+
		"CD\u0007\u0003\u0000\u0000D\u0012\u0001\u0000\u0000\u0000EF\u0005*\u0000"+
		"\u0000F\u0014\u0001\u0000\u0000\u0000GH\u0005/\u0000\u0000H\u0016\u0001"+
		"\u0000\u0000\u0000IJ\u0005+\u0000\u0000J\u0018\u0001\u0000\u0000\u0000"+
		"KL\u0005-\u0000\u0000L\u001a\u0001\u0000\u0000\u0000MN\u0005=\u0000\u0000"+
		"N\u001c\u0001\u0000\u0000\u0000OP\u0005(\u0000\u0000P\u001e\u0001\u0000"+
		"\u0000\u0000QR\u0005)\u0000\u0000R \u0001\u0000\u0000\u0000SU\u0007\u0004"+
		"\u0000\u0000TS\u0001\u0000\u0000\u0000UV\u0001\u0000\u0000\u0000VT\u0001"+
		"\u0000\u0000\u0000VW\u0001\u0000\u0000\u0000WX\u0001\u0000\u0000\u0000"+
		"XY\u0006\u0010\u0000\u0000Y\"\u0001\u0000\u0000\u0000\u0005\u00007<AV"+
		"\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}