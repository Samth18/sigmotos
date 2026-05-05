# Usamos Node 20 (LTS) porque Vite 8 funciona perfectamente con esta versión
FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Copiamos solo los archivos de dependencias primero para aprovechar el caché de Docker
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Exponemos el puerto por defecto de Vite
EXPOSE 5173

# Corremos Vite en modo desarrollo. 
# El flag --host es CRÍTICO: le dice a Vite que acepte conexiones externas (del contenedor al mundo)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]