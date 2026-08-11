---
title: update-or-move-apex-domain
product: vercel
url: /docs/rest-api/domains/update-or-move-apex-domain
canonical_url: "https://vercel.com/docs/rest-api/domains/update-or-move-apex-domain"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-or-move-apex-domain on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update or move apex domain

```http
PATCH /v3/domains/{domain}
```

Update or move apex domain. Note: This endpoint is no longer used for updating auto-renew or nameservers. For this, please use the endpoints [Update auto-renew for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-auto-renew-for-a-domain) and [Update nameservers for a domain](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/update-nameservers-for-a-domain).

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `domain` | string | Yes |  |


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
  "oneOf": [
    {
      "type": "object",
      "description": "update",
      "properties": {
        "op": {
          "type": "string"
        },
        "renew": {
          "type": "boolean",
          "description": "This field is deprecated. Please use PATCH /v1/registrar/domains/{domainName}/auto-renew instead."
        },
        "customNameservers": {
          "type": "array",
          "description": "This field is deprecated. Please use PATCH /v1/registrar/domains/{domainName}/nameservers instead.",
          "items": {
            "type": "string"
          }
        },
        "zone": {
          "type": "boolean",
          "description": "Specifies whether this is a DNS zone that intends to use Vercel's nameservers."
        }
      }
    },
    {
      "type": "object",
      "description": "move-out",
      "properties": {
        "op": {
          "type": "string"
        },
        "destination": {
          "type": "string",
          "description": "User or team to move domain to"
        }
      }
    }
  ]
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object",
      "required": [
        "moved"
      ],
      "properties": {
        "moved": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        }
      }
    },
    {
      "type": "object",
      "required": [
        "moved",
        "token"
      ],
      "properties": {
        "moved": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "token": {
          "type": "string"
        }
      }
    },
    {
      "type": "object",
      "properties": {
        "renew": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "customNameservers": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "zone": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        }
      }
    }
  ]
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

### 500: No description

---

## Related

- [domains endpoints](/docs/rest-api#domains)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
