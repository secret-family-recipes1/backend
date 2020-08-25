# /api/users

_Schema_

```javascript
id: 1 // auto-generated
firstname: 'tim' // string, required
lastname: 'bogdanov' // string required
email: tim@bogdanov.com // string, required
password: 'bogdanov' // string required
```

| Method   | URL                 | Desciption               |
| -------- | ------------------- | ------------------------ |
| **GET**  | /api/users/         | fetch all existing users |
| **POST** | /api/users/register | register a new user      |
| **POST** | /api/users/login    | login with existing user |

---

# /api/recipes

_Schema_

```javascript
id: 1; // auto-generated
name: 'Hasbrowns'; // string, required
category: 'Breakfast'; // string, required
source: 'Grandma'; // string required
imageURL: 'https://imageUrl.com/hasbrowns/coolimage.png'; // string required
user_id: '1'; // string required
```

| Method     | URL              | Desciption                 |
| ---------- | ---------------- | -------------------------- |
| **GET**    | /api/recipes     | fetch all existing recipes |
| **POST**   | /api/recipes     | create a new recipe        |
| **PUT**    | /api/recipes/:id | update existing recipe     |
| **GET**    | /api/recipes/:id | fetch existing recipe      |
| **DELETE** | /api/recipes/:id | delete existing recipe     |

---

# /api/recipes/:id/ingredients

_Schema_

```javascript
id: 1; // auto-generated
ingredient: 'potatos, olive-oil, milk'; // string, required
recipe_id: '2'; // auto-generated
```

| Method     | URL                              | Desciption                                          |
| ---------- | -------------------------------- | --------------------------------------------------- |
| **GET**    | /api/recipes/:id/ingredients     | fetch all existing ingredients for specified recipe |
| **POST**   | /api/recipes/:id/ingredients     | post new ingredients to specified recipe            |
| **PUT**    | /api/recipes/:id/ingredients/:id | update existing ingredients to specified recipe     |
| **DELETE** | /api/recipes/:id/ingredients/:id | delete existing ingredients from specified recipe   |

---

# /api/recipes/:id/instructions

_Schema_

```javascript
id: 1; // auto-generated
instruction: 'set stove heat to 6, make food'; // string, required
recipe_id: '2'; // auto-generated
```

| Method     | URL                               | Desciption                                           |
| ---------- | --------------------------------- | ---------------------------------------------------- |
| **GET**    | /api/recipes/:id/instructions     | fetch all existing instructions for specified recipe |
| **POST**   | /api/recipes/:id/instructions     | post new instructions to specified recipe            |
| **PUT**    | /api/recipes/:id/instructions/:id | update existing instructions to specified recipe     |
| **DELETE** | /api/recipes/:id/instructions/:id | delete existing instructions from specified recipe   |
