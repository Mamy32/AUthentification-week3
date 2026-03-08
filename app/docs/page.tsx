"use client"

import SwaggerUI from "swagger-ui-react"

export default function Docs() {

  const spec = {
    openapi: "3.0.0",
    info: {
      title: "Task API",
      version: "1.0.0"
    },
    paths: {
      "/api/task": {
        get: {
          summary: "Get all tasks",
          responses: {
            "200": {
              description: "List of tasks",
              content: {
                "application/json": {
                  example: [
                    {
                      id: 1,
                      title: "Learn Next.js API",
                      completed: false
                    },
                    {
                      id: 2,
                      title: "Finish Backend Assignment",
                      completed: false
                    }
                  ]
                }
              }
            }
          }
        },

        post: {
          summary: "Create a task",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: { type: "string" }
                  }
                }
              }
            }
          },
          responses: {
            "200": {
              description: "Task created"
            }
          }
        }
      },

      "/api/task/{id}": {
        put: {
          summary: "Update task",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "integer"
              }
            }
          ],
          responses: {
            "200": {
              description: "Task updated"
            }
          }
        },

        delete: {
          summary: "Delete task",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "integer"
              }
            }
          ],
          responses: {
            "200": {
              description: "Task deleted"
            }
          }
        }
      }
    }
  }

  return <SwaggerUI spec={spec} />
}