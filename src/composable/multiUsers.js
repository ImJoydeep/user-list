import axios from 'axios';
import {ref, isRef, unref, watchEffect } from 'vue';

function getAllUserData(url){
    const allUserData = ref(null)
    const errors = ref(null)
    const getAllData = async ()=>{
        allUserData.value = null;
        errors.value = null;
        try{
            const res = await axios.get(unref(url))
            allUserData.value = res.data.data
        } catch(err){
            errors.value = err
        }
    }
    if(isRef(url)){
        watchEffect(getAllData)
    }
    else{
        getAllData()
    }
    return{allUserData, errors}
};
export {getAllUserData}