/*

If statements also allow one or more optional Else-If blocks.
The code in the Else-If block runs if its condition is true
and all previous conditions were false.

With an Else-If block, the If statement may be declared as:
if first_condition
	// code that runs if first_condition is true
else if second_condition
	// code that runs if first_condition is false
	// and second_condition is true
end

Or with multiple Else-If blocks, and also an Else block:
if first_condition
	// code that runs if first_condition is true
else if second_condition
	// code that runs if first_condition is false
	// and second_condition is true
else if third_condition
	// code that runs if first_condition is false
	// and second_condition is false
	// and third_condition is true
else
	// code that runs if no condition was true
end

*/

// The example below simulates a six-sided die
// and writes a message based on the value rolled

// Notice the second parameter is the limit + 1
number roll = random_integer(1, 6+1)

write(roll)

if roll == 6
	write("Great roll!")
else if roll <= 2
	write("Bad roll!")
else
	write("OK roll")
end

// Run this example multiple times to get different results