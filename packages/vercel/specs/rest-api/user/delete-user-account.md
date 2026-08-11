---
title: delete-user-account
product: vercel
url: /docs/rest-api/user/delete-user-account
canonical_url: "https://vercel.com/docs/rest-api/user/delete-user-account"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-user-account on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete User Account

```http
DELETE /v1/user
```

Initiates the deletion process for the currently authenticated User, by sending a deletion confirmation email. The email contains a link that the user needs to visit in order to proceed with the deletion process.

## Authentication

**bearerToken**: HTTP bearer

## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "reasons": {
      "type": "array",
      "description": "Optional array of objects that describe the reason why the User account is being deleted.",
      "items": {
        "type": "object",
        "description": "An object describing the reason why the User account is being deleted.",
        "required": [
          "slug",
          "description"
        ],
        "properties": {
          "slug": {
            "type": "string",
            "description": "Idenitifier slug of the reason why the User account is being deleted."
          },
          "description": {
            "type": "string",
            "description": "Description of the reason why the User account is being deleted."
          }
        }
      }
    }
  }
}
```

## Responses

### 202: Response indicating that the User deletion process has been initiated, and a confirmation email has been sent.

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "email",
    "id",
    "message"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Unique identifier of the User who has initiated deletion."
    },
    "email": {
      "type": "string",
      "description": "Email address of the User who has initiated deletion."
    },
    "message": {
      "type": "string",
      "description": "User deletion progress status."
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.

### 401: No description

### 402: No description

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [user endpoints](/docs/rest-api#user)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
