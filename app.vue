<script setup lang="ts">
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk
            ? `${titleChunk} - Account Manager`
            : "Account Manager";
    },
});
</script>
<template>
    <NuxtLoadingIndicator />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="css">
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
