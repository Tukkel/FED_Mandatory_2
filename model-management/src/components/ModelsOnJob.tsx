import { Dialog } from "@mui/material";
import { useState } from "react";
import { useGetModels } from "../hooks/useModels";
import React from "react";





export default function ModelsOnJob(){

    const [open, setOpen]=useState(false);
    const models=useGetModels();
    const [addedModels, setAddedModels]=useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
    }

    //loop over models and print
    models.forEach((model)=>{
        console.log(model.firstName);
    });

    const handleAddModel = () => {
        //setAddedModels([...addedModels, model.]);
        
    }

    return(
        <><button className={"text-xl border p-2 "} onClick={handleClickOpen}>+</button>
        <Dialog open={open} onClose={onClose}  >
            <div className="min-w-72 p-6" >
                {models.map((model, index)=>(
                    <React.Fragment key={index}>
                        <div className="flex justify-between">
                        <p>{model.firstName} {model.lastName} </p>
                        <button className="p-2" onClick={handleAddModel}>+</button>
                        </div>  
                    </React.Fragment>
                ))}
            
            </div>
        </Dialog></>

    );
}

