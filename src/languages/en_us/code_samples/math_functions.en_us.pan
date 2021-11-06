// Math functions are functions that manipulate numeric variables and values.

/*
	absolute(x)
	Returns the absolute value (magnitude) of x.
	If x >= 0, it returns x; otherwise, it returns -x.
*/
write(">>> absolute(x)")
write(absolute(10))
write(absolute(-10))
write(absolute(0))
new_line()


/*
	minimum(x, y)
	Returns the smallest number between x and y.
*/
write(">>> minimum(x, y)")
write(minimum(1, 2))
write(minimum(2, 1))
new_line()


/*
	maximum(x, y)
	Returns the greatest number between x and y.
*/
write(">>> maximum(x, y)")
write(maximum(1, 2))
write(maximum(2, 1))
new_line()


/*
	floor(x)
	Returns the greatest integer number that is smaller than x.
*/
write(">>> floor(x)")
write(floor(0.5))
write(floor(-0.5))
write(floor(5.7))
write(floor(-1.1))
new_line()


/*
	ceiling(x)
	Returns the smallest integer number that is greater than x.
*/
write(">>> ceiling(x)")
write(ceiling(0.5))
write(ceiling(-0.5))
write(ceiling(5.7))
write(ceiling(-1.1))
new_line()


/*
	round(x)
	Returns x rounded to the nearest integer.
	Midpoint (.5) is rounded away-from-zero.
*/
write(">>> round(x)")
write(round(0.5))
write(round(-0.5))
write(round(5.7))
write(round(-1.1))
new_line()


/*
	truncate(x)
	Returns the integer part of x, without any decimals.
*/
write(">>> truncate(x)")
write(truncate(0.5))
write(truncate(-0.5))
write(truncate(5.7))
write(truncate(-1.1))
new_line()


/*
	round_n_places(x, n)
	Returns x rounded to n decimal places.
	Midpoint (.5) is rounded away-from-zero.
*/
write(">>> round_n_places(x, n)")
write(round_n_places(0.55, 1))
write(round_n_places(pi() / 4, 2))
new_line()


/*
	truncate_n_places(x, n)
	Returns x truncated to n decimal places.
*/
write(">>> truncate_n_places(x, n)")
write(truncate_n_places(0.55, 1))
write(truncate_n_places(pi() / 4, 2))
new_line()


/*
	random_real(a, b)
	Returns a random real number between a (inclusive) and b (exclusive).
*/
write(">>> random_real(a, b)")
write(random_real(0, 1))
write(random_real(1, 100))
write(random_real(1, 100))
new_line()


/*
	random_integer(a, b)
	Returns a random integer number between a (inclusive) and b (exclusive).
*/
write(">>> random_integer(a, b)")
write(random_integer(0, 1))
write(random_integer(1, 100))
write(random_integer(1, 100))
new_line()


/*
	square_root(x)
	Returns the square root of x. Equivalent to power(x, 1/2).
*/
write(">>> square_root(x)")
write(square_root(9))
write(square_root(16))
write(power(16, 1/2))
new_line()


/*
	power(x, n)
	Returns x raised to the nth power.
*/
write(">>> power(x, n)")
write(power(2, 0))
write(power(2, 1))
write(power(2, 2))
write(power(2, 3))
new_line()


/*
	logarithm(x, b)
	Returns the logarithm of x in base b.
	The result is the exponent in the equation: (b^e = x).
*/
write(">>> logarithm(x, b)")
write(logarithm(8, 2))
write(logarithm(100, 10))
new_line()


/*
	pi()
	Returns an approximation of the constant pi.
*/
write(">>> pi()")
write(pi())
new_line()


/*
	sine(x)
	Returns the sine of x.
	x should be in radians.
*/
write(">>> sine(x)")
write(sine(pi() / 2))
write(sine(-pi() / 2))
new_line()


/*
	cosine(x)
	Returns the cosine of x.
	x should be in radians.
*/
write(">>> cosine(x)")
write(cosine(0))
write(cosine(pi()))
new_line()


/*
	tangent(x)
	Returns the tangent of x.
	x should be in radians.
*/
write(">>> tangent(x)")
write(tangent(1))
write(tangent(2))
new_line()


/*
	arc_sine(x)
	Returns the arc sine of x. The inverse of sine.
	Result is in radians.
*/
write(">>> arc_sine(x)")
write(arc_sine(1))
write(arc_sine(-1))
new_line()


/*
	arc_cosine(x)
	Returns the arc cosine of x. The inverse of cosine.
	Result is in radians.
*/
write(">>> arc_cosine(x)")
write(arc_cosine(1))
write(arc_cosine(-1))
new_line()


/*
	arc_tangent(x)
	Returns the arc tangent of x. The inverse of tangent.
	Result is in radians.
*/
write(">>> arc_tangent(x)")
write(arc_tangent(1))
write(arc_tangent(-1))
new_line()


/*
	exponential(x)
	Returns the exponential of x.
	exponential(1) is Euler's number.
*/
write(">>> exponential(x)")
write(exponential(0.5))
write(exponential(1))
write(exponential(2))
new_line()


/*
	natural_logarithm(x)
	Returns the natural logarithm of x. The inverse of exponential.
*/
write(">>> natural_logarithm(x)")
write(natural_logarithm(0.5))
write(natural_logarithm(1))
write(natural_logarithm(2))
new_line()