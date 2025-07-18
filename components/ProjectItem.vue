<template>
	<NuxtLink :to="link" :class="[ 'project', id ]" rel="noreferrer" target="_blank" :style="backgroundStyle">
		<article class="block">
			<NuxtImg
				:src="icon"
				:alt="`${title}-logo`"
				class="logo"
				width="100"
				height="100"
				:preload="props.preload"
				:loading="props.preload ? 'eager' : 'lazy'"/>
			<h2 class="title" v-text="title"/>
			<p class="description" v-text="description"/>
		</article>

		<NuxtImg v-if="data?.id === 'idled'" alt="idled mascote" src="/particles/idled_mascote.webp"
				 class="mascote_idled" width="300" height="300"/>
		<NuxtImg v-if="data?.id === 'idled'" alt="idled mascote" src="/particles/idled_mascote_mobile.webp"
				 class="mascote_idled_mobile" width="140" height="146"/>
		<NuxtImg v-if="data?.id === 'tbhc'" alt="tiny boo mascote" src="/particles/tbhc_mascote.webp"
				 class="mascote_tbhc" width="360" height="360"/>
		<NuxtImg v-if="data?.id === 'tbhc'" alt="tiny boo mascote" src="/particles/tbhc_mascote_mobile.webp"
				 class="mascote_tbhc_mobile" width="100" height="133"/>
	</NuxtLink>
</template>

<script setup lang="ts">
interface IData {
	id: string
	link?: string
	title: string
	description: string,
	background?: string
}

interface IProps {
	data: IData | null,
	preload?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
	data: null,
	preload: false
})

const id = computed(() => props.data?.id)
const icon = computed(() => `/icon/${props.data?.id}_logo.webp`)
const link = computed(() => props.data?.link || '')
const title = computed(() => props.data?.title)
const description = computed(() => props.data?.description)
const backgroundStyle = computed(() => {
	if (!props.data?.id) return {}

	return {
		backgroundImage: `url(/images/project/${id.value}_bg.webp)`,
	}
})
</script>

<style scoped lang="sass">
.project
	height: 100%
	width: 100%
	background-repeat: no-repeat
	background-size: cover
	background-position: center center
	display: flex
	align-items: center
	justify-content: flex-start
	padding: 20px
	position: relative
	transition: filter .2s ease-in-out
	text-decoration: none
	+desktop
		padding: 40px

	.block
		width: 100%
		backdrop-filter: blur(10px)
		border-radius: 20px
		padding: 20px
		display: flex
		flex-direction: column
		align-items: center
		justify-content: flex-start
		gap: 10px
		background-color: rgba(#000, .2)
		+desktop
			width: 370px
			align-items: flex-start
			justify-content: flex-start

		.logo
			width: 100px
			height: 100px
			border-radius: 20px

		.title
			font: 600 28px/34px var(--main-font)
			color: var(--uicolor-white)
			padding: 10px
			background: var(--uicolor-orange)
			border-radius: 10px
			margin: 0
			text-align: center
			text-decoration: none

		.description
			font: 500 16px/22px var(--main-font)
			color: var(--uicolor-white)
			padding: 0
			margin: 0
			text-align: center
			text-decoration: none
			+desktop
				text-align: left

	.mascote_idled
		position: absolute
		top: 0
		left: 0
		width: 150px
		height: 150px
		display: none
		+desktop
			display: block
			width: 300px
			height: 300px

	.mascote_idled_mobile
		display: block
		position: absolute
		top: 0
		right: 0
		width: 140px
		+desktop
			display: none

	.mascote_tbhc
		position: absolute
		bottom: 0
		right: 0
		transform: rotateY(180deg)
		width: 360px
		display: none
		+desktop
			display: block

	.mascote_tbhc_mobile
		position: absolute
		top: 0
		right: 0
		width: 100px
		+mobile_xl
			width: 160px
		+desktop
			display: none

	&:hover
		filter: brightness(1.3)
		text-decoration: none

</style>
