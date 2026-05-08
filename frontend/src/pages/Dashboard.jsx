import {
    useEffect,
    useState,
} from "react";

import api from "../api";

import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const token =
        localStorage.getItem("token");

    const [tasks, setTasks] = useState([]);

    const [title, setTitle] =
        useState("");

    const [description, setDescription] =
        useState("");

    const [message, setMessage] =
        useState("");

    useEffect(() => {
        if (!token) {
            navigate("/");
        }

        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const res = await api.get("/tasks", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setTasks(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const createTask = async () => {
        try {
            await api.post(
                "/tasks",
                {
                    title,
                    description,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setMessage("Task created");

            setTitle("");
            setDescription("");

            fetchTasks();
        } catch (error) {
            setMessage("Error creating task");
        }
    };

    const deleteTask = async (id) => {
        try {
            await api.delete(`/tasks/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            fetchTasks();
        } catch (error) {
            console.log(error);
        }
    };

    const logout = () => {
        localStorage.clear();

        navigate("/");
    };

    return (
        <div style={{ padding: "40px" }}>
            <h1>Dashboard</h1>

            <button onClick={logout}>
                Logout
            </button>

            <hr />

            <h2>Create Task</h2>

            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
            />

            <br />
            <br />

            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) =>
                    setDescription(e.target.value)
                }
            />

            <br />
            <br />

            <button onClick={createTask}>
                Add Task
            </button>

            <p>{message}</p>

            <hr />

            <h2>My Tasks</h2>

            {tasks.map((task) => (
                <div
                    key={task.id}
                    style={{
                        border: "1px solid black",
                        padding: "10px",
                        marginBottom: "10px",
                    }}
                >
                    <h3>{task.title}</h3>

                    <p>{task.description}</p>

                    <button
                        onClick={() =>
                            deleteTask(task.id)
                        }
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Dashboard;