# Date functions
## Month
`month(timestamp)`

Month function will return a month number based on a UNIX timestamp.

**Code example**
```
month(1485199747);
```

## MonthName
`monthName(integer)`

MonthName function returns the month name based on a number from 1 and 12.  MonthName function requires 1 argument.

**Code example**
```
monthName(month(1485199747));
```

## WeekDay
`weekday(timestamp)`

Weekday function returns the weekday number based on a UNIX timestamp.  WeekDay function requires 1 argument.

**Code example**
```
weekday(1485199747);
```

## WeekDayName
`weekDayName(timestamp)`

WeekDayName function returns the weekday name (e.g. Monday) based off UNIX timestamp. WeekDayName function requires 1 argument. Monday is the first day of week in the implementation.

**Code example**
```
weekdayName(1485199747);
```

## Year
`year(timestamp)`

Year function returns the the year based on a UNIX timestamp given through an argument. Year function requires 1 argument.

**Code example**
```
year(1440544844);
```

## Now
`now()`

Now function returns the current time and date based on a 32bit UNIX timestamp. Now function requires 0 arguments.

**Code example**
```
now();
```

## DateFormat
`dateFormat(timestamp, format)`

DateFormat function returns text based on time and formatting passed to the function. The date format is based on *strftime* within C++ standard library. DateFormat function requires 2 argument.

**Code example**
```
dateFormat(1485199747, "%A");
```
