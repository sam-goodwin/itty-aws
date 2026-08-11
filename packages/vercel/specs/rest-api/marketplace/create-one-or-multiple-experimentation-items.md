---
title: create-one-or-multiple-experimentation-items
product: vercel
url: /docs/rest-api/marketplace/create-one-or-multiple-experimentation-items
canonical_url: "https://vercel.com/docs/rest-api/marketplace/create-one-or-multiple-experimentation-items"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-one-or-multiple-experimentation-items on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create one or multiple experimentation items

```http
POST /v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items
```

Create one or multiple experimentation items

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationConfigurationId` | string | Yes |  |
| `resourceId` | string | Yes |  |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "items"
  ],
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "id",
          "slug",
          "origin"
        ],
        "properties": {
          "id": {
            "type": "string",
            "maxLength": 1024
          },
          "slug": {
            "type": "string",
            "maxLength": 1024
          },
          "origin": {
            "type": "string",
            "maxLength": 2048
          },
          "category": {
            "type": "string",
            "enum": [
              "experiment",
              "flag"
            ]
          },
          "name": {
            "type": "string",
            "maxLength": 1024
          },
          "description": {
            "type": "string",
            "maxLength": 1024
          },
          "isArchived": {
            "type": "boolean"
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

## Responses

### 204: The items were created

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [marketplace endpoints](/docs/rest-api#marketplace)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
