---
title: returns-activated-waf-config
product: vercel
url: /docs/rest-api/security/returns-activated-waf-config
canonical_url: "https://vercel.com/docs/rest-api/security/returns-activated-waf-config"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about returns-activated-waf-config on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Returns activated WAF config

```http
GET /v1/security/firewall/config
```

Lists WAF configs for a project

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "active",
    "draft",
    "versions"
  ],
  "properties": {
    "active": {
      "type": "object",
      "nullable": true,
      "required": [
        "changes",
        "firewallEnabled",
        "id",
        "ips",
        "ownerId",
        "projectKey",
        "rules",
        "updatedAt",
        "version"
      ],
      "properties": {
        "ownerId": {
          "type": "string"
        },
        "projectKey": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "version": {
          "type": "number"
        },
        "updatedAt": {
          "type": "string"
        },
        "firewallEnabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "crs": {
          "type": "object",
          "required": [
            "gen",
            "java",
            "lfi",
            "ma",
            "php",
            "rce",
            "rfi",
            "sd",
            "sf",
            "sqli",
            "xss"
          ],
          "properties": {
            "sd": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "ma": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "lfi": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "rfi": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "rce": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "php": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "gen": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "xss": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "sqli": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "sf": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "java": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            }
          }
        },
        "rules": {
          "type": "array",
          "items": {}
        },
        "ips": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "action",
              "hostname",
              "id",
              "ip"
            ]
          }
        },
        "rulesets": {
          "oneOf": [
            {
              "type": "array"
            },
            {
              "type": "object"
            }
          ]
        },
        "changes": {
          "type": "array",
          "items": {
            "type": "object"
          }
        },
        "managedRules": {
          "type": "object",
          "properties": {
            "bot_protection": {
              "type": "object",
              "required": [
                "active"
              ]
            },
            "ai_bots": {
              "type": "object",
              "required": [
                "active"
              ]
            },
            "owasp": {
              "type": "object",
              "required": [
                "active"
              ]
            },
            "vercel_ruleset": {
              "type": "object",
              "required": [
                "active"
              ]
            },
            "traffic_sources": {
              "type": "object",
              "required": [
                "active"
              ]
            }
          }
        },
        "botIdEnabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "logHeaders": {
          "oneOf": [
            {
              "type": "array"
            },
            {
              "type": "string",
              "enum": [
                "*"
              ]
            }
          ]
        }
      }
    },
    "draft": {
      "type": "object",
      "nullable": true,
      "required": [
        "changes",
        "firewallEnabled",
        "id",
        "ips",
        "ownerId",
        "projectKey",
        "rules",
        "updatedAt",
        "version"
      ],
      "properties": {
        "ownerId": {
          "type": "string"
        },
        "projectKey": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "version": {
          "type": "number"
        },
        "updatedAt": {
          "type": "string"
        },
        "firewallEnabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "crs": {
          "type": "object",
          "required": [
            "gen",
            "java",
            "lfi",
            "ma",
            "php",
            "rce",
            "rfi",
            "sd",
            "sf",
            "sqli",
            "xss"
          ],
          "properties": {
            "sd": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "ma": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "lfi": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "rfi": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "rce": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "php": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "gen": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "xss": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "sqli": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "sf": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            },
            "java": {
              "type": "object",
              "required": [
                "action",
                "active"
              ]
            }
          }
        },
        "rules": {
          "type": "array",
          "items": {}
        },
        "ips": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "action",
              "hostname",
              "id",
              "ip"
            ]
          }
        },
        "rulesets": {
          "oneOf": [
            {
              "type": "array"
            },
            {
              "type": "object"
            }
          ]
        },
        "changes": {
          "type": "array",
          "items": {
            "type": "object"
          }
        },
        "managedRules": {
          "type": "object",
          "properties": {
            "bot_protection": {
              "type": "object",
              "required": [
                "active"
              ]
            },
            "ai_bots": {
              "type": "object",
              "required": [
                "active"
              ]
            },
            "owasp": {
              "type": "object",
              "required": [
                "active"
              ]
            },
            "vercel_ruleset": {
              "type": "object",
              "required": [
                "active"
              ]
            },
            "traffic_sources": {
              "type": "object",
              "required": [
                "active"
              ]
            }
          }
        },
        "botIdEnabled": {
          "type": "boolean",
          "enum": [
            false,
            true
          ]
        },
        "logHeaders": {
          "oneOf": [
            {
              "type": "array"
            },
            {
              "type": "string",
              "enum": [
                "*"
              ]
            }
          ]
        }
      }
    },
    "versions": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "changes",
          "firewallEnabled",
          "id",
          "ips",
          "ownerId",
          "projectKey",
          "rules",
          "updatedAt",
          "version"
        ],
        "properties": {
          "ownerId": {
            "type": "string"
          },
          "projectKey": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "version": {
            "type": "number"
          },
          "updatedAt": {
            "type": "string"
          },
          "firewallEnabled": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "crs": {
            "type": "object",
            "required": [
              "gen",
              "java",
              "lfi",
              "ma",
              "php",
              "rce",
              "rfi",
              "sd",
              "sf",
              "sqli",
              "xss"
            ]
          },
          "rules": {
            "type": "array"
          },
          "ips": {
            "type": "array"
          },
          "rulesets": {},
          "changes": {
            "type": "array"
          },
          "managedRules": {
            "type": "object"
          },
          "botIdEnabled": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "logHeaders": {}
        }
      }
    }
  }
}
```

### 400: No description

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [security endpoints](/docs/rest-api#security)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
