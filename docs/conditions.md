# Conditions

Use condition statements to apply logic to your code.

**Syntax**
```
if (condition)
{
    // Code to be executed if condition is true
}
```

You have:
- `if` To specify if a block of code is executed if the condition is true.
- `else` To specify if a block of code is executed if the previous `if` or `else if` condition is false.
- `else if` To specify if a block of code is executed if the condition is true and if the previous `if` or `else if` condition is false.

## Code example

```
let number = 5;
if (i > 10)
{
    print("Number is over 10");
}
else if (number < 5)
{
    print("Number is under 5");
}
else
{
    print("Number is " + number);
}
```
 This example prints "Number is 5" as if and else if conditions would result false. 5 is not over 10 and 5 is not under 5.