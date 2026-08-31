"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getById = exports.getAll = void 0;
let tasks = [
    {
        id: 1,
        title: "test1",
        completed: true,
        createdAt: new Date()
    },
    {
        id: 2,
        title: "test2",
        completed: true,
        createdAt: new Date()
    },
    {
        id: 3,
        title: "test3",
        completed: false,
        createdAt: new Date()
    },
];
const getAll = () => {
    return tasks;
};
exports.getAll = getAll;
const getById = (id) => {
    return tasks.find((t) => t.id === id);
};
exports.getById = getById;
const create = (title) => {
    tasks.push({
        id: tasks.length + 1,
        title: title,
        completed: false,
        createdAt: new Date()
    });
    return tasks[tasks.length - 1];
};
exports.create = create;
const update = (id, newTitel, completed) => {
    const element = tasks.find((t) => t.id === id);
    if (!element) {
        return "id is not found";
    }
    element.title = newTitel;
    element.completed = completed;
    return element;
};
exports.update = update;
const remove = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    if (index === -1) {
        return "id is not found";
    }
    tasks.splice(index, 1);
};
exports.remove = remove;
//# sourceMappingURL=task.model.js.map