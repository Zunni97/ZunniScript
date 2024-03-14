// Generated from .//grammar//ZunniScript.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,20,111,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,
1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,4,8,75,8,8,11,
8,12,8,76,1,9,4,9,80,8,9,11,9,12,9,81,1,10,4,10,85,8,10,11,10,12,10,86,1,
11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,
1,18,1,19,4,19,106,8,19,11,19,12,19,107,1,19,1,19,0,0,20,1,1,3,2,5,3,7,4,
9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,
35,18,37,19,39,20,1,0,5,1,0,48,57,2,0,65,90,97,122,5,0,43,43,45,45,48,57,
65,90,97,122,2,0,60,60,62,62,3,0,9,10,13,13,32,32,114,0,1,1,0,0,0,0,3,1,
0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,
1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,
0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,
0,0,0,0,39,1,0,0,0,1,41,1,0,0,0,3,46,1,0,0,0,5,51,1,0,0,0,7,56,1,0,0,0,9,
61,1,0,0,0,11,66,1,0,0,0,13,69,1,0,0,0,15,71,1,0,0,0,17,74,1,0,0,0,19,79,
1,0,0,0,21,84,1,0,0,0,23,88,1,0,0,0,25,90,1,0,0,0,27,92,1,0,0,0,29,94,1,
0,0,0,31,96,1,0,0,0,33,98,1,0,0,0,35,100,1,0,0,0,37,102,1,0,0,0,39,105,1,
0,0,0,41,42,5,122,0,0,42,43,5,105,0,0,43,44,5,110,0,0,44,45,5,116,0,0,45,
2,1,0,0,0,46,47,5,102,0,0,47,48,5,108,0,0,48,49,5,111,0,0,49,50,5,122,0,
0,50,4,1,0,0,0,51,52,5,122,0,0,52,53,5,104,0,0,53,54,5,97,0,0,54,55,5,114,
0,0,55,6,1,0,0,0,56,57,5,99,0,0,57,58,5,101,0,0,58,59,5,99,0,0,59,60,5,122,
0,0,60,8,1,0,0,0,61,62,5,122,0,0,62,63,5,105,0,0,63,64,5,109,0,0,64,65,5,
112,0,0,65,10,1,0,0,0,66,67,5,122,0,0,67,68,5,105,0,0,68,12,1,0,0,0,69,70,
5,123,0,0,70,14,1,0,0,0,71,72,5,125,0,0,72,16,1,0,0,0,73,75,7,0,0,0,74,73,
1,0,0,0,75,76,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,18,1,0,0,0,78,80,7,
1,0,0,79,78,1,0,0,0,80,81,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,20,1,0,
0,0,83,85,7,2,0,0,84,83,1,0,0,0,85,86,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,
0,87,22,1,0,0,0,88,89,7,3,0,0,89,24,1,0,0,0,90,91,5,42,0,0,91,26,1,0,0,0,
92,93,5,47,0,0,93,28,1,0,0,0,94,95,5,43,0,0,95,30,1,0,0,0,96,97,5,45,0,0,
97,32,1,0,0,0,98,99,5,61,0,0,99,34,1,0,0,0,100,101,5,40,0,0,101,36,1,0,0,
0,102,103,5,41,0,0,103,38,1,0,0,0,104,106,7,4,0,0,105,104,1,0,0,0,106,107,
1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,109,1,0,0,0,109,110,6,19,0,0,
110,40,1,0,0,0,5,0,76,81,86,107,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ZunniScriptLexer extends antlr4.Lexer {

    static grammarFileName = "ZunniScript.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'zint'", "'floz'", "'zhar'", "'cecz'", "'zimp'", 
                         "'zi'", "'{'", "'}'", null, null, null, null, "'*'", 
                         "'/'", "'+'", "'-'", "'='", "'('", "')'" ];
	static symbolicNames = [ null, null, null, null, "INICIO", "IMPRIMIR", 
                          "IF", "LLAVE_ABIERTA", "LLAVE_CERRADA", "INT", 
                          "ID", "ID_invalido", "IF_COND", "MUL", "DIV", 
                          "SUM", "RES", "IGUAL", "PARENT_ABIERTO", "PARENT_CERRADO", 
                          "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "INICIO", "IMPRIMIR", "IF", 
                      "LLAVE_ABIERTA", "LLAVE_CERRADA", "INT", "ID", "ID_invalido", 
                      "IF_COND", "MUL", "DIV", "SUM", "RES", "IGUAL", "PARENT_ABIERTO", 
                      "PARENT_CERRADO", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

ZunniScriptLexer.EOF = antlr4.Token.EOF;
ZunniScriptLexer.T__0 = 1;
ZunniScriptLexer.T__1 = 2;
ZunniScriptLexer.T__2 = 3;
ZunniScriptLexer.INICIO = 4;
ZunniScriptLexer.IMPRIMIR = 5;
ZunniScriptLexer.IF = 6;
ZunniScriptLexer.LLAVE_ABIERTA = 7;
ZunniScriptLexer.LLAVE_CERRADA = 8;
ZunniScriptLexer.INT = 9;
ZunniScriptLexer.ID = 10;
ZunniScriptLexer.ID_invalido = 11;
ZunniScriptLexer.IF_COND = 12;
ZunniScriptLexer.MUL = 13;
ZunniScriptLexer.DIV = 14;
ZunniScriptLexer.SUM = 15;
ZunniScriptLexer.RES = 16;
ZunniScriptLexer.IGUAL = 17;
ZunniScriptLexer.PARENT_ABIERTO = 18;
ZunniScriptLexer.PARENT_CERRADO = 19;
ZunniScriptLexer.WS = 20;



