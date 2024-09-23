import Task from "../../models/Task.js";

export const getTasksController = async (req, res) => {
  const { userId } = req.user;

  try {
    const tasks = await Task.find({ userId });

    if (tasks.length === 0) {
      return res.status(404).send({ message: "Tasks not found" });
    }

    res.status(200).send({ message: "Tasks retrieved successfully", tasks });
  } catch (e) {
    console.error(e);
    return res.status(500).send("Internal Server Error");
  }
};
