---
title: retrieve-the-environment-variables-of-a-project-by-id-or-name
product: vercel
url: /docs/rest-api/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name
canonical_url: "https://vercel.com/docs/rest-api/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about retrieve-the-environment-variables-of-a-project-by-id-or-name on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Retrieve the environment variables of a project by id or name

```http
GET /v10/projects/{idOrName}/env
```

Retrieve the environment variables for a given project by passing either the project `id` or `name` in the URL.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The unique project identifier or the project name |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `gitBranch` | string. maxLength: 250 | No | If defined, the git branch of the environment variable to filter the results (must have target=preview) |
| `decrypt` | string. enum: true, false | No | If true, the environment variable value will be decrypted |
| `source` | string | No | The source that is calling the endpoint. |
| `customEnvironmentId` | string | No | The unique custom environment identifier within the project |
| `customEnvironmentSlug` | string | No | The custom environment slug (name) within the project |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: The list of environment variables for the given project

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object",
      "required": [
        "key",
        "type",
        "value"
      ],
      "properties": {
        "target": {
          "oneOf": [
            {
              "type": "array"
            },
            {
              "type": "string",
              "enum": [
                "development",
                "development",
                "preview",
                "preview",
                "production"
              ]
            }
          ]
        },
        "type": {
          "type": "string",
          "enum": [
            "encrypted",
            "plain",
            "secret",
            "sensitive",
            "system"
          ]
        },
        "sunsetSecretId": {
          "type": "string",
          "description": "This is used to identify variables that have been migrated from type secret to sensitive."
        },
        "legacyValue": {
          "type": "string",
          "description": "Legacy now-encryption ciphertext, present after migration swaps value/vsmValue"
        },
        "decrypted": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "value": {
          "type": "string"
        },
        "vsmValue": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "configurationId": {
          "type": "string",
          "nullable": true
        },
        "createdAt": {
          "type": "number"
        },
        "updatedAt": {
          "type": "number"
        },
        "createdBy": {
          "type": "string",
          "nullable": true
        },
        "updatedBy": {
          "type": "string",
          "nullable": true
        },
        "gitBranch": {
          "type": "string"
        },
        "visibility": {
          "type": "string",
          "description": "User-facing config/secret model. When set, authoritative for new code paths when the env-var-config-secret-ui flag is enabled. Legacy rows omit this field; legacy rows omit it and callers fall back to existing `type` behavior.",
          "enum": [
            "config",
            "secret"
          ]
        },
        "edgeConfigId": {
          "type": "string",
          "nullable": true
        },
        "edgeConfigTokenId": {
          "type": "string",
          "nullable": true
        },
        "contentHint": {
          "nullable": true,
          "oneOf": [
            {
              "type": "object",
              "required": [
                "storeId",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "storeId",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "storeId",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "storeId",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "storeId",
                "type"
              ]
            },
            {
              "description": "(12 more variants — see OpenAPI spec)"
            }
          ]
        },
        "internalContentHint": {
          "type": "object",
          "description": "Similar to `contentHints`, but should not be exposed to the user.",
          "nullable": true,
          "required": [
            "encryptedValue",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "flags-secret"
              ]
            },
            "encryptedValue": {
              "type": "string",
              "description": "Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda."
            }
          }
        },
        "comment": {
          "type": "string"
        },
        "customEnvironmentIds": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "system": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        }
      }
    },
    {
      "type": "object",
      "required": [
        "envs",
        "pagination"
      ],
      "properties": {
        "envs": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "key",
              "type",
              "value"
            ]
          }
        },
        "pagination": {
          "type": "object",
          "description": "This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data.",
          "required": [
            "count",
            "next",
            "prev"
          ],
          "properties": {
            "count": {
              "type": "number",
              "description": "Amount of items in the current page."
            },
            "next": {
              "type": "number",
              "description": "Timestamp that must be used to request the next page.",
              "nullable": true
            },
            "prev": {
              "type": "number",
              "description": "Timestamp that must be used to request the previous page.",
              "nullable": true
            }
          }
        }
      }
    },
    {
      "type": "object",
      "description": "The list of environment variables for the given project",
      "required": [
        "envs",
        "hiddenProductionEnvCount"
      ],
      "properties": {
        "envs": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "key",
              "type",
              "value"
            ]
          }
        },
        "hiddenProductionEnvCount": {
          "type": "number"
        }
      }
    }
  ]
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
