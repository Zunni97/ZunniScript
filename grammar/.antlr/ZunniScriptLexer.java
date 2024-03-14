// Generated from c://Users//Zunni Rojas//Desktop//cleanProyect//clean-project//grammar//ZunniScript.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class ZunniScriptLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, INICIO=4, IMPRIMIR=5, IF=6, LLAVE_ABIERTA=7, LLAVE_CERRADA=8, 
		INT=9, ID=10, ID_invalido=11, IF_COND=12, MUL=13, DIV=14, SUM=15, RES=16, 
		IGUAL=17, PARENT_ABIERTO=18, PARENT_CERRADO=19, WS=20;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "INICIO", "IMPRIMIR", "IF", "LLAVE_ABIERTA", 
			"LLAVE_CERRADA", "INT", "ID", "ID_invalido", "IF_COND", "MUL", "DIV", 
			"SUM", "RES", "IGUAL", "PARENT_ABIERTO", "PARENT_CERRADO", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'zint'", "'floz'", "'zhar'", "'cecz'", "'zimp'", "'zi'", "'{'", 
			"'}'", null, null, null, null, "'*'", "'/'", "'+'", "'-'", "'='", "'('", 
			"')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "INICIO", "IMPRIMIR", "IF", "LLAVE_ABIERTA", 
			"LLAVE_CERRADA", "INT", "ID", "ID_invalido", "IF_COND", "MUL", "DIV", 
			"SUM", "RES", "IGUAL", "PARENT_ABIERTO", "PARENT_CERRADO", "WS"
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


	public ZunniScriptLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ZunniScript.g4"; }

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
		"\u0004\u0000\u0014o\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002"+
		"\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0004\bK\b\b\u000b\b\f\bL\u0001\t\u0004\tP\b\t\u000b\t\f\tQ\u0001\n"+
		"\u0004\nU\b\n\u000b\n\f\nV\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001"+
		"\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010"+
		"\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0013"+
		"\u0004\u0013j\b\u0013\u000b\u0013\f\u0013k\u0001\u0013\u0001\u0013\u0000"+
		"\u0000\u0014\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b"+
		"\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b"+
		"\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014\u0001\u0000"+
		"\u0005\u0001\u000009\u0002\u0000AZaz\u0005\u0000++--09AZaz\u0002\u0000"+
		"<<>>\u0003\u0000\t\n\r\r  r\u0000\u0001\u0001\u0000\u0000\u0000\u0000"+
		"\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000"+
		"\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b"+
		"\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001"+
		"\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001"+
		"\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001"+
		"\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001"+
		"\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001"+
		"\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000"+
		"\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000"+
		"\u0001)\u0001\u0000\u0000\u0000\u0003.\u0001\u0000\u0000\u0000\u00053"+
		"\u0001\u0000\u0000\u0000\u00078\u0001\u0000\u0000\u0000\t=\u0001\u0000"+
		"\u0000\u0000\u000bB\u0001\u0000\u0000\u0000\rE\u0001\u0000\u0000\u0000"+
		"\u000fG\u0001\u0000\u0000\u0000\u0011J\u0001\u0000\u0000\u0000\u0013O"+
		"\u0001\u0000\u0000\u0000\u0015T\u0001\u0000\u0000\u0000\u0017X\u0001\u0000"+
		"\u0000\u0000\u0019Z\u0001\u0000\u0000\u0000\u001b\\\u0001\u0000\u0000"+
		"\u0000\u001d^\u0001\u0000\u0000\u0000\u001f`\u0001\u0000\u0000\u0000!"+
		"b\u0001\u0000\u0000\u0000#d\u0001\u0000\u0000\u0000%f\u0001\u0000\u0000"+
		"\u0000\'i\u0001\u0000\u0000\u0000)*\u0005z\u0000\u0000*+\u0005i\u0000"+
		"\u0000+,\u0005n\u0000\u0000,-\u0005t\u0000\u0000-\u0002\u0001\u0000\u0000"+
		"\u0000./\u0005f\u0000\u0000/0\u0005l\u0000\u000001\u0005o\u0000\u0000"+
		"12\u0005z\u0000\u00002\u0004\u0001\u0000\u0000\u000034\u0005z\u0000\u0000"+
		"45\u0005h\u0000\u000056\u0005a\u0000\u000067\u0005r\u0000\u00007\u0006"+
		"\u0001\u0000\u0000\u000089\u0005c\u0000\u00009:\u0005e\u0000\u0000:;\u0005"+
		"c\u0000\u0000;<\u0005z\u0000\u0000<\b\u0001\u0000\u0000\u0000=>\u0005"+
		"z\u0000\u0000>?\u0005i\u0000\u0000?@\u0005m\u0000\u0000@A\u0005p\u0000"+
		"\u0000A\n\u0001\u0000\u0000\u0000BC\u0005z\u0000\u0000CD\u0005i\u0000"+
		"\u0000D\f\u0001\u0000\u0000\u0000EF\u0005{\u0000\u0000F\u000e\u0001\u0000"+
		"\u0000\u0000GH\u0005}\u0000\u0000H\u0010\u0001\u0000\u0000\u0000IK\u0007"+
		"\u0000\u0000\u0000JI\u0001\u0000\u0000\u0000KL\u0001\u0000\u0000\u0000"+
		"LJ\u0001\u0000\u0000\u0000LM\u0001\u0000\u0000\u0000M\u0012\u0001\u0000"+
		"\u0000\u0000NP\u0007\u0001\u0000\u0000ON\u0001\u0000\u0000\u0000PQ\u0001"+
		"\u0000\u0000\u0000QO\u0001\u0000\u0000\u0000QR\u0001\u0000\u0000\u0000"+
		"R\u0014\u0001\u0000\u0000\u0000SU\u0007\u0002\u0000\u0000TS\u0001\u0000"+
		"\u0000\u0000UV\u0001\u0000\u0000\u0000VT\u0001\u0000\u0000\u0000VW\u0001"+
		"\u0000\u0000\u0000W\u0016\u0001\u0000\u0000\u0000XY\u0007\u0003\u0000"+
		"\u0000Y\u0018\u0001\u0000\u0000\u0000Z[\u0005*\u0000\u0000[\u001a\u0001"+
		"\u0000\u0000\u0000\\]\u0005/\u0000\u0000]\u001c\u0001\u0000\u0000\u0000"+
		"^_\u0005+\u0000\u0000_\u001e\u0001\u0000\u0000\u0000`a\u0005-\u0000\u0000"+
		"a \u0001\u0000\u0000\u0000bc\u0005=\u0000\u0000c\"\u0001\u0000\u0000\u0000"+
		"de\u0005(\u0000\u0000e$\u0001\u0000\u0000\u0000fg\u0005)\u0000\u0000g"+
		"&\u0001\u0000\u0000\u0000hj\u0007\u0004\u0000\u0000ih\u0001\u0000\u0000"+
		"\u0000jk\u0001\u0000\u0000\u0000ki\u0001\u0000\u0000\u0000kl\u0001\u0000"+
		"\u0000\u0000lm\u0001\u0000\u0000\u0000mn\u0006\u0013\u0000\u0000n(\u0001"+
		"\u0000\u0000\u0000\u0005\u0000LQVk\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}