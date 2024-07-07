<template>
    <main>
        <div class="bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert
                        advice.</p>
                </div>
                <div
                    class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <article v-for="(itm, idx) in blogPosts" :key="idx" class="flex flex-col items-start justify-between">
                        <div class="relative w-full">
                            <img src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                                alt=""
                                class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
                            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                        </div>
                        <div class="max-w-xl">
                            <div class="mt-8 flex items-center gap-x-4 text-xs">
                                <time datetime="2020-03-16" class="text-gray-500">{{itm.publicationDate}}</time>
                                <a href="#"
                                    class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                            </div>
                            <div class="group relative">
                                <h3
                                    class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href="#">
                                        <span class="absolute inset-0"></span>
                                        {{itm.blogTitle}}
                                    </a>
                                </h3>
                                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{itm.blogDescription}}</p>
                            </div>
                            <div class="relative mt-8 flex items-center gap-x-4">
                                <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="" class="h-10 w-10 rounded-full bg-gray-100">
                                <div class="text-sm leading-6">
                                    <p class="font-semibold text-gray-900">
                                        <a href="#">
                                            <span class="absolute inset-0"></span>
                                            {{itm.author}}
                                        </a>
                                    </p>
                                    <p class="text-gray-600">{{itm.position}}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>

    </main>
</template>

<script setup lang="ts">
const blogPosts = ref([
    {
        blogImage: "https://example.com/images/maternal-health-1.jpg",
        blogTitle: "The Importance of Prenatal Care",
        blogDescription: "Prenatal care is crucial for ensuring the health and well-being of both mother and baby. Regular check-ups and monitoring can prevent complications and ensure a smooth delivery process.",
        author: "Dr. Sarah Johnson",
        position: "Obstetrician and Gynecologist",
        publicationDate: "2024-06-24",
        tags: ["Prenatal Care", "Maternal Health", "Child Delivery"]
    },
    {
        blogImage: "https://example.com/images/maternal-health-2.jpg",
        blogTitle: "Nutrition During Pregnancy",
        blogDescription: "Proper nutrition during pregnancy is essential for the development of the baby and the health of the mother. This post discusses key nutrients and dietary tips for expectant mothers.",
        author: "Emily Davis",
        position: "Registered Dietitian",
        publicationDate: "2024-06-24",
        tags: ["Nutrition", "Pregnancy", "Maternal Health"]
    },
    {
        blogImage: "https://example.com/images/maternal-health-3.jpg",
        blogTitle: "Managing Stress During Pregnancy",
        blogDescription: "Stress management is vital during pregnancy to ensure both mental and physical health. Learn techniques and tips to keep stress levels in check during this crucial period.",
        author: "Dr. Michael Thompson",
        position: "Clinical Psychologist",
        publicationDate: "2024-06-24",
        tags: ["Stress Management", "Pregnancy", "Mental Health"]
    },
    {
        blogImage: "https://example.com/images/maternal-health-4.jpg",
        blogTitle: "Understanding Labor and Delivery",
        blogDescription: "Labor and delivery can be an overwhelming experience. This post provides a comprehensive guide on what to expect, pain management options, and tips for a smoother delivery.",
        author: "Dr. Linda Robinson",
        position: "Midwife",
        publicationDate: "2024-06-24",
        tags: ["Labor", "Delivery", "Childbirth"]
    },
    {
        blogImage: "https://example.com/images/maternal-health-5.jpg",
        blogTitle: "Postpartum Care: What to Expect",
        blogDescription: "Postpartum care is as important as prenatal care. This article covers the essential aspects of postpartum recovery, including physical and emotional well-being.",
        author: "Jessica Martinez",
        position: "Postpartum Nurse",
        publicationDate: "2024-06-24",
        tags: ["Postpartum Care", "Recovery", "Maternal Health"]
    }
];)

</script>
