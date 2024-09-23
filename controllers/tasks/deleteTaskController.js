import Task from "../../models/Task.js";

export const deleteTaskController = async (req, res) => {
  const { taskId } = req.params;

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).send({ message: "Task not found" });
    }

    await Task.findByIdAndDelete(taskId);

    res.status(200).send({ message: "Task deleted" });
  } catch (e) {
    console.error(e);
    return res.status(500).send("Internal Server Error");
  }
};
