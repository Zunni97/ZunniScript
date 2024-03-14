lexer grammar CommonLexerRules; // note "lexer grammar"

INICIO: 'cecz';
IMPRIMIR: 'zimp';
IF: 'zi';
LLAVE_ABIERTA: '{';
LLAVE_CERRADA: '}';
INT: [0-9]+;
ID: [a-zA-Z]+;	
ID_invalido: [A-Za-z0-9+\-]+;
IF_COND: ('<'|'>');
MUL: '*';
DIV: '/';
SUM: '+';
RES: '-';
IGUAL: '=';
PARENT_ABIERTO: '(';
PARENT_CERRADO: ')';
WS: [ \t\r\n]+ -> skip; // Permitir espacios en blanco, tabulaciones y caracteres de nueva línea