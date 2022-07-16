# Functions

There are two types of functions within HuwCode. One is the built-in functions inside HuwInterpreter. These functions are always in the system and cannot be modified, overridden or removed. The other type is the user defined function. This type allows users to create their own functions within the HuwCode language.

**Syntax**

```
function {function_name}({arguments})
{
    /* Code block */
}
```

## Built-in Functions
 <-- See functions section in the menu for all in-built functions

## User defined functions
### Basic example

```
function helloworld()
{
    print("Hello world!")
}
helloworld();
```

### Passing arguments

```
function add(x,y)
{
    print(x+y);
}
add(1,2);
```

In the code above we pass 1 as x and 2 as y to the add function. The functions adds x and y, and then prints the value.

## Returning a value

```
function add(x,y)
{
    return x + y;
}
print(add(1,2));
```

### Function scopes
Each user defined function has it's own scope meaning that the variables declared and assigned in of a function are only available to that function. Passing arguments into a function adds copies of those arguments to the function scope called.

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
