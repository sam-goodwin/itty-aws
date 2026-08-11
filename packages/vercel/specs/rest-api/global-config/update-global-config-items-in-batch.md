---
title: update-global-config-items-in-batch
product: vercel
url: /docs/rest-api/global-config/update-global-config-items-in-batch
canonical_url: "https://vercel.com/docs/rest-api/global-config/update-global-config-items-in-batch"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-global-config-items-in-batch on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update Global Config items in batch

```http
PATCH /v1/global-config/{edgeConfigId}/items
```

Update multiple Global Config Items in batch.

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


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "items"
  ],
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "oneOf": [
          {
            "type": "object"
          }
        ]
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
    "status"
  ],
  "properties": {
    "status": {
      "type": "string"
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

### 412: No description

---

## Related

- [global-config endpoints](/docs/rest-api#global-config)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
