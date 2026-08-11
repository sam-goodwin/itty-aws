---
title: list-segments
product: vercel
url: /docs/rest-api/feature-flags/list-segments
canonical_url: "https://vercel.com/docs/rest-api/feature-flags/list-segments"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-segments on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List segments

```http
GET /v1/projects/{projectIdOrName}/feature-flags/segments
```

List all feature flag segments for a project.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | Yes | The project id or name |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `withMetadata` | boolean. default: false | No | Whether to include metadata |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "data"
  ],
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "createdAt",
          "data",
          "hint",
          "id",
          "label",
          "projectId",
          "slug",
          "typeName",
          "updatedAt"
        ],
        "properties": {
          "description": {
            "type": "string"
          },
          "createdBy": {
            "type": "string"
          },
          "usedByFlags": {
            "type": "array"
          },
          "usedBySegments": {
            "type": "array"
          },
          "data": {
            "type": "object"
          },
          "id": {
            "type": "string"
          },
          "label": {
            "type": "string"
          },
          "slug": {
            "type": "string"
          },
          "createdAt": {
            "type": "number"
          },
          "updatedAt": {
            "type": "number"
          },
          "projectId": {
            "type": "string"
          },
          "typeName": {
            "type": "string",
            "enum": [
              "segment"
            ]
          },
          "hint": {
            "type": "string"
          },
          "metadata": {
            "type": "object"
          }
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [feature-flags endpoints](/docs/rest-api#feature-flags)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
