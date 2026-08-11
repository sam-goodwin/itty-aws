---
title: list-rules
product: vercel
url: /docs/rest-api/ai-gateway/list-rules
canonical_url: "https://vercel.com/docs/rest-api/ai-gateway/list-rules"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-rules on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List rules

```http
GET /v1/ai-gateway/rules
```

List the authenticated team's routing rules

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `includeDisabled` | string. enum: true, false | No |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "rules"
  ],
  "properties": {
    "rules": {
      "type": "array",
      "items": {
        "type": "object",
        "description": "Public response shape for AI Gateway routing rules. Used so OpenAPI generation can avoid ElectroDB's recursive EntityItem types.",
        "required": [
          "createdAt",
          "enabled",
          "ownerId",
          "ruleId",
          "type",
          "updatedAt"
        ],
        "properties": {
          "ownerId": {
            "type": "string"
          },
          "ruleId": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": [
              "deny",
              "rewrite"
            ]
          },
          "match": {
            "type": "object"
          },
          "action": {
            "type": "object"
          },
          "enabled": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "deleted": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "description": {
            "type": "string"
          },
          "createdBy": {
            "type": "string"
          },
          "updatedBy": {
            "type": "string"
          },
          "createdAt": {
            "type": "number"
          },
          "updatedAt": {
            "type": "number"
          }
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

### 500: No description

---

## Related

- [ai-gateway endpoints](/docs/rest-api#ai-gateway)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
