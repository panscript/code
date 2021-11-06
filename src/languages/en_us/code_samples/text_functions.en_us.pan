// Text functions are functions that manipulate text variables and values.

/*
	to_text(x)
	Convert any value 'x' to the text type.
*/
write(">>> to_text(x)")
write("Number: " + to_text(42))
write("Logical: " + to_text(true))
new_line()


/*
	length(text)
	Return the length of the given text.
*/
write(">>> length(text)")
write(length("Hello"))
write(length(""))
new_line()


/*
	upper_case(text)
	Return the text with all letters in uppercase.
*/
write(">>> upper_case(text)")
write(upper_case("lower"))
write(upper_case("UPPER"))
write(upper_case("Sentence"))
new_line()


/*
	lower_case(text)
	Return the text with all letters in lowercase.
*/
write(">>> lower_case(text)")
write(lower_case("lower"))
write(lower_case("UPPER"))
write(lower_case("Sentence"))
new_line()


/*
	sentence_case(text)
	Return the text with the first letter in uppercase and the rest in lowercase.
*/
write(">>> sentence_case(text)")
write(sentence_case("lower"))
write(sentence_case("UPPER"))
write(sentence_case("Sentence"))
new_line()


/*
	left(text, count)
	Return up to 'count' of the leftmost characters of the text.
*/
write(">>> left(text, count)")
write(left("Long text", 7))
write(left("Text", 7))
new_line()


/*
	right(text, count)
	Return up to 'count' of the rightmost characters of the text.
*/
write(">>> right(text, count)")
write(right("Long text", 7))
write(right("Text", 7))
new_line()


/*
	middle(text, position, count)
	Return up to 'count' characters from a text starting in a given position.
	Position is 0-indexed, so 0 is the start of the text.
*/
write(">>> middle(text, position, count)")
write(middle("ABCDEFG", 0, 3))
write(middle("ABCDEFG", 2, 3))
write(middle("ABCDEFG", 2, 10))
new_line()


/*
	slice_text(text, start, end)
	Return all characters from a text between positions 'start' and 'end'.
	Positions are 0-indexed, so 0 is the start of the text.
*/
write(">>> slice_text(text, start, end)")
write(slice_text("ABCDEFG", 0, 3))
write(slice_text("ABCDEFG", 2, 3))
write(slice_text("ABCDEFG", 2, 10))
new_line()


/*
	in_text(text, search_text)
	Returns logical value indicating whether 'search_text' occurs in the text.
*/
write(">>> in_text(text, search_text)")
write(in_text("This is a text", "This"))
write(in_text("This is a text", "this"))
new_line()


/*
	position(text, search_text)
	Return the position of the first occurrence of 'search_text' within the text.
	The returned position is 0-indexed, so 0 is the start of the text.
	Return -1 if 'search_text' does not occur in the text.
*/
write(">>> position(text, search_text)")
write(position("This is a text", "This"))
write(position("This is a text", "this"))
new_line()


/*
	pad_left(text, length, padding)
	Pad the given text using 'padding' until the desired 'length'.
	'padding' is inserted at the left of the text.
*/
write(">>> pad_left(text, length, padding)")
write(pad_left("12345", 8, "0"))
write(pad_left("12345", 10, "ab"))
new_line()


/*
	pad_right(text, length, padding)
	Pad the given text using 'padding' until the desired 'length'.
	'padding' is inserted at the right of the text.
*/
write(">>> pad_right(text, length, padding)")
write(pad_right("12345", 8, "0"))
write(pad_right("12345", 10, "ab"))
new_line()


/*
	repeat(text, count)
	Repeat the given text for 'count' times.
*/
write(">>> repeat(text, count)")
write(repeat("a", 5))
write(repeat("abc", 2))
new_line()


/*
	reverse_text(text)
	Return the text with all characters in reverse order.
*/
write(">>> reverse_text(text)")
write(reverse_text("Hello"))
new_line()


/*
	trim(text)
	Return the text without leading and trailing whitespace characters.
*/
write(">>> trim(text)")
write("'" + trim(" Hello ") + "'")
new_line()


/*
	trim_left(text)
	Return the text without leading whitespace characters.
*/
write(">>> trim_left(text)")
write("'" + trim_left(" Hello ") + "'")
new_line()


/*
	trim_right(text)
	Return the text without trailing whitespace characters.
*/
write(">>> trim_right(text)")
write("'" + trim_right(" Hello ") + "'")
new_line()