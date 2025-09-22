<script setup>
import RouterLink from '@/components/UI/RouterLink.vue';
import Heading from '@/components/UI/Heading.vue';

defineProps({
    titulo: {
        type: String
    }
})
</script>


<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="agregar-clientes">
                Agregar Clientes
            </RouterLink>
        </div>
    </div>
    <Heading>{{titulo}}</Heading>
</template>