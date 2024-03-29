"use client";
import Create from "@/components/Create";
import Show from "@/components/Show";
import { useState } from "react";

const page = () => {
    const [title, settitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("due");
    const [tasks, setTasks] = useState([]);
    const [activeTask, setActiveTask] = useState(null);

    return (
        <div className="mt-5 container p-5">
            <hr />
            <Create
               tasks={tasks}
               setTasks={setTasks}
                title={title}
                settitle={settitle}
                description={description}
                setDescription={setDescription}
                status={status}
                setStatus={setStatus}
                activeTask={activeTask}
                setActiveTask={setActiveTask}
            />

          <h2 class="text-warning-emphasis">Pending Task  </h2>
            <Show
                tasks={tasks}
                setTasks={setTasks}
                settitle={settitle}
                setDescription={setDescription}
                setStatus={setStatus}
                setActiveTask={setActiveTask}
            />
        </div>
    ); 
};

export default page;
