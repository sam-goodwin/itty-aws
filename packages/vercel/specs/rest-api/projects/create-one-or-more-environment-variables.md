---
title: create-one-or-more-environment-variables
product: vercel
url: /docs/rest-api/projects/create-one-or-more-environment-variables
canonical_url: "https://vercel.com/docs/rest-api/projects/create-one-or-more-environment-variables"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-one-or-more-environment-variables on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create one or more environment variables

```http
POST /v10/projects/{idOrName}/env
```

Create one or more environment variables for a project by passing its `key`, `value`, `type` and `target` and by specifying the project by either passing the project `id` or `name` in the URL. If you include `upsert=true` as a query parameter, a new environment variable will not be created if it already exists but, the existing variable's value will be updated.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The unique project identifier or the project name |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `upsert` | string | No | Allow override of environment variable if it already exists |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object",
      "required": [
        "key",
        "value",
        "type"
      ],
      "properties": {
        "key": {
          "type": "string",
          "description": "The name of the environment variable"
        },
        "value": {
          "type": "string",
          "description": "The value of the environment variable"
        },
        "type": {
          "type": "string",
          "description": "The type of environment variable",
          "enum": [
            "system",
            "encrypted",
            "plain",
            "sensitive"
          ]
        },
        "target": {
          "type": "array",
          "description": "The target environment of the environment variable",
          "items": {
            "enum": [
              "production",
              "preview",
              "development"
            ]
          }
        },
        "gitBranch": {
          "type": "string",
          "description": "If defined, the git branch of the environment variable (must have target=preview)",
          "maxLength": 250,
          "nullable": true
        },
        "comment": {
          "type": "string",
          "description": "A comment to add context on what this environment variable is for",
          "maxLength": 500
        },
        "customEnvironmentIds": {
          "type": "array",
          "description": "The custom environment IDs associated with the environment variable",
          "items": {
            "type": "string"
          }
        }
      },
      "anyOf": [
        {
          "required": [
            "target"
          ]
        },
        {
          "required": [
            "customEnvironmentIds"
          ]
        }
      ]
    },
    {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "key",
          "value",
          "type"
        ],
        "properties": {
          "key": {
            "type": "string",
            "description": "The name of the environment variable"
          },
          "value": {
            "type": "string",
            "description": "The value of the environment variable"
          },
          "type": {
            "type": "string",
            "description": "The type of environment variable",
            "enum": [
              "system",
              "encrypted",
              "plain",
              "sensitive"
            ]
          },
          "target": {
            "type": "array",
            "description": "The target environment of the environment variable"
          },
          "gitBranch": {
            "type": "string",
            "description": "If defined, the git branch of the environment variable (must have target=preview)",
            "maxLength": 250,
            "nullable": true
          },
          "comment": {
            "type": "string",
            "description": "A comment to add context on what this environment variable is for",
            "maxLength": 500
          },
          "customEnvironmentIds": {
            "type": "array",
            "description": "The custom environment IDs associated with the environment variable"
          }
        },
        "anyOf": [
          {
            "required": [
              "target"
            ]
          },
          {
            "required": [
              "customEnvironmentIds"
            ]
          }
        ]
      }
    }
  ]
}
```

## Responses

### 201: The environment variable was created successfully

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "created",
    "failed"
  ],
  "properties": {
    "created": {
      "oneOf": [
        {
          "type": "object",
          "required": [
            "key",
            "type",
            "value"
          ],
          "properties": {
            "target": {},
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
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "key",
              "type",
              "value"
            ]
          }
        }
      ]
    },
    "failed": {
      "type": "array",
      "items": {
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
            ]
          }
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.
The environment variable coudn't be created because an ongoing update env update is already happening
The environment variable coudn't be created because project document is too large

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.
The environment variable cannot be created because it already exists

### 404: No description

### 409: No description

### 410: No description

### 429: No description

### 500: No description

---

## Related

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
