/*

Sometimes you want to display a variable along with some text.

For example, the variable "name" could be referenced in
the text "Hello, name!" to show a personalized greeting.

*/

text name = "John"
number age = 12


// You can do that using "+" to concatenate texts:
write("Hello, " + name + "!")
write("You are " + to_text(age) + " years old today.")
new_line()


// Or you can use text interpolation, in which values inside
// curly braces ({}) are automatically converted to text:
write("Hello, {name}!")
write("You are {age} years old today.")
new_line()


// You can also avoid text interpolation by using
// single quotes (') instead of double quotes ("):
write('Hello, {name}!')
write('You are {age} years old today.')