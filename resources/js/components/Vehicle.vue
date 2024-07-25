<template>
    <div class="container">
        <div class="row">
            <div class="col">
                Make:
            </div>
            <div class="col">
                {{ vehicle.make }}
            </div>
        </div>
        <div class="row">
            <div class="col">
                Model:
            </div>
            <div class="col">
                {{ vehicle.model }}
            </div>
        </div>
        <div class="row">
            <div class="col">
                Year:
            </div>
            <div class="col">
                {{ vehicle.year }}
            </div>
        </div>
        <div class="row">
            <div class="col">
                Color:
            </div>
            <div class="col">
                {{ vehicle.color }}
            </div>
        </div>
        <div class="row">
            <div class="col">
                Price:
            </div>
            <div class="col">
                {{ vehicle.price }}
            </div>
        </div>
        <router-link :to="`/vehicles/${vehicle.id}/edit`" class="btn btn-primary">Edit</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            vehicle: {}
        }
    },
    async created() {
        try {
            const response = await axios.get(`/api/vehicles/${this.$route.params.id}`);
            this.vehicle = response.data;
        } catch (error) {
            console.error(error);
        }
    }
}
</script>