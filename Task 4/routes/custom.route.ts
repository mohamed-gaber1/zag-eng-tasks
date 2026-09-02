const express = require("express");

import type { Request, Response } from "express";
const logger = require("../middleware/c.log.middleware");
const validateTask = require("../middleware/c.v.middleware");
const router = express.Router();

const tasks: any[] = [];

router.get("/tasks",logger,
    (req: Request, res: Response) => {
        res.status(200).json({
            status: "success",
            data: tasks
        });
    }
);

router.post("/tasks",logger,validateTask,
    (req: Request, res: Response) => {
        const {
            title,
            description,
            status,
            dueDate
        } = req.body;
        const newTask = {
            id: tasks.length + 1,
            title,
            description,
            status,
            dueDate
        };

        tasks.push(newTask);

        res.status(201).json({
            status: "success",
            data: newTask
        });
    }
);
router.put("/tasks/:id",logger,validateTask,
    (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const task = tasks.find((task) => task.id === id);

        if (!task) {
            return res.status(404).json({
                status: "fail",
                message: "Task not found"
            });
        }

        const {
            title,
            description,
            status,
            dueDate
        } = req.body;

        task.title = title;
        task.description = description;
        task.status = status;
        task.dueDate = dueDate;

        res.status(200).json({
            status: "success",
            data: task
        });
    }
);
module.exports = router;
