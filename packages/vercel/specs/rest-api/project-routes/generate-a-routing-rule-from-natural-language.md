---
title: generate-a-routing-rule-from-natural-language
product: vercel
url: /docs/rest-api/project-routes/generate-a-routing-rule-from-natural-language
canonical_url: "https://vercel.com/docs/rest-api/project-routes/generate-a-routing-rule-from-natural-language"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about generate-a-routing-rule-from-natural-language on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Generate a routing rule from natural language

```http
POST /v1/projects/{projectId}/routes/generate
```

Generate a routing rule configuration from a natural language description. Returns a suggested route configuration that can be reviewed and saved.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |


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
    "prompt"
  ],
  "properties": {
    "prompt": {
      "type": "string",
      "maxLength": 2000
    },
    "currentRoute": {
      "type": "object",
      "required": [
        "pathCondition",
        "actions"
      ],
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "pathCondition": {
          "type": "object",
          "properties": {
            "value": {
              "type": "string"
            },
            "syntax": {
              "type": "string"
            }
          }
        },
        "conditions": {
          "type": "array",
          "items": {
            "type": "object"
          }
        },
        "actions": {
          "type": "array",
          "items": {
            "type": "object"
          }
        }
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
  "properties": {
    "route": {
      "type": "object",
      "required": [
        "actions",
        "description",
        "name",
        "pathCondition"
      ],
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "pathCondition": {
          "type": "object",
          "required": [
            "syntax",
            "value"
          ],
          "properties": {
            "value": {
              "type": "string"
            },
            "syntax": {
              "type": "string",
              "enum": [
                "equals",
                "path-to-regexp",
                "regex"
              ]
            }
          }
        },
        "conditions": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "field",
              "missing",
              "operator"
            ]
          }
        },
        "actions": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "type"
            ]
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

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 408: No description

### 410: No description

### 500: No description

---

## Related

- [project-routes endpoints](/docs/rest-api#project-routes)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
