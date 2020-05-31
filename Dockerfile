# Define la base donde el proyecto va a correr
FROM node:12.16-alpine

# Crea una variable ambiente PORT
ENV PORT 3000

# Exponer un puerto
EXPOSE 3000

# Crear una carpeta que se usará como el directorio de trabajo
RUN mkdir -p /digital-shift/

# Copiar todos los archivos necesarios para correr el proyecto en producción
COPY src/ /digital-shift/src/
COPY bin/ /digital-shift/bin/
COPY public/ /digital-shift/public/
COPY package*.json /digital-shift/

# Instala las dependencias necesarias para el proyecto
RUN cd /digital-shift/ && \
    npm install && \
    npm ci --only=production

# Levanta el proyecto
CMD ["node", "/digital-shift/bin/www"]
