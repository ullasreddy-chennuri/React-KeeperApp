import React,{useState} from  'react';


function Createarea(props){

    const [note,setNote] = useState({
        title:'',
        content:''
    });

    function handleChange(event){
        const { name, value} = event.target;
        setNote(prevNote =>{
            return {
                ...prevNote,
                [name]:value
            }
        });
    }

    function submitNote(){   
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
    }

    return (
    <div>
        <form>
            <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}/>
            <textarea
            onChange={handleChange} 
            name="content" 
            placeholder="Enter the Notes" 
            rows="3"
            value={note.content}/>
            <button 
            onClick={evt => {
                evt.preventDefault();
                submitNote();
            }}>Add</button>
        </form>
    </div>);
}


export default Createarea;