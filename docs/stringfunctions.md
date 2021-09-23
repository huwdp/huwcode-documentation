# String functions
## InStr
`inStr(text, search)`

InStr function will return the first occurrence of the searchable text within the text. This function will return -1 if a searchable text is not found. InStr function requires 2 arguments.

**Code example**

```
inStr("hello world", "world") /* Result is 6 */
```

## InStrRev
`InStrRev(text, search)`

InStr function will return the first occurrence of the searchable text within the text from right to left. This function will return -1 if a searchable text is not found. InStr function requires 2 arguments.

**Code example**

```
inStrRev("hello world", "world") /* Result is 10 */
```

## ToLower
`toLower(variable)`

ToLower function converts the argument string to lowercase and returns the value. ToLower function requires 1 argument.

**Code example**

```
toLower("HELLO WORLD!") /* Result is hello world! */
```

## Left
`left(variable, position)`

Left function extracts a substring from a string, starting from the left-most character. Left function requires 2 arguments.

**Code example**

```
left("Hello World!",5) /* Result is Hello */
```

## Len
`len(variable)`

Len function returns the length of the specified string. Len function requires 1 argument.

**Code example**

```
len("Hello World!") /* Result is 12 */
```

## LTrim
`lTrim(variable)`

LTrim function removes leading spaces from a string from left to right. LTrim function requires 1 argument.

**Code example**

```
lTrim("   Hello World!") /* Result is Hello World! */
```

## Mid
`mid(variable, position1, width)`

Mid function extracts a substring from a string (starting at any position and width). Mid function requires 2 arguments.

**Code example**

```
mid("Hello World!",2,5) /* Result is llo W */
```

## Right
`right(string, index)`

Right function extracts a substring from a string starting from the right-most character from the index. Right function requires 2 arguments.

**Code example**

```
right("Hello World!",5) /* Result is Hello */
```

## RTrim
`rTrim(string)`

RTrim function removes trailing spaces from a string from right to left. RTrim function requires 1 argument.

**Code example**

```
rTrim("Hello World!   ") /* Result is Hello World! */
```

## Space
`space(integer)`

Space function returns a string with a specified number of spaces. Space function requires 1 argument.

**Code example**

```space(10)```

## Strcmp
`strCmp(string, string)`

StrCmp functions returns an integer value representing the difference between the two arguments. StrCmp function requires 2 arguments.

**Code example**

```
strCmp("Hello World","Hello World") /* Result is 0 */
strCmp("Hello World","Hello Earth") /* Result is 18 */
```

## StrRev
`strRev(string)`

StrRev function returns a string in reverse order. StrRev function requires 1 argument.

**Code example**

```
strRev("!dlroW olleH") /* Result is Hello World! */
```

## Trim
`trim(string)`

Trim function returns a text value with the leading and trailing spaces removed from left to right and right to left. Trim function requires 1 argument.

**Code example**

```
trim("  Hello World!  ") /* Result is Hello World! */
```
## ToUpper
`toUpper(string)`

ToUpper function converts and returns the argument with uppercase characters. ToUpper function requires 1 at least argument.

**Code example**

```
toUpper("hello world!") /* Result is HELLO WORLD! */
```
