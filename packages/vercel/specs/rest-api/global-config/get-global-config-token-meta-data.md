---
title: get-global-config-token-meta-data
product: vercel
url: /docs/rest-api/global-config/get-global-config-token-meta-data
canonical_url: "https://vercel.com/docs/rest-api/global-config/get-global-config-token-meta-data"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-global-config-token-meta-data on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get Global Config token meta data

```http
GET /v1/global-config/{edgeConfigId}/token/{token}
```

Return meta data about a Global Config token.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `edgeConfigId` | string | Yes |  |
| `token` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: The Global Config.

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "The Global Config.",
  "required": [
    "createdAt",
    "edgeConfigId",
    "id",
    "label",
    "partialToken"
  ],
  "properties": {
    "partialToken": {
      "type": "string",
      "description": "A partially-masked representation of the token, safe to display in UIs. The format is the first 3 characters of the token followed by a fixed 8-character `*` mask (e.g. `550e8400-e29b-41d4-a716-446655440000` → `550********`). The mask length is intentionally fixed (not proportional to the original token length) to avoid leaking the token length. Prefer this field for display/reference in UIs and logs. The full, plaintext token is only disclosed once at creation time via `POST /v1/edge-config/:edgeConfigId/token`; use `id` to reference a token in subsequent calls (e.g. when deleting)."
    },
    "label": {
      "type": "string"
    },
    "id": {
      "type": "string",
      "description": "This is not the token itself, but rather an id to identify the token by"
    },
    "edgeConfigId": {
      "type": "string"
    },
    "createdAt": {
      "type": "number"
    },
    "token": {
      "type": "string",
      "description": "Deprecated: the full, plaintext token. - Returned once by `POST /v1/edge-config/:edgeConfigId/token` (create). - Still returned by `GET /v1/edge-config/:edgeConfigId/token/:token` (detail) for backwards compatibility, but scheduled for removal. - **Not** returned by `GET /v1/edge-config/:edgeConfigId/tokens` (list); use `partialToken` for display and `id` to reference tokens. Do not rely on this field being present on read operations. Prefer `partialToken` for display and `id` for references."
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [global-config endpoints](/docs/rest-api#global-config)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
