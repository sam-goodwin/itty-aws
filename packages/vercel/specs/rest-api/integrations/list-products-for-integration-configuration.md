---
title: list-products-for-integration-configuration
product: vercel
url: /docs/rest-api/integrations/list-products-for-integration-configuration
canonical_url: "https://vercel.com/docs/rest-api/integrations/list-products-for-integration-configuration"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-products-for-integration-configuration on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List products for integration configuration

```http
GET /v1/integrations/configuration/{id}/products
```

Returns products available for an integration configuration. Each product includes a `metadataSchema` field with the JSON Schema for required and optional metadata fields.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | ID of the integration configuration |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: List of products available for this integration configuration

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "configuration",
    "integration",
    "products"
  ],
  "properties": {
    "products": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "id",
          "metadataSchema",
          "name",
          "protocols",
          "slug"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "slug": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "protocols": {
            "type": "object"
          },
          "primaryProtocol": {
            "type": "string",
            "enum": [
              "ai",
              "authentication",
              "checks",
              "experimentation",
              "logDrain",
              "messaging",
              "observability",
              "other",
              "storage",
              "traceDrain",
              "video",
              "workflow"
            ]
          },
          "metadataSchema": {
            "type": "object",
            "required": [
              "properties",
              "type"
            ]
          }
        }
      }
    },
    "integration": {
      "type": "object",
      "required": [
        "id",
        "name",
        "slug"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "slug": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      }
    },
    "configuration": {
      "type": "object",
      "required": [
        "id"
      ],
      "properties": {
        "id": {
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

- [integrations endpoints](/docs/rest-api#integrations)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
