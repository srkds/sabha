# Sabha - A community angegment platform

# API DOC

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
