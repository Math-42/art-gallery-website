export const pageAnimation = {
	hide: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 1,
		},
	},
}


export const galleryAnimation = {
	hide: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.04,
			ease: 'easeOut',
			delayChildren: 0.55,
		},
	},
}

export const captionAnimation = {
	hide: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			delay: 1.25,
			duration: 2,
		},
	},
}

export const cardAnimation = {
	hide: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
}
