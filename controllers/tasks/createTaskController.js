import Task from "../../models/Task.js";

export const createTaskController = async (req, res) => {
  const { userId } = req.user;
  const { title } = req.body;

  try {
    const newTask = await Task.create({
      title,
      userId,
    });
    res.status(200).send({ message: "Task is created", newTask });
  } catch (e) {
    console.error(e);
    return res.status(500).send("Interval Server Error");
  }
};
