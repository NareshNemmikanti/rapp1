import React,{Component} from 'react';


class AddCourse extends Component{
    constructor(){
        super();
        this.state={
            courses:[],
            course:''
        }
    }
    onCourseChange=(e)=>{
        this.setState({
            course:e.target.value
        })
    }
    addCourse=()=>{
        this.setState({
            courses:[...this.state.courses,this.state.course],
            course:''
        })
    }
    onRemoveCourse=(course)=>{
        this.setState({
            courses:this.state.courses.filter((currentCourse)=>{
                return currentCourse!=course;
            })
        })
    }
    render(){
        return(
            <div>
                <h1>Add Course</h1>
                <input type="text" name="course" value={this.state.course} onChange={this.onCourseChange}/>
                <button onClick={this.addCourse}>Add</button>
                <ul>
                    {
                        this.state.courses.map((course,index)=>{
                            return <li key={index}>{course} <button onClick={()=>{this.onRemoveCourse(course)}}>Remove</button></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default AddCourse;