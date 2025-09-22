<script setup>
import RouterLink from '@/components/UI/RouterLink.vue';
import Heading from '@/components/UI/Heading.vue';
import { FormKit } from '@formkit/vue';

defineProps({
    titulo: {
        type: String
    }
})
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="inicio">
                Volver
            </RouterLink>

        </div>
    </div>

    <Heading>{{ titulo }}</Heading>

    <div class="bg-white shadow rounded-md max-w-3xl mx-auto p-4 mt-10">
        <div class="mx-auto md:w-2/3 py-20 px-6">
            <FormKit type="form">
                <FormKit 
                type="text" 
                label="Nombre" 
                name="nombre" 
                placeholder="Nombre del Cliente" 
                validation="required"
                :validation-messages="{ required: 'El Nombre del Cliente es obligatorio' }" />

                <FormKit 
                type="text" 
                label="Apellido" 
                name="apellido" 
                placeholder="Apellido del Cliente" 
                validation="required"
                :validation-messages="{ required: 'El Apellido del Cliente es obligatorio' }" />

                <FormKit 
                type="email" 
                label="Email" 
                name="email" 
                placeholder="Email del Cliente" 
                validation="required | email"
                :validation-messages="{ required: 'El Email del Cliente es obligatorio', email: 'El Email no es válido' }" />

                <FormKit 
                type="text" 
                label="Telefono" 
                name="telefono" 
                placeholder="Telefono: XXX-XXX-XXX" 
                validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                :validation-messages="{ matches: 'El Telefono no es válido' }" />
            </FormKit>
        </div>


    </div>
</template>

<style>
.formkit-outer {
    max-width: 100%;
}
</style>