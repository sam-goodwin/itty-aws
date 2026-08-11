---
title: list-git-repositories-linked-to-namespace-by-provider
product: vercel
url: /docs/rest-api/integrations/list-git-repositories-linked-to-namespace-by-provider
canonical_url: "https://vercel.com/docs/rest-api/integrations/list-git-repositories-linked-to-namespace-by-provider"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-git-repositories-linked-to-namespace-by-provider on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List git repositories linked to namespace by provider

```http
GET /v1/integrations/search-repo
```

Lists git repositories linked to a namespace `id` for a supported provider. A specific namespace `id` can be obtained via the `git-namespaces`  endpoint. Supported providers are `github`, `gitlab` and `bitbucket`. If the provider or namespace is not provided, it will try to obtain it from the user that authenticated the request.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `query` | string | No |  |
| `namespaceId` | object, nullable | No |  |
| `provider` | object. enum: github, github-limited, github-custom-host, gitlab, bitbucket, cursor-origin | No |  |
| `installationId` | string | No |  |
| `host` | string | No | The custom Git host if using a custom Git provider, like GitHub Enterprise Server |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object"
    },
    {
      "type": "object",
      "required": [
        "error"
      ],
      "properties": {
        "error": {
          "type": "object",
          "required": [
            "code",
            "message"
          ],
          "properties": {
            "code": {
              "type": "string",
              "enum": [
                "installation_not_found"
              ]
            },
            "message": {
              "type": "string"
            }
          }
        }
      }
    },
    {
      "type": "object",
      "required": [
        "gitAccount",
        "repos"
      ],
      "properties": {
        "gitAccount": {
          "type": "object",
          "required": [
            "namespaceId",
            "provider"
          ],
          "properties": {
            "provider": {
              "type": "string"
            },
            "namespaceId": {
              "type": "string",
              "nullable": true
            }
          }
        },
        "repos": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "defaultBranch",
              "id",
              "name",
              "namespace",
              "owner",
              "ownerType",
              "private",
              "provider",
              "slug",
              "updatedAt",
              "url"
            ]
          }
        }
      }
    },
    {
      "type": "object",
      "required": [
        "gitAccount",
        "repos"
      ],
      "properties": {
        "gitAccount": {
          "type": "object",
          "required": [
            "namespaceId",
            "provider"
          ],
          "properties": {
            "provider": {
              "type": "string",
              "enum": [
                "bitbucket",
                "github",
                "github-custom-host",
                "github-limited",
                "gitlab",
                "vercel"
              ]
            },
            "namespaceId": {
              "nullable": true
            }
          }
        },
        "repos": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "defaultBranch",
              "id",
              "name",
              "namespace",
              "owner",
              "ownerType",
              "private",
              "provider",
              "slug",
              "updatedAt",
              "url"
            ]
          }
        }
      }
    }
  ]
}
```

### 400: One of the provided values in the request query is invalid.

### 401: No description

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 429: No description

### 500: No description

### 502: No description

---

## Related

- [integrations endpoints](/docs/rest-api#integrations)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
