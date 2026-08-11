---
title: get-the-data-of-a-user-provided-global-config
product: vercel
url: /docs/rest-api/marketplace/get-the-data-of-a-user-provided-global-config
canonical_url: "https://vercel.com/docs/rest-api/marketplace/get-the-data-of-a-user-provided-global-config"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-the-data-of-a-user-provided-global-config on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get the data of a user-provided Global Config

```http
GET /v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/global-config
```

When the user enabled Global Config syncing, then this endpoint can be used by the partner to fetch the contents of the Global Config.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationConfigurationId` | string | Yes |  |
| `resourceId` | string | Yes |  |


## Responses

### 200: The Global Config data

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "digest",
    "items",
    "updatedAt"
  ],
  "properties": {
    "items": {
      "type": "object",
      "additionalProperties": {
        "nullable": true,
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "number"
          },
          {
            "type": "object"
          },
          {
            "type": "array"
          },
          {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          }
        ]
      }
    },
    "updatedAt": {
      "type": "number"
    },
    "digest": {
      "type": "string"
    },
    "purpose": {
      "type": "string",
      "enum": [
        "experimentation",
        "flags"
      ]
    }
  }
}
```

### 304: No description

### 400: One of the provided values in the request query is invalid.

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
