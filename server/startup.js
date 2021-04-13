const todoRoute = require('./routes/todo-route')


module.exports = (app) => {
    app.use("/api/todos", todoRoute) 
}