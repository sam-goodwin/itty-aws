---
title: create-a-connect-authorization-request
product: vercel
url: /docs/rest-api/connect/create-a-connect-authorization-request
canonical_url: "https://vercel.com/docs/rest-api/connect/create-a-connect-authorization-request"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-a-connect-authorization-request on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create a Connect authorization request

```http
POST /v1/connect/authorize/{connector}
```

Create an authorization request for a connector and return the URL and verifier details needed to complete the flow.

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
    },
    "returnUrl": {
      "type": "string"
    },
    "webhook": {
      "type": "string"
    },
    "prompt": {
      "type": "string"
    },
    "deviceCode": {
      "type": "boolean"
    },
    "expiresInMs": {
      "type": "number"
    },
    "additionalParams": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
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
    "connector",
    "expiresAt",
    "request",
    "url",
    "verifier"
  ],
  "properties": {
    "url": {
      "type": "string"
    },
    "request": {
      "type": "string"
    },
    "verifier": {
      "type": "string"
    },
    "deviceCode": {
      "type": "string"
    },
    "expiresAt": {
      "type": "number"
    },
    "connector": {
      "type": "object",
      "required": [
        "id",
        "name",
        "type",
        "uid"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "Client id (e.g. `scl_…`)."
        },
        "uid": {
          "type": "string",
          "description": "Client uid (e.g. `salesforce/my-org`)."
        },
        "type": {
          "type": "string",
          "description": "Client type (e.g. `oauth`, `salesforce`)."
        },
        "service": {
          "type": "string",
          "description": "Resolved service id when known (e.g. `salesforce`), following the `stored.service ?? typeDef.service ?? stored.type` convention."
        },
        "serviceName": {
          "type": "string",
          "description": "Curated display name of the resolved service (e.g. \"Salesforce\"), present when the service is a known service. Suited for end-user surfaces like \"Sign in with {serviceName}\"."
        },
        "name": {
          "type": "string",
          "description": "The connector's own name: the operator-given client name, falling back to the client type's name for legacy rows without one."
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

---

## Related

- [connect endpoints](/docs/rest-api#connect)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
