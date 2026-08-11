---
title: update-firewall-configuration
product: vercel
url: /docs/rest-api/security/update-firewall-configuration
canonical_url: "https://vercel.com/docs/rest-api/security/update-firewall-configuration"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-firewall-configuration on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update Firewall Configuration

```http
PATCH /v1/security/firewall/config
```

Process updates to modify the existing firewall config for a project

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
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
      "description": "Add a ruleset",
      "required": [
        "action",
        "value"
      ],
      "properties": {
        "action": {
          "type": "string",
          "enum": [
            "firewallEnabled"
          ]
        },
        "id": {
          "nullable": true
        },
        "value": {
          "type": "object",
          "required": [
            "name",
            "active",
            "conditionGroup"
          ],
          "properties": {
            "name": {
              "type": "string",
              "maxLength": 160
            },
            "description": {
              "type": "string",
              "maxLength": 256
            },
            "active": {
              "type": "boolean"
            },
            "conditionGroup": {
              "type": "array"
            },
            "action": {
              "type": "object"
            },
            "valid": {
              "type": "boolean"
            },
            "validationErrors": {}
          }
        }
      }
    },
    {
      "type": "object",
      "description": "Update a ruleset",
      "required": [
        "action",
        "id",
        "value"
      ],
      "properties": {
        "action": {
          "type": "string",
          "enum": [
            "rules.insert"
          ]
        },
        "id": {
          "nullable": true
        },
        "value": {
          "type": "object",
          "required": [
            "name",
            "active",
            "conditionGroup"
          ],
          "properties": {
            "name": {
              "type": "string",
              "maxLength": 160
            },
            "description": {
              "type": "string",
              "maxLength": 256
            },
            "active": {
              "type": "boolean"
            },
            "conditionGroup": {
              "type": "array"
            },
            "action": {
              "type": "object"
            },
            "valid": {
              "type": "boolean"
            },
            "validationErrors": {}
          }
        }
      }
    },
    {
      "type": "object",
      "description": "Remove a ruleset",
      "required": [
        "action",
        "id"
      ],
      "properties": {
        "action": {
          "type": "string",
          "enum": [
            "rules.update"
          ]
        },
        "id": {
          "type": "string"
        },
        "value": {
          "type": "string"
        }
      }
    },
    {
      "type": "object",
      "description": "Set the action for a consumed ruleset (project scope)",
      "required": [
        "action",
        "id",
        "value"
      ],
      "properties": {
        "action": {
          "type": "string",
          "enum": [
            "rules.remove"
          ]
        },
        "id": {
          "type": "string",
          "maxLength": 180
        },
        "value": {
          "nullable": true,
          "required": [
            "action"
          ],
          "properties": {
            "action": {
              "type": "string",
              "enum": [
                "deny",
                "challenge",
                "log",
                "allow"
              ]
            }
          }
        }
      }
    },
    {
      "type": "object",
      "description": "Remove the action for a consumed ruleset (project scope)",
      "required": [
        "action",
        "id"
      ],
      "properties": {
        "action": {
          "type": "string",
          "enum": [
            "rules.priority"
          ]
        },
        "id": {
          "type": "string",
          "maxLength": 180
        },
        "value": {
          "type": "string"
        }
      }
    },
    {
      "description": "(14 more variants — see OpenAPI spec)"
    }
  ]
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object"
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: No description

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 500: No description

---

## Related

- [security endpoints](/docs/rest-api#security)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
