import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
    ],
    filters: Filters.All,
}

const initStore = () => {
    console.log(state);
    console.log('initStore 🐍');
}

loadStore = () => {
    throw new Error('Not implemented');
}

const getTodo = (filter = filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];

        case filters.Completed:
            return this.state.filter(todo => todo.done);

        case filters.pending:
            return this.state.filter(todo => !todo.done);

        default:
            throw new Error(`Option ${filter} is not valid`)
    }
}

const addTodo = (description) => {
    if (!description) throw new Error('Not implemented');

    state.todos.push(new Todo(description))
}

const toggleTodo = (todoId) => {
    throw new Error('Not implemented')
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id != todoId);
}

const deleteCompleted = () => {
    throw new Error('Not implemented')
}

const setFilter = (newFilter = filters.All) => {
    throw new Error('Not implemented')
}

const getCurrentFilter = () => {
    throw new Error('Not implemented')
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodo,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}