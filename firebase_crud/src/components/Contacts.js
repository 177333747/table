import React, { useState, useEffect } from 'react';
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";

// import UploadImage from './UploadImage';

const Contacts = () => {

	var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects] = useState({})

    
    useEffect(() => {
        firebaseDb.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null) {
                setContactObjects({
                    ...snapshot.val()
                });
            }
        })
    }, [])


    const addOrEdit = (obj) => {
        if (currentId == '')
        firebaseDb.child('contacts').push(
            obj,
            err => {
                if (err)
                    console.log(err)
                else
                    setCurrentId('')
            })
            
    else
        firebaseDb.child(`contacts/${currentId}`).set(
            obj,
            err => {
                if (err)
                    console.log(err)
                else
                    setCurrentId('')
            })
    }

   

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            firebaseDb.child(`contacts/${id}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        }
    }


  return (
        <>
        
            <div className="row mt-3">
                <div className="col-md-4">
                    <ContactForm {...({ currentId, contactObjects, addOrEdit})} ></ContactForm>
                </div>
                <div className="col-md-8">
                    <table className="table table-bordered table-striped">
                        <thead className="thead-light">
                        
                            <tr>
                                <th>Nickname</th>
                                <th>Real Name</th>
                                <th>Origin description</th>
                                <th>Superpowers</th>
                                <th>Catch Phrase</th>
                               
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map((key) => (
                                    <tr key={key}>
                                        
                                        <td>{contactObjects[key].nickname}</td>
                                        <td>{contactObjects[key].real_name}</td>
                                        <td>{contactObjects[key].origin_description}</td>
                                        <td>{contactObjects[key].superpowers}</td>
                                        <td>{contactObjects[key].catch_phrase}</td>
                                       

                                        

                                        <td className="bg-light">
                                            <button className="btn text-primary btn-sm" onClick={() => { setCurrentId(key) }}>
                                                <i className="fas fa-edit"></i>
                                            </button>
                                            <button className="btn text-danger btn-sm" onClick={() => { onDelete(key) }}>
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        
                                        </td>
                                    </tr>
                                ))
                            }

                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Contacts;