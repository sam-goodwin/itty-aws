---
title: upload-a-cert
product: vercel
url: /docs/rest-api/certs/upload-a-cert
canonical_url: "https://vercel.com/docs/rest-api/certs/upload-a-cert"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about upload-a-cert on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Upload a cert

```http
PUT /v8/certs
```

Upload a cert

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
    "ca",
    "key",
    "cert"
  ],
  "properties": {
    "ca": {
      "type": "string",
      "description": "The certificate authority"
    },
    "key": {
      "type": "string",
      "description": "The certificate key"
    },
    "cert": {
      "type": "string",
      "description": "The certificate"
    },
    "skipValidation": {
      "type": "boolean",
      "description": "Skip validation of the certificate"
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

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 402: This feature is only available for Enterprise customers.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [certs endpoints](/docs/rest-api#certs)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
