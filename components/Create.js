import { toast } from "react-toastify";

const Create = (props) => {
    
    const {
        title,
        settitle,
        description,
        setDescription,
        status,
        setStatus,
        activeTask,
        tasks,
        setTasks,
        setActiveTask,
    } = props;

    const SubmitHandler = (e) => {
        e.preventDefault();

        // validation
        if (title.length < 5 || description.length < 20) {
            toast.error(
                "Title and Description must be more than 5 and 20 characters respectively"
            );

            return;
        }
            // if(title.trim().length === 0 || description.trim().length === 0){
            //     return toast.error("title and description be more than 5 and 20 characters respectively")
            // }


        const newtask = {
            date: new Date().toLocaleDateString(),
            title,
            description,
            status,
        };

        setTasks([...tasks, newtask]);
        settitle("");
        setDescription("");
        setStatus("due");
    };

    const UpdateTask = (e) => {
        e.preventDefault();
        const copyTasks = [...tasks];
        copyTasks[activeTask] = {
            ...copyTasks[activeTask],
            title,
            description,
            status,
        };
        setTasks(copyTasks);
        setActiveTask(null);
        settitle("");
        setDescription("");
        setStatus("due");
    };

    
    return (
      <div>
        <div className="p-2  bg-black text-white rounded">
        <h1 className="d-flex justify-content-center">To Do List App</h1>
        </div>
        <form className="w-50">
            
            <h2>Create Your Tasks</h2>
            <input
                onChange={(e) => settitle(e.target.value)}
                value={title}
                className="form-control mb-3"
                type="text"
                placeholder="Title"
            />
            <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="form-control mb-3"
                placeholder="description here..."
            ></textarea>
            <select
                onChange={(e) => setStatus(e.target.value)}
                className="form-control mb-3"
                value={status}
            >
                <option value="due">Due</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>

            {activeTask === null ? (
                <button onClick={SubmitHandler} className="btn btn-primary">
                    Create Task
                </button>
            ) : (
                <button onClick={UpdateTask} className="btn btn-primary">
                    Update Task
                </button>
            )}
        </form>
        </div> 
    );
};

export default Create;