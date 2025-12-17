Python se ha convertido en uno de los lenguajes de programación más populares del mundo, y por buenas razones. Su sintaxis clara y su versatilidad lo hacen perfecto tanto para principiantes como para expertos.

## ¿Por qué aprender Python?

Python se utiliza en:

- **Desarrollo Web** (Django, Flask)
- **Ciencia de Datos** (Pandas, NumPy)
- **Inteligencia Artificial** (TensorFlow, PyTorch)
- **Automatización** (Scripts, Bots)
- **Desarrollo de Juegos** (Pygame)

## 1. Variables y Tipos de Datos

En Python, no necesitas declarar el tipo de variable. Python lo infiere automáticamente.

```python
# Números
edad = 25
altura = 1.75
numero_complejo = 3 + 4j

# Cadenas de texto
nombre = "Frank"
mensaje = 'Hola Mundo'
multilinea = """Este es un
texto de varias líneas"""

# Booleanos
esta_activo = True
tiene_permiso = False

# Listas
frutas = ["manzana", "banana", "naranja"]
numeros = [1, 2, 3, 4, 5]

# Diccionarios
persona = {
    "nombre": "Frank",
    "edad": 25,
    "ciudad": "Lima"
}
```

## 2. Estructuras de Control

### Condicionales (if, elif, else)

```python
edad = 18

if edad >= 18:
    print("Eres mayor de edad")
elif edad >= 13:
    print("Eres adolescente")
else:
    print("Eres un niño")

# Operador ternario
estado = "Adulto" if edad >= 18 else "Menor"
```

### Bucles

```python
# Bucle for
frutas = ["manzana", "banana", "naranja"]
for fruta in frutas:
    print(f"Me gusta la {fruta}")

# for con range
for i in range(5):
    print(f"Número: {i}")

# Bucle while
contador = 0
while contador < 5:
    print(f"Contador: {contador}")
    contador += 1

# List comprehension
cuadrados = [x**2 for x in range(10)]
pares = [x for x in range(20) if x % 2 == 0]
```

## 3. Funciones

Las funciones te permiten reutilizar código y organizar mejor tu programa.

```python
# Función básica
def saludar():
    print("¡Hola!")

# Función con parámetros
def saludar_persona(nombre):
    print(f"¡Hola, {nombre}!")

# Función con retorno
def sumar(a, b):
    return a + b

# Función con parámetros por defecto
def saludar_con_hora(nombre, hora="mañana"):
    return f"¡Buenos días {hora}, {nombre}!"

# Función con múltiples retornos
def obtener_datos_usuario():
    return "Frank", 25, "Lima"

nombre, edad, ciudad = obtener_datos_usuario()

# Funciones lambda
cuadrado = lambda x: x**2
suma = lambda a, b: a + b

# Funciones de orden superior
numeros = [1, 2, 3, 4, 5]
cuadrados = list(map(lambda x: x**2, numeros))
pares = list(filter(lambda x: x % 2 == 0, numeros))
```

## 4. Programación Orientada a Objetos

```python
class Persona:
    # Constructor
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
  
    # Método
    def saludar(self):
        return f"Hola, soy {self.nombre} y tengo {self.edad} años"
  
    # Método de clase
    @classmethod
    def desde_año_nacimiento(cls, nombre, año_nacimiento):
        edad = 2026 - año_nacimiento
        return cls(nombre, edad)
  
    # Método estático
    @staticmethod
    def es_mayor_edad(edad):
        return edad >= 18

# Crear instancia
persona = Persona("Frank", 25)
print(persona.saludar())

# Herencia
class Desarrollador(Persona):
    def __init__(self, nombre, edad, lenguaje):
        super().__init__(nombre, edad)
        self.lenguaje = lenguaje
  
    def programar(self):
        return f"Estoy programando en {self.lenguaje}"

dev = Desarrollador("Frank", 25, "Python")
print(dev.saludar())
print(dev.programar())
```

## 5. Trabajo con Archivos

```python
# Escribir en archivo
with open('archivo.txt', 'w') as archivo:
    archivo.write('Hola Mundo\n')
    archivo.write('Segunda línea')

# Leer archivo
with open('archivo.txt', 'r') as archivo:
    contenido = archivo.read()
    print(contenido)

# Leer línea por línea
with open('archivo.txt', 'r') as archivo:
    for linea in archivo:
        print(linea.strip())

# Trabajar con JSON
import json

datos = {
    "nombre": "Frank",
    "edad": 25,
    "habilidades": ["Python", "JavaScript", "Angular"]
}

# Escribir JSON
with open('datos.json', 'w') as archivo:
    json.dump(datos, archivo, indent=2)

# Leer JSON
with open('datos.json', 'r') as archivo:
    datos_cargados = json.load(archivo)
    print(datos_cargados)
```

## 6. Manejo de Excepciones

```python
# Try-except básico
try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("No se puede dividir por cero")

# Múltiples excepciones
try:
    numero = int(input("Ingresa un número: "))
    resultado = 10 / numero
except ValueError:
    print("Eso no es un número válido")
except ZeroDivisionError:
    print("No se puede dividir por cero")
except Exception as e:
    print(f"Ocurrió un error: {e}")
finally:
    print("Esto siempre se ejecuta")

# Lanzar excepciones
def validar_edad(edad):
    if edad < 0:
        raise ValueError("La edad no puede ser negativa")
    if edad > 150:
        raise ValueError("La edad no es realista")
    return True
```

## 7. Módulos Útiles

```python
# datetime - Trabajar con fechas
from datetime import datetime, timedelta

ahora = datetime.now()
print(f"Fecha actual: {ahora}")

mañana = ahora + timedelta(days=1)
print(f"Mañana: {mañana}")

# random - Generar números aleatorios
import random

numero_aleatorio = random.randint(1, 100)
eleccion_aleatoria = random.choice(['rojo', 'azul', 'verde'])
random.shuffle([1, 2, 3, 4, 5])

# os - Interactuar con el sistema operativo
import os

directorio_actual = os.getcwd()
archivos = os.listdir('.')
os.makedirs('nueva_carpeta', exist_ok=True)

# requests - Hacer peticiones HTTP
import requests

respuesta = requests.get('https://api.github.com')
datos = respuesta.json()
print(datos)
```

## 8. Buenas Prácticas

### PEP 8 - Guía de Estilo

```python
# Bien
def calcular_total(precio, cantidad):
    return precio * cantidad

# Mal
def CalcularTotal(Precio,Cantidad):
    return Precio*Cantidad

# Usar nombres descriptivos
edad_usuario = 25  # Bien
x = 25  # Mal

# Constantes en mayúsculas
MAX_CONEXIONES = 100
API_KEY = "tu-api-key"
```

### Documentación

```python
def calcular_area(ancho, alto):
    """
    Calcula el área de un rectángulo.
  
    Args:
        ancho (float): Ancho del rectángulo
        alto (float): Alto del rectángulo
  
    Returns:
        float: Área calculada
  
    Ejemplo:
        >>> calcular_area(5, 3)
        15
    """
    return ancho * alto
```

## Proyecto Práctico: Gestor de Tareas

```python
class GestorTareas:
    def __init__(self):
        self.tareas = []
  
    def agregar_tarea(self, titulo, descripcion=""):
        tarea = {
            "id": len(self.tareas) + 1,
            "titulo": titulo,
            "descripcion": descripcion,
            "completada": False
        }
        self.tareas.append(tarea)
        return tarea
  
    def completar_tarea(self, id_tarea):
        for tarea in self.tareas:
            if tarea["id"] == id_tarea:
                tarea["completada"] = True
                return True
        return False
  
    def listar_tareas(self):
        for tarea in self.tareas:
            estado = "✓" if tarea["completada"] else "○"
            print(f"{estado} [{tarea['id']}] {tarea['titulo']}")
  
    def tareas_pendientes(self):
        return [t for t in self.tareas if not t["completada"]]

# Uso
gestor = GestorTareas()
gestor.agregar_tarea("Aprender Python", "Completar tutorial básico")
gestor.agregar_tarea("Hacer un proyecto", "Crear una aplicación web")
gestor.completar_tarea(1)
gestor.listar_tareas()
```

## Conclusión

Python es un lenguaje poderoso y versátil que abre muchas puertas en el mundo de la programación. Estos fundamentos son solo el comienzo de un viaje emocionante.

### Próximos Pasos

1. Practicar con proyectos pequeños
2. Explorar librerías especializadas
3. Contribuir a proyectos open source
4. Nunca dejar de aprender

### Recursos Útiles

- [Documentación Oficial de Python](https://docs.python.org)
- [Real Python](https://realpython.com)
- [Python Package Index (PyPI)](https://pypi.org)

---

**¡Feliz programación!** 🐍
