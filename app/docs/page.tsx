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
          summary: "Get all tasks"
        },
        post: {
          summary: "Create a task"
        }
      },
      "/api/task/{id}": {
        put: {
          summary: "Update task"
        },
        delete: {
          summary: "Delete task"
        }
      }
    }
  }

  return <SwaggerUI spec={spec} />
}