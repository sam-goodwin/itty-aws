---
title: create-one-or-more-shared-environment-variables
product: vercel
url: /docs/rest-api/environment/create-one-or-more-shared-environment-variables
canonical_url: "https://vercel.com/docs/rest-api/environment/create-one-or-more-shared-environment-variables"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-one-or-more-shared-environment-variables on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create one or more shared environment variables

```http
POST /v1/env
```

Creates shared environment variable(s) for a team.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "evs"
  ],
  "properties": {
    "evs": {
      "type": "array",
      "minimum": 1,
      "maximum": 50,
      "items": {
        "type": "object",
        "required": [
          "key",
          "value"
        ],
        "properties": {
          "key": {
            "type": "string",
            "description": "The name of the Shared Environment Variable"
          },
          "value": {
            "type": "string",
            "description": "The value of the Shared Environment Variable"
          },
          "comment": {
            "type": "string",
            "description": "A comment to add context on what this Shared Environment Variable is for",
            "maxLength": 500
          }
        }
      }
    },
    "type": {
      "type": "string",
      "description": "The type of environment variable",
      "enum": [
        "encrypted",
        "sensitive"
      ]
    },
    "target": {
      "type": "array",
      "description": "The target environment of the Shared Environment Variable",
      "items": {
        "enum": [
          "production",
          "preview",
          "development"
        ]
      }
    },
    "projectId": {
      "type": "array",
      "description": "Associate a Shared Environment Variable to projects.",
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
        "applyToAllCustomEnvironments"
      ]
    },
    {
      "required": [
        "customEnvironmentIds"
      ]
    }
  ]
}
```

## Responses

### 201: No description

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
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "created": {
            "type": "string",
            "description": "The date when the Shared Env Var was created.",
            "format": "date-time"
          },
          "key": {
            "type": "string",
            "description": "The name of the Shared Env Var."
          },
          "ownerId": {
            "type": "string",
            "description": "The unique identifier of the owner (team) the Shared Env Var was created for.",
            "nullable": true
          },
          "id": {
            "type": "string",
            "description": "The unique identifier of the Shared Env Var."
          },
          "createdBy": {
            "type": "string",
            "description": "The unique identifier of the user who created the Shared Env Var.",
            "nullable": true
          },
          "deletedBy": {
            "type": "string",
            "description": "The unique identifier of the user who deleted the Shared Env Var.",
            "nullable": true
          },
          "updatedBy": {
            "type": "string",
            "description": "The unique identifier of the user who last updated the Shared Env Var.",
            "nullable": true
          },
          "createdAt": {
            "type": "number",
            "description": "Timestamp for when the Shared Env Var was created."
          },
          "deletedAt": {
            "type": "number",
            "description": "Timestamp for when the Shared Env Var was (soft) deleted."
          },
          "updatedAt": {
            "type": "number",
            "description": "Timestamp for when the Shared Env Var was last updated."
          },
          "value": {
            "type": "string",
            "description": "The value of the Shared Env Var."
          },
          "projectId": {
            "type": "array",
            "description": "The unique identifiers of the projects which the Shared Env Var is linked to."
          },
          "type": {
            "type": "string",
            "description": "The type of this cosmos doc instance, if blank, assume secret.",
            "enum": [
              "encrypted",
              "plain",
              "sensitive",
              "system"
            ]
          },
          "target": {
            "type": "array",
            "description": "environments this env variable targets"
          },
          "applyToAllCustomEnvironments": {
            "type": "boolean",
            "description": "whether or not this env varible applies to custom environments",
            "enum": [
              false,
              true
            ]
          },
          "customEnvironmentIds": {
            "type": "array",
            "description": "The custom environment IDs that this Shared Env Var is scoped to."
          },
          "decrypted": {
            "type": "boolean",
            "description": "whether or not this env variable is decrypted",
            "enum": [
              false,
              true
            ]
          },
          "comment": {
            "type": "string",
            "description": "A user provided comment that describes what this Shared Env Var is for."
          },
          "lastEditedByDisplayName": {
            "type": "string",
            "description": "The last editor full name or username."
          }
        }
      }
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

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [environment endpoints](/docs/rest-api#environment)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
