import { getTasks } from '@/lib/task';
import React from 'react';

const TasksPage = async() => {
    const tasks = await getTasks();
    return (
        <div>
            <h2>Task : {tasks.length}</h2>
        </div>
    );
};

export default TasksPage;