---
title: createwebinsightstoggle
product: vercel
url: /docs/rest-api/untagged/createwebinsightstoggle
canonical_url: "https://vercel.com/docs/rest-api/untagged/createwebinsightstoggle"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about createwebinsightstoggle on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# POST /web/insights/toggle

```http
POST /web/insights/toggle
```

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "value"
  ],
  "properties": {
    "value": {
      "type": "boolean"
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
  "required": [
    "value"
  ],
  "properties": {
    "value": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

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
