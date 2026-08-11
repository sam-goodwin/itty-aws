---
title: configures-static-ips-for-a-project
product: vercel
url: /docs/rest-api/networking/configures-static-ips-for-a-project
canonical_url: "https://vercel.com/docs/rest-api/networking/configures-static-ips-for-a-project"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about configures-static-ips-for-a-project on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Configures Static IPs for a project

```http
PATCH /v1/projects/{idOrName}/shared-connect-links
```

Allows configuring Static IPs for a project

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The unique project identifier or the project name |


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
  "properties": {
    "builds": {
      "type": "boolean",
      "description": "Whether to use Static IPs for builds."
    },
    "regions": {
      "type": "array",
      "items": {
        "type": "string",
        "description": "The region in which to enable Static IPs.",
        "maxLength": 4
      }
    }
  },
  "anyOf": [
    {
      "required": [
        "builds"
      ]
    },
    {
      "required": [
        "regions"
      ]
    }
  ]
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "required": [
      "buildsEnabled",
      "connectConfigurationId",
      "createdAt",
      "envId",
      "passive",
      "updatedAt"
    ],
    "properties": {
      "envId": {
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "string",
            "enum": [
              "preview",
              "production"
            ]
          }
        ]
      },
      "connectConfigurationId": {
        "type": "string"
      },
      "dc": {
        "type": "string"
      },
      "passive": {
        "type": "boolean",
        "enum": [
          false,
          true
        ]
      },
      "buildsEnabled": {
        "type": "boolean",
        "enum": [
          false,
          true
        ]
      },
      "aws": {
        "type": "object",
        "required": [
          "subnetIds"
        ],
        "properties": {
          "subnetIds": {
            "type": "array"
          },
          "securityGroupId": {
            "type": "string"
          }
        }
      },
      "createdAt": {
        "type": "number"
      },
      "updatedAt": {
        "type": "number"
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: No description

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

### 500: No description

---

## Related

- [networking endpoints](/docs/rest-api#networking)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
