---
title: list-image-tags
product: vercel
url: /docs/rest-api/vcr/list-image-tags
canonical_url: "https://vercel.com/docs/rest-api/vcr/list-image-tags"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-image-tags on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List image tags

```http
GET /v2/{teamSlug}/{projectSlug}/{repositoryName}/tags/list
```

GET /v2/:teamSlug/:projectSlug/:repositoryName/tags/list List the tags in a repository.

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamSlug` | string. maxLength: 255; pattern: `^[a-z0-9](?:[a-z0-9-]{0,46}[a-z0-9])?$` | Yes | Single Docker repository team slug component. |
| `projectSlug` | string. maxLength: 255; pattern: `^[a-z0-9](?:[a-z0-9-]{0,46}[a-z0-9])?$` | Yes | Single Docker repository project slug component. |
| `repositoryName` | string. maxLength: 255; pattern: `^[a-z0-9]+(?:(?:\\.|_|__|-+)[a-z0-9]+)*$` | Yes | Single Docker repository name component. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `n` | integer. min: 1; max: 1000 | No |  |
| `last` | string. maxLength: 1024 | No | Opaque pagination cursor returned by a previous list response. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "name",
    "tags"
  ],
  "properties": {
    "name": {
      "type": "string"
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string"
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

- [vcr endpoints](/docs/rest-api#vcr)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
