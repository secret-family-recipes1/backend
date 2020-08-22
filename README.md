# Database Tables

## users

| id  | firstname (required) | lastname (required) | email (required, unique) | password (required) |
| --- | -------------------- | ------------------- | ------------------------ | ------------------- |
| 1   | firstName            | lastName            | exmaple@example.com      | password            |
| 2   | firstName            | lastName            | exmaple@example.com      | password            |
| 3   | firstName            | lastName            | exmaple@example.com      | password            |

## recipes

| id  | recipeName (required) | source (required)         | user_id |
| --- | --------------------- | ------------------------- | ------- |
| 1   | recipe                | allrecipes.com/hashbrowns | 2       |
