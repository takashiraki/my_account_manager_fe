<script setup lang="ts">
definePageMeta({
    middleware: "auth",
});
</script>
<template>
    <div>
        <div class="h-screen w-screen flex justify-center items-center">
            <Card>
                <CardHeader>
                    <CardTitle>これはホームです</CardTitle>
                    <CardDescription>開発待ち</CardDescription>
                </CardHeader>
                <CardContent> 今開発者が頑張って作ってます </CardContent>
            </Card>
        </div>
    </div>
</template>
