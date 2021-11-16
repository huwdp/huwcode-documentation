# Array

Arrays in HuwCode internally are ordered maps, arrays useful for storing things in lists. Each entry in an array contains a key and a value and each individual entry can be referenced by the key. Values in this case can contain any type such as a Number, String or Array.

## Create an array

**Syntax**
`array()`

Array function returns an array. Array function requires 0 arguments.

Associative Array is an abstract collection of key, value pairs. The internal implementation of the array within HuwCode is implemented with [std::map](https://en.cppreference.com/w/cpp/container/map).

```
let list = array();
```

## Set value in an array
An element can be set in an array by the key by using square brackets. E.g. array["element1"] = "Hello World!";

```
let list = array();
list["item1"] = "Item 1";
print(list);
```

## Get value in an array
An element can be access by the key in an array by using square brackets. E.g. array["element1"];.

```
let list = array();
list["item1"] = "Item 1";
print(list["item1"]);
```

## ArrayUnset
`arrayUnset(array, key)`

ArrayUnset function removes the value in the associative array by the key.

## Code examples
```
let i = 0;
let list = array();

/* Add items to the hash table */
while (i < 10)
{
    arraySet(list, i, "Item " + i);
    i++;
}

/* Print items */
let i = 0;
while (i < 10)
{
    print(arrayGet(list, i));
    i++;
}

print("Array count: " + count(list));
```
