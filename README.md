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
recipeName: 'Cookie'; // string, required
source: 'Grandma'; // string required
```

| Method     | URL              | Desciption                 |
| ---------- | ---------------- | -------------------------- |
| **GET**    | /api/recipes     | fetch all existing recipes |
| **POST**   | /api/recipes     | create a new recipe        |
| **PUT**    | /api/recipes/:id | update existing recipe     |
| **GET**    | /api/recipes/:id | fetch existing recipe      |
| **DELETE** | /api/recipes/:id | delete existing recipe     |
