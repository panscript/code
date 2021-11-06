// Console functions are functions that interact with the output console.

/*
	write(x)
	Writes a value x of any type to the console after converting it to text.
	The cursor moves to the next line.
*/
write(">>> write(x)")
write("This is a line")
write("This is another line")
new_line()


/*
	write_inline(x)
	Writes a value x of any type to the console after converting it to text.
	The cursor remains in the same line.
*/
write(">>> write_inline(x)")
write_inline("This is ")
write_inline("a single line ")
write_inline("and here comes a line break: \r\n")
new_line()


/*
	new_line()
	Writes an empty line to the console.
	Equivalent to writing the CRLF control character sequence: \r\n
*/
write(">>> new_line()")
new_line()
write_inline("\r\n")
new_line()