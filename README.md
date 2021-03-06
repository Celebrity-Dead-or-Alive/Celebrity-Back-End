=============== Git Flow ================

1. Clone the project.

2. Create/checkout to a branch with your name: git checkout -b [your name goes here]

3. Once you have completed a task you were working on, make sure to: * git add . * git commit -m "here goes the message" * git push origin [your personal branch name here]

4. Checkout back to master branch

5. Run bash command: git fetch

6. Pull from master: git pull origin master

7. Check if there are any merge conflicts, and fix them if there are any.

8. While remaining in the master branch, pull the code from your personal branch that you previously pushed: git pull origin [your personal branch name]

9. Check for conflicts again, and make sure the localhost website is running without any errors.

10. If everything is good, push to master: git push origin master

11. In the terminal, checkout to your personal branch again: git checkout [your personal branch name]

12. Update your personal branch with the master: git pull origin master

13. Continue coding!




API DOCUMENTATIONS:

*baseURL localhost* = `localhost:5000`
*baseURL deployed* = `https://celebs-back-end.herokuapp.com/`

==================== LOGIN && REGISTER ENDPOINTS START HERE =======================
=========================================================================

<h1>[X] NON-Protected Routes</h1>


<h1>Login a user</h1>

*method url*: `/api/auth/login`

*http method*: **[POST]**

- Body

| name       | type   | required | description              |
| ---------- | ------ | :------: | ------------------------ |
| `username` | String |   Yes    | must be registered email |
| `password` | String |   Yes    |                          |


- Example
```
  {
    username: 'elan@gmail.com',
    password: 'pass',
  }
  ```
- Response
##### 200 (ok)

```
{
    message: 'Logged In! Your ID is 5',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJlbWFpbCI6ImJwb2x0bEBnbWFpbC5jb20iLCJpYXQiOjE1NTU5NzAyMjMsImV4cCI6MTU1NjA1NjYyM30.lWi9hhalGt2ftr4Ju_jP12dCavZgXAMwABGYPzltwr8'
}
```
##### 401 (Unauthorized)
###### Example response
  ```
 { 
 message: "Please Provide Correct Credentials"
 }
 ```

##### 400 (Bad Request)
###### Example response
  ```
 { 
 message: "Please fill out the required fields!"
 }
 ```



<h1>Register a user</h1>

*method url*: `/api/auth/register`

*http method*: **[POST]**

- Body

| name        | type   | required | description    |
| ----------- | ------ | :------: | -------------- |
| `firstName` | String |   Yes    |                |
| `lastName`  | String |   Yes    |                |
| `email`     | String |   Yes    | must be unique |
| `username`  | String |   Yes    | must be unique |
| `password`  | String |   Yes    |                |



- Example
```
  {
    username: 'johndoe',
    password: 'pass',
  }
  ```
- Response
##### 201 (Created)

```
{
    message: 'Successfully Registered!',
}
```
##### 400 (Bad Request)
###### Example response
  ```
 { 
 message: "Please fill out all the required fields!
 }
 ```

##### 400 (Bad Request)
###### Example response
  ```
 { 
 message: "This username already exists"
 }
 ```
##### 400 (Bad Request)
###### Example response
  ```
 { 
 message: "This email already exists!"
 }
 ```
##### 500 (Internal Server Error)
###### Example response
  ```
 { 
 message: "Something went wrong with the server!"
 }
 ```


<h1>20 Random Celebrities</h1>

*method url*: `/api/celebs`

*http method*: **[GET]**

- Body: Not needed!

- Response
##### 200 (Ok)
###### Example response

```
[
  {
    "id": 169,
    "name": "Ayrton Senna",
    "info": "Brazilian racing driver",
    "birth": 1960,
    "death": 1994,
    "image_url": "http://static.tvmaze.com/uploads/images/medium_portrait/205/514773.jpg"
  },
  {
    "id": 82,
    "name": "Richard E. Grant",
    "info": "British actor",
    "birth": 1957,
    "death": 0,
    "image_url": "http://static.tvmaze.com/uploads/images/medium_portrait/5/12791.jpg"
  },
  {
    "id": 3,
    "name": "Marvin Gaye",
    "info": "American singer-songwriter",
    "birth": 1939,
    "death": 1984,
    "image_url": "http://static.tvmaze.com/uploads/images/medium_portrait/68/171783.jpg"
  }
  .
  .
  .
  .
  .
  .
  .
  .
]
```

##### 500 (Internal Server Error)
###### Example response
  ```
 { 
 message: "Something went wrong with the server!"
 }

 =========================== USERS ENDPOINTS START HERE ===========================
  ```

 <h1>Retrieve all registered users</h1>

*method url*: `/api/users/`

*http method*: **[GET]**

- Body: Not needed!

- Response
##### 200 (ok)

```
{
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "username": "johndoe123",
    "password": "$2a$04$tGsmB.ES.aHkHZFcMjMPL.3OEuOeNsW71JiNPzYFvZtTDNlISG8uC",
    "email": "john@gmail.com"
  },
  {
    "id": 2,
    "firstName": "Jane",
    "lastName": "Doe",
    "username": "janedoe",
    "password": "$2a$04$G1pt0rcev80eijP7GIgyKOxT6vm8woPA0i.DK8jFsIe6fh1rZ3Q7u",
    "email": "jane@gmail.com"
  }
}
```

##### 401 (Unauthorized)
###### Example response
  ```
 { 
 message: "User must be logged in to view users"
 }
 ```

##### 500 (Internal Server Error)
###### Example response
  ```
 { 
 message: "Something went wrong with the server!"
 }
 ```

  <h1>Retrieve logged in user</h1>

*method url*: `/api/users/loggedin`

*http method*: **[GET]**

- Body: Not needed!

- Response
##### 200 (ok)

```
{
    "id": 5,
    "firstName": "Elizabeth",
    "lastName": "Olsen",
    "username": "lizolsen",
    "password": "$2a$04$Bvqk9C1ct1313IrOluDh4e/ZNxV1WCJoddzqYHEwv5wOcUkr9vcii",
    "email": "lizolsen@gmail.com"
}
```

##### 401 (Unauthorized)
###### Example response
  ```
 { 
 message: "User not logged in"
 }
 ```

 ##### 500 (Internal Server Error)
###### Example response
  ```
 { 
 message: "Something went wrong with the server!"
 }
 ```

   <h1>Retrieve all users scores</h1>

*method url*: `/api/scores`

*http method*: **[GET]**

- Body: Not needed!

- Response
##### 200 (ok)

```
[
    {
        "id": 1,
        "user_id": 5,
        "total": 7,
        "correctAnswer": 7,
        "wrongAnswer": 13,
        "time": "1min"
    },
    {
      "id": 2,
      "user_id": 6,
      "total": 10,
      "correctAnswer": 10,
      "wrongAnswer": 10,
      "time": "1min, 15sec"
    }
]
```

##### 401 (Unauthorized)
###### Example response
  ```
 { 
 message: "User must be logged in to view scores"
 }
 ```

 ##### 500 (Internal Server Error)
###### Example response
  ```
 { 
 message: "Something went wrong with the server!"
 }
 ```

  <h1>Retrieve logged in users score</h1>

*method url*: `/api/scores/userScore`

*http method*: **[GET]**

- Body: Not needed!

- Response
##### 200 (ok)

```
[
    {
        "id": 1,
        "user_id": 5,
        "total": 7,
        "correctAnswer": 7,
        "wrongAnswer": 13,
        "time": "1min"
    }
]
```

##### 401 (Unauthorized)
###### Example response
  ```
 { 
 message: "User not logged in"
 }
 ```

 ##### 500 (Internal Server Error)
###### Example response
  ```
 { 
 message: "Something went wrong with the server!"
 }
 ```

   <h1>Add a users score</h1>   

*method url*: `/api/scores/userScore`

*http method*: **[POST]**

- Body

| name             | type    | required |
| ---------------- | ------- | :------: |
| `total`          | Integer |   Yes    |
| `correctAnswer`  | Integer |   Yes    |
| `wrongAnswer`    | Integer |   Yes    |
| `time`           | String  |   Yes    |

- Response
##### 201 (created)

##### 401 (Unauthorized)
###### Example response
  ```
 { 
 message: "User must be logged in to add score"
 }
 ```

 ##### 500 (Internal Server Error)
###### Example response
  ```
 { 
 message: "Something went wrong with the server!"
 }
 ```
