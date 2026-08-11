---
title: retrieve-the-decrypted-value-of-an-environment-variable-of-a-project-by-id
product: vercel
url: /docs/rest-api/projects/retrieve-the-decrypted-value-of-an-environment-variable-of-a-project-by-id
canonical_url: "https://vercel.com/docs/rest-api/projects/retrieve-the-decrypted-value-of-an-environment-variable-of-a-project-by-id"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about retrieve-the-decrypted-value-of-an-environment-variable-of-a-project-by-id on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Retrieve the decrypted value of an environment variable of a project by id

```http
GET /v1/projects/{idOrName}/env/{id}
```

Retrieve the environment variable for a given project.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The unique project identifier or the project name |
| `id` | string | Yes | The unique ID for the environment variable to get the decrypted value. |


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
  "oneOf": [
    {
      "type": "object",
      "required": [
        "decrypted",
        "key",
        "type"
      ],
      "properties": {
        "decrypted": {
          "type": "boolean",
          "enum": [
            false,
            true
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
        "edgeConfigId": {
          "type": "string",
          "nullable": true
        },
        "edgeConfigTokenId": {
          "type": "string",
          "nullable": true
        },
        "createdAt": {
          "type": "number"
        },
        "updatedAt": {
          "type": "number"
        },
        "id": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "target": {
          "oneOf": [
            {
              "type": "array"
            },
            {
              "type": "string",
              "enum": [
                "production",
                "preview",
                "development"
              ]
            }
          ]
        },
        "gitBranch": {
          "type": "string"
        },
        "createdBy": {
          "type": "string",
          "nullable": true
        },
        "updatedBy": {
          "type": "string",
          "nullable": true
        },
        "sunsetSecretId": {
          "type": "string",
          "description": "This is used to identify variables that have been migrated from type secret to sensitive."
        },
        "legacyValue": {
          "type": "string",
          "description": "Legacy now-encryption ciphertext, present after migration swaps value/vsmValue"
        },
        "configurationId": {
          "type": "string",
          "nullable": true
        },
        "visibility": {
          "type": "string",
          "description": "User-facing config/secret model. When set, authoritative for new code paths when the env-var-config-secret-ui flag is enabled. Legacy rows omit this field; legacy rows omit it and callers fall back to existing `type` behavior.",
          "enum": [
            "config",
            "secret"
          ]
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
        }
      }
    },
    {
      "type": "object",
      "required": [
        "key",
        "type",
        "value"
      ],
      "properties": {
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
        "value": {
          "type": "string"
        },
        "edgeConfigId": {
          "type": "string",
          "nullable": true
        },
        "edgeConfigTokenId": {
          "type": "string",
          "nullable": true
        },
        "createdAt": {
          "type": "number"
        },
        "updatedAt": {
          "type": "number"
        },
        "id": {
          "type": "string"
        },
        "key": {
          "type": "string"
        },
        "target": {
          "oneOf": [
            {
              "type": "array"
            },
            {
              "type": "string",
              "enum": [
                "production",
                "preview",
                "development"
              ]
            }
          ]
        },
        "gitBranch": {
          "type": "string"
        },
        "createdBy": {
          "type": "string",
          "nullable": true
        },
        "updatedBy": {
          "type": "string",
          "nullable": true
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
        "configurationId": {
          "type": "string",
          "nullable": true
        },
        "visibility": {
          "type": "string",
          "description": "User-facing config/secret model. When set, authoritative for new code paths when the env-var-config-secret-ui flag is enabled. Legacy rows omit this field; legacy rows omit it and callers fall back to existing `type` behavior.",
          "enum": [
            "config",
            "secret"
          ]
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
