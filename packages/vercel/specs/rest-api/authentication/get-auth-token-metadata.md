---
title: get-auth-token-metadata
product: vercel
url: /docs/rest-api/authentication/get-auth-token-metadata
canonical_url: "https://vercel.com/docs/rest-api/authentication/get-auth-token-metadata"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-auth-token-metadata on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get Auth Token Metadata

```http
GET /v5/user/tokens/{tokenId}
```

Retrieve metadata about an authentication token belonging to the currently authenticated User.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `tokenId` | string | Yes | The identifier of the token to retrieve. The special value "current" may be supplied, which returns the metadata for the token that the current HTTP request is authenticated with. |


## Responses

### 200: Successful response.

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "Successful response.",
  "required": [
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
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: No description

### 403: You do not have permission to access this resource.

### 404: Token not found with the requested `tokenId`.

### 410: No description

---

## Related

- [authentication endpoints](/docs/rest-api#authentication)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
