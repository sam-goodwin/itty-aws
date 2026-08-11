---
title: create-a-blob-store
product: vercel
url: /docs/rest-api/storage/create-a-blob-store
canonical_url: "https://vercel.com/docs/rest-api/storage/create-a-blob-store"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-a-blob-store on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create a Blob store

```http
POST /storage/stores/blob
```

## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "name"
  ],
  "properties": {
    "name": {
      "type": "string",
      "maxLength": 70
    },
    "region": {
      "type": "string",
      "enum": [
        "arn1",
        "bom1",
        "cdg1",
        "cle1",
        "cpt1",
        "dub1",
        "dxb1",
        "fra1",
        "gru1",
        "hkg1",
        "hnd1",
        "iad1",
        "icn1",
        "kix1",
        "lhr1",
        "pdx1",
        "sfo1",
        "sin1",
        "syd1",
        "yul1"
      ]
    },
    "access": {
      "type": "string",
      "enum": [
        "public",
        "private"
      ],
      "default": "public"
    },
    "projectId": {
      "type": "string",
      "maxLength": 50
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
    "store"
  ],
  "properties": {
    "store": {
      "type": "object",
      "nullable": true,
      "required": [
        "count",
        "isTokenExpired",
        "projectsMetadata",
        "region",
        "size",
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
        },
        "access": {
          "type": "string",
          "enum": [
            "private",
            "public"
          ]
        },
        "kind": {
          "type": "string",
          "description": "A project-default store is a private blob store that is lazily created per-project, uses OIDC auth instead of read-write tokens, and cannot be modified through standard store mutation APIs. Undefined for legacy stores.",
          "enum": [
            "project-default",
            "user-created"
          ]
        },
        "projectId": {
          "type": "string",
          "description": "The project this store is scoped to. Set for project-default stores and user-created stores with enforced project association."
        },
        "size": {
          "type": "number"
        },
        "count": {
          "type": "number"
        },
        "region": {
          "type": "string",
          "enum": [
            "arn1",
            "bom1",
            "cdg1",
            "cle1",
            "cpt1",
            "dub1",
            "dxb1",
            "fra1",
            "gru1",
            "hkg1",
            "hnd1",
            "iad1",
            "icn1",
            "kix1",
            "lhr1",
            "pdx1",
            "sfo1",
            "sin1",
            "syd1",
            "yul1"
          ]
        },
        "isTokenExpired": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

### 429: No description

---

## Related

- [storage endpoints](/docs/rest-api#storage)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
