// Generated from .//grammar//ZunniScript.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,18,105,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,0,1,0,1,0,
1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,
11,4,11,79,8,11,11,11,12,11,80,1,12,4,12,84,8,12,11,12,12,12,85,1,13,4,13,
89,8,13,11,13,12,13,90,1,14,1,14,1,15,1,15,1,16,1,16,1,17,4,17,100,8,17,
11,17,12,17,101,1,17,1,17,0,0,18,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,
19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,1,0,4,1,0,48,57,2,
0,65,90,97,122,5,0,43,43,45,45,48,57,65,90,97,122,3,0,9,10,13,13,32,32,108,
0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,
0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,
0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,
35,1,0,0,0,1,37,1,0,0,0,3,42,1,0,0,0,5,47,1,0,0,0,7,52,1,0,0,0,9,54,1,0,
0,0,11,56,1,0,0,0,13,58,1,0,0,0,15,60,1,0,0,0,17,68,1,0,0,0,19,73,1,0,0,
0,21,75,1,0,0,0,23,78,1,0,0,0,25,83,1,0,0,0,27,88,1,0,0,0,29,92,1,0,0,0,
31,94,1,0,0,0,33,96,1,0,0,0,35,99,1,0,0,0,37,38,5,122,0,0,38,39,5,105,0,
0,39,40,5,110,0,0,40,41,5,116,0,0,41,2,1,0,0,0,42,43,5,102,0,0,43,44,5,108,
0,0,44,45,5,111,0,0,45,46,5,122,0,0,46,4,1,0,0,0,47,48,5,122,0,0,48,49,5,
104,0,0,49,50,5,97,0,0,50,51,5,114,0,0,51,6,1,0,0,0,52,53,5,42,0,0,53,8,
1,0,0,0,54,55,5,47,0,0,55,10,1,0,0,0,56,57,5,43,0,0,57,12,1,0,0,0,58,59,
5,45,0,0,59,14,1,0,0,0,60,61,5,105,0,0,61,62,5,110,0,0,62,63,5,105,0,0,63,
64,5,99,0,0,64,65,5,105,0,0,65,66,5,97,0,0,66,67,5,114,0,0,67,16,1,0,0,0,
68,69,5,122,0,0,69,70,5,105,0,0,70,71,5,109,0,0,71,72,5,112,0,0,72,18,1,
0,0,0,73,74,5,123,0,0,74,20,1,0,0,0,75,76,5,125,0,0,76,22,1,0,0,0,77,79,
7,0,0,0,78,77,1,0,0,0,79,80,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,24,1,
0,0,0,82,84,7,1,0,0,83,82,1,0,0,0,84,85,1,0,0,0,85,83,1,0,0,0,85,86,1,0,
0,0,86,26,1,0,0,0,87,89,7,2,0,0,88,87,1,0,0,0,89,90,1,0,0,0,90,88,1,0,0,
0,90,91,1,0,0,0,91,28,1,0,0,0,92,93,5,61,0,0,93,30,1,0,0,0,94,95,5,40,0,
0,95,32,1,0,0,0,96,97,5,41,0,0,97,34,1,0,0,0,98,100,7,3,0,0,99,98,1,0,0,
0,100,101,1,0,0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,103,1,0,0,0,103,104,
6,17,0,0,104,36,1,0,0,0,5,0,80,85,90,101,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ZunniScriptLexer extends antlr4.Lexer {

    static grammarFileName = "ZunniScript.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'zint'", "'floz'", "'zhar'", "'*'", "'/'", 
                         "'+'", "'-'", "'iniciar'", "'zimp'", "'{'", "'}'", 
                         null, null, null, "'='", "'('", "')'" ];
	static symbolicNames = [ null, null, null, null, "MUL", "DIV", "SUM", "RES", 
                          "INICIO", "IMPRIMIR", "LLAVE_ABIERTA", "LLAVE_CERRADA", 
                          "INT", "ID", "ID_invalido", "IGUAL", "PARENT_ABIERTO", 
                          "PARENT_CERRADO", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "MUL", "DIV", "SUM", "RES", 
                      "INICIO", "IMPRIMIR", "LLAVE_ABIERTA", "LLAVE_CERRADA", 
                      "INT", "ID", "ID_invalido", "IGUAL", "PARENT_ABIERTO", 
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
ZunniScriptLexer.MUL = 4;
ZunniScriptLexer.DIV = 5;
ZunniScriptLexer.SUM = 6;
ZunniScriptLexer.RES = 7;
ZunniScriptLexer.INICIO = 8;
ZunniScriptLexer.IMPRIMIR = 9;
ZunniScriptLexer.LLAVE_ABIERTA = 10;
ZunniScriptLexer.LLAVE_CERRADA = 11;
ZunniScriptLexer.INT = 12;
ZunniScriptLexer.ID = 13;
ZunniScriptLexer.ID_invalido = 14;
ZunniScriptLexer.IGUAL = 15;
ZunniScriptLexer.PARENT_ABIERTO = 16;
ZunniScriptLexer.PARENT_CERRADO = 17;
ZunniScriptLexer.WS = 18;



