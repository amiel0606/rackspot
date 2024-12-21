<template>
    <div class="about-container grid grid-cols-2 gap-5 p-5">
        <div class="text-container flex flex-col justify-center items-center fade-in">
            <h1 class="text-3xl font-bold text-white">About Us</h1>
            <p class="mt-4 text-lg text-center text-white">
                Welcome to our website. We are dedicated to providing the best
                service possible.
            </p>
        </div>
        <div class="photo-container flex justify-center items-center bg-red-900 p-3 rounded-lg max-w-md mx-auto fade-in">
            <img
                class="w-full h-auto object-cover rounded-lg"
                src="/images/about.png"
                alt="About Us Photo"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "About",
    mounted() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                    entry.target.classList.remove('fade-out-hidden');
                } else {
                    entry.target.classList.remove('fade-in-visible');
                    entry.target.classList.add('fade-out-hidden');
                }
            });
        });

        document.querySelectorAll('.fade-in').forEach((element) => {
            observer.observe(element);
        });
    },
};
</script>

<style scoped>
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in-visible {
    opacity: 1;
    transform: translateY(0);
}

.fade-out-hidden {
    opacity: 0;
    transform: translateY(20px);
}
</style>