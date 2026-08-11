---
title: delete-one-or-more-global-config-tokens
product: vercel
url: /docs/rest-api/global-config/delete-one-or-more-global-config-tokens
canonical_url: "https://vercel.com/docs/rest-api/global-config/delete-one-or-more-global-config-tokens"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-one-or-more-global-config-tokens on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete one or more Global Config tokens

```http
DELETE /v1/global-config/{edgeConfigId}/tokens
```

Deletes one or more tokens of an existing Global Config.

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
  "properties": {
    "tokens": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "ids": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "anyOf": [
    {
      "required": [
        "tokens"
      ]
    },
    {
      "required": [
        "ids"
      ]
    }
  ]
}
```

## Responses

### 204: No description

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
