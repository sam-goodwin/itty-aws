---
title: import-connect-tokens
product: vercel
url: /docs/rest-api/connect/import-connect-tokens
canonical_url: "https://vercel.com/docs/rest-api/connect/import-connect-tokens"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about import-connect-tokens on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Import Connect tokens

```http
POST /v1/connect/token/{connector}/import
```

Import access and refresh tokens for a connector identified by the path parameter.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `connector` | string | Yes |  |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "tokens"
  ],
  "properties": {
    "tokens": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "accessToken",
          "expiresAt",
          "subject",
          "environment"
        ],
        "properties": {
          "accessToken": {
            "type": "string"
          },
          "expiresAt": {
            "type": "number"
          },
          "refreshToken": {
            "type": "string"
          },
          "refreshTokenExpiresAt": {
            "type": "number"
          },
          "subject": {},
          "environment": {
            "description": "A built-in environment name or the stable env_* ID of a custom environment."
          },
          "installationId": {
            "type": "string"
          },
          "audience": {
            "type": "array"
          },
          "scopes": {
            "type": "array"
          },
          "resources": {
            "type": "array"
          },
          "authorizationDetails": {
            "type": "array"
          },
          "name": {
            "type": "string"
          },
          "externalSubject": {
            "type": "string"
          },
          "installation": {
            "type": "object",
            "required": [
              "id"
            ]
          },
          "tenant": {
            "type": "object",
            "required": [
              "id"
            ]
          },
          "data": {
            "type": "object"
          }
        }
      }
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
    "accepted",
    "imported",
    "tokens"
  ],
  "properties": {
    "accepted": {
      "type": "number"
    },
    "imported": {
      "type": "number"
    },
    "tokens": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "environment",
          "expiresAt",
          "subject",
          "succeeded"
        ],
        "properties": {
          "name": {
            "type": "string"
          },
          "data": {
            "type": "object"
          },
          "installationId": {
            "type": "string"
          },
          "audience": {
            "type": "array"
          },
          "scopes": {
            "type": "array"
          },
          "resources": {
            "type": "array"
          },
          "authorizationDetails": {
            "type": "array"
          },
          "expiresAt": {
            "type": "number"
          },
          "expiresIn": {
            "type": "number"
          },
          "refreshTokenExpiresAt": {
            "type": "number"
          },
          "externalSubject": {
            "type": "string"
          },
          "claims": {
            "type": "object",
            "description": "Claims extracted from the provider's tokens per the connector's `ForwardedClaims` allow-list. Currently sourced from the OIDC id_token only."
          },
          "installation": {
            "type": "object",
            "required": [
              "id"
            ]
          },
          "tenant": {
            "type": "object",
            "required": [
              "id"
            ]
          },
          "subject": {},
          "environment": {},
          "succeeded": {
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
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 422: No description

---

## Related

- [connect endpoints](/docs/rest-api#connect)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
