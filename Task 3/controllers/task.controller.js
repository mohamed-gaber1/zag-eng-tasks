"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove_data = exports.update_data = exports.create_data = exports.get_By_Id = exports.get_All = void 0;
const express = require('express');
const { getAll, getById, create, update, remove } = require("../models/task.model");
const get_All = (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            data: getAll()
        });
    }
    catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message
        });
    }
};
exports.get_All = get_All;
const get_By_Id = (req, res) => {
    try {
        const id = Number(req.params.id);
        const task = getById(id);
        res.status(200).json({
            status: "success",
            data: task
        });
    }
    catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message
        });
    }
};
exports.get_By_Id = get_By_Id;
const create_data = (req, res) => {
    try {
        const { title } = req.body;
        const newTask = create(title);
        res.status(201).json({
            status: "success",
            data: newTask
        });
    }
    catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message
        });
    }
};
exports.create_data = create_data;
const update_data = (req, res) => {
    try {
        const id = Number(req.params.id);
        const { title, completed } = req.body;
        const updatedTask = update(id, title, completed);
        res.status(200).json({
            status: "success",
            data: updatedTask
        });
    }
    catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message
        });
    }
};
exports.update_data = update_data;
const remove_data = (req, res) => {
    try {
        const id = Number(req.params.id);
        const delTask = remove(id);
        res.status(204).json({
            status: "success",
            data: delTask
        });
    }
    catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message
        });
    }
};
exports.remove_data = remove_data;
//# sourceMappingURL=task.controller.js.map