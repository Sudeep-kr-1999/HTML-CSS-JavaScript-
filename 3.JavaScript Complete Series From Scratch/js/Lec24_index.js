console.log("this is about date and time in javascript with Date Object");

let today = new Date;

// by default current time dega 
// console.log(today);

// it is a reference data type
// console.log(typeof(today));

let other_date = new Date('8-4-2003 04:54:08');
console.log(other_date);

other_date = new Date('June 13 1976');
console.log(other_date);

other_date = new Date('09/16/1976 04:54:08');
console.log(other_date);

let a;
a=other_date.getDay();
a=other_date.getDate();
a=other_date.getMinutes();
a=other_date.getSeconds();
a=other_date.getHours();

// no of second since 1 january 1970:---------
a=other_date.getTime();
a=other_date.getMilliseconds();
a=other_date.getMonth();
other_date.setDate(23);
other_date.setMonth(0);
other_date.setFullYear(1990);
other_date.setMinutes(58);
other_date.setHours(5);
other_date.setSeconds(54);

console.log(other_date);
console.log(a);

// logic about getDay:------
// sunday:-------> 0
// monday:-------->1
// tuesday:------->2
// wednesday:------>3
// thursday:------->4
// friday:--------->5
// saturday:--------->6

// logic about get month:-----------------
// janauary:-----------------> 0
// februrary:----------------> 1 
// march:----------------------> 2
// april:----------------------> 3
// may:------------------------> 4 
// jume:-----------------------> 5
// july:------------------------> 6 
// august:-----------------------> 7
// september:---------------------> 8 
// october:------------------------> 9
// november:-----------------------> 10
// december:------------------------> 11
