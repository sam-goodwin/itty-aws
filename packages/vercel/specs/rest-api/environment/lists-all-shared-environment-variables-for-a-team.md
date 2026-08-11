---
title: lists-all-shared-environment-variables-for-a-team
product: vercel
url: /docs/rest-api/environment/lists-all-shared-environment-variables-for-a-team
canonical_url: "https://vercel.com/docs/rest-api/environment/lists-all-shared-environment-variables-for-a-team"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about lists-all-shared-environment-variables-for-a-team on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Lists all Shared Environment Variables for a team

```http
GET /v1/env
```

Lists all Shared Environment Variables for a team, taking into account optional filters.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `search` | string | No |  |
| `projectId` | string | No | Filter SharedEnvVariables that belong to a project |
| `ids` | string | No | Filter SharedEnvVariables based on comma separated ids |
| `exclude_ids` | string | No | Filter SharedEnvVariables based on comma separated ids |
| `'exclude-ids'` | string | No | Filter SharedEnvVariables based on comma separated ids |
| `exclude_projectId` | string | No | Filter SharedEnvVariables that belong to a project |
| `'exclude-projectId'` | string | No | Filter SharedEnvVariables that belong to a project |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "data",
    "pagination"
  ],
  "properties": {
    "data": {
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
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [environment endpoints](/docs/rest-api#environment)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
