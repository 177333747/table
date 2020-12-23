import React, { useState, useEffect } from 'react';
// import UploadImage from "./UploadImage"
const ContactForm = (props) => {
    const initialFieldValues = {
        nickname: '',
        real_name: '',
        origin_description: '',
        superpowers: '',
        catch_phrases: '',
      
        
    }

    var [values, setValues] = useState(initialFieldValues)


    useEffect(() => {
        if (props.currentId == '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values);
       
    }
    


    return (
        <form autoComplete="off" onSubmit={handleFormSubmit} >
            <div className="input-group mb-3 mx-2">

                <div className="input-group-text">
                    <i className="fas fa-mask"></i>

                </div>
                <input className="form-control" name="nickname" placeholder="Nickname"
                    value={values.nickname}
                    onChange={handleInputChange}
                />
            </div>
            
                <div className="input-group mb-3 mx-2">

                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>


                    <input className="form-control" name="real_name" placeholder="Real Name"
                        value={values.real_name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group mb-3  mx-2">

                    <div className="input-group-text">
                        <i className="fas fa-comment"></i>
                    </div>

                    <input className="form-control" name="origin_description" placeholder="Origin description"
                        value={values.origin_description}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group mb-3  mx-2">

                    <div className="input-group-text">
                        <i className="fab fa-superpowers"></i>
                    </div>

                    <input className="form-control" name="superpowers" placeholder="Superpowers"
                        value={values.superpowers}
                        onChange={handleInputChange}
                    />
                </div>
            
            <div className="input-group mb-3 mx-2">
            <div className="input-group-text">
                        <i className="fas fa-quote-right"></i>
                    </div>

                <input className="form-control" name="catch_phrase" placeholder="Catch phrase"
                    value={values.catch_phrase}
                    onChange={handleInputChange}
                />
            </div>
            <div>
           

            
                   {/* <UploadImage /> */}
               
            </div>
            <div className="form-group mb-3 mx-2">
                <input type="submit" value={props.currentId == "" ? "Save" : "Update"} className="btn btn-primary btn-block" />
            </div>

        </form>
    );
}

export default ContactForm;