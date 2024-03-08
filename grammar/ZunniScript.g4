grammar ZunniScript;
import CommonLexerRules;

start : INICIO LLAVE_ABIERTA contenido LLAVE_CERRADA
    // |
    // errorstart
    ;

contenido:
            expresiones*
            ;

expresiones: imprimir
            |
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
            pr ID IGUAL expr                                #declaracion_asignacion
            ;

imprimir: IMPRIMIR PARENT_ABIERTO expr PARENT_CERRADO;

asignaciones: ID IGUAL expr
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
