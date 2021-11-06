/*

Use an If statement to execute a block of code only if a certain condition is true.

If statements are declared as:
if condition
	// code that runs if the condition is true
end

*/

// The example below simulates a six-sided die
// and writes a message based on the value rolled

// Notice the second parameter is the limit + 1
number roll = random_integer(1, 6+1)

write(roll)

if roll <= 3
	write("Bad roll!")
end

if roll >= 4
	write("Good roll!")
end

// Run this example multiple times to get different results