export const lessonNotes: Record<string, string> = {
    v1: `## Introduction to Python

Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python has become one of the most popular programming languages in the world.

### Why Learn Python?

1. **Easy to Learn**: Python's syntax is clean and intuitive, making it perfect for beginners.
2. **Versatile**: Used in web development, data science, AI/ML, automation, and more.
3. **Large Community**: Extensive libraries and frameworks available.
4. **High Demand**: Python developers are highly sought after in the job market.

### Key Features

- **Readable Syntax**: Code reads like English
- **Dynamic Typing**: No need to declare variable types
- **Extensive Libraries**: NumPy, Pandas, Django, Flask, and thousands more
- **Cross-Platform**: Runs on Windows, Mac, Linux, and more

### Getting Started

\`\`\`python
# Your first Python program
print("Hello, World!")

# Variables
name = "EduLinkUp"
students = 50000

# Simple calculation
result = 10 + 20
print(f"Result: {result}")
\`\`\`

### Practice Exercise

Try creating a program that:
1. Asks for user's name
2. Calculates their birth year from age
3. Prints a personalized greeting`,

    v2: `## Variables and Data Types

Variables are containers for storing data values. In Python, you don't need to declare a variable's type explicitly - Python automatically determines the type based on the value assigned.

### Why Learn Variables?

1. **Data Storage**: Variables allow you to store and manipulate data throughout your program.
2. **Code Reusability**: Use the same value multiple times without repeating it.
3. **Dynamic Programs**: Create programs that work with different inputs and produce different outputs.

### Key Data Types in Python

- **int**: Integer numbers (e.g., 5, -10, 1000)
- **float**: Decimal numbers (e.g., 3.14, -0.5, 2.0)
- **str**: Text strings (e.g., "Hello", 'Python')
- **bool**: Boolean values (True or False)
- **NoneType**: Represents absence of value (None)

### Variable Naming Rules

1. Must start with a letter or underscore
2. Can contain letters, numbers, and underscores
3. Case-sensitive (age and Age are different)
4. Cannot use Python keywords (if, for, while, etc.)

### Code Examples

\`\`\`python
# Integer
age = 25
count = 100

# Float
price = 19.99
temperature = -5.5

# String
name = "Alice"
message = 'Hello, World!'

# Boolean
is_student = True
has_passed = False

# Type checking
print(type(age))        # <class 'int'>
print(type(price))      # <class 'float'>
print(type(name))       # <class 'str'>

# Type conversion
num_str = "42"
num_int = int(num_str)  # Convert string to integer
print(num_int + 8)      # Output: 50
\`\`\`

### Practice Exercise

Create variables for:
1. Your name (string)
2. Your age (integer)
3. Your height in meters (float)
4. Whether you're a student (boolean)
5. Print all variables with their types`,

    v3: `## Strings - Working with Textual Data

Strings are sequences of characters used to store and manipulate text. In Python, strings are immutable, meaning once created, they cannot be changed.

### Why Learn Strings?

1. **Text Processing**: Essential for working with user input, file content, and data manipulation.
2. **Formatting**: Create dynamic messages and formatted output.
3. **Data Validation**: Check and validate user input.

### String Basics

- **Creating Strings**: Use single quotes (''), double quotes (""), or triple quotes (''' ''' or """ """)
- **Immutability**: Strings cannot be modified after creation
- **Indexing**: Access individual characters using square brackets
- **Slicing**: Extract substrings using slice notation

### Common String Methods

- **upper()** / **lower()**: Convert to uppercase/lowercase
- **strip()**: Remove whitespace from beginning and end
- **split()**: Split string into a list
- **replace()**: Replace substring with another
- **find()**: Find position of substring
- **format()**: Format strings with variables

### Code Examples

\`\`\`python
# Creating strings
name = "Python"
message = 'Hello, World!'
multiline = """This is a
multi-line string"""

# Indexing and slicing
text = "EduLinkUp"
print(text[0])      # 'E'
print(text[-1])     # 'p'
print(text[0:3])    # 'Edu'
print(text[3:])     # 'LinkUp'

# String methods
greeting = "  hello world  "
print(greeting.strip())         # "hello world"
print(greeting.upper())         # "  HELLO WORLD  "
print(greeting.replace("world", "Python"))  # "  hello Python  "

# String formatting
name = "Alice"
age = 25
# f-strings (Python 3.6+)
message = f"My name is {name} and I'm {age} years old"
print(message)

# format() method
message = "My name is {} and I'm {} years old".format(name, age)
print(message)

# Concatenation
first = "Hello"
last = "World"
full = first + " " + last  # "Hello World"
\`\`\`

### Practice Exercise

Create a program that:
1. Takes a user's full name as input
2. Converts it to title case
3. Extracts first and last name
4. Prints a formatted greeting`,

    v4: `## Lists, Tuples, and Sets

Python provides three main collection types for storing multiple items: lists, tuples, and sets. Each has unique characteristics and use cases.

### Why Learn Collections?

1. **Data Organization**: Store and manage multiple related values efficiently.
2. **Iteration**: Process multiple items with loops.
3. **Data Manipulation**: Add, remove, and modify elements as needed.

### Lists

- **Mutable**: Can be modified after creation
- **Ordered**: Items maintain their order
- **Allow Duplicates**: Can contain duplicate values
- **Syntax**: Square brackets []

### Tuples

- **Immutable**: Cannot be modified after creation
- **Ordered**: Items maintain their order
- **Allow Duplicates**: Can contain duplicate values
- **Syntax**: Parentheses ()

### Sets

- **Mutable**: Can be modified
- **Unordered**: No guaranteed order
- **No Duplicates**: Automatically removes duplicates
- **Syntax**: Curly braces {}

### Code Examples

\`\`\`python
# Lists
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")      # Add item
fruits.remove("banana")      # Remove item
fruits[0] = "mango"          # Modify item
print(fruits[0])             # Access by index

# List methods
numbers = [3, 1, 4, 1, 5, 9]
numbers.sort()               # Sort in place
numbers.reverse()            # Reverse order
print(len(numbers))          # Get length

# Tuples
coordinates = (10, 20)
x, y = coordinates           # Unpacking
print(x, y)                  # 10 20

# Sets
unique_numbers = {1, 2, 3, 3, 4, 4, 5}
print(unique_numbers)        # {1, 2, 3, 4, 5}

# Set operations
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1.union(set2))          # {1, 2, 3, 4, 5}
print(set1.intersection(set2))   # {3}
print(set1.difference(set2))     # {1, 2}
\`\`\`

### Practice Exercise

Create a program that:
1. Creates a list of student names
2. Adds new students
3. Removes duplicates using a set
4. Stores final count in a tuple`,

    v5: `## Dictionaries - Working with Key-Value Pairs

Dictionaries are Python's implementation of hash maps or associative arrays. They store data in key-value pairs, allowing fast lookups by key.

### Why Learn Dictionaries?

1. **Fast Lookups**: Access values instantly using keys
2. **Structured Data**: Organize related information together
3. **Real-World Modeling**: Represent objects with properties

### Dictionary Characteristics

- **Mutable**: Can be modified after creation
- **Unordered**: No guaranteed order (Python 3.7+ maintains insertion order)
- **Key-Value Pairs**: Each item has a key and associated value
- **Unique Keys**: Keys must be unique
- **Syntax**: Curly braces with key:value pairs

### Common Dictionary Operations

- **Access**: Use square brackets or get() method
- **Add/Update**: Assign value to a key
- **Remove**: Use del, pop(), or clear()
- **Iterate**: Loop through keys, values, or items

### Code Examples

\`\`\`python
# Creating dictionaries
student = {
    "name": "Alice",
    "age": 20,
    "grade": "A",
    "courses": ["Python", "Math"]
}

# Accessing values
print(student["name"])           # "Alice"
print(student.get("age"))        # 20
print(student.get("email", "N/A"))  # "N/A" (default if key doesn't exist)

# Adding/updating values
student["email"] = "alice@example.com"
student["age"] = 21

# Removing items
del student["grade"]
removed_age = student.pop("age")  # Returns and removes

# Dictionary methods
print(student.keys())            # Get all keys
print(student.values())          # Get all values
print(student.items())           # Get key-value pairs

# Iterating
for key, value in student.items():
    print(f"{key}: {value}")

# Nested dictionaries
users = {
    "user1": {"name": "Alice", "age": 20},
    "user2": {"name": "Bob", "age": 22}
}
print(users["user1"]["name"])    # "Alice"
\`\`\`

### Practice Exercise

Create a program that:
1. Stores student information in a dictionary
2. Adds new subjects and grades
3. Calculates average grade
4. Prints a formatted report`,

    v6: `## Conditionals and Booleans

Conditionals allow your program to make decisions and execute different code based on conditions. Boolean values (True/False) are the foundation of conditional logic.

### Why Learn Conditionals?

1. **Decision Making**: Create programs that respond to different situations
2. **Control Flow**: Direct program execution based on conditions
3. **Validation**: Check user input and data validity

### Boolean Basics

- **True** and **False**: The two boolean values
- **Comparison Operators**: ==, !=, <, >, <=, >=
- **Logical Operators**: and, or, not
- **Truthy/Falsy**: Values that evaluate to True or False

### Conditional Statements

- **if**: Execute code if condition is True
- **elif**: Check additional conditions
- **else**: Execute code if all conditions are False

### Comparison and Logical Operators

\`\`\`python
# Comparison operators
print(5 == 5)    # True
print(5 != 3)    # True
print(10 > 5)    # True
print(3 <= 3)    # True

# Logical operators
print(True and False)   # False
print(True or False)    # True
print(not True)         # False
\`\`\`

### Code Examples

\`\`\`python
# Simple if statement
age = 18
if age >= 18:
    print("You are an adult")

# if-else
temperature = 25
if temperature > 30:
    print("It's hot")
else:
    print("It's not hot")

# if-elif-else
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
print(f"Grade: {grade}")

# Multiple conditions
age = 25
has_license = True
if age >= 18 and has_license:
    print("You can drive")

# Truthy and Falsy values
name = "Alice"
if name:  # Non-empty strings are truthy
    print(f"Hello, {name}")

empty_list = []
if not empty_list:  # Empty lists are falsy
    print("List is empty")
\`\`\`

### Practice Exercise

Create a program that:
1. Takes a number as input
2. Checks if it's positive, negative, or zero
3. Checks if it's even or odd
4. Prints appropriate messages`,
}
