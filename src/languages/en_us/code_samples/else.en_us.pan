/*

If statements allow an optional Else block.
The code in the Else block runs if the condition is false.

With an Else block, the If statement is declared as:
if condition
	// code that runs if the condition is true
else
	// code that runs if the condition is false
end

*/

// The example below simulates a six-sided die
// and writes a message based on the value rolled

// Notice the second parameter is the limit + 1
number roll = random_integer(1, 6+1)

write(roll)

if roll >= 5
	write("Great roll!")
else
	write("OK roll")
end

// Run this example multiple times to get different results