<template>
    <div v-if="error" class="text-red-400 text-4xl">Something Went Wrong! Try Again</div>
    <div v-else-if="userData">
        <img id="user_avatar" :src="userData.avatar" alt="avatar">
        <h3 class="text-xl">User ID: {{ userData.id }}</h3>
        <h3 class="text-2xl font-bold">Name: {{ userData.first_name }} {{ userData.last_name }}</h3>
        <h3 class="font-bold">Email: {{ userData.email }}</h3>
    </div>
    <h1 class="text-4xl py-4">Users List</h1>
    <div class="container text-lg font-bold">
        <table class="table-auto" id="table">
            <div v-for="user in allUserData" :key="user.id">
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            
            <tbody>
                <tr class="hover:underline">
                    <RouterLink :to="{name: 'multiUserView', params: {id:user.id}}">
                        <td>{{ user.first_name }} {{ user.last_name }}</td>
                    </RouterLink>
                </tr>
            </tbody>
        </div>
        </table>
    </div>

</template>


<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { getSingleUserData } from '../composable/singleUser.js'
import { getAllUserData } from '../composable/multiUsers.js'

const url = ref('https://reqres.in/api/users/');
const uid = ref(10);
const { userData, error } = getSingleUserData(url, uid)
const { allUserData, errors } = getAllUserData(url)

</script>
