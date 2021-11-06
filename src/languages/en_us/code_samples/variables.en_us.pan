/*

Variables are declared as:
type name = value

Where:
- type is either text, number, or logical (more on types later);
- name must start with a letter or an underscore;
- name may contain letters, underscores and numbers;
- value must have the declared type.

*/

// Examples
text name = "John Smith"
text address = "42 Calm Street"
number age = 18
number account_balance = -100.25
logical is_sleeping = false
logical is_studying = true


// You can use variable names to reference their values
write(name)
write(age)
write(account_balance)
write(is_studying)
new_line()


// You may also reassign variables to new values
write("Setting age to 19...")
age = 19
write(age)
new_line()


// And use them in expressions (more on this later)
write("Adding $100 to account balance...")
account_balance = account_balance + 100
write(account_balance)
new_line()


/*

But you cannot declare the same variable twice,
which is why the code below would cause an error
if it wasn't inside this comment block:

number age = 19

*/