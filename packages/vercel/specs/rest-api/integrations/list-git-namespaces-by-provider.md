---
title: list-git-namespaces-by-provider
product: vercel
url: /docs/rest-api/integrations/list-git-namespaces-by-provider
canonical_url: "https://vercel.com/docs/rest-api/integrations/list-git-namespaces-by-provider"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-git-namespaces-by-provider on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List git namespaces by provider

```http
GET /v1/integrations/git-namespaces
```

Lists git namespaces for a supported provider. Supported providers are `github`, `gitlab` and `bitbucket`. If the provider is not provided, it will try to obtain it from the user that authenticated the request.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `host` | string | No | The custom Git host if using a custom Git provider, like GitHub Enterprise Server |
| `provider` | object. enum: github, github-limited, github-custom-host, gitlab, bitbucket | No |  |
| `viewerMetadata` | boolean | No | When true, includes the viewer object for each namespace. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "required": [
      "id",
      "ownerType",
      "provider",
      "slug"
    ],
    "properties": {
      "provider": {
        "type": "string"
      },
      "slug": {
        "type": "string"
      },
      "id": {
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "number"
          }
        ]
      },
      "ownerType": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "isAccessRestricted": {
        "type": "boolean",
        "enum": [
          false,
          true
        ]
      },
      "installationId": {
        "type": "number"
      },
      "requireReauth": {
        "type": "boolean",
        "enum": [
          false,
          true
        ]
      },
      "viewer": {
        "type": "object",
        "properties": {
          "canCreateApp": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "role": {}
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: No description

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 429: No description

### 500: No description

---

## Related

- [integrations endpoints](/docs/rest-api#integrations)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
