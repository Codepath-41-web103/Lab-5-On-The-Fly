# Entity Relationship Diagram

Reference the Creating an Entity Relationship Diagram final project guide in the course portal for more information about how to complete this deliverable.

## Create the List of Tables

[👉🏾👉🏾👉🏾 List each table in your diagram]

## Add the Entity Relationship Diagram

[👉🏾👉🏾👉🏾 Include an image or images of the diagram below. You may also wish to use the following markdown syntax to outline each table, as per your preference.]

| Chats        | Type        | List of Chats                 |
| ------------ | ----------- | ----------------------------- |
| created_at   | Date        | the time the chat was created |
| recepient_id | Integer     | the id of the recepient       |
| sender_id    | Integer     | the id of the sender          |
| chat_id      | Primary Key | the id of the chat            |

| Message     | Type    | List of Destinations                 |
| ----------- | ------- | ------------------------------------ |
| id          | Integer | Primary Key                          |
| chat_id     | Integer | Foreign Key                          |
| text        | String  | content of the message               |
| sender_id   | Integer | the id of the sender                 |
| img_url     | String? | image of with the message (Optional) |
| profile_url | String  | image of sender                      |

| Users      | Type    | List of Users         |
| ---------- | ------- | --------------------- |
| id         | Integer | primary key           |
| name       | String  | name of user          |
| email      | String  | email of user         |
| avatar_url | String  | image of user         |
| bio        | String  | biography of the user |

| UserChats | Type    | List of User Chats |
| --------- | ------- | ------------------ |
| user_id   | Integer | Foriegn Key        |
| chat_id   | Integer | Foriegn Key        |

<img src='/public/ERD.png' title='ERD Screenshot' width='' alt='ERD Screenshot' />

## One-to-Many Relationships

- **Chats to Messages:**
  - One chat (identified by `chat_id` in the "Chats" table) can have multiple messages.
  - This is represented by the foreign key `chat_id` in the "Message" table.
- **Users to UserChats:**
  - One user (identified by `user_id` in the "Users" table) can be associated with multiple UserChats.
  - This is represented by the foreign key `user_id` in the "UserChats" table.

## Many-to-Many Relationships

- **Users to Chats (Indirectly through UserChats):**
  - Users can participate in multiple conversations, and each conversation can have multiple participants.
  - This many-to-many relationship is established through the "UserChats" table, where each row represents a user's association with a specific conversation (`chat_id`).
