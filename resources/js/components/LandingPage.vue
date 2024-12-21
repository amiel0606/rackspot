<template>
    <div
        class="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style="background-image: url('/images/table1.jpg')"
    >
        <div class="absolute inset-0 bg-black opacity-70"></div>
        <div class="relative text-center z-10">
            <h1 class="text-5xl font-bold text-white mb-4">
                Welcome to M R Rack Spot
            </h1>
            <p class="text-gray-300 text-lg mb-8">
                Your go-to spot for pool, drinks & fun! Perfect for all skill levels. Join us for games, cold drinks, and good vibes!
            </p>
            <button
                class="bg-red-900 text-white px-6 py-3 rounded-full hover:bg-red-700"
            >
                Get Started
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "LandingPage",
};
</script>

<style scoped>
.bg-cover {
    background-size: cover;
    background-position: center;
}
</style>
