/*

There are at least three ways to interrupt loops.

Break exits out of the loop and execution resumes after it.
Continue skips the current iteration, but stays in the loop.

When inside a function, you can also stop a loop using
a Return statement (more on this later).

*/

write("Loop start")

number i = 0
forever
	i += 1

	// Stop the loop after 10 iterations
	if i > 10
		break
	end

	// Skip multiples of three
	if i % 3 == 0
		continue
	end

	write(i)
end

write("Loop end")