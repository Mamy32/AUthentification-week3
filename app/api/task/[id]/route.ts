import { tasks } from "@/lib/tasks"

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const taskId = parseInt(id)

  const body = await req.json()

  const task = tasks.find(t => t.id === taskId)

  if (!task) {
    return Response.json({ message: "Task not found" }, { status: 404 })
  }

  task.title = body.title
  task.completed = body.completed

  return Response.json(task)
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const taskId = parseInt(id)

  const index = tasks.findIndex(t => t.id === taskId)

  if (index === -1) {
    return Response.json({ message: "Task not found" }, { status: 404 })
  }

  tasks.splice(index, 1)

  return Response.json({ message: "Task deleted" })
}