# Sabha - A community angegment platform


# API DOC

Common prefix: `/api/v1`

---

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
