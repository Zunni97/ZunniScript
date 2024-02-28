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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, MUL=9, 
		DIV=10, SUM=11, RES=12, INICIO=13, INT=14, ID=15, ID_invalido=16, WS=17;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "MUL", 
			"DIV", "SUM", "RES", "INICIO", "INT", "ID", "ID_invalido", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'{'", "'}'", "'='", "'zint'", "'floz'", "'zhar'", "'('", "')'", 
			"'*'", "'/'", "'+'", "'-'", "'iniciar'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, "MUL", "DIV", "SUM", 
			"RES", "INICIO", "INT", "ID", "ID_invalido", "WS"
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
		"\u0004\u0000\u0011b\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b"+
		"\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0004\rN\b"+
		"\r\u000b\r\f\rO\u0001\u000e\u0004\u000eS\b\u000e\u000b\u000e\f\u000eT"+
		"\u0001\u000f\u0004\u000fX\b\u000f\u000b\u000f\f\u000fY\u0001\u0010\u0004"+
		"\u0010]\b\u0010\u000b\u0010\f\u0010^\u0001\u0010\u0001\u0010\u0000\u0000"+
		"\u0011\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006"+
		"\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e"+
		"\u001d\u000f\u001f\u0010!\u0011\u0001\u0000\u0004\u0001\u000009\u0002"+
		"\u0000AZaz\u0005\u0000++--09AZaz\u0003\u0000\t\n\r\r  e\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000"+
		"\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000"+
		"\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000"+
		"\u0001#\u0001\u0000\u0000\u0000\u0003%\u0001\u0000\u0000\u0000\u0005\'"+
		"\u0001\u0000\u0000\u0000\u0007)\u0001\u0000\u0000\u0000\t.\u0001\u0000"+
		"\u0000\u0000\u000b3\u0001\u0000\u0000\u0000\r8\u0001\u0000\u0000\u0000"+
		"\u000f:\u0001\u0000\u0000\u0000\u0011<\u0001\u0000\u0000\u0000\u0013>"+
		"\u0001\u0000\u0000\u0000\u0015@\u0001\u0000\u0000\u0000\u0017B\u0001\u0000"+
		"\u0000\u0000\u0019D\u0001\u0000\u0000\u0000\u001bM\u0001\u0000\u0000\u0000"+
		"\u001dR\u0001\u0000\u0000\u0000\u001fW\u0001\u0000\u0000\u0000!\\\u0001"+
		"\u0000\u0000\u0000#$\u0005{\u0000\u0000$\u0002\u0001\u0000\u0000\u0000"+
		"%&\u0005}\u0000\u0000&\u0004\u0001\u0000\u0000\u0000\'(\u0005=\u0000\u0000"+
		"(\u0006\u0001\u0000\u0000\u0000)*\u0005z\u0000\u0000*+\u0005i\u0000\u0000"+
		"+,\u0005n\u0000\u0000,-\u0005t\u0000\u0000-\b\u0001\u0000\u0000\u0000"+
		"./\u0005f\u0000\u0000/0\u0005l\u0000\u000001\u0005o\u0000\u000012\u0005"+
		"z\u0000\u00002\n\u0001\u0000\u0000\u000034\u0005z\u0000\u000045\u0005"+
		"h\u0000\u000056\u0005a\u0000\u000067\u0005r\u0000\u00007\f\u0001\u0000"+
		"\u0000\u000089\u0005(\u0000\u00009\u000e\u0001\u0000\u0000\u0000:;\u0005"+
		")\u0000\u0000;\u0010\u0001\u0000\u0000\u0000<=\u0005*\u0000\u0000=\u0012"+
		"\u0001\u0000\u0000\u0000>?\u0005/\u0000\u0000?\u0014\u0001\u0000\u0000"+
		"\u0000@A\u0005+\u0000\u0000A\u0016\u0001\u0000\u0000\u0000BC\u0005-\u0000"+
		"\u0000C\u0018\u0001\u0000\u0000\u0000DE\u0005i\u0000\u0000EF\u0005n\u0000"+
		"\u0000FG\u0005i\u0000\u0000GH\u0005c\u0000\u0000HI\u0005i\u0000\u0000"+
		"IJ\u0005a\u0000\u0000JK\u0005r\u0000\u0000K\u001a\u0001\u0000\u0000\u0000"+
		"LN\u0007\u0000\u0000\u0000ML\u0001\u0000\u0000\u0000NO\u0001\u0000\u0000"+
		"\u0000OM\u0001\u0000\u0000\u0000OP\u0001\u0000\u0000\u0000P\u001c\u0001"+
		"\u0000\u0000\u0000QS\u0007\u0001\u0000\u0000RQ\u0001\u0000\u0000\u0000"+
		"ST\u0001\u0000\u0000\u0000TR\u0001\u0000\u0000\u0000TU\u0001\u0000\u0000"+
		"\u0000U\u001e\u0001\u0000\u0000\u0000VX\u0007\u0002\u0000\u0000WV\u0001"+
		"\u0000\u0000\u0000XY\u0001\u0000\u0000\u0000YW\u0001\u0000\u0000\u0000"+
		"YZ\u0001\u0000\u0000\u0000Z \u0001\u0000\u0000\u0000[]\u0007\u0003\u0000"+
		"\u0000\\[\u0001\u0000\u0000\u0000]^\u0001\u0000\u0000\u0000^\\\u0001\u0000"+
		"\u0000\u0000^_\u0001\u0000\u0000\u0000_`\u0001\u0000\u0000\u0000`a\u0006"+
		"\u0010\u0000\u0000a\"\u0001\u0000\u0000\u0000\u0005\u0000OTY^\u0001\u0006"+
		"\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}