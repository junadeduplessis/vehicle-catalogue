<template>
    <div>
        <h1 v-if="isNewVehicle">Add Vehicle</h1>
        <h1 v-else>Edit Vehicle</h1>
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="make" class="form-label">Make:</label>
                <input class="form-control" type="text" id="make" v-model="vehicle.make" required />
            </div>
            <div class="mb-3">
                <label for="model" class="form-label">Model:</label>
                <input class="form-control" type="text" id="model" v-model="vehicle.model" required />
            </div>
            <div class="mb-3">
                <label for="year" class="form-label">Year:</label>
                <input class="form-control" type="text" id="year" v-model="vehicle.year" required />
            </div>
            <div class="mb-3">
                <label for="color" class="form-label">Color:</label>
                <input class="form-control" type="text" id="color" v-model="vehicle.color" required />
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Price:</label>
                <input class="form-control" type="number" id="price" v-model="vehicle.price" required />
            </div>
            <button type="submit" v-if="isNewVehicle" class="btn btn-primary">Add Vehicle</button>
            <button type="submit" v-else class="btn btn-primary">Update Vehicle</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            vehicle: {
                make: '',
                model: '',
                year: '',
                color: '',
                price: 0
            }
        }
    },
    computed: {
        isNewVehicle() {
            return !this.$route.path.includes('edit');
        }
    },
    async created() {
        if (!this.isNewVehicle) {
            const response = await axios.get(`/api/vehicles/${this.$route.params.id}`);
            this.vehicle = response.data;
        }
    },
    methods: {
        async submitForm() {
            try {
                if (this.isNewVehicle) {
                    await axios.post('/api/vehicles', this.vehicle);
                } else {
                    await axios.put(`/api/vehicles/${this.$route.params.id}`, this.vehicle);
                }
                this.$router.push('/dashboard');
            } catch (error) {
                console.log(error.response.data.errors);
                this.errors = error.response.data.errors;
                
            }
        }
    }
}
</script>