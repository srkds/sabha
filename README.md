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
