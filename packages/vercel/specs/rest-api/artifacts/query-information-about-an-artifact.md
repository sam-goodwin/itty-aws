---
title: query-information-about-an-artifact
product: vercel
url: /docs/rest-api/artifacts/query-information-about-an-artifact
canonical_url: "https://vercel.com/docs/rest-api/artifacts/query-information-about-an-artifact"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about query-information-about-an-artifact on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Query information about an artifact

```http
POST /v8/artifacts
```

Query information about an array of artifacts.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "hashes"
  ],
  "properties": {
    "hashes": {
      "type": "array",
      "description": "artifact hashes",
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
  "additionalProperties": {
    "nullable": true,
    "oneOf": [
      {
        "type": "object",
        "required": [
          "size",
          "taskDurationMs"
        ],
        "properties": {
          "size": {
            "type": "number"
          },
          "taskDurationMs": {
            "type": "number"
          },
          "tag": {
            "type": "string"
          },
          "sha": {
            "type": "string"
          },
          "dirtyHash": {
            "type": "string"
          }
        }
      },
      {
        "type": "object",
        "required": [
          "error"
        ],
        "properties": {
          "error": {
            "type": "object",
            "required": [
              "message"
            ]
          }
        }
      }
    ]
  }
}
```

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.
The Remote Caching usage limit has been reached for this account for this billing cycle.
Remote Caching has been disabled for this team or user. An owner can enable it in the billing settings.
You do not have permission to access this resource.

### 410: No description

---

## Related

- [artifacts endpoints](/docs/rest-api#artifacts)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
