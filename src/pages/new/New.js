import React, {useState} from 'react';
import './New.scss'
import {Navbar, Sidebar} from "components";
import DriveFolderUploadOutlined from '@mui/icons-material/DriveFolderUploadOutlined';

const New = ({inputs}) => {

    const [file, setFile] = useState('')

    return (
        <div className="new">
           <Sidebar/>
           <div className="new__container">
               <Navbar/>
               <div className="container__top">
                   <h1 className="container__title">Add New User</h1>
               </div>
               <div className="container__bottom">
                   <div className="left-side">
                       <img
                           src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                           alt=""
                           className="user_img"
                       />
                   </div>
                   <div className="right-side">
                       <form className="form">

                           <div className="form--input">
                               <label htmlFor="file">
                                  Image <DriveFolderUploadOutlined className="icon" />
                               </label>
                               <input type="file"
                                      id="file"
                                      onChange={e => setFile(e.target.files[0])}
                                      style={{
                                   display: "none",
                                   visibility: 'hidden'
                               }}
                               />
                           </div>

                           {inputs.map((input) => (
                               <div className="form--input" key={input.id}>
                                   <label htmlFor="">{input.label}</label>
                                   <input type={input.type} placeholder={input.placeholder} />
                               </div>
                           ))}




                           <div className="form__btn">
                               <button className="btn-new">SEND</button>
                           </div>

                       </form>
                   </div>
               </div>
           </div>

        </div>
    );
};

export default New;
