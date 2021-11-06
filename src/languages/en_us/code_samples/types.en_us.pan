/*

PanScript values have one of three primitive data types:
- Text
- Number
- Logical

*/

// Text values are surrounded by double quotes (") or simple quotes (')
text name = "John"
write("This is a text")
write('This is also a text')
write("This is " + "a text expression")
write("This is a text with interpolation: {name}")
write('This is a text without interpolation: {name}')
new_line()

// more on text interpolation later


// Number values
constant number PI = pi()
constant number TAU = PI * 2
write(42)			// positive integer
write(-10)			// negative number
write(3.14)		    // real number
write(.5)			// optional whole part
write(12.)			// optional fractional part
write(0x0f)		    // hexadecimal number
write(0b101010)     // binary number
write(PI)
write(TAU)
new_line()

// more on constants later


// Logical values
logical a = true
logical b = false
write("not true: {not true}")
write("not false: {not false}")
write("not a: {not a}")
write("not b: {not b}")
write("true and true: {true and true}")
write("true and false: {true and false}")
write("false and true: {false and true}")
write("false and false: {false and false}")
write("a and b: {a and b}")
write("true or true: {true or true}")
write("true or false: {true or false}")
write("false or true: {false or true}")
write("false or false: {false or false}")
write("a or b: {a or b}")
new_line()

// more on expressions later