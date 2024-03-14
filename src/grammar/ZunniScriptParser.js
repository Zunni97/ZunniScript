// Generated from .//grammar//ZunniScript.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ZunniScriptVisitor from './ZunniScriptVisitor.js';

const serializedATN = [4,1,20,99,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,0,1,0,1,1,5,1,27,8,
1,10,1,12,1,30,9,1,1,2,1,2,1,2,1,2,3,2,36,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,3,3,49,8,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,
5,5,62,8,5,10,5,12,5,65,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,
1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,86,8,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,94,
8,9,10,9,12,9,97,9,9,1,9,0,1,18,10,0,2,4,6,8,10,12,14,16,18,0,4,2,0,9,9,
11,11,1,0,1,3,1,0,13,14,1,0,15,16,99,0,20,1,0,0,0,2,28,1,0,0,0,4,35,1,0,
0,0,6,48,1,0,0,0,8,50,1,0,0,0,10,55,1,0,0,0,12,68,1,0,0,0,14,72,1,0,0,0,
16,76,1,0,0,0,18,85,1,0,0,0,20,21,5,4,0,0,21,22,5,7,0,0,22,23,3,2,1,0,23,
24,5,8,0,0,24,1,1,0,0,0,25,27,3,4,2,0,26,25,1,0,0,0,27,30,1,0,0,0,28,26,
1,0,0,0,28,29,1,0,0,0,29,3,1,0,0,0,30,28,1,0,0,0,31,36,3,8,4,0,32,36,3,6,
3,0,33,36,3,14,7,0,34,36,3,10,5,0,35,31,1,0,0,0,35,32,1,0,0,0,35,33,1,0,
0,0,35,34,1,0,0,0,36,5,1,0,0,0,37,38,3,16,8,0,38,39,5,10,0,0,39,49,1,0,0,
0,40,41,3,16,8,0,41,42,7,0,0,0,42,49,1,0,0,0,43,44,3,16,8,0,44,45,5,10,0,
0,45,46,5,17,0,0,46,47,3,18,9,0,47,49,1,0,0,0,48,37,1,0,0,0,48,40,1,0,0,
0,48,43,1,0,0,0,49,7,1,0,0,0,50,51,5,5,0,0,51,52,5,18,0,0,52,53,3,18,9,0,
53,54,5,19,0,0,54,9,1,0,0,0,55,56,5,6,0,0,56,57,5,18,0,0,57,58,3,12,6,0,
58,59,5,19,0,0,59,63,5,7,0,0,60,62,3,4,2,0,61,60,1,0,0,0,62,65,1,0,0,0,63,
61,1,0,0,0,63,64,1,0,0,0,64,66,1,0,0,0,65,63,1,0,0,0,66,67,5,8,0,0,67,11,
1,0,0,0,68,69,3,18,9,0,69,70,5,12,0,0,70,71,3,18,9,0,71,13,1,0,0,0,72,73,
5,10,0,0,73,74,5,17,0,0,74,75,3,18,9,0,75,15,1,0,0,0,76,77,7,1,0,0,77,17,
1,0,0,0,78,79,6,9,-1,0,79,86,5,9,0,0,80,86,5,10,0,0,81,82,5,18,0,0,82,83,
3,18,9,0,83,84,5,19,0,0,84,86,1,0,0,0,85,78,1,0,0,0,85,80,1,0,0,0,85,81,
1,0,0,0,86,95,1,0,0,0,87,88,10,5,0,0,88,89,7,2,0,0,89,94,3,18,9,6,90,91,
10,4,0,0,91,92,7,3,0,0,92,94,3,18,9,5,93,87,1,0,0,0,93,90,1,0,0,0,94,97,
1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,19,1,0,0,0,97,95,1,0,0,0,7,28,35,
48,63,85,93,95];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ZunniScriptParser extends antlr4.Parser {

    static grammarFileName = "ZunniScript.g4";
    static literalNames = [ null, "'zint'", "'floz'", "'zhar'", "'cecz'", 
                            "'zimp'", "'zi'", "'{'", "'}'", null, null, 
                            null, null, "'*'", "'/'", "'+'", "'-'", "'='", 
                            "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, "INICIO", "IMPRIMIR", 
                             "IF", "LLAVE_ABIERTA", "LLAVE_CERRADA", "INT", 
                             "ID", "ID_invalido", "IF_COND", "MUL", "DIV", 
                             "SUM", "RES", "IGUAL", "PARENT_ABIERTO", "PARENT_CERRADO", 
                             "WS" ];
    static ruleNames = [ "start", "contenido", "expresiones", "declaraciones", 
                         "imprimir", "condicional", "condicion", "asignaciones", 
                         "pr", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ZunniScriptParser.ruleNames;
        this.literalNames = ZunniScriptParser.literalNames;
        this.symbolicNames = ZunniScriptParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 9:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ZunniScriptParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(ZunniScriptParser.INICIO);
	        this.state = 21;
	        this.match(ZunniScriptParser.LLAVE_ABIERTA);
	        this.state = 22;
	        this.contenido();
	        this.state = 23;
	        this.match(ZunniScriptParser.LLAVE_CERRADA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	contenido() {
	    let localctx = new ContenidoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ZunniScriptParser.RULE_contenido);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1134) !== 0)) {
	            this.state = 25;
	            this.expresiones();
	            this.state = 30;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresiones() {
	    let localctx = new ExpresionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ZunniScriptParser.RULE_expresiones);
	    try {
	        this.state = 35;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 31;
	            this.imprimir();
	            break;
	        case 1:
	        case 2:
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 32;
	            this.declaraciones();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 33;
	            this.asignaciones();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 34;
	            this.condicional();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaraciones() {
	    let localctx = new DeclaracionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ZunniScriptParser.RULE_declaraciones);
	    var _la = 0;
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DeclaracionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.pr();
	            this.state = 38;
	            this.match(ZunniScriptParser.ID);
	            break;

	        case 2:
	            localctx = new Declaracion_invalidaContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.pr();
	            this.state = 41;
	            localctx.invalido = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===9 || _la===11)) {
	                localctx.invalido = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 3:
	            localctx = new Declaracion_asignacionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 43;
	            this.pr();
	            this.state = 44;
	            this.match(ZunniScriptParser.ID);
	            this.state = 45;
	            this.match(ZunniScriptParser.IGUAL);
	            this.state = 46;
	            this.expr(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ZunniScriptParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(ZunniScriptParser.IMPRIMIR);
	        this.state = 51;
	        this.match(ZunniScriptParser.PARENT_ABIERTO);
	        this.state = 52;
	        this.expr(0);
	        this.state = 53;
	        this.match(ZunniScriptParser.PARENT_CERRADO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicional() {
	    let localctx = new CondicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ZunniScriptParser.RULE_condicional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(ZunniScriptParser.IF);
	        this.state = 56;
	        this.match(ZunniScriptParser.PARENT_ABIERTO);
	        this.state = 57;
	        this.condicion();
	        this.state = 58;
	        this.match(ZunniScriptParser.PARENT_CERRADO);
	        this.state = 59;
	        this.match(ZunniScriptParser.LLAVE_ABIERTA);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1134) !== 0)) {
	            this.state = 60;
	            this.expresiones();
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 66;
	        this.match(ZunniScriptParser.LLAVE_CERRADA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ZunniScriptParser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.expr(0);
	        this.state = 69;
	        this.match(ZunniScriptParser.IF_COND);
	        this.state = 70;
	        this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignaciones() {
	    let localctx = new AsignacionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ZunniScriptParser.RULE_asignaciones);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(ZunniScriptParser.ID);
	        this.state = 73;
	        this.match(ZunniScriptParser.IGUAL);
	        this.state = 74;
	        this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pr() {
	    let localctx = new PrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ZunniScriptParser.RULE_pr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, ZunniScriptParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 79;
	            this.match(ZunniScriptParser.INT);
	            break;
	        case 10:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 80;
	            this.match(ZunniScriptParser.ID);
	            break;
	        case 18:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 81;
	            this.match(ZunniScriptParser.PARENT_ABIERTO);
	            this.state = 82;
	            this.expr(0);
	            this.state = 83;
	            this.match(ZunniScriptParser.PARENT_CERRADO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 95;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 93;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZunniScriptParser.RULE_expr);
	                    this.state = 87;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 88;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===13 || _la===14)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 89;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new SumResContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZunniScriptParser.RULE_expr);
	                    this.state = 90;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 91;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===15 || _la===16)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 92;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 97;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

ZunniScriptParser.EOF = antlr4.Token.EOF;
ZunniScriptParser.T__0 = 1;
ZunniScriptParser.T__1 = 2;
ZunniScriptParser.T__2 = 3;
ZunniScriptParser.INICIO = 4;
ZunniScriptParser.IMPRIMIR = 5;
ZunniScriptParser.IF = 6;
ZunniScriptParser.LLAVE_ABIERTA = 7;
ZunniScriptParser.LLAVE_CERRADA = 8;
ZunniScriptParser.INT = 9;
ZunniScriptParser.ID = 10;
ZunniScriptParser.ID_invalido = 11;
ZunniScriptParser.IF_COND = 12;
ZunniScriptParser.MUL = 13;
ZunniScriptParser.DIV = 14;
ZunniScriptParser.SUM = 15;
ZunniScriptParser.RES = 16;
ZunniScriptParser.IGUAL = 17;
ZunniScriptParser.PARENT_ABIERTO = 18;
ZunniScriptParser.PARENT_CERRADO = 19;
ZunniScriptParser.WS = 20;

ZunniScriptParser.RULE_start = 0;
ZunniScriptParser.RULE_contenido = 1;
ZunniScriptParser.RULE_expresiones = 2;
ZunniScriptParser.RULE_declaraciones = 3;
ZunniScriptParser.RULE_imprimir = 4;
ZunniScriptParser.RULE_condicional = 5;
ZunniScriptParser.RULE_condicion = 6;
ZunniScriptParser.RULE_asignaciones = 7;
ZunniScriptParser.RULE_pr = 8;
ZunniScriptParser.RULE_expr = 9;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZunniScriptParser.RULE_start;
    }

	INICIO() {
	    return this.getToken(ZunniScriptParser.INICIO, 0);
	};

	LLAVE_ABIERTA() {
	    return this.getToken(ZunniScriptParser.LLAVE_ABIERTA, 0);
	};

	contenido() {
	    return this.getTypedRuleContext(ContenidoContext,0);
	};

	LLAVE_CERRADA() {
	    return this.getToken(ZunniScriptParser.LLAVE_CERRADA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZunniScriptVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContenidoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZunniScriptParser.RULE_contenido;
    }

	expresiones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionesContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionesContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ZunniScriptVisitor ) {
	        return visitor.visitContenido(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZunniScriptParser.RULE_expresiones;
    }

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	declaraciones() {
	    return this.getTypedRuleContext(DeclaracionesContext,0);
	};

	asignaciones() {
	    return this.getTypedRuleContext(AsignacionesContext,0);
	};

	condicional() {
	    return this.getTypedRuleContext(CondicionalContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZunniScriptVisitor ) {
	        return visitor.visitExpresiones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZunniScriptParser.RULE_declaraciones;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Declaracion_asignacionContext extends DeclaracionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	pr() {
	    return this.getTypedRuleContext(PrContext,0);
	};

	ID() {
	    return this.getToken(ZunniScriptParser.ID, 0);
	};

	IGUAL() {
	    return this.getToken(ZunniScriptParser.IGUAL, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZunniScriptVisitor ) {
	        return visitor.visitDeclaracion_asignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZunniScriptParser.Declaracion_asignacionContext = Declaracion_asignacionContext;

class Declaracion_invalidaContext extends DeclaracionesContext {

    constructor(parser, ctx) {
        super(parser);
        this.invalido = null;;
        super.copyFrom(ctx);
    }

	pr() {
	    return this.getTypedRuleContext(PrContext,0);
	};

	ID_invalido() {
	    return this.getToken(ZunniScriptParser.ID_invalido, 0);
	};

	INT() {
	    return this.getToken(ZunniScriptParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZunniScriptVisitor ) {
	        return visitor.visitDeclaracion_invalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZunniScriptParser.Declaracion_invalidaContext = Declaracion_invalidaContext;

class DeclaracionContext extends DeclaracionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	pr() {
	    return this.getTypedRuleContext(PrContext,0);
	};

	ID() {
	    return this.getToken(ZunniScriptParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZunniScriptVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZunniScriptParser.DeclaracionContext = DeclaracionContext;

class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZunniScriptParser.RULE_imprimir;
    }

	IMPRIMIR() {
	    return this.getToken(ZunniScriptParser.IMPRIMIR, 0);
	};

	PARENT_ABIERTO() {
	    return this.getToken(ZunniScriptParser.PARENT_ABIERTO, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PARENT_CERRADO() {
	    return this.getToken(ZunniScriptParser.PARENT_CERRADO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZunniScriptVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZunniScriptParser.RULE_condicional;
    }

	IF() {
	    return this.getToken(ZunniScriptParser.IF, 0);
	};

	PARENT_ABIERTO() {
	    return this.getToken(ZunniScriptParser.PARENT_ABIERTO, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	PARENT_CERRADO() {
	    return this.getToken(ZunniScriptParser.PARENT_CERRADO, 0);
	};

	LLAVE_ABIERTA() {
	    return this.getToken(ZunniScriptParser.LLAVE_ABIERTA, 0);
	};

	LLAVE_CERRADA() {
	    return this.getToken(ZunniScriptParser.LLAVE_CERRADA, 0);
	};

	expresiones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionesContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionesContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ZunniScriptVisitor ) {
	        return visitor.visitCondicional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZunniScriptParser.RULE_condicion;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	IF_COND() {
	    return this.getToken(ZunniScriptParser.IF_COND, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZunniScriptVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZunniScriptParser.RULE_asignaciones;
    }

	ID() {
	    return this.getToken(ZunniScriptParser.ID, 0);
	};

	IGUAL() {
	    return this.getToken(ZunniScriptParser.IGUAL, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZunniScriptVisitor ) {
	        return visitor.visitAsignaciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZunniScriptParser.RULE_pr;
    }


	accept(visitor) {
	    if ( visitor instanceof ZunniScriptVisitor ) {
	        return visitor.visitPr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ZunniScriptParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParentesisContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PARENT_ABIERTO() {
	    return this.getToken(ZunniScriptParser.PARENT_ABIERTO, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	PARENT_CERRADO() {
	    return this.getToken(ZunniScriptParser.PARENT_CERRADO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZunniScriptVisitor ) {
	        return visitor.visitParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZunniScriptParser.ParentesisContext = ParentesisContext;

class SumResContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	SUM() {
	    return this.getToken(ZunniScriptParser.SUM, 0);
	};

	RES() {
	    return this.getToken(ZunniScriptParser.RES, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZunniScriptVisitor ) {
	        return visitor.visitSumRes(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZunniScriptParser.SumResContext = SumResContext;

class MulDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MUL() {
	    return this.getToken(ZunniScriptParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(ZunniScriptParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZunniScriptVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZunniScriptParser.MulDivContext = MulDivContext;

class IdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(ZunniScriptParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZunniScriptVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZunniScriptParser.IdContext = IdContext;

class IntContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(ZunniScriptParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ZunniScriptVisitor ) {
	        return visitor.visitInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ZunniScriptParser.IntContext = IntContext;


ZunniScriptParser.StartContext = StartContext; 
ZunniScriptParser.ContenidoContext = ContenidoContext; 
ZunniScriptParser.ExpresionesContext = ExpresionesContext; 
ZunniScriptParser.DeclaracionesContext = DeclaracionesContext; 
ZunniScriptParser.ImprimirContext = ImprimirContext; 
ZunniScriptParser.CondicionalContext = CondicionalContext; 
ZunniScriptParser.CondicionContext = CondicionContext; 
ZunniScriptParser.AsignacionesContext = AsignacionesContext; 
ZunniScriptParser.PrContext = PrContext; 
ZunniScriptParser.ExprContext = ExprContext; 
