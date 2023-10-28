# Entity Relationship Diagram

Reference the Creating an Entity Relationship Diagram final project guide in the course portal for more information about how to complete this deliverable.

## Create the List of Tables

[👉🏾👉🏾👉🏾 List each table in your diagram]

## Add the Entity Relationship Diagram

[👉🏾👉🏾👉🏾 Include an image or images of the diagram below. You may also wish to use the following markdown syntax to outline each table, as per your preference.]

| Activities | Type    | List of Activities   |
| ---------- | ------- | -------------------- |
| id         | integer | primary key          |
| trip_id    | integer | id of the activity   |
| activity   | string  | name of the activity |
| num_votes  | integer | number of votes      |

| Destinations | Type    | List of Destinations           |
| ------------ | ------- | ------------------------------ |
| id           | integer | primary key                    |
| destination  | string  | name of destination            |
| description  | string  | description of the destination |
| city         | string  | name of city                   |
| country      | string  | name of country                |
| img_url      | string  | image of destination           |
| flag_img_url | string  | image of country flag          |

| Trips       | Type    | List of Trips          |
| ----------- | ------- | ---------------------- |
| id          | integer | primary key            |
| title       | string  | name of trip           |
| description | string  | description of trip    |
| img_url     | string  | image of trip          |
| num_days    | integer | number of days staying |
| start_date  | Date    | start date of the trip |
| end_date    | Date    | end date of the trip   |
| total_cost  | string  | total cost of trip     |

| Trips_Destinations | Type    | List of Trips by Destination |
| ------------------ | ------- | ---------------------------- |
| trip_id            | integer | id of the trip               |
| destination_id     | integer | id of the destination        |

| Trips_Users | Type    | List of Trips by User |
| ----------- | ------- | --------------------- |
| trip_id     | integer | id of the trip        |
| user_id     | integer | id of the user        |

| Users       | Type    | List of Users    |
| ----------- | ------- | ---------------- |
| id          | integer | primary key      |
| githubid    | integer | user's github id |
| username    | string  | name of the user |
| avatarurl   | string  | image of user    |
| accesstoken | string  | user token       |
