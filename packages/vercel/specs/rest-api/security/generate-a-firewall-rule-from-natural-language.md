---
title: generate-a-firewall-rule-from-natural-language
product: vercel
url: /docs/rest-api/security/generate-a-firewall-rule-from-natural-language
canonical_url: "https://vercel.com/docs/rest-api/security/generate-a-firewall-rule-from-natural-language"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about generate-a-firewall-rule-from-natural-language on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Generate a firewall rule from natural language

```http
POST /v1/security/firewall/config/generate-rule
```

Generate a firewall rule from a natural language description.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | No |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "rule": {
      "type": "object",
      "required": [
        "action",
        "active",
        "conditionGroup",
        "name"
      ],
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "active": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "conditionGroup": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "conditions"
            ]
          }
        },
        "action": {
          "type": "object",
          "properties": {
            "mitigate": {
              "type": "object",
              "required": [
                "action"
              ]
            }
          }
        }
      }
    },
    "error": {
      "type": "string"
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 408: No description

### 410: No description

### 500: No description

---

## Related

- [security endpoints](/docs/rest-api#security)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
