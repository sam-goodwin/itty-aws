---
title: create-a-global-config-token
product: vercel
url: /docs/rest-api/global-config/create-a-global-config-token
canonical_url: "https://vercel.com/docs/rest-api/global-config/create-a-global-config-token"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-a-global-config-token on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create a Global Config token

```http
POST /v1/global-config/{edgeConfigId}/token
```

Adds a token to an existing Global Config.

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
    "label"
  ],
  "properties": {
    "label": {
      "type": "string",
      "maxLength": 52
    }
  }
}
```

## Responses

### 201: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "id",
    "token"
  ],
  "properties": {
    "token": {
      "type": "string"
    },
    "id": {
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

---

## Related

- [global-config endpoints](/docs/rest-api#global-config)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
