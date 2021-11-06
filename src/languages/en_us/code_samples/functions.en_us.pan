/*

User functions are functions created by you, the user.
You can create functions to reuse snippets of code multiple times,
or to organize your code in smaller parts that are easier to test.

Functions are declared as:
function name(parameter_type parameter_name, ...) returns type
	// code that runs when the function is called
end

Or, for untyped functions, as:
function name(parameter_type parameter_name, ...)
	// code that runs when the function is called
end

You may exit the function anytime using a return statement.
Return is used to provide a result back to the caller.

*/

// Typed functions return a value of the specified type
function answer() returns number
	// Returns the number 42
	return 42
end

write(">>> answer()")
write(answer())
new_line()


// Functions may have zero or more typed parameters
function increment(number x) returns number
	// Return the value of x incremented by 1
	return x + 1
end

write(">>> increment(x)")
write(increment(1))			// notice function composition
write(increment(increment(1)))	// notice function composition
new_line()


function greet(text name) returns text
	return "Hello, {name}!"
end

write(">>> greet(name)")
write(greet("John"))
new_line()


function is_palindrome(text word, logical case_insensitive) returns logical
	if case_insensitive
		word = lower_case(word)
	end

	// Naïve implementation
	return word == reverse_text(word)
end

write(">>> is_palindrome(word, case_insensitive)")
write(is_palindrome("Radar", false))
write(is_palindrome("Radar", true))
write(is_palindrome("Hello", true))
new_line()


// Untyped functions do not return a value
function draw_triangle(number side)
	// If side is zero or negative, don't draw anything
	if side <= 0
		return  // exit the function here
	end

	number i = 1
	forever
		if i > side
			return  // yet another way to stop a loop
		end

		write(repeat("x", i))
		i += 1
	end
end

write(">>> draw_triangle(side)")
draw_triangle(5)
new_line()