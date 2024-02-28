// Generated from .//grammar//ZunniScript.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ZunniScriptVisitor from './ZunniScriptVisitor.js';

const serializedATN = [4,1,17,69,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,0,1,0,1,1,5,1,21,8,1,10,1,12,1,24,9,1,1,2,
1,2,3,2,28,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,41,8,3,1,
4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,56,8,6,1,6,1,6,1,6,
1,6,1,6,1,6,5,6,64,8,6,10,6,12,6,67,9,6,1,6,0,1,12,7,0,2,4,6,8,10,12,0,4,
2,0,14,14,16,16,1,0,4,6,1,0,9,10,1,0,11,12,69,0,14,1,0,0,0,2,22,1,0,0,0,
4,27,1,0,0,0,6,40,1,0,0,0,8,42,1,0,0,0,10,46,1,0,0,0,12,55,1,0,0,0,14,15,
5,13,0,0,15,16,5,1,0,0,16,17,3,2,1,0,17,18,5,2,0,0,18,1,1,0,0,0,19,21,3,
4,2,0,20,19,1,0,0,0,21,24,1,0,0,0,22,20,1,0,0,0,22,23,1,0,0,0,23,3,1,0,0,
0,24,22,1,0,0,0,25,28,3,6,3,0,26,28,3,8,4,0,27,25,1,0,0,0,27,26,1,0,0,0,
28,5,1,0,0,0,29,30,3,10,5,0,30,31,5,15,0,0,31,41,1,0,0,0,32,33,3,10,5,0,
33,34,7,0,0,0,34,41,1,0,0,0,35,36,3,10,5,0,36,37,5,15,0,0,37,38,5,3,0,0,
38,39,3,12,6,0,39,41,1,0,0,0,40,29,1,0,0,0,40,32,1,0,0,0,40,35,1,0,0,0,41,
7,1,0,0,0,42,43,5,15,0,0,43,44,5,3,0,0,44,45,3,12,6,0,45,9,1,0,0,0,46,47,
7,1,0,0,47,11,1,0,0,0,48,49,6,6,-1,0,49,56,5,14,0,0,50,56,5,15,0,0,51,52,
5,7,0,0,52,53,3,12,6,0,53,54,5,8,0,0,54,56,1,0,0,0,55,48,1,0,0,0,55,50,1,
0,0,0,55,51,1,0,0,0,56,65,1,0,0,0,57,58,10,5,0,0,58,59,7,2,0,0,59,64,3,12,
6,6,60,61,10,4,0,0,61,62,7,3,0,0,62,64,3,12,6,5,63,57,1,0,0,0,63,60,1,0,
0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,13,1,0,0,0,67,65,1,0,0,
0,6,22,27,40,55,63,65];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ZunniScriptParser extends antlr4.Parser {

    static grammarFileName = "ZunniScript.g4";
    static literalNames = [ null, "'{'", "'}'", "'='", "'zint'", "'floz'", 
                            "'zhar'", "'('", "')'", "'*'", "'/'", "'+'", 
                            "'-'", "'iniciar'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "MUL", "DIV", "SUM", "RES", "INICIO", 
                             "INT", "ID", "ID_invalido", "WS" ];
    static ruleNames = [ "start", "contenido", "expresiones", "declaraciones", 
                         "asignaciones", "pr", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ZunniScriptParser.ruleNames;
        this.literalNames = ZunniScriptParser.literalNames;
        this.symbolicNames = ZunniScriptParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 6:
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
	        this.state = 14;
	        this.match(ZunniScriptParser.INICIO);
	        this.state = 15;
	        this.match(ZunniScriptParser.T__0);
	        this.state = 16;
	        this.contenido();
	        this.state = 17;
	        this.match(ZunniScriptParser.T__1);
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
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 32880) !== 0)) {
	            this.state = 19;
	            this.expresiones();
	            this.state = 24;
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
	        this.state = 27;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	        case 5:
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.declaraciones();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
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
	        this.state = 40;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DeclaracionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 29;
	            this.pr();
	            this.state = 30;
	            this.match(ZunniScriptParser.ID);
	            break;

	        case 2:
	            localctx = new Declaracion_invalidaContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 32;
	            this.pr();
	            this.state = 33;
	            localctx.invalido = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===16)) {
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
	            this.state = 35;
	            this.pr();
	            this.state = 36;
	            this.match(ZunniScriptParser.ID);
	            this.state = 37;
	            this.match(ZunniScriptParser.T__2);
	            this.state = 38;
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



	asignaciones() {
	    let localctx = new AsignacionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ZunniScriptParser.RULE_asignaciones);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(ZunniScriptParser.ID);
	        this.state = 43;
	        this.match(ZunniScriptParser.T__2);
	        this.state = 44;
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
	    this.enterRule(localctx, 10, ZunniScriptParser.RULE_pr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 112) !== 0))) {
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
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, ZunniScriptParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 49;
	            this.match(ZunniScriptParser.INT);
	            break;
	        case 15:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 50;
	            this.match(ZunniScriptParser.ID);
	            break;
	        case 7:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 51;
	            this.match(ZunniScriptParser.T__6);
	            this.state = 52;
	            this.expr(0);
	            this.state = 53;
	            this.match(ZunniScriptParser.T__7);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 65;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 63;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZunniScriptParser.RULE_expr);
	                    this.state = 57;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 58;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 59;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new SumResContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ZunniScriptParser.RULE_expr);
	                    this.state = 60;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 61;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===11 || _la===12)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 62;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 67;
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
ZunniScriptParser.T__3 = 4;
ZunniScriptParser.T__4 = 5;
ZunniScriptParser.T__5 = 6;
ZunniScriptParser.T__6 = 7;
ZunniScriptParser.T__7 = 8;
ZunniScriptParser.MUL = 9;
ZunniScriptParser.DIV = 10;
ZunniScriptParser.SUM = 11;
ZunniScriptParser.RES = 12;
ZunniScriptParser.INICIO = 13;
ZunniScriptParser.INT = 14;
ZunniScriptParser.ID = 15;
ZunniScriptParser.ID_invalido = 16;
ZunniScriptParser.WS = 17;

ZunniScriptParser.RULE_start = 0;
ZunniScriptParser.RULE_contenido = 1;
ZunniScriptParser.RULE_expresiones = 2;
ZunniScriptParser.RULE_declaraciones = 3;
ZunniScriptParser.RULE_asignaciones = 4;
ZunniScriptParser.RULE_pr = 5;
ZunniScriptParser.RULE_expr = 6;

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

	contenido() {
	    return this.getTypedRuleContext(ContenidoContext,0);
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
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
ZunniScriptParser.AsignacionesContext = AsignacionesContext; 
ZunniScriptParser.PrContext = PrContext; 
ZunniScriptParser.ExprContext = ExprContext; 
