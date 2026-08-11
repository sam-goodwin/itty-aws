---
title: create-system-bypass-rule
product: vercel
url: /docs/rest-api/security/create-system-bypass-rule
canonical_url: "https://vercel.com/docs/rest-api/security/create-system-bypass-rule"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-system-bypass-rule on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create System Bypass Rule

```http
POST /v1/security/firewall/bypass
```

Create new system bypass rules

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "domain": {
      "type": "string",
      "pattern": "([a-z]+[a-z.]+)$",
      "maxLength": 2544
    },
    "projectScope": {
      "type": "boolean",
      "description": "If the specified bypass will apply to all domains for a project."
    },
    "sourceIp": {
      "type": "string"
    },
    "allSources": {
      "type": "boolean"
    },
    "ttl": {
      "type": "number",
      "description": "Time to live in milliseconds"
    },
    "note": {
      "type": "string",
      "maxLength": 500
    }
  },
  "oneOf": [
    {
      "required": [
        "domain"
      ]
    },
    {
      "required": [
        "projectScope"
      ]
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
        "ok",
        "pagination",
        "result"
      ],
      "properties": {
        "ok": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "result": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "Domain",
              "Id",
              "IsProjectRule",
              "Note",
              "OwnerId",
              "ProjectId"
            ]
          }
        },
        "pagination": {
          "nullable": true
        }
      }
    },
    {
      "type": "object",
      "required": [
        "ok"
      ],
      "properties": {
        "ok": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "result": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "CreatedAt",
              "Domain",
              "Id",
              "Ip",
              "OwnerId",
              "UpdatedAt",
              "UpdatedAtHour"
            ]
          }
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

### 410: No description

### 500: No description

---

## Related

- [security endpoints](/docs/rest-api#security)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
