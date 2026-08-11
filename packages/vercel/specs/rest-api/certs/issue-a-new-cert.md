---
title: issue-a-new-cert
product: vercel
url: /docs/rest-api/certs/issue-a-new-cert
canonical_url: "https://vercel.com/docs/rest-api/certs/issue-a-new-cert"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about issue-a-new-cert on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Issue a new cert

```http
POST /v8/certs
```

Issue a new cert

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
  "properties": {
    "cns": {
      "type": "array",
      "description": "The common names the cert should be issued for",
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

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 449: No description

### 500: No description

---

## Related

- [certs endpoints](/docs/rest-api#certs)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
