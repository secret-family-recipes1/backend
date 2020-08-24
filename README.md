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

# Enpoints

## Register:

_/api/auth/register_

## Login:

_/api/auth/login_

## Logout:

_Log out functionality should be created on the front-end side by removing the token inside localStorage upon logging out_
