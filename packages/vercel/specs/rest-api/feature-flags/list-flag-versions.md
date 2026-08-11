---
title: list-flag-versions
product: vercel
url: /docs/rest-api/feature-flags/list-flag-versions
canonical_url: "https://vercel.com/docs/rest-api/feature-flags/list-flag-versions"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-flag-versions on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List flag versions

```http
GET /v1/projects/{projectIdOrName}/feature-flags/flags/{flagIdOrSlug}/versions
```

Lists flag versions for a given flag.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | Yes |  |
| `flagIdOrSlug` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `limit` | number. min: 1; max: 100; default: 20 | No |  |
| `cursor` | string | No | Pagination cursor |
| `environment` | string | No | Environment to filter by |
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
    "pagination",
    "versions"
  ],
  "properties": {
    "versions": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "changedEnvironments",
          "createdAt",
          "data",
          "flagId",
          "id",
          "revision"
        ],
        "properties": {
          "createdBy": {
            "type": "string"
          },
          "message": {
            "type": "string"
          },
          "data": {
            "type": "object",
            "required": [
              "environments",
              "seed",
              "state",
              "variants"
            ]
          },
          "id": {
            "type": "string"
          },
          "revision": {
            "type": "number"
          },
          "createdAt": {
            "type": "number"
          },
          "flagId": {
            "type": "string"
          },
          "changedEnvironments": {
            "type": "array"
          },
          "metadata": {
            "type": "object"
          }
        }
      }
    },
    "pagination": {
      "type": "object"
    }
  }
}
```

### 304: No description

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
