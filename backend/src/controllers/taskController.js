const prisma = require("../config/db");

exports.getTasks = async (
    req,
    res
) => {
    try {
        const tasks =
            await prisma.task.findMany({
                where: {
                    userId: req.user.id,
                },
            });

        res.json(tasks);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: error.message,
        });
    }
};

exports.createTask = async (req, res) => {
    const { title, description } = req.body;

    const task = await prisma.task.create({
        data: {
            title,
            description,
            userId: req.user.id,
        },
    });

    res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
    const task = await prisma.task.update({
        where: {
            id: Number(req.params.id),
        },
        data: req.body,
    });

    res.json(task);
};

exports.deleteTask = async (req, res) => {
    await prisma.task.delete({
        where: {
            id: Number(req.params.id),
        },
    });

    res.json({
        message: "Task deleted",
    });
};