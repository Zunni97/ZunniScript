//Aquí se coloca la copia del visitor para que no se borre
//a la hora de modificación del archivo G4

import ZunniScriptParser from "@/grammar/ZunniScriptParser";
import ZunniScriptVisitor from "@/grammar/ZunniScriptVisitor";

export default class CustomVisitor extends ZunniScriptVisitor {
  constructor() {
		super();
    this.variables = {
			"zint": [],
			"floz": [],
			"zhar": []
		};
		this.errors = [];
	}
  	// Visit a parse tree produced by CodeFileParser#start.
	visitStart(ctx) {
	this.visitChildren(ctx);
    return console.log([this.errors, this.variables]);
	}


	// Visit a parse tree produced by CodeFileParser#content.
	visitContenido(ctx) {
	  return this.visitChildren(ctx);
	}

  // Visit a parse tree produced by ZunniScriptParser#expresiones.
	visitExpresiones(ctx) {
	  return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by CodeFileParser#declaracion.
	visitDeclaracion(ctx) {
    const pr = ctx.pr().getText();
		const id = ctx.ID().getText();
		
		let is_variable_defined = this.variableExist(id);
		if (!is_variable_defined){
			this.variables[pr].push({"id":id, "value": undefined});
		} else {
			this.errors.push(`Error: "${id}" ya existe`);
		}

		return [pr, id];
  }

	// Visit a parse tree produced by CodeFileParser#declaracion_invalida.
	visitDeclaracion_invalida(ctx) {
    const pr = ctx.pr().getText();
		const id = ctx.invalido.text;
		this.errors.push(`Error: "${id}" no es valido`);

		return [pr, id];
	}

  visitDeclaracion_asignacion(ctx) {
	const pr = ctx.pr().getText();
  const id = ctx.ID().getText();
  const valor = this.visit(ctx.expr());

    let is_variable_defined = this.variableExist(id);
    if (!is_variable_defined) {
        this.variables[pr].push({ "id": id, "value": valor });
    } else {
        this.errors.push(`Error: "${id}" ya existe`);
    }

    return [pr, id, valor];
  }

	
	// Visit a parse tree produced by CodeFileParser#asignaciones.
	visitAsignaciones(ctx) {
  const id = ctx.ID().getText();
	const valor = parseInt(ctx.expr().getText()); 

    let is_variable_defined = this.variableExist(id);
    if (is_variable_defined) {
        // Buscar y actualizar el valor de la variable
        for (let key in this.variables) {
            const variable = this.variables[key].find(variable => variable.id === id);
            if (variable) {
                variable.value = valor;
                break;
            }
        }
    } else {
        this.errors.push(`Error: "${id}" no está definida`);
    }

    return [id, valor];
}

	// Visit a parse tree produced by ZunniScriptParser#pr.
	visitPr(ctx) {
	  return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by ZunniScriptParser#parentesis.
	visitParentesis(ctx) {
	// '(' expr ')'
	return this.visit(ctx.expr()); // retornar valor de la expresión hija
}

	// Visit a parse tree produced by ZunniScriptParser#SumRes.
	visitSumRes(ctx) {
	// expr op=('+'|'-') expr
	let left = this.visit(ctx.expr(0)); // obtener el valor de la subexpresión izquierda
	let right = this.visit(ctx.expr(1)); // obtener el valor de la subexpresión derecha
	if (ctx.op.type === ZunniScriptParser.SUM) return left + right;
	return left - right; 
}

	// Visit a parse tree produced by ZunniScriptParser#MulDiv.
	visitMulDiv(ctx) {
	// expr op=('*'|'/') expr
	let left = this.visit(ctx.expr(0)); // obtener el valor de la subexpresión izquierda
	let right = this.visit(ctx.expr(1)); // obtener el valor de la subexpresión derecha
	if (ctx.op.type === ZunniScriptParser.MUL) return left * right;
	return left / right; 
}

	// Visit a parse tree produced by ZunniScriptParser#id.
	visitId(ctx) {
  // ID
  let id = ctx.ID().getText();
    if (this.variableExist(id)) {
  // Buscar el valor asociado al identificador en la estructura de datos variables
  for (let key in this.variables) {
    const variable = this.variables[key].find(variable => variable.id === id);
    if (variable) {
      // Si se encuentra el valor, retornarlo
      return variable.value;
    }
  }
}
// Si no se encuentra el valor, retornar un valor predeterminado (en este caso, 0)
return 0;
}

visitInt(ctx) {
	// INT
	return parseInt(ctx.INT().getText());
}

  variableExist(variable_name){
		let isVariableDefined = false;
		for(let key in this.variables){
			if (isVariableDefined){
				break;
			} else {
				isVariableDefined = !!(this.variables[key].find(variable => variable.id === variable_name));
			}
		}
		return isVariableDefined;
	}
}
