# Usamos una imagen ligera de Python
FROM python:3.12-slim

# Evita que Python genere archivos .pyc y almacene en buffer los logs
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Instalamos dependencias
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiamos el resto del código
COPY . .

# Comando por defecto para correr el server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]