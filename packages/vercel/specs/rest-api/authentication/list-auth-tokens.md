---
title: list-auth-tokens
product: vercel
url: /docs/rest-api/authentication/list-auth-tokens
canonical_url: "https://vercel.com/docs/rest-api/authentication/list-auth-tokens"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-auth-tokens on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List Auth Tokens

```http
GET /v6/user/tokens
```

Retrieve a list of the current User's authentication tokens.

## Authentication

**bearerToken**: HTTP bearer

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object",
      "required": [
        "pagination",
        "tokens"
      ],
      "properties": {
        "tokens": {
          "type": "array",
          "items": {
            "type": "object",
            "description": "Authentication token metadata.",
            "required": [
              "activeAt",
              "createdAt",
              "id",
              "name",
              "type"
            ]
          }
        },
        "pagination": {
          "type": "object",
          "required": [
            "count",
            "next",
            "prev"
          ],
          "properties": {
            "count": {
              "type": "number"
            },
            "next": {
              "type": "string",
              "nullable": true
            },
            "prev": {
              "type": "string",
              "nullable": true
            }
          }
        }
      }
    },
    {
      "type": "object",
      "required": [
        "pagination",
        "tokens"
      ],
      "properties": {
        "tokens": {
          "type": "array",
          "items": {
            "type": "object",
            "description": "Authentication token metadata.",
            "required": [
              "activeAt",
              "createdAt",
              "id",
              "name",
              "type"
            ]
          }
        },
        "pagination": {
          "type": "object",
          "description": "This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.",
          "required": [
            "count",
            "next",
            "prev"
          ],
          "properties": {
            "count": {
              "type": "number",
              "description": "Amount of items in the current page."
            },
            "next": {
              "type": "number",
              "description": "Timestamp that must be used to request the next page.",
              "nullable": true
            },
            "prev": {
              "type": "number",
              "description": "Timestamp that must be used to request the previous page.",
              "nullable": true
            }
          }
        }
      }
    }
  ]
}
```

### 400: No description

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [authentication endpoints](/docs/rest-api#authentication)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
