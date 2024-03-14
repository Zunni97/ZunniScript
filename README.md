# ZUNNISCRIPT

ZunniScript es un lenguaje de programacion basado en JavaScript pero con una sintaxis mas **Zunni**.

## COMANDOS EN ZUNNISCRIPT

Para comenzar a usar el lenguaje debemos comenzar con la palabra "cecz" (Comienza El Codigo Zunniscript) seguido de una llave abierta para comenzar a declarar nuestras variables y una llave cerrada al final del archivo. 

### Aqui esta el ejemplo de como se debe iniciar nuestro archivo:

```
cecz {

}

```

## PALABRAS RESERVADAS

Para declarar variables es necesario ponerlo dentro de las llaves, por el momento solo acepta numeros enteros.

- ***ZINT:*** La palabra zint nos sirve para declarar numeros enteros.
- ***FLOZ:*** La palabra floz funciona para declarar numeros flotantes.
- ***ZHAR:*** Con la palabra zhar podemos declarar caracteres.
- ***ZIMP:*** Esta palabra nos sirve para imprimir variables. Para utilizarla es necesario escribir "zimp" seguido de parentesis y la variable a imprimir dentro de ellos.
- ***ZI:*** Zi es la palabra reservada que funciona como condicional.

### Aqui tenemos un ejemplo de como declarar variables:
  
```
cecz {
zint a = 20
}
```
### Aqui se muestra como imprimir una variable:

```
cecz {
zint a = 20
zimp (a)
}
```
### Aqui se muestra como utilizar una condicion:

```
cecz {
zint a = 20
zint b = 21
zi (a < b){
zimp (a)
}
}
```
