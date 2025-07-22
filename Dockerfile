# Usa imagen oficial de Node
FROM node:24.4-alpine3.22

# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia archivos de configuración
COPY package*.json ./

# Copia la carpeta prisma con el schema
COPY prisma ./prisma/

# Instala dependencias (dev incluidas para build)
RUN npm install

# Genera el esquema con prisma
RUN npx prisma generate

# Copia el resto del código
COPY . .

# Expone el puerto 3001
EXPOSE 3001