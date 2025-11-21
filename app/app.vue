<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
    useHead({
        titleTemplate: (titleChunk: string | undefined) => {
            return titleChunk ?? 'Jump.BG'
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }
        ],
    });
</script>
