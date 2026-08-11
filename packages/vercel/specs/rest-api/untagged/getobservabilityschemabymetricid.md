---
title: getobservabilityschemabymetricid
product: vercel
url: /docs/rest-api/untagged/getobservabilityschemabymetricid
canonical_url: "https://vercel.com/docs/rest-api/untagged/getobservabilityschemabymetricid"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about getobservabilityschemabymetricid on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# GET /v2/observability/schema/{metricId}

```http
GET /v2/observability/schema/{metricId}
```

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `metricId` | string | Yes |  |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "required": [
      "aggregations",
      "defaultAggregation",
      "description",
      "dimensions",
      "id",
      "unit"
    ],
    "properties": {
      "id": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "dimensions": {
        "type": "array",
        "items": {
          "type": "object",
          "required": [
            "label",
            "name"
          ]
        }
      },
      "unit": {
        "type": "string"
      },
      "aggregations": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "defaultAggregation": {
        "type": "string"
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

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
