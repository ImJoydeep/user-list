import axios from 'axios';
import {ref, isRef, unref, watchEffect } from 'vue';

function getSingleUserData(url, uid){
    const userData = ref(null)
    const error = ref(null)
    const getSingleData = async ()=>{
        userData.value = null
        error.value = null
        try{
            const res = await axios.get(unref(url) + unref(uid))
            userData.value = res.data.data
            // console.log(res.data.data)
        } catch(err){
            error.value = err
        }
    }
    if(isRef(url)){
        watchEffect(getSingleData)
    }else{
        getSingleData()
    }
    return {userData, error}
};

export {getSingleUserData}