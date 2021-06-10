import React, { useState, useEffect } from 'react';
import Curdui from './Curdui';
import { v4 as uuid } from 'uuid';
import firebase from 'firebase/app';

export default function Firebasecrud() {
  const [fetchdata, setfetchdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [ref, setref] = useState(null);
  const [userData, setuserData] = useState({
    id: '',
    FirstName: '',
    LastName: ''
  });

  const delay = async()=>{
    setTimeout (() => {
      if (firebase.app.length){
         setref(firebase.app().firestore().collection('user'));
         getUser();
    }
  });
  }
  useEffect(() => {
    delay()
  }, []);

  const AddUser = () => {
    console.log('add user');
    userData.id = uuid();
    console.log(userData);
    ref
      .doc(userData.id)
      .set(userData)
      .then(() => {
        getUser();
      })
      .catch(err => console.log(err));
  };

  const getUser = () => {
    setloading(true);
    firebase.app().firestore().collection('user')
    .get().then(item => {
      const items = item.docs.map(doc => doc.data());
      setfetchdata(items);
      setloading(false);
    });
  };

  const deleteRow = id => {
    if (window.confirm(' Are you sure you want to delete')) {
      ref
        .doc(id)
        .delete()
        .then(() => {
          getUser();
        })
        .catch(err => console.log(err));
    }
  };
  const editRow = () => {
    const updateData = {
      id: userData.id,
      FirstName: userData.FirstName,
      LastName: userData.LastName
    };
    ref
      .doc(userData.id)
      .update(updateData)
      .then(() => {
        getUser();
      })
      .catch(err => console.log(err));
  };

  const props = {
    userData,
    setuserData,
    fetchdata,
    loading,
    AddUser,
    editRow,
    deleteRow
  };
  return (
    <div className="">
      <Curdui {...props} />
    </div>
  );
}
