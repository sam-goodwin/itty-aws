---
title: createapikeys
product: vercel
url: /docs/rest-api/untagged/createapikeys
canonical_url: "https://vercel.com/docs/rest-api/untagged/createapikeys"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about createapikeys on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# POST /api-keys

```http
POST /api-keys
```

## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "purpose"
  ],
  "properties": {
    "purpose": {
      "type": "string",
      "description": "The API key's purpose, which restricts how it can be used."
    },
    "projectId": {
      "type": "string",
      "description": "An optional project to restrict the API key to."
    },
    "name": {
      "type": "string",
      "description": "An optional name for the API key."
    },
    "expiresAt": {
      "type": "number",
      "description": "The API key's expiration, expressed as a UNIX timestamp in milliseconds."
    },
    "aiGatewayQuota": {
      "type": "object",
      "description": "Optional AI Gateway quota configuration for the API key.",
      "required": [
        "limitAmount"
      ],
      "properties": {
        "limitAmount": {
          "type": "number",
          "description": "The quota limit amount.",
          "minimum": 1
        },
        "includeByokInQuota": {
          "type": "boolean",
          "description": "Whether to include BYOK (Bring Your Own Key) usage in the quota.",
          "default": false
        },
        "refreshPeriod": {
          "type": "string",
          "description": "How often the quota refreshes.",
          "enum": [
            "daily",
            "weekly",
            "monthly",
            "none"
          ],
          "default": "none"
        },
        "alertThresholds": {
          "type": "array",
          "description": "Spend percentages (a subset of [50, 75, 100]) at which to send a spend alert.",
          "items": {
            "type": "number",
            "enum": [
              50,
              75,
              100
            ]
          }
        }
      }
    },
    "metadata": {
      "type": "object",
      "description": "Optional generic metadata for the API key. The accepted shape depends on the key's `purpose` and is validated on creation; for `ai-gateway` keys this accepts `environment`.",
      "additionalProperties": true
    }
  }
}
```

## Responses

### 200: Successfully created an API key.

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "apiKeyString",
    "apiKey"
  ],
  "properties": {
    "apiKeyString": {
      "type": "string",
      "description": "The API key's actual value. This value is only provided in this response, and can never be retrieved again in the future. Be sure to save it somewhere safe!"
    },
    "apiKey": {
      "type": "object",
      "description": "Information about the newly created API key.",
      "required": [
        "id",
        "name",
        "partialKey",
        "teamId",
        "purpose",
        "projectId",
        "expiresAt",
        "activeAt",
        "createdAt",
        "createdBy",
        "leakedAt",
        "leakedUrl",
        "createdByAppId"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "The unique identifier of the API key."
        },
        "name": {
          "type": "string",
          "description": "The human-readable name of the API key."
        },
        "partialKey": {
          "type": "string",
          "description": "The last few characters of the API key string, for helping identify the API key."
        },
        "teamId": {
          "type": "string",
          "description": "The ID of the team that the API key grants access to."
        },
        "purpose": {
          "type": "string",
          "description": "The API key's purpose, i.e. what resources it can be used with."
        },
        "projectId": {
          "type": "string",
          "description": "The ID of the project that this API key grants access to.\n\nWhen this is unset, the API key grants access to all projects in the team.",
          "nullable": true
        },
        "expiresAt": {
          "type": "number",
          "description": "Timestamp (in milliseconds) of when the API key expires.",
          "nullable": true
        },
        "activeAt": {
          "type": "number",
          "description": "Timestamp (in milliseconds) of when the API key was most recently used."
        },
        "createdAt": {
          "type": "number",
          "description": "Timestamp (in milliseconds) of when the API key was created."
        },
        "createdBy": {
          "type": "string",
          "description": "The ID of the user who created the API key."
        },
        "leakedAt": {
          "type": "number",
          "description": "Timestamp (in milliseconds) of when the API key was marked as leaked.",
          "nullable": true
        },
        "leakedUrl": {
          "type": "string",
          "description": "URL where the API key was discovered as leaked.",
          "nullable": true
        },
        "createdByAppId": {
          "type": "string",
          "description": "The ID of the app that created the API key, if any",
          "nullable": true
        },
        "quota": {
          "type": "object",
          "description": "AI Gateway quota associated with an API key.",
          "required": [
            "quotaEntityId",
            "limitAmount",
            "currentSpend",
            "currentByokSpend",
            "includeByokInQuota",
            "refreshPeriod",
            "active",
            "archived",
            "createdAt",
            "updatedAt"
          ],
          "properties": {
            "quotaEntityId": {
              "type": "string",
              "description": "The unique identifier for the quota."
            },
            "limitAmount": {
              "type": "number",
              "description": "The quota limit amount."
            },
            "currentSpend": {
              "type": "number",
              "description": "The current amount spent against the quota."
            },
            "currentByokSpend": {
              "type": "number",
              "description": "The current BYOK spend (tracked separately)."
            },
            "includeByokInQuota": {
              "type": "boolean",
              "description": "Whether BYOK (Bring Your Own Key) spend counts against the quota."
            },
            "refreshPeriod": {
              "description": "How often the quota refreshes."
            },
            "active": {
              "type": "boolean",
              "description": "Whether the quota is currently active."
            },
            "archived": {
              "type": "boolean",
              "description": "Whether the quota has been archived."
            },
            "alertThresholds": {
              "type": "array",
              "description": "Spend percentages (a subset of [50, 75, 100]) at which to send a spend alert. Empty or undefined disables alerts."
            },
            "createdAt": {
              "type": "number",
              "description": "Timestamp (in milliseconds) of when the quota was created."
            },
            "updatedAt": {
              "type": "number",
              "description": "Timestamp (in milliseconds) of when the quota was last updated."
            }
          }
        },
        "metadata": {
          "type": "object",
          "description": "Generic metadata attached to the API key.\n\nThe accepted shape depends on the key's `purpose` and is validated when the key is created. For `ai-gateway` keys this carries `environment` and `spendAttribution`."
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

Content-Type: `application/json`

```json
{
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
      ],
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
}
```

### 403: You do not have permission to access this resource.

Content-Type: `application/json`

```json
{
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
      ],
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
}
```

### 409: No description

### 410: No description

### 429: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "error"
  ],
  "properties": {
    "error": {
      "type": "object",
      "required": [
        "code",
        "name",
        "message",
        "limit"
      ],
      "properties": {
        "code": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "limit": {
          "type": "number"
        }
      }
    }
  }
}
```

### 500: No description

Content-Type: `application/json`

```json
{
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
      ],
      "properties": {
        "code": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      }
    }
  }
}
```

---

## Related

- [Untagged endpoints](/docs/rest-api#untagged)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
