/*

Recursion is when a function calls itself.
Two prominent examples are the factorial and fibonacci functions.

The implementations below do not support negative numbers as arguments.
Calling them with a negative number would cause an infinite loop.

*/

function factorial(number n) returns number
	if n == 0
		return 1
	end

	return n * factorial(n - 1)
end

write(">>> factorial(n)")
write(factorial(0))
write(factorial(1))
write(factorial(2))
write(factorial(3))
write(factorial(4))
write(factorial(5))
write(factorial(6))
write(factorial(7))
new_line()


function fibonacci(number n) returns number
	if n == 0
		return 0
	else if n == 1
		return 1
	end

	return fibonacci(n - 1) + fibonacci(n - 2)
end

write(">>> fibonacci(n)")
write(fibonacci(0))
write(fibonacci(1))
write(fibonacci(2))
write(fibonacci(3))
write(fibonacci(4))
write(fibonacci(5))
write(fibonacci(6))
write(fibonacci(7))
new_line()