---
title: remove-an-environment-variable
product: vercel
url: /docs/rest-api/projects/remove-an-environment-variable
canonical_url: "https://vercel.com/docs/rest-api/projects/remove-an-environment-variable"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about remove-an-environment-variable on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Remove an environment variable

```http
DELETE /v9/projects/{idOrName}/env/{id}
```

Delete a specific environment variable for a given project by passing the environment variable identifier and either passing the project `id` or `name` in the URL.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The unique project identifier or the project name |
| `id` | string | Yes | The unique environment variable identifier |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `customEnvironmentId` | string | No | The unique custom environment identifier within the project |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: The environment variable was successfully removed

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "array",
      "items": {
        "type": "object",
        "nullable": true,
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
          "target": {},
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
            "nullable": true
          },
          "internalContentHint": {
            "type": "object",
            "description": "Similar to `contentHints`, but should not be exposed to the user.",
            "nullable": true,
            "required": [
              "encryptedValue",
              "type"
            ]
          },
          "comment": {
            "type": "string"
          },
          "customEnvironmentIds": {
            "type": "array"
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
        "system": {
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
    },
    {
      "type": "object",
      "nullable": true,
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

### 404: No description

### 409: The project is being transfered and removing an environment variable is not possible

### 410: No description

---

## Related

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
