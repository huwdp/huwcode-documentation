# Functions

There are two types of functions within HuwCode. One is the built-in functions inside HuwInterpreter. There functions are always in the system and cannot be modifed or overridden. The other type is user defined functions. This type allows users to create their own functions within the HuwCode language.

## Built-in Functions
 <-- See functions section in the menu for all in-built functions

## User defined functions
### Basic example
```
function helloworld()
{
    print("Hello world!")
}
print(helloworld())
```

### Passing arguments
```
function add(x,y)
{
    print(x,y);
}
print(add(1,2));
```

### Passing arguments as a reference

Wrap a variable using ref function to pass variables as a reference.

```
function changeValue(value)
{
    value = "Hello, Galaxy!";
}
let text = "Hello, world!";
print(changeValue(ref(text)));
```

## Returning a value
```
function add(x,y)
{
    return x + y;
}
print(add(1,2));
```

### Function scopes
Each user defined function has it's own scope meaning that the variables declared and assigned in of a function is only available to that function. Passing arguments into a function adds copies of those arguments to the function scope called.

## Global scopes
All functions have read access to a global scope. Any code outside of a function has write access to the global scope only. The constants for example are put onto the global scope on start-up.

### Function Recursion

```
function fac(n)
{
    return facRec(1, n);
}

function facRec(acc, n)
{
    if (n < 2)
    {
        return acc;
    }
    return facRec(n * acc, n - 1);
}
print(fac(14));
```