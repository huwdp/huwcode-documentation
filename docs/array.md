# Array

Arrays in HuwCode are ordered map. Each entry in an array contains a key and a value. Individual entries are referenced by key. Arrays can be used to store lists of data by key and value. Value in this case can be any type within HuwCode such as a Number, String or Array.

## Create an array

**Syntax**
`array()`

Array function returns an array. Array function requires 0 arguments.

Associative Array is an abstact collection of key, value pairs. The internal implementation of the array within HuwCode is implemented with [std::map](https://en.cppreference.com/w/cpp/container/map).

```
let list = array();
```

## Get value in an array
An element can be access by the key in an array by using square brackets. E.g. array["element1"];.

```
let list = array();
list["item1"] = "Item 1";
print(list["item1"]);
```

## Set value in an array
An element can be set in an array by the key by using square brackets. E.g. array["element1"] = "Hello World!";

```
let list = array();
list["item1"] = "Item 1";
print(list);
```

## ArrayUnset
`arrayUnset(array, key)`

ArrayUnset function removes the value in the associative array by the key.

**Code example**
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
