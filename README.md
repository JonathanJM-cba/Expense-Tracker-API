# API de Rastreador de Gastos

Una API RESTfull para una aplicación de seguimiento de gastos personales. Esta API permite a los usuarios registrarse, iniciar sesión y gestionar sus gastos de forma segura utilizando autenticación JWT.

> Basado en el proyecto original de [roadmap.sh - Expense Tracker API](https://roadmap.sh/projects/expense-tracker-api)

---

## 📌 Características

- Registro de nuevos usuarios
- Inicio de sesión con generación de token JWT
- Autenticación y autorización protegidas mediante JWT
- CRUD de gastos:
  - Crear un nuevo gasto
  - Listar gastos
  - Filtrar por:
    - Última semana
    - Último mes
    - Últimos 3 meses
    - Rango de fechas personalizado
  - Actualizar gasto
  - Eliminar gasto
- Cada usuario solo puede acceder y modificar sus propios gastos
- Categorías predefinidas:
  - 🛒 Comestibles
  - 🎮 Ocio
  - 💻 Electrónica
  - 💡 Utilidades
  - 👗 Ropa
  - 🏥 Salud
  - 🗂️ Otros

---

## 🛠️ Tecnologías Utilizadas

- **Node.js** con **Express**
- **JWT** (JSON Web Token) para autenticación
- **Sequelize** como ORM
- **PostgresSQL** como base de datos relacional
- **bcryptjs** para hashear contraseñas

---

## 📁 Estructura del Proyecto

```
/api_rastreador_gastos
│
├── controllers/       # Lógica de los endpoints
├── models/            # Modelos Sequelize
├── routes/            # Definición de rutas (usuarios, gastos y categorías)
├── middleware/        # Autenticación JWT
├── config/            # Configuración DB y entorno
├── .env               # Variables de entorno
└── server.js             # Punto de entrada de la app
```

---

## 🚀 Instalación y Ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/JonathanJM-cba/Expense-Tracker-API.git
cd api_rastreador_gastos
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo `.env` con las siguientes variables:

```env
PORT=tu_puerto_servidor
DB_HOST=localhost
DB_USER=tu_usuario_base_dato
DB_PASSWORD=tu_password
DB_NAME=tu_nombre_base_dato
ACCESS_TOKEN_KEY=tu_secreto_jwt
```

4. Inicializa la base de datos (si usás Sequelize):

```bash
npx sequelize-cli db:migrate
```

5. Inicia el servidor:

```bash
npm start
npm run dev (modo desarrollo)
```

---

## 📬 Endpoints Principales

### Autenticación

| Método | Endpoint             | Descripción             |
| ------ | -------------------- | ----------------------- |
| POST   | `/api/auth/register` | Registrar nuevo usuario |
| POST   | `/api/auth/login`    | Iniciar sesión          |

### Gastos (protegido por JWT)

| Método | Endpoint                                                | Descripción                                 |
| ------ | ------------------------------------------------------- | ------------------------------------------- |
| GET    | `/api/expenses`                                         | Obtener todos los gastos del usuario        |
| GET    | `/api/expenses?filter=last_week`                        | Filtrar gastos por la última semana         |
| GET    | `/api/expenses?filter=last_month`                       | Filtrar gastos por el último mes            |
| GET    | `/api/expenses?filter=last_3_months`                    | Filtrar gastos por los últimos 3 meses      |
| GET    | `/api/expenses?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` | Filtrar gastos desde una fecha inicio y fin |
| POST   | `/api/expenses`                                         | Crear nuevo gasto                           |
| PUT    | `/api/expenses/:idExpense`                              | Actualizar gasto existente                  |
| DELETE | `/api/expenses/:idExpense`                              | Eliminar gasto                              |

---

## 🔐 Autenticación

Todos los endpoints de gastos requieren el encabezado `Authorization` con el JWT:

```
Authorization: Bearer <tu_token_jwt>
```

---

## 🧪 Pruebas con Postman

- Crea una colección con los endpoints anteriores.
- Usa la respuesta del login para configurar el token JWT en el header `Authorization`.

---

## 👤 Autor

**Nombre:** Jonathan Muñoz  
**Email:** jonathan20cba@gmail.com

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
