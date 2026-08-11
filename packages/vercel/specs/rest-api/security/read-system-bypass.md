---
title: read-system-bypass
product: vercel
url: /docs/rest-api/security/read-system-bypass
canonical_url: "https://vercel.com/docs/rest-api/security/read-system-bypass"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about read-system-bypass on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Read System Bypass

```http
GET /v1/security/firewall/bypass
```

Retrieve the system bypass rules configured for the specified project

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `limit` | number. max: 256 | No |  |
| `sourceIp` | string. maxLength: 49 | No | Filter by source IP |
| `domain` | string. maxLength: 2544; pattern: `([a-z]+[a-z.]+)$` | No | Filter by domain |
| `projectScope` | boolean | No | Filter by project scoped rules |
| `offset` | string. maxLength: 2560 | No | Used for pagination. Retrieves results after the provided id |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "result"
  ],
  "properties": {
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
        ],
        "properties": {
          "OwnerId": {
            "type": "string"
          },
          "Id": {
            "type": "string"
          },
          "Domain": {
            "type": "string"
          },
          "Ip": {
            "type": "string"
          },
          "Action": {
            "type": "string",
            "enum": [
              "block",
              "bypass"
            ]
          },
          "ProjectId": {
            "type": "string"
          },
          "IsProjectRule": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "Note": {
            "type": "string"
          },
          "CreatedAt": {
            "type": "string"
          },
          "ActorId": {
            "type": "string"
          },
          "UpdatedAt": {
            "type": "string"
          },
          "UpdatedAtHour": {
            "type": "string"
          },
          "DeletedAt": {
            "type": "string"
          },
          "ExpiresAt": {
            "type": "number",
            "nullable": true
          }
        }
      }
    },
    "pagination": {
      "type": "object",
      "required": [
        "Id",
        "OwnerId"
      ],
      "properties": {
        "OwnerId": {
          "type": "string"
        },
        "Id": {
          "type": "string"
        }
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

### 500: No description

---

## Related

- [security endpoints](/docs/rest-api#security)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
