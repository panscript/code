/*

Loops allow repeating the execution of a block of code
until some condition causes it to stop.

While loops are declared as:
while condition
	// code that runs repeatedly until condition is false
end

From-To loops are declared as:
for number variable_name from expression to expression
	// code that runs once for each value in the interval
end

Forever loops are declared as:
forever
	// code that runs repeatedly until it is interrupted
end

*/


// While loops repeat until the given condition is no longer true:
number player_number = 1
while player_number <= 4
	write("Player #{player_number} joined!")
	player_number += 1
end
new_line()


// From-To loops repeat once for each value in the from-to interval
// updating the declared variable in every iteration:
write("Calculating the first ten multiples of three")
for number x from 1 to 10
	write(3 * x)
end
new_line()


// Forever loops are infinite, so you must manually stop them:
write("Starting game")

number max_retries = 5
number retry = 1
forever
	number roll = random_integer(1, 6+1)
	write("Rolled a {roll}")

	if roll == 6
		text retry_name = "roll"
		if retry > 1
			retry_name += "s"  // make it plural
		end

		write("Got a 6 in {retry} {retry_name}!")
		break  // stop the loop (more on this later)
	end

	retry += 1

	if retry > max_retries
		write("Better luck next time!")
		break  // stop the loop (more on this later)
	end
end

write("Game over")