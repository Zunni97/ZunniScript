grammar ZunniScript;
import CommonLexerRules;

start : INICIO '{' contenido '}'
    ;

contenido:
            expresiones*
            ;

expresiones:
            declaraciones
            |
            asignaciones
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
