---
title: get-status-of-remote-caching-for-this-principal
product: vercel
url: /docs/rest-api/artifacts/get-status-of-remote-caching-for-this-principal
canonical_url: "https://vercel.com/docs/rest-api/artifacts/get-status-of-remote-caching-for-this-principal"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-status-of-remote-caching-for-this-principal on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get status of Remote Caching for this principal

```http
GET /v8/artifacts/status
```

Check the status of Remote Caching for this principal. Returns a JSON-encoded status indicating if Remote Caching is enabled, disabled, or disabled due to usage limits.

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
  "oneOf": [
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
    },
    {
      "type": "object",
      "required": [
        "status"
      ],
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "disabled",
            "enabled",
            "over_limit",
            "paused"
          ]
        }
      }
    }
  ]
}
```

### 400: No description

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [artifacts endpoints](/docs/rest-api#artifacts)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
