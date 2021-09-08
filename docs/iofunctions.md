# Input/output functions
## FileExists
`fileExists(file)`

FileExists function returns 1 if file based on the specified file location exists, otherwise the function will return 0.

## FileRead
`fileRead(file)`

This function will read a file based on the specified file location and will return the file contents as a string.
If a file read if successful, the function will return a string, otherwise an empty string.

## FileWrite
`fileWrite(file, text)`

FileWrite will write content of text to the specified file location.
If the file writing is successful, the function will return 1. If the writing to file is not successful, the function will return 0.

## Dir
`dir(location)`

Returns an array of files from a specified directory location.