# Database Tables

![database model](https://puu.sh/Glhdx/abfab614c9.png)

## users:

| id  | firstname [required] | lastname [required] | email [required] | password [required] |
| --- | -------------------- | ------------------- | ---------------- | ------------------- |
| 1   | tim                  | bogdanov            | tim@bogdanov.com | password            |

## recipes:

| id  | recipeName [required] | user_id [auto-set] |
| --- | --------------------- | ------------------ |
| 1   | cookies               | 1                  |

# End-points

## Register:

_/api/auth/register_

## Login:

_/api/auth/login_

## Logout:

_Log out functionality should be created on the front-end side by removing the token inside localStorage upon logging out_
