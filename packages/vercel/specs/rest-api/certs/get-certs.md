---
title: get-certs
product: vercel
url: /docs/rest-api/certs/get-certs
canonical_url: "https://vercel.com/docs/rest-api/certs/get-certs"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-certs on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get certs

```http
GET /v8/certs
```

Get certs

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "certs",
    "pagination"
  ],
  "properties": {
    "certs": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "autoRenew",
          "cns",
          "createdAt",
          "expiresAt",
          "id"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "createdAt": {
            "type": "number"
          },
          "expiresAt": {
            "type": "number"
          },
          "autoRenew": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "cns": {
            "type": "array"
          }
        }
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
```

### 400: No description

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [certs endpoints](/docs/rest-api#certs)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
