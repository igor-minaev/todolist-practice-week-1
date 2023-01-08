import React, {FC} from 'react';

type TasksPropsType = {
    data: DataType
}

export type DataType = {
    title: string
    tasks: Array<TaskType>
    students: Array<string>
}

export type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}

const Tasks: FC<TasksPropsType> = (props) => {
    const taskList = props.data.tasks.map(task=>{
        return(
            <li key={task.taskId}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
            </li>
        )
    })
    const studentList = props.data.students.map((student,index)=>{
        return(
            <li key={index}>{student}</li>
        )
    })
    return (
        <div>
            <h3>{props.data.title}</h3>
            <ul>
                {taskList}
            </ul>
            <ul>
                {studentList}
            </ul>
        </div>
    );
};

export default Tasks;