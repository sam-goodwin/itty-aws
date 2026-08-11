---
title: get-all-sdk-keys
product: vercel
url: /docs/rest-api/feature-flags/get-all-sdk-keys
canonical_url: "https://vercel.com/docs/rest-api/feature-flags/get-all-sdk-keys"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-all-sdk-keys on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get all SDK keys

```http
GET /v1/projects/{projectIdOrName}/feature-flags/sdk-keys
```

Gets all SDK keys for a project.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | Yes | The project id or name |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
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
        "description": "Shared metadata for a Flags SDK key, safe to return on both LIST and CREATE. Never contains cleartext secrets.",
        "required": [
          "createdAt",
          "createdBy",
          "environment",
          "hashKey",
          "partialKeyValue",
          "projectId",
          "type",
          "updatedAt"
        ],
        "properties": {
          "hashKey": {
            "type": "string"
          },
          "projectId": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": [
              "client",
              "mobile",
              "server"
            ]
          },
          "environment": {
            "type": "string"
          },
          "createdBy": {
            "type": "string"
          },
          "createdAt": {
            "type": "number"
          },
          "updatedAt": {
            "type": "number"
          },
          "label": {
            "type": "string"
          },
          "deletedAt": {
            "type": "number"
          },
          "partialKeyValue": {
            "type": "string",
            "description": "Partially-masked representation of the SDK key value, safe to display in UIs. The value is the `vf_<type>_` prefix followed by the first 3 characters of the secret portion and a fixed 8-character `*` mask (e.g. `vf_server_abc********`)."
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
