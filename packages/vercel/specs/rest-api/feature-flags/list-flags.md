---
title: list-flags
product: vercel
url: /docs/rest-api/feature-flags/list-flags
canonical_url: "https://vercel.com/docs/rest-api/feature-flags/list-flags"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-flags on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List flags

```http
GET /v2/projects/{projectIdOrName}/feature-flags/flags
```

Retrieve feature flags for a project. Returns an opaque cursor for pagination.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | Yes | The project id or name |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `state` | string. enum: active, archived | No | The state of the flags to retrieve. Defaults to `active`. |
| `limit` | integer. min: 1; max: 100; default: 25 | No | Maximum number of flags to return. |
| `cursor` | string | No | Pagination cursor to continue from. |
| `search` | string. maxLength: 256 | No | Search flags by their slug or description. Case-insensitive. |
| `tags` | array | No | Filter flags by tag. Repeat the parameter for multiple tags (all must match). |
| `createdBy` | string. maxLength: 256 | No | Filter flags by the id of the entity that created them (a user or team id). |
| `maintainerIds` | array | No | Filter flags by maintainer user id. Repeat the parameter for multiple maintainers (any may match). |
| `includeMarketplaceFlags` | boolean | No | Whether to include Marketplace experimentation items in the paginated response. Defaults to false. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "data",
    "pagination"
  ],
  "properties": {
    "pagination": {
      "type": "object",
      "required": [
        "next"
      ],
      "properties": {
        "next": {
          "type": "string",
          "nullable": true
        }
      }
    },
    "data": {
      "type": "array",
      "items": {
        "oneOf": [
          {
            "type": "object",
            "required": [
              "createdAt",
              "createdBy",
              "environments",
              "id",
              "kind",
              "ownerId",
              "projectId",
              "revision",
              "seed",
              "slug",
              "state",
              "typeName",
              "updatedAt",
              "variants"
            ]
          },
          {
            "type": "object",
            "required": [
              "externalId",
              "id",
              "integrationConfigurationId",
              "origin",
              "ownerId",
              "projectId",
              "resourceId",
              "slug",
              "state",
              "typeName"
            ]
          }
        ]
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
