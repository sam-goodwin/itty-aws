---
title: getobservabilityschema
product: vercel
url: /docs/rest-api/untagged/getobservabilityschema
canonical_url: "https://vercel.com/docs/rest-api/untagged/getobservabilityschema"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about getobservabilityschema on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# GET /v2/observability/schema

```http
GET /v2/observability/schema
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "metrics"
  ],
  "properties": {
    "metrics": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "description",
          "id"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        }
      }
    }
  }
}
```

### 400: No description

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [Untagged endpoints](/docs/rest-api#untagged)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
