const { Router } = require("express")

// import routes of users

const usersRouter = require("./users.routes")
const notesRouter = require("./notes.routes")
const tagsRouter = require("./tags.routes")

const sessionsRouter = require("./sessions.routes")

const routes = Router()

//from remove a users in the "users.routes.js"
routes.use("/users", usersRouter)
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter)
routes.use("/sessions", sessionsRouter)

module.exports = routes
