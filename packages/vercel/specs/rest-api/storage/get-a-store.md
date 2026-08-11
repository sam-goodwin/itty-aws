---
title: get-a-store
product: vercel
url: /docs/rest-api/storage/get-a-store
canonical_url: "https://vercel.com/docs/rest-api/storage/get-a-store"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-a-store on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get a store

```http
GET /storage/stores/{id}
```

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `'skip-metadata'` | boolean | No |  |
| `'include-guides'` | boolean | No |  |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "store"
  ],
  "properties": {
    "store": {
      "type": "object",
      "required": [
        "projectsMetadata",
        "status",
        "usageQuotaExceeded"
      ],
      "properties": {
        "projectsMetadata": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "envVarPrefix",
              "environmentVariables",
              "environments",
              "id",
              "name",
              "projectId"
            ]
          }
        },
        "projectFilter": {
          "type": "object",
          "properties": {
            "git": {
              "type": "object",
              "required": [
                "providers"
              ]
            }
          }
        },
        "totalConnectedProjects": {
          "type": "number"
        },
        "usageQuotaExceeded": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "status": {
          "type": "string",
          "enum": [
            "available",
            "error",
            "initializing",
            "limits-exceeded-suspended",
            "limits-exceeded-suspended-store-count",
            "onboarding",
            "suspended",
            "uninstalled",
            null
          ],
          "nullable": true
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

---

## Related

- [storage endpoints](/docs/rest-api#storage)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
