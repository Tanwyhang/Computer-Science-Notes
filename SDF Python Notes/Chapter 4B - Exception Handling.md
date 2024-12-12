Here is a clear, structured summary of the key concepts from the Exception Handling notes, written to help deepen your understanding:

# Exception Handling in Python


1. **Syntax Errors**:
   - These errors occur when the Python interpreter encounters a syntactical mistake in your code, such as a missing colon, incorrect indentation, or a misspelled keyword.
   - Examples: `SyntaxError`, `IndentationError`

2. **Name Errors**:
   - These errors occur when a variable or function name is not found in the current scope.
   - Examples: `NameError`

3. **Type Errors**:
   - These errors occur when an operation or function is applied to an object of an inappropriate type.
   - Examples: `TypeError`

4. **Value Errors**:
   - These errors occur when a function receives an argument of the correct type but an inappropriate value.
   - Examples: `ValueError`

5. **Index Errors**:
   - These errors occur when a sequence (such as a list or string) is indexed with a value that is out of range.
   - Examples: `IndexError`

6. **Key Errors**:
   - These errors occur when a dictionary key that does not exist is accessed.
   - Examples: `KeyError`

7. **Zero Division Errors**:
   - These errors occur when the second argument of a division or modulo operation is zero.
   - Examples: `ZeroDivisionError`

8. **I/O Errors**:
   - These errors occur when an input/output operation fails, such as when a file cannot be opened or read.
   - Examples: `IOError`, `FileNotFoundError`

9. **Import Errors**:
   - These errors occur when a module or a package cannot be imported.
   - Examples: `ImportError`

10. **Attribute Errors**:
    - These errors occur when an attribute reference (such as a method or property) fails.
    - Examples: `AttributeError`

11. **Memory Errors**:
    - These errors occur when the system runs out of memory to allocate for the program.
    - Examples: `MemoryError`

12. **Overflow Errors**:
    - These errors occur when the result of an arithmetic operation is too large to be represented by the available storage.
    - Examples: `OverflowError`

13. **Assertion Errors**:
    - These errors occur when an `assert` statement fails.
    - Examples: `AssertionError`

14. **System Errors**:
    - These errors are related to the interpreter itself and are generally not encountered by users.
    - Examples: `SystemError`, `SystemExit`

<pre>
SyntaxError: print "Hello, world!"
NameError: print(undefined_variable)
TypeError: "hello" + 5
ValueError: int("hello")
IndexError: my_list = [1, 2, 3]; print(my_list[3])
KeyError: my_dict = {'a': 1, 'b': 2}; print(my_dict['c'])
ZeroDivisionError: 5 / 0
IOError: with open('non_existent_file.txt', 'r') as file: content = file.read()
ImportError: import non_existent_module
AttributeError: 'hello'.nonexistent_method()
</pre>

## What are Exceptions?
An exception in Python is an unexpected event that occurs during the execution of a program, disrupting the normal flow of the code. Some common examples you may have encountered:
- Dividing a number by zero raises a `ZeroDivisionError`
- Trying to access an index that doesn't exist raises an `IndexError` 
- Using an undefined variable name raises a `NameError`

When an uncaught exception occurs, Python typically terminates the program and prints an error message called a traceback. This abrupt crashing is undesirable, so it's best to gracefully handle exceptions.

## Representing Exceptions as Objects
Under the hood, Python uses special objects to represent exceptions. These exception objects contain information about the error that occurred. Python has many built-in exception classes, each tailored to a specific error:

<pre>
Exception           # Base class for all exceptions
AttributeError      # Raised for attribute reference or assignment failure
IndexError          # Raised when a sequence index is out of range
KeyError            # Raised when a mapping (e.g. dict) key is not found
ValueError          # Raised when an operation gets the right type but wrong value
ZeroDivisionError   # Raised when dividing by zero
</pre>

When an error occurs, Python automatically creates an instance of the appropriate exception class and raises it. We can inspect this object to get more details about what went wrong.

## Raising Exceptions Manually
Sometimes we may want to raise an exception ourselves to signal that something has gone wrong. We can do this with the `raise` statement:

```python
raise ZeroDivisionError("Cannot divide by zero!")
```

This stops the program flow and raises the specified exception, optionally with a custom error message.

## Handling Exceptions with `try/except` 
To prevent exceptions from crashing our programs, we can catch and handle them using `try/except` blocks:

```python
try:
    # Code that may raise an exception
    result = 10 / 0
except ZeroDivisionError:
    # Handle the exception
    print("Oops! Can't divide by zero.")
```

If an exception occurs inside the `try` block, Python immediately jumps to the `except` block without executing the rest of the `try` code. The `except` block specifies which exception types to catch. If the raised exception matches, the code inside the `except` block runs to handle it. Afterward, execution continues past the `try/except`.

We can catch multiple exceptions by listing them in the `except` line or using multiple `except` blocks. To catch all exceptions regardless of type, we can omit the exception name: `except:`.

## The `else` Clause
We can optionally add an `else` block after `try/except`. Code inside `else` only runs if no exceptions were raised in the `try` block:

```python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Can't divide by zero!")
else:
    print(f"Result is: {result}")
```

This is handy for code that should run only when everything succeeds.

## The `finally` Clause
For cleanup code that must always run, even if an uncaught exception occurs, we use `finally`:

```python
try:
    file = open("example.txt")
    # Work with the file
finally:
    file.close()  # Always close the file
```

Code in the `finally` block is guaranteed to run, making it ideal for freeing resources like files or network connections.

I hope this teacher-like breakdown helps clarify exception handling for you! Let me know if any part needs more explanation. Next, I suggest practicing catching and raising exceptions in your own code to reinforce these concepts.

## A short recap of all common errors
<pre>
SyntaxError
occur when there is a typo in the program
</pre>


<pre>
IndentationError
occur when there is unmatched indentation in the program
</pre>


<pre>
NameError
occurs when the variable referenced is not defined in the program
</pre>

<pre>
TypeError
Occurs when carrying out operation between data of an innapropriate type (also can be function parameter being passed by the wrong data type)
</pre>


<pre>
ValueError
occur when operation of the correct type but with the innapropriate values
eg. float('abc') raises a ValueError but float('123') does not
</pre>


<pre>
IndexError
occurs when a sequence/list is indexed with a value out f the range of that particular sequence
</pre>


<pre>
ZeroDivisionError
occurs when trying to divide/modulus a number by zero
</pre>

<pre>
KeyError
occurs when the specified key is non-existent in the referenced dictionary
</pre>

<pre>
IOError
occurs when input/output operations fails
</pre>

<pre>
FileNotFoundError
occurs when the file with specified path is not found within the given directory
</pre>

<pre>
ImportError
occurs the system cannot find the module that the program is trying to import
</pre>

<pre>
AttributeError
occurs when referencing a method/attr/property of an object that does not exist

</pre>
