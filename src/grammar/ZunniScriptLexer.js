// Generated from .//grammar//ZunniScript.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,17,98,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,
2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,
8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,12,1,12,
1,13,4,13,78,8,13,11,13,12,13,79,1,14,4,14,83,8,14,11,14,12,14,84,1,15,4,
15,88,8,15,11,15,12,15,89,1,16,4,16,93,8,16,11,16,12,16,94,1,16,1,16,0,0,
17,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,
29,15,31,16,33,17,1,0,4,1,0,48,57,2,0,65,90,97,122,5,0,43,43,45,45,48,57,
65,90,97,122,3,0,9,10,13,13,32,32,101,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,
0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,
0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,
29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,1,35,1,0,0,0,3,37,1,0,0,0,5,42,1,0,
0,0,7,47,1,0,0,0,9,52,1,0,0,0,11,54,1,0,0,0,13,56,1,0,0,0,15,58,1,0,0,0,
17,60,1,0,0,0,19,62,1,0,0,0,21,64,1,0,0,0,23,72,1,0,0,0,25,74,1,0,0,0,27,
77,1,0,0,0,29,82,1,0,0,0,31,87,1,0,0,0,33,92,1,0,0,0,35,36,5,61,0,0,36,2,
1,0,0,0,37,38,5,122,0,0,38,39,5,105,0,0,39,40,5,110,0,0,40,41,5,116,0,0,
41,4,1,0,0,0,42,43,5,102,0,0,43,44,5,108,0,0,44,45,5,111,0,0,45,46,5,122,
0,0,46,6,1,0,0,0,47,48,5,122,0,0,48,49,5,104,0,0,49,50,5,97,0,0,50,51,5,
114,0,0,51,8,1,0,0,0,52,53,5,40,0,0,53,10,1,0,0,0,54,55,5,41,0,0,55,12,1,
0,0,0,56,57,5,42,0,0,57,14,1,0,0,0,58,59,5,47,0,0,59,16,1,0,0,0,60,61,5,
43,0,0,61,18,1,0,0,0,62,63,5,45,0,0,63,20,1,0,0,0,64,65,5,105,0,0,65,66,
5,110,0,0,66,67,5,105,0,0,67,68,5,99,0,0,68,69,5,105,0,0,69,70,5,97,0,0,
70,71,5,114,0,0,71,22,1,0,0,0,72,73,5,123,0,0,73,24,1,0,0,0,74,75,5,125,
0,0,75,26,1,0,0,0,76,78,7,0,0,0,77,76,1,0,0,0,78,79,1,0,0,0,79,77,1,0,0,
0,79,80,1,0,0,0,80,28,1,0,0,0,81,83,7,1,0,0,82,81,1,0,0,0,83,84,1,0,0,0,
84,82,1,0,0,0,84,85,1,0,0,0,85,30,1,0,0,0,86,88,7,2,0,0,87,86,1,0,0,0,88,
89,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,32,1,0,0,0,91,93,7,3,0,0,92,91,
1,0,0,0,93,94,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,96,1,0,0,0,96,97,6,
16,0,0,97,34,1,0,0,0,5,0,79,84,89,94,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ZunniScriptLexer extends antlr4.Lexer {

    static grammarFileName = "ZunniScript.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'='", "'zint'", "'floz'", "'zhar'", "'('", 
                         "')'", "'*'", "'/'", "'+'", "'-'", "'iniciar'", 
                         "'{'", "'}'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, "MUL", 
                          "DIV", "SUM", "RES", "INICIO", "LLAVE_ABIERTA", 
                          "LLAVE_CERRADA", "INT", "ID", "ID_invalido", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "MUL", 
                      "DIV", "SUM", "RES", "INICIO", "LLAVE_ABIERTA", "LLAVE_CERRADA", 
                      "INT", "ID", "ID_invalido", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

ZunniScriptLexer.EOF = antlr4.Token.EOF;
ZunniScriptLexer.T__0 = 1;
ZunniScriptLexer.T__1 = 2;
ZunniScriptLexer.T__2 = 3;
ZunniScriptLexer.T__3 = 4;
ZunniScriptLexer.T__4 = 5;
ZunniScriptLexer.T__5 = 6;
ZunniScriptLexer.MUL = 7;
ZunniScriptLexer.DIV = 8;
ZunniScriptLexer.SUM = 9;
ZunniScriptLexer.RES = 10;
ZunniScriptLexer.INICIO = 11;
ZunniScriptLexer.LLAVE_ABIERTA = 12;
ZunniScriptLexer.LLAVE_CERRADA = 13;
ZunniScriptLexer.INT = 14;
ZunniScriptLexer.ID = 15;
ZunniScriptLexer.ID_invalido = 16;
ZunniScriptLexer.WS = 17;



