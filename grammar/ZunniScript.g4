grammar ZunniScript;
import CommonLexerRules;

start : INICIO LLAVE_ABIERTA contenido LLAVE_CERRADA
    // |
    // errorstart
    ;

contenido:
            expresiones*
            ;

expresiones:
            declaraciones
            |
            asignaciones
            // |
            // error
            ;

declaraciones:
            pr ID                                         #declaracion
            |
            pr invalido=(ID_invalido|INT)	              #declaracion_invalida
            |
            pr ID '=' expr                                #declaracion_asignacion
            ;

asignaciones: ID '=' expr
;

pr:
        'zint'
        |
        'floz'
        |
        'zhar'
        ;

//error: .+?;
//errorstart: .+?;

expr: expr op=('*'|'/') expr        # MulDiv
| expr op=('+'|'-') expr            # SumRes
| INT                               # int
| ID                                # id
| '(' expr ')'                      # parentesis
;

MUL: '*';
DIV: '/';
SUM: '+';
RES: '-';
