---
title: get-a-connect-token
product: vercel
url: /docs/rest-api/connect/get-a-connect-token
canonical_url: "https://vercel.com/docs/rest-api/connect/get-a-connect-token"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-a-connect-token on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get a Connect token

```http
POST /v1/connect/token/{connector}
```

Get an access token for a connector identified by the path parameter and scoped to the requester.

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
  "properties": {
    "subject": {
      "anyOf": [
        {
          "type": "object",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "app"
              ]
            }
          },
          "additionalProperties": true
        },
        {
          "type": "object",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "user"
              ]
            },
            "id": {
              "type": "string"
            },
            "issuer": {
              "type": "string"
            }
          },
          "additionalProperties": true
        },
        {
          "type": "object",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "jwt-bearer"
              ]
            },
            "sub": {
              "type": "string"
            },
            "iss": {
              "type": "string"
            },
            "aud": {
              "type": "string"
            },
            "additionalClaims": {
              "type": "object"
            }
          },
          "additionalProperties": true
        },
        {
          "type": "object",
          "required": [
            "type",
            "token"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "token"
              ]
            },
            "token": {
              "type": "string"
            }
          }
        },
        {
          "type": "object",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "type": "string"
            }
          },
          "additionalProperties": true
        }
      ]
    },
    "installationId": {
      "type": "string"
    },
    "audience": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "scopes": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "resources": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "authorizationDetails": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string"
          }
        },
        "additionalProperties": true
      }
    },
    "validityBufferMs": {
      "type": "number"
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
    "connector",
    "expiresAt",
    "token",
    "tokenId"
  ],
  "properties": {
    "token": {
      "type": "string"
    },
    "tokenId": {
      "type": "string"
    },
    "expiresAt": {
      "type": "number"
    },
    "connector": {
      "type": "object",
      "required": [
        "id",
        "type",
        "uid"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "uid": {
          "type": "string"
        },
        "type": {
          "type": "string"
        }
      }
    },
    "name": {
      "type": "string"
    },
    "installationId": {
      "type": "string"
    },
    "tenantId": {
      "type": "string"
    },
    "externalSubject": {
      "type": "string"
    },
    "authorizationId": {
      "type": "string",
      "description": "Stable id correlating all tokens (including refreshes) back to the original authorization."
    },
    "tokenGroupId": {
      "type": "string",
      "description": "Stable id that groups all tokens with the same parameters across refreshes."
    },
    "claims": {
      "type": "object",
      "description": "Claims extracted from the provider's tokens per the connector's `ForwardedClaims` allow-list. Currently sourced from the OIDC id_token only.",
      "additionalProperties": true
    },
    "metadata": {
      "type": "object",
      "description": "Driver-specific metadata (e.g., botUserId for Slack).",
      "additionalProperties": true
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

### 429: No description

---

## Related

- [connect endpoints](/docs/rest-api#connect)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
