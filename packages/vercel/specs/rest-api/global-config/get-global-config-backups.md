---
title: get-global-config-backups
product: vercel
url: /docs/rest-api/global-config/get-global-config-backups
canonical_url: "https://vercel.com/docs/rest-api/global-config/get-global-config-backups"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-global-config-backups on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get Global Config backups

```http
GET /v1/global-config/{edgeConfigId}/backups
```

Returns backups of a Global Config.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `edgeConfigId` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `next` | string | No |  |
| `limit` | number. min: 0; max: 50 | No |  |
| `metadata` | string | No |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "backups",
    "pagination"
  ],
  "properties": {
    "backups": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "id",
          "lastModified"
        ],
        "properties": {
          "metadata": {
            "type": "object"
          },
          "id": {
            "type": "string"
          },
          "lastModified": {
            "type": "number"
          }
        }
      }
    },
    "pagination": {
      "type": "object",
      "required": [
        "hasNext"
      ],
      "properties": {
        "hasNext": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "next": {
          "type": "string"
        }
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
