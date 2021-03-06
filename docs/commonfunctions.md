# Common functions
## Print
`print(Node, Node, ...)`

Print function prints all output of the arguments.

**Code Example**
```
print("Hello World!");
```

## Scan
`scan(Node, Node, …)`

Scan function reads user input in the Terminal for each argument. Each argument value is assigned with the user input via the terminal.

**Code example**
```
let input1 = "";
let input2 = "";
scan(input1, input2);
print(input1 + " " + input2);
```

## Not
`not(Node)`

Returns an inverted value based on argument.
Inverts a variable value.

**Code example**
```
print(not(0)); /* Output is 1 */
```

## Command
`command(Node, Node, …)`

Command function executes it’s arguments in the system’s terminal. This function is supported on Linux and Windows.

**Warning**: This function has only been tested on Linux.

**Code example**
```
command("touch test.txt"); /* Creates a file named test.txt */
```
