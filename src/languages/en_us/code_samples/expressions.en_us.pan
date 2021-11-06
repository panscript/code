// Expressions combine variables using standard operators

// They can use numeric operators:
write(2 + 2)		// addition
write(3 - 1)		// subtraction
write(3 * 2)		// multiplication
write(10 / 3)		// division
write(10 % 3)		// remainder of division
write(2 ^ 3)		// exponentiation
new_line()

// Logical operators:
write(not true)
write(!true)			// ! is the same as "not"
write(true and false)
write(true && false)	// && is the same as "and"
write(true or false)
write(true || false)	// || is the same as "or"
new_line()

// And relational operators:
write(2 > 1)				// greater than
write(2 >= 2)				// greater than or equal to
write(2 < 1)				// less than
write(2 <= 2)				// less than or equal to
write(1 == 1)				// equal to
write(true == true)         // equal to
write("Hello" == "Hello")	// equal to
write(1 != 0)				// different than
write(true != false)		// different than
write("Hello" != "hello")	// different than
new_line()

// Operator precedence may be modified using parentheses:
write(1 + 2 * 3 == 7)
write((1 + 2) * 3 == 9)
write(true or false and false)
write((true or false) and false)
new_line()