---
title: delete-one-or-more-env-var
product: vercel
url: /docs/rest-api/environment/delete-one-or-more-env-var
canonical_url: "https://vercel.com/docs/rest-api/environment/delete-one-or-more-env-var"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-one-or-more-env-var on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete one or more Env Var

```http
DELETE /v1/env
```

Deletes one or many Shared Environment Variables for a given team.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "ids"
  ],
  "properties": {
    "ids": {
      "type": "array",
      "description": "IDs of the Shared Environment Variables to delete",
      "minimum": 1,
      "maximum": 50,
      "items": {
        "type": "string"
      }
    }
  }
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "deleted",
    "failed"
  ],
  "properties": {
    "deleted": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "failed": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "error"
        ],
        "properties": {
          "error": {
            "type": "object",
            "required": [
              "code",
              "message"
            ]
          }
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [environment endpoints](/docs/rest-api#environment)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
