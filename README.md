# 👾 Toxicity Detection

**Toxicity Detection** es una aplicación web interactiva que detecta el lenguaje tóxico en tiempo real durante los **streams de Twitch**. Utilizando **React**, **TypeScript**, **TailwindCSS**, **Node.js**, y **tmi.js**, junto con el modelo de clasificación de **Cohere API**, esta herramienta ayuda a los streamers a identificar y gestionar comentarios tóxicos en sus canales para mejorar la experiencia de la comunidad.

## Tecnologías utilizadas

- **Frontend:**
  - **React**: Framework JavaScript para construir la interfaz de usuario.
  - **TypeScript**: Lenguaje superset de JavaScript para una mayor seguridad de tipos y mejores herramientas de desarrollo.
  - **TailwindCSS**: Framework de CSS para diseño responsivo y altamente personalizable.
  
- **Backend:**
  - **Node.js**: Entorno de ejecución de JavaScript en el servidor.
  - **tmi.js**: Biblioteca para conectarse y recuperar mensajes del chat en tiempo real de Twitch.

- **API y Servicios Externos:**
  - **Twitch API**: Para acceder a la información del chat y realizar la integración con Twitch.
  - **Cohere API**: Usada para clasificar los mensajes y detectar el lenguaje tóxico en los comentarios del chat, utilizando su modelo de NLP.

---

## Características

- **Detección en tiempo real**: Los comentarios del chat de Twitch se analizan en tiempo real para identificar posibles mensajes tóxicos.
- **Clasificación de toxicidad**: Utiliza el modelo de clasificación de la API de **Cohere** para identificar y marcar comentarios tóxicos, proporcionando un análisis más preciso y eficiente.
- **Interfaz de usuario interactiva**: Visualiza los mensajes y alertas de toxicidad de manera clara y eficiente gracias a la interfaz construida con React y TailwindCSS.
- **Manejo de alertas**: Cuando se detecta un mensaje tóxico, el sistema puede enviar alertas en tiempo real al streamer o incluso tomar acciones como ocultar o reportar el mensaje.

---

## Instalación y Configuración

### Requisitos previos

- **Node.js** y **npm** instalados en tu máquina.
- **Cuenta de Twitch** para poder acceder a su API.
- **Clave API de Cohere** para usar el modelo de clasificación de toxicidad.

### Pasos de instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/toxicity-detection.git
   cd toxicity-detection
    ```

2. **Instalar dependencias del backend (Node.js):**

Navega a la carpeta del backend (si es que tienes una estructura separada para el backend) y ejecuta:
   ```bash
   cd backend
   npm install
```

3. **Instalar dependencias del frontend (React):**
   Navega a la carpeta del frontend (si es que tienes una estructura separada para el frontend) y ejecuta:
   ```bash
      cd frontend
   npm install
    ```
   
5. **Configurar variables de entorno:**

Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:
     ```bash
      cd frontend
   npm install
    ```

5. **Iniciar el servidor:**

En el backend:
   ```bash
pnpm run start
```

6. **En el frontend:**
   ```bash
   pnpm run dev
   ```

