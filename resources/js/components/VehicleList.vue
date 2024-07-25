<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Make</th>
                    <th scope="col">Model</th>
                    <th scope="col">Year</th>
                    <th scope="col">Color</th>
                    <th scope="col">Price</th>
                    <th scope="col">Date</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="vehicle in vehicles" :key="vehicle.id">
                    <td>{{ vehicle.id }}</td>
                    <td>{{ vehicle.make }}</td>
                    <td>{{ vehicle.model }}</td>
                    <td>{{ vehicle.year }}</td>
                    <td>{{ vehicle.color }}</td>
                    <td>R {{ vehicle.price }}</td>
                    <td>{{ new Date(vehicle.created_at).toLocaleDateString() }}</td>
                    <td>
                        <div class="row gap-3">
                            <router-link :to="`/vehicles/${vehicle.id}`"
                                class="p-2 col border btn btn-primary">View</router-link>
                            <router-link :to="`/vehicles/${vehicle.id}/edit`"
                                class="p-2 col border btn btn-success">Edit</router-link>
                            <button @click="deleteVehicle(vehicle.id)" type="button"
                                class="p-2 col border btn btn-danger">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            vehicles: []
        }
    },
    async created() {
        try {
            const response = await axios.get('/api/vehicles');
            this.vehicles = response.data;
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        async deleteVehicle(id) {
            try {
                await axios.delete(`/api/vehicles/${id}`);
                this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>