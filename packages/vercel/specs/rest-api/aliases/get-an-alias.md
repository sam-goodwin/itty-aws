---
title: get-an-alias
product: vercel
url: /docs/rest-api/aliases/get-an-alias
canonical_url: "https://vercel.com/docs/rest-api/aliases/get-an-alias"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-an-alias on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get an Alias

```http
GET /v4/aliases/{idOrAlias}
```

Retrieves an Alias for the given host name or alias ID.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrAlias` | string | Yes | The alias or alias ID to be retrieved |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `from` | number | No | Get the alias only if it was created after the provided timestamp |
| `projectId` | string | No | Get the alias only if it is assigned to the provided project ID |
| `since` | number | No | Get the alias only if it was created after this JavaScript timestamp |
| `until` | number | No | Get the alias only if it was created before this JavaScript timestamp |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: The alias information

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "alias",
    "created",
    "deploymentId",
    "projectId",
    "uid"
  ],
  "properties": {
    "alias": {
      "type": "string",
      "description": "The alias name, it could be a `.vercel.app` subdomain or a custom domain"
    },
    "created": {
      "type": "string",
      "description": "The date when the alias was created",
      "format": "date-time"
    },
    "createdAt": {
      "type": "number",
      "description": "The date when the alias was created in milliseconds since the UNIX epoch",
      "nullable": true
    },
    "creator": {
      "type": "object",
      "description": "Information of the user who created the alias",
      "required": [
        "email",
        "uid",
        "username"
      ],
      "properties": {
        "uid": {
          "type": "string",
          "description": "ID of the user who created the alias"
        },
        "email": {
          "type": "string",
          "description": "Email of the user who created the alias"
        },
        "username": {
          "type": "string",
          "description": "Username of the user who created the alias"
        }
      }
    },
    "deletedAt": {
      "type": "number",
      "description": "The date when the alias was deleted in milliseconds since the UNIX epoch",
      "nullable": true
    },
    "deployment": {
      "type": "object",
      "description": "A map with the deployment ID, URL and metadata",
      "required": [
        "id",
        "url"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "The deployment unique identifier"
        },
        "url": {
          "type": "string",
          "description": "The deployment unique URL"
        },
        "meta": {
          "type": "string",
          "description": "The deployment metadata"
        }
      }
    },
    "deploymentId": {
      "type": "string",
      "description": "The deployment ID",
      "nullable": true
    },
    "projectId": {
      "type": "string",
      "description": "The unique identifier of the project",
      "nullable": true
    },
    "redirect": {
      "type": "string",
      "description": "Target destination domain for redirect when the alias is a redirect",
      "nullable": true
    },
    "redirectStatusCode": {
      "type": "number",
      "description": "Status code to be used on redirect",
      "enum": [
        301,
        302,
        307,
        308,
        null
      ],
      "nullable": true
    },
    "uid": {
      "type": "string",
      "description": "The unique identifier of the alias"
    },
    "updatedAt": {
      "type": "number",
      "description": "The date when the alias was updated in milliseconds since the UNIX epoch",
      "nullable": true
    },
    "protectionBypass": {
      "type": "object",
      "description": "The protection bypass for the alias",
      "additionalProperties": {
        "oneOf": [
          {
            "type": "object",
            "description": "The protection bypass for the alias",
            "required": [
              "createdAt",
              "createdBy",
              "scope"
            ]
          },
          {
            "type": "object",
            "description": "The protection bypass for the alias",
            "required": [
              "access",
              "createdAt",
              "lastUpdatedAt",
              "lastUpdatedBy",
              "scope"
            ]
          },
          {
            "type": "object",
            "description": "The protection bypass for the alias",
            "required": [
              "createdAt",
              "createdBy",
              "scope"
            ]
          },
          {
            "type": "object",
            "description": "The protection bypass for the alias",
            "required": [
              "createdAt",
              "lastUpdatedAt",
              "lastUpdatedBy",
              "scope"
            ]
          }
        ]
      }
    },
    "microfrontends": {
      "type": "object",
      "description": "The microfrontends for the alias including the routing configuration",
      "required": [
        "applications",
        "defaultApp"
      ],
      "properties": {
        "defaultApp": {
          "type": "object",
          "required": [
            "projectId"
          ],
          "properties": {
            "projectId": {
              "type": "string"
            }
          }
        },
        "applications": {
          "oneOf": [
            {
              "type": "array",
              "description": "A list of the deployment routing information for each project."
            },
            {
              "type": "array",
              "description": "A list of the deployment routing information for each project."
            },
            {
              "type": "array",
              "description": "A list of the deployment routing information for each project."
            }
          ]
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: The alias was not found

### 410: No description

---

## Related

- [aliases endpoints](/docs/rest-api#aliases)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
