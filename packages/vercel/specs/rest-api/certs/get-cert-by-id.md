---
title: get-cert-by-id
product: vercel
url: /docs/rest-api/certs/get-cert-by-id
canonical_url: "https://vercel.com/docs/rest-api/certs/get-cert-by-id"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-cert-by-id on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get cert by id

```http
GET /v8/certs/{id}
```

Get cert by id

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | The cert id |


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
      "type": "array",
      "items": {
        "type": "string"
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

- [certs endpoints](/docs/rest-api#certs)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
