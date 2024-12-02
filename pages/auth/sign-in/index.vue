<script setup lang="ts">
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
</script>

<template>
    <div class="h-screen flex justify-center items-center">
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent> Card Content </CardContent>
            <CardFooter> Card Footer </CardFooter>
        </Card>
    </div>
</template>
