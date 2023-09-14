<template>
	<div class="container">
	<div class="row">
		<div class="flex flex-col items-center py-24 text-center text-gray-50">
			<div class="relative">
			<h1 class="relative mb-6 font-sans font-bold text-9xl tracking-tighter-less text-shadow">
				<span>{{ String(error.statusCode).split('').join(' ') }}</span>
			</h1>
				<span class="my-4 text-3xl font-bold text-primary md:text-4xl">{{ $settings.sections._404.title }}</span>
			</div>
			<h5 class="my-4 text-lg font-bold text-primary md:text-xl">{{ $settings.sections._404.description }}</h5>
			<a href="/shop" class="inline-flex px-5 py-3 text-sm font-bold tracking-wider transition ease-linear delay-200 rounded-full shadow-sm bg-primary text-gray-50 scale">{{ $settings.sections._404.buttons.back_to_shop_text }}</a>
		</div>
	</div>
</div>
</template>

<script>
export default {
	props: ['error'],
}
</script>

<style>
.tracking-tighter-less {
	letter-spacing: -0.75rem;
}

.text-shadow {
	color: var(--primary-color);
	text-shadow: -8px 0 0 rgba(var(--primary-rgb), .8);
}
</style>