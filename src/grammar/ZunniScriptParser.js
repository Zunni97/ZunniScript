// Generated from .//grammar//ZunniScript.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ZunniScriptVisitor from './ZunniScriptVisitor.js';

const serializedATN = [4,1,18,77,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,0,1,0,1,1,5,1,23,8,1,10,1,12,1,26,
9,1,1,2,1,2,1,2,3,2,31,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,
3,44,8,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,3,7,64,8,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,72,8,7,10,7,12,7,75,9,7,1,
7,0,1,14,8,0,2,4,6,8,10,12,14,0,4,2,0,12,12,14,14,1,0,1,3,1,0,4,5,1,0,6,
7,77,0,16,1,0,0,0,2,24,1,0,0,0,4,30,1,0,0,0,6,43,1,0,0,0,8,45,1,0,0,0,10,
50,1,0,0,0,12,54,1,0,0,0,14,63,1,0,0,0,16,17,5,8,0,0,17,18,5,10,0,0,18,19,
3,2,1,0,19,20,5,11,0,0,20,1,1,0,0,0,21,23,3,4,2,0,22,21,1,0,0,0,23,26,1,
0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,3,1,0,0,0,26,24,1,0,0,0,27,31,3,8,4,
0,28,31,3,6,3,0,29,31,3,10,5,0,30,27,1,0,0,0,30,28,1,0,0,0,30,29,1,0,0,0,
31,5,1,0,0,0,32,33,3,12,6,0,33,34,5,13,0,0,34,44,1,0,0,0,35,36,3,12,6,0,
36,37,7,0,0,0,37,44,1,0,0,0,38,39,3,12,6,0,39,40,5,13,0,0,40,41,5,15,0,0,
41,42,3,14,7,0,42,44,1,0,0,0,43,32,1,0,0,0,43,35,1,0,0,0,43,38,1,0,0,0,44,
7,1,0,0,0,45,46,5,9,0,0,46,47,5,16,0,0,47,48,3,14,7,0,48,49,5,17,0,0,49,
9,1,0,0,0,50,51,5,13,0,0,51,52,5,15,0,0,52,53,3,14,7,0,53,11,1,0,0,0,54,
55,7,1,0,0,55,13,1,0,0,0,56,57,6,7,-1,0,57,64,5,12,0,0,58,64,5,13,0,0,59,
60,5,16,0,0,60,61,3,14,7,0,61,62,5,17,0,0,62,64,1,0,0,0,63,56,1,0,0,0,63,
58,1,0,0,0,63,59,1,0,0,0,64,73,1,0,0,0,65,66,10,5,0,0,66,67,7,2,0,0,67,72,
3,14,7,6,68,69,10,4,0,0,69,70,7,3,0,0,70,72,3,14,7,5,71,65,1,0,0,0,71,68,
1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,15,1,0,0,0,75,73,1,
0,0,0,6,24,30,43,63,71,73];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ZunniScriptParser extends antlr4.Parser {

    static grammarFileName = "ZunniScript.g4";
    static literalNames = [ null, "'zint'", "'floz'", "'zhar'", "'*'", "'/'", 
                            "'+'", "'-'", "'iniciar'", "'zimp'", "'{'", 
                            "'}'", null, null, null, "'='", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, "MUL", "DIV", "SUM", 
                             "RES", "INICIO", "IMPRIMIR", "LLAVE_ABIERTA", 
                             "LLAVE_CERRADA", "INT", "ID", "ID_invalido", 
                             "IGUAL", "PARENT_ABIERTO", "PARENT_CERRADO", 
                             "WS" ];
    static ruleNames = [ "start", "contenido", "expresiones", "declaraciones", 
                         "imprimir", "asignaciones", "pr", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ZunniScriptParser.ruleNames;
        this.literalNames = ZunniScriptParser.literalNames;
        this.symbolicNames = ZunniScriptParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
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
	        this.state = 16;
	        this.match(ZunniScriptParser.INICIO);
	        this.state = 17;
	        this.match(ZunniScriptParser.LLAVE_ABIERTA);
	        this.state = 18;
	        this.contenido();
	        this.state = 19;
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
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8718) !== 0)) {
	            this.state = 21;
	            this.expresiones();
	            this.state = 26;
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
	        this.state = 30;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 27;
	            this.imprimir();
	            break;
	        case 1:
	        case 2:
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 28;
	            this.declaraciones();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 29;
	            this.asignaciones();
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
	        this.state = 43;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DeclaracionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            this.pr();
	            this.state = 33;
	            this.match(ZunniScriptParser.ID);
	            break;

	        case 2:
	            localctx = new Declaracion_invalidaContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.pr();
	            this.state = 36;
	            localctx.invalido = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===12 || _la===14)) {
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
	            this.state = 38;
	            this.pr();
	            this.state = 39;
	            this.match(ZunniScriptParser.ID);
	            this.state = 40;
	            this.match(ZunniScriptParser.IGUAL);
	            this.state = 41;
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
	        this.state = 45;
	        this.match(ZunniScriptParser.IMPRIMIR);
	        this.state = 46;
	        this.match(ZunniScriptParser.PARENT_ABIERTO);
	        this.state = 47;
	        this.expr(0);
	        this.state = 48;
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



	asignaciones() {
	    let localctx = new AsignacionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ZunniScriptParser.RULE_asignaciones);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(ZunniScriptParser.ID);
	        this.state = 51;
	        this.match(ZunniScriptParser.IGUAL);
	        this.state = 52;
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
	    this.enterRule(localctx, 12, ZunniScriptParser.RULE_pr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
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
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, ZunniScriptParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 57;
	            this.match(ZunniScriptParser.INT);
	            break;
	        case 13:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 58;
	            this.match(ZunniScriptParser.ID);
	            break;
	        case 16:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 59;
	            this.match(ZunniScriptParser.PARENT_ABIERTO);
	            this.state = 60;
	            this.expr(0);
	            this.state = 61;
	            this.match(ZunniScriptParser.PARENT_CERRADO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 73;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 71;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZunniScriptParser.RULE_expr);
	                    this.state = 65;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 66;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===4 || _la===5)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 67;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new SumResContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZunniScriptParser.RULE_expr);
	                    this.state = 68;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 69;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===6 || _la===7)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 70;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 75;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
ZunniScriptParser.MUL = 4;
ZunniScriptParser.DIV = 5;
ZunniScriptParser.SUM = 6;
ZunniScriptParser.RES = 7;
ZunniScriptParser.INICIO = 8;
ZunniScriptParser.IMPRIMIR = 9;
ZunniScriptParser.LLAVE_ABIERTA = 10;
ZunniScriptParser.LLAVE_CERRADA = 11;
ZunniScriptParser.INT = 12;
ZunniScriptParser.ID = 13;
ZunniScriptParser.ID_invalido = 14;
ZunniScriptParser.IGUAL = 15;
ZunniScriptParser.PARENT_ABIERTO = 16;
ZunniScriptParser.PARENT_CERRADO = 17;
ZunniScriptParser.WS = 18;

ZunniScriptParser.RULE_start = 0;
ZunniScriptParser.RULE_contenido = 1;
ZunniScriptParser.RULE_expresiones = 2;
ZunniScriptParser.RULE_declaraciones = 3;
ZunniScriptParser.RULE_imprimir = 4;
ZunniScriptParser.RULE_asignaciones = 5;
ZunniScriptParser.RULE_pr = 6;
ZunniScriptParser.RULE_expr = 7;

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
ZunniScriptParser.AsignacionesContext = AsignacionesContext; 
ZunniScriptParser.PrContext = PrContext; 
ZunniScriptParser.ExprContext = ExprContext; 
