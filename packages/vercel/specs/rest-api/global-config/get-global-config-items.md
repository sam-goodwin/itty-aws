---
title: get-global-config-items
product: vercel
url: /docs/rest-api/global-config/get-global-config-items
canonical_url: "https://vercel.com/docs/rest-api/global-config/get-global-config-items"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-global-config-items on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get Global Config items

```http
GET /v1/global-config/{edgeConfigId}/items
```

Returns all items of a Global Config.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `edgeConfigId` | string. pattern: `^ecfg_` | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: List of all Global Config items.

Content-Type: `application/json`

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "description": "The Global Config.",
    "required": [
      "createdAt",
      "edgeConfigId",
      "key",
      "updatedAt",
      "value"
    ],
    "properties": {
      "key": {
        "type": "string"
      },
      "value": {
        "nullable": true,
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "number"
          },
          {
            "type": "object"
          },
          {
            "type": "array"
          },
          {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          }
        ]
      },
      "description": {
        "type": "string"
      },
      "edgeConfigId": {
        "type": "string"
      },
      "createdAt": {
        "type": "number"
      },
      "updatedAt": {
        "type": "number"
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [global-config endpoints](/docs/rest-api#global-config)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
