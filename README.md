# Sabha - A community engagment platform

# 💻 Installation

Clone this project to your local pc.

Run below given command to install required dependencies.

```sh
npm install
```

In root directory create `.env` file and setup environment variables. Take help from `.env.example`

Setup DB_URL `mongodb://localhost:27017/local_sabha_db_name`

Run sabha project using 

```sh
npm start
````

Make use of API doc to test all API endpoints.

# 🧪 Test
We are using Chai and Mocha for testing the API. For running testcases use following command
```sh
npm test
```

# 🎭 Actors

👨‍🏫 **Speaker** Creates poll to know the opinions from an audience.

    - Creates poll
    - Shares poll link for votes to audience
    - See all the polls they created.
    - See individual poll details.
    - And finally can get result of a poll.

👨‍👦‍👦 **Audience** Gives a vote/opinion for poll given by speaker



# ✍ API DOC

Common prefix: `/api/v1`

## Auth

<details>
    <summary>Signup</summary>
	
    Method: `POST`
    Path: `/signup`
    Body:
        {
            "name" : "Nirav",
            "email": "nirav@nirav.com",
            "password": "123",
            "bio": "optional"
        }
    Response:
        {
            "name": "Nirav",
            "email": "nirav@nirav.com",
            "id": "UUID"
        }
</details>

<details>
    <summary>Signin</summary>
	
    Method: `POST`
    Path: `/signin`
    Body:
        {
            "email": "nirav@nirav.com",
            "password": "password"
        }
    Response:
        {
            "token": "JWT TOKEN",
            "user": {
                "_id": "324300ebb75c297fb3682",
                "name": "Nirav",
                "email": "nirav@nirav.com"
            }
        }
</details>

<details>
    <summary>Signout</summary>
	
    Method: `GET`
    Path: `/signout`
    Body:
    Response:
        {
            "message": "Successfuly Signout"
        }
</details>

## Poll

<details>
    <summary>Create Poll</summary>
	
    Method: `POST`
    Path: `/poll`
    Body:
        {
            "question": String,
            "options": [{"name": String, "count": Number}],
            "speaker": "ObjectId"
        }
    Response: Created Object
</details>

<details>
    <summary>Vote a Poll</summary>
	
    Method: `PUT`
    Path: `/poll/vote/:optionId`
    Body:none
    Response: 
            {
                "message": "Your Vote added!"
            }
</details>

<details>
    <summary>Poll results</summary>
	
    Method: `GET`
    Path: `/poll/:pollId/results`
    Body:none
    Response: 
            [
                {
                    "name": "Yes",
                    "percentage": 40
                },
                {
                    "name": "No",
                    "percentage": 60
                }
            ]
</details>

<details>
    <summary>Get all polls</summary>
	
    Method: `GET`
    Path: `/poll`
    Body:none
    Response: 
            {
                "polls": [
                    {
                        "_id": "62d813f5eb197c1748165ed2",
                        "question": "I know event loop in JS"
                    },
                    {
                        "_id": "62d815f36daba3a347537d33",
                        "question": "I know event loop in Coding"
                    },
                    {
                        "_id": "62d816a43d05eb8a30d34805",
                        "question": "I know event loop in Coding"
                    }
                ]
            }
</details>

<details>
    <summary>Get Single Poll</summary>
	
    Method: `GET`
    Path: `/poll/:pollId`
    Body:none
    Response: 
            {
                "poll": {
                    "_id": "62d813f5eb197c1748165ed2",
                    "question": "I know event loop in JS",
                    "options": [
                        {
                            "name": "Yes",
                            "count": 2,
                            "_id": "62d813f5eb197c1748165ed3"
                        },
                        {
                            "name": "No",
                            "count": 4,
                            "_id": "62d813f5eb197c1748165ed4"
                        }
                    ],
                    "speaker": "62d572900ebb75c297fb3682",
                    "createdAt": "2022-07-20T14:40:53.910Z",
                    "updatedAt": "2022-07-21T16:28:19.964Z",
                    "__v": 0
                }
            }
</details>
