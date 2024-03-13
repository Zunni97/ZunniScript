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
		T__0=1, T__1=2, T__2=3, MUL=4, DIV=5, SUM=6, RES=7, INICIO=8, IMPRIMIR=9, 
		LLAVE_ABIERTA=10, LLAVE_CERRADA=11, INT=12, ID=13, ID_invalido=14, IGUAL=15, 
		PARENT_ABIERTO=16, PARENT_CERRADO=17, WS=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "MUL", "DIV", "SUM", "RES", "INICIO", "IMPRIMIR", 
			"LLAVE_ABIERTA", "LLAVE_CERRADA", "INT", "ID", "ID_invalido", "IGUAL", 
			"PARENT_ABIERTO", "PARENT_CERRADO", "WS"
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
		"\u0004\u0000\u0012i\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001"+
		"\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n"+
		"\u0001\n\u0001\u000b\u0004\u000bO\b\u000b\u000b\u000b\f\u000bP\u0001\f"+
		"\u0004\fT\b\f\u000b\f\f\fU\u0001\r\u0004\rY\b\r\u000b\r\f\rZ\u0001\u000e"+
		"\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0011"+
		"\u0004\u0011d\b\u0011\u000b\u0011\f\u0011e\u0001\u0011\u0001\u0011\u0000"+
		"\u0000\u0012\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b"+
		"\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b"+
		"\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012\u0001\u0000\u0004\u0001\u0000"+
		"09\u0002\u0000AZaz\u0005\u0000++--09AZaz\u0003\u0000\t\n\r\r  l\u0000"+
		"\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000"+
		"\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000"+
		"\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r"+
		"\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001"+
		"\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0001%\u0001\u0000\u0000"+
		"\u0000\u0003*\u0001\u0000\u0000\u0000\u0005/\u0001\u0000\u0000\u0000\u0007"+
		"4\u0001\u0000\u0000\u0000\t6\u0001\u0000\u0000\u0000\u000b8\u0001\u0000"+
		"\u0000\u0000\r:\u0001\u0000\u0000\u0000\u000f<\u0001\u0000\u0000\u0000"+
		"\u0011D\u0001\u0000\u0000\u0000\u0013I\u0001\u0000\u0000\u0000\u0015K"+
		"\u0001\u0000\u0000\u0000\u0017N\u0001\u0000\u0000\u0000\u0019S\u0001\u0000"+
		"\u0000\u0000\u001bX\u0001\u0000\u0000\u0000\u001d\\\u0001\u0000\u0000"+
		"\u0000\u001f^\u0001\u0000\u0000\u0000!`\u0001\u0000\u0000\u0000#c\u0001"+
		"\u0000\u0000\u0000%&\u0005z\u0000\u0000&\'\u0005i\u0000\u0000\'(\u0005"+
		"n\u0000\u0000()\u0005t\u0000\u0000)\u0002\u0001\u0000\u0000\u0000*+\u0005"+
		"f\u0000\u0000+,\u0005l\u0000\u0000,-\u0005o\u0000\u0000-.\u0005z\u0000"+
		"\u0000.\u0004\u0001\u0000\u0000\u0000/0\u0005z\u0000\u000001\u0005h\u0000"+
		"\u000012\u0005a\u0000\u000023\u0005r\u0000\u00003\u0006\u0001\u0000\u0000"+
		"\u000045\u0005*\u0000\u00005\b\u0001\u0000\u0000\u000067\u0005/\u0000"+
		"\u00007\n\u0001\u0000\u0000\u000089\u0005+\u0000\u00009\f\u0001\u0000"+
		"\u0000\u0000:;\u0005-\u0000\u0000;\u000e\u0001\u0000\u0000\u0000<=\u0005"+
		"i\u0000\u0000=>\u0005n\u0000\u0000>?\u0005i\u0000\u0000?@\u0005c\u0000"+
		"\u0000@A\u0005i\u0000\u0000AB\u0005a\u0000\u0000BC\u0005r\u0000\u0000"+
		"C\u0010\u0001\u0000\u0000\u0000DE\u0005z\u0000\u0000EF\u0005i\u0000\u0000"+
		"FG\u0005m\u0000\u0000GH\u0005p\u0000\u0000H\u0012\u0001\u0000\u0000\u0000"+
		"IJ\u0005{\u0000\u0000J\u0014\u0001\u0000\u0000\u0000KL\u0005}\u0000\u0000"+
		"L\u0016\u0001\u0000\u0000\u0000MO\u0007\u0000\u0000\u0000NM\u0001\u0000"+
		"\u0000\u0000OP\u0001\u0000\u0000\u0000PN\u0001\u0000\u0000\u0000PQ\u0001"+
		"\u0000\u0000\u0000Q\u0018\u0001\u0000\u0000\u0000RT\u0007\u0001\u0000"+
		"\u0000SR\u0001\u0000\u0000\u0000TU\u0001\u0000\u0000\u0000US\u0001\u0000"+
		"\u0000\u0000UV\u0001\u0000\u0000\u0000V\u001a\u0001\u0000\u0000\u0000"+
		"WY\u0007\u0002\u0000\u0000XW\u0001\u0000\u0000\u0000YZ\u0001\u0000\u0000"+
		"\u0000ZX\u0001\u0000\u0000\u0000Z[\u0001\u0000\u0000\u0000[\u001c\u0001"+
		"\u0000\u0000\u0000\\]\u0005=\u0000\u0000]\u001e\u0001\u0000\u0000\u0000"+
		"^_\u0005(\u0000\u0000_ \u0001\u0000\u0000\u0000`a\u0005)\u0000\u0000a"+
		"\"\u0001\u0000\u0000\u0000bd\u0007\u0003\u0000\u0000cb\u0001\u0000\u0000"+
		"\u0000de\u0001\u0000\u0000\u0000ec\u0001\u0000\u0000\u0000ef\u0001\u0000"+
		"\u0000\u0000fg\u0001\u0000\u0000\u0000gh\u0006\u0011\u0000\u0000h$\u0001"+
		"\u0000\u0000\u0000\u0005\u0000PUZe\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}