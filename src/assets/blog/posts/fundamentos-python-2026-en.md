Python has become one of the most popular programming languages in the world, and for good reason. Its clear syntax and versatility make it the perfect choice for beginners and experts alike.

## Why Learn Python?

Python is used in:

- **Web Development** (Django, Flask)
- **Data Science** (Pandas, NumPy)
- **Artificial Intelligence** (TensorFlow, PyTorch)
- **Automation** (Scripts, Bots)
- **Game Development** (Pygame)

## 1. Variables and Data Types

In Python, you don't need to declare the variable type. Python infers it automatically.

```python
# Numbers
age = 25
height = 1.75
complex_number = 3 + 4j

# Strings
name = "Frank"
message = 'Hello World'
multiline = """This is a
multiline text"""

# Booleans
is_active = True
has_permission = False

# Lists
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]

# Dictionaries
person = {
    "name": "Frank",
    "age": 25,
    "city": "Lima"
}
```

## 2. Control Structures

### Conditionals (if, elif, else)

```python
age = 18

if age >= 18:
    print("You are of legal age")
elif age >= 13:
    print("You are a teenager")
else:
    print("You are a child")

# Ternary operator
status = "Adult" if age >= 18 else "Minor"
```

### Loops

```python
# for loop
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"I like {fruit}")

# for with range
for i in range(5):
    print(f"Number: {i}")

# while loop
counter = 0
while counter < 5:
    print(f"Counter: {counter}")
    counter += 1

# List comprehension
squares = [x**2 for x in range(10)]
even_numbers = [x for x in range(20) if x % 2 == 0]
```

## 3. Functions

Functions allow you to reuse code and organize your program better.

```python
# Basic function
def greet():
    print("Hello!")

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

# Function with return value
def add(a, b):
    return a + b

# Function with default parameters
def greet_with_time(name, time="morning"):
    return f"Good {time}, {name}!"

# Function with multiple return values
def get_user_data():
    return "Frank", 25, "Lima"

name, age, city = get_user_data()

# Lambda functions
square = lambda x: x**2
add = lambda a, b: a + b

# Higher-order functions
numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
```

## 4. Object-Oriented Programming

```python
class Person:
    # Constructor
    def __init__(self, name, age):
        self.name = name
        self.age = age
  
    # Method
    def greet(self):
        return f"Hello, I'm {self.name} and I'm {self.age} years old"
  
    # Class method
    @classmethod
    def from_birth_year(cls, name, birth_year):
        age = 2026 - birth_year
        return cls(name, age)
  
    # Static method
    @staticmethod
    def is_adult(age):
        return age >= 18

# Create instance
person = Person("Frank", 25)
print(person.greet())

# Inheritance
class Developer(Person):
    def __init__(self, name, age, language):
        super().__init__(name, age)
        self.language = language
  
    def code(self):
        return f"I'm coding in {self.language}"

dev = Developer("Frank", 25, "Python")
print(dev.greet())
print(dev.code())
```

## 5. Working with Files

```python
# Write to file
with open('file.txt', 'w') as file:
    file.write('Hello World\n')
    file.write('Second line')

# Read file
with open('file.txt', 'r') as file:
    content = file.read()
    print(content)

# Read line by line
with open('file.txt', 'r') as file:
    for line in file:
        print(line.strip())

# Work with JSON
import json

data = {
    "name": "Frank",
    "age": 25,
    "skills": ["Python", "JavaScript", "Angular"]
}

# Write JSON
with open('data.json', 'w') as file:
    json.dump(data, file, indent=2)

# Read JSON
with open('data.json', 'r') as file:
    loaded_data = json.load(file)
    print(loaded_data)
```

## 6. Exception Handling

```python
# Basic try-except
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")

# Multiple exceptions
try:
    number = int(input("Enter a number: "))
    result = 10 / number
except ValueError:
    print("That's not a valid number")
except ZeroDivisionError:
    print("Cannot divide by zero")
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    print("This always executes")

# Raise exceptions
def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    if age > 150:
        raise ValueError("Age is not realistic")
    return True
```

## 7. Useful Modules

```python
# datetime - Work with dates
from datetime import datetime, timedelta

now = datetime.now()
print(f"Current date: {now}")

tomorrow = now + timedelta(days=1)
print(f"Tomorrow: {tomorrow}")

# random - Generate random numbers
import random

random_number = random.randint(1, 100)
random_choice = random.choice(['red', 'blue', 'green'])
random.shuffle([1, 2, 3, 4, 5])

# os - Interact with operating system
import os

current_dir = os.getcwd()
files = os.listdir('.')
os.makedirs('new_folder', exist_ok=True)

# requests - Make HTTP requests
import requests

response = requests.get('https://api.github.com')
data = response.json()
print(data)
```

## 8. Best Practices

### PEP 8 - Style Guide

```python
# Good
def calculate_total(price, quantity):
    return price * quantity

# Bad
def CalculateTotal(Price,Quantity):
    return Price*Quantity

# Use descriptive names
user_age = 25  # Good
x = 25  # Bad

# Constants in uppercase
MAX_CONNECTIONS = 100
API_KEY = "your-api-key"
```

### Documentation

```python
def calculate_area(width, height):
    """
    Calculate the area of a rectangle.
  
    Args:
        width (float): Rectangle width
        height (float): Rectangle height
  
    Returns:
        float: Calculated area
  
    Example:
        >>> calculate_area(5, 3)
        15
    """
    return width * height
```

## Practical Project: Task Manager

```python
class TaskManager:
    def __init__(self):
        self.tasks = []
  
    def add_task(self, title, description=""):
        task = {
            "id": len(self.tasks) + 1,
            "title": title,
            "description": description,
            "completed": False
        }
        self.tasks.append(task)
        return task
  
    def complete_task(self, task_id):
        for task in self.tasks:
            if task["id"] == task_id:
                task["completed"] = True
                return True
        return False
  
    def list_tasks(self):
        for task in self.tasks:
            status = "✓" if task["completed"] else "○"
            print(f"{status} [{task['id']}] {task['title']}")
  
    def pending_tasks(self):
        return [t for t in self.tasks if not t["completed"]]

# Usage
manager = TaskManager()
manager.add_task("Learn Python", "Complete basic tutorial")
manager.add_task("Build a project", "Create a web application")
manager.complete_task(1)
manager.list_tasks()
```

## Conclusion

Python is a powerful and versatile language that opens many doors in the world of programming. These fundamentals are just the beginning of an exciting journey.

### Next Steps

1. Practice with small projects
2. Explore specialized libraries
3. Contribute to open source projects
4. Never stop learning

### Useful Resources

- [Official Python Documentation](https://docs.python.org)
- [Real Python](https://realpython.com)
- [Python Package Index (PyPI)](https://pypi.org)

---

**Happy coding!** 🐍
