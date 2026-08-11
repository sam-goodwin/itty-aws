---
title: create-an-auth-token
product: vercel
url: /docs/rest-api/authentication/create-an-auth-token
canonical_url: "https://vercel.com/docs/rest-api/authentication/create-an-auth-token"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-an-auth-token on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create an Auth Token

```http
POST /v3/user/tokens
```

Creates and returns a new authentication token for the currently authenticated User. The `bearerToken` property is only provided once, in the response body, so be sure to save it on the client for use with API requests.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "name"
  ],
  "properties": {
    "name": {
      "type": "string"
    },
    "expiresAt": {
      "type": "number"
    },
    "projectId": {
      "type": "string",
      "description": "The ID of the project to scope this token to"
    }
  }
}
```

## Responses

### 200: Successful response.

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "Successful response.",
  "required": [
    "bearerToken",
    "token"
  ],
  "properties": {
    "token": {
      "type": "object",
      "description": "Authentication token metadata.",
      "required": [
        "activeAt",
        "createdAt",
        "id",
        "name",
        "type"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "The unique identifier of the token."
        },
        "name": {
          "type": "string",
          "description": "The human-readable name of the token."
        },
        "type": {
          "type": "string",
          "description": "The type of the token."
        },
        "prefix": {
          "type": "string",
          "description": "The token's prefix, for identification purposes."
        },
        "suffix": {
          "type": "string",
          "description": "The last few characters of the token, for identification purposes."
        },
        "origin": {
          "type": "string",
          "description": "The origin of how the token was created."
        },
        "scopes": {
          "type": "array",
          "description": "The access scopes granted to the token.",
          "items": {}
        },
        "createdAt": {
          "type": "number",
          "description": "Timestamp (in milliseconds) of when the token was created."
        },
        "activeAt": {
          "type": "number",
          "description": "Timestamp (in milliseconds) of when the token was most recently used."
        },
        "expiresAt": {
          "type": "number",
          "description": "Timestamp (in milliseconds) of when the token expires."
        },
        "revokedAt": {
          "type": "number",
          "description": "Timestamp (in milliseconds) of when the token was revoked."
        },
        "leakedAt": {
          "type": "number",
          "description": "Timestamp (in milliseconds) of when the token was marked as leaked."
        },
        "leakedUrl": {
          "type": "string",
          "description": "URL where the token was discovered as leaked."
        }
      }
    },
    "bearerToken": {
      "type": "string",
      "description": "The authentication token's actual value. This token is only provided in this response, and can never be retrieved again in the future. Be sure to save it somewhere safe!"
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [authentication endpoints](/docs/rest-api#authentication)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
