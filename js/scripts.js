WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function() {
	// Main slider
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			on: {
				resize: swiper => {
					setTimeout(() => {
						let items = swiper.el.querySelectorAll('.data')

						items.forEach(el => el.style.height = 'auto')

						setHeight(items)
					})
				}
			}
		})
	}


	// Services slider
	const servicesSliders = [],
		services = document.querySelectorAll('.services .swiper')

	services.forEach((el, i) => {
		el.classList.add('services_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: 0,
			slidesPerView: 1
		}

		servicesSliders.push(new Swiper('.services_s' + i, options))
	})


	// Reviews slider
	const reviewsSliders = [],
		reviews = document.querySelectorAll('.reviews .swiper')

	reviews.forEach((el, i) => {
		el.classList.add('reviews_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 40,
					slidesPerView: 2
				}
			},
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


	// Cases slider
	const casesSliders = [],
		cases = document.querySelectorAll('.cases .swiper')

	cases.forEach((el, i) => {
		el.classList.add('cases_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 40,
					slidesPerView: 3
				}
			},
		}

		casesSliders.push(new Swiper('.cases_s' + i, options))
	})


	// Services slider
	const suitableIfSliders = [],
		suitableIf = document.querySelectorAll('.suitable_if .swiper')

	suitableIf.forEach((el, i) => {
		el.classList.add('suitable_if_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 4
				},
				1280: {
					spaceBetween: 40,
					slidesPerView: 4
				}
			},
			on: {
				resize: swiper => {
					setTimeout(() => {
						let items = swiper.el.querySelectorAll('.item')

						items.forEach(el => el.style.height = 'auto')

						setHeight(items)
					})
				}
			}
		}

		suitableIfSliders.push(new Swiper('.suitable_if_s' + i, options))
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_close"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	$('.modal .close_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs:first .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Mini popups
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Close the popup when clicking outside of it
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Mob. menu
	$('.mob_header .mob_menu_btn, header .mob_close_btn, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('header').toggleClass('show')

		$('.mob_header .mob_menu_btn').hasClass('active')
			? $('.overlay').fadeIn(300)
			: $('.overlay').fadeOut(300)
	})


	// LK - Mob. menu
	$('.lk .header .mob_menu_btn, .lk aside .mob_close_btn, .overlay').click((e) => {
		e.preventDefault()

		$('.lk .header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('.lk aside').toggleClass('show')

		$('.lk .header .mob_menu_btn').hasClass('active')
			? $('.overlay').fadeIn(300)
			: $('.overlay').fadeOut(300)
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Card date mask
	const cardDateInputs = document.querySelectorAll('.card_date_input')

	if (cardDateInputs) {
		cardDateInputs.forEach(el => {
			IMask(el, {
				mask: '00 {/} 00',
				lazy: true
			})
		})
	}


	// Card CVV mask
	const cardCVVInputs = document.querySelectorAll('.card_CVV_input')

	if (cardCVVInputs) {
		cardCVVInputs.forEach(el => {
			IMask(el, {
				mask: '000',
				lazy: true
			})
		})
	}


	// Custom select - Nice select
	const selects = document.querySelectorAll('select:not(.skip)'),
		selectsInstances = []

	if (selects) {
		selects.forEach(el => {
			selectsInstances.push(NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			}))

			el.addEventListener('change', () => el.classList.add('selected'))

			if (el.querySelector('option[selected]')) {
				el.classList.add('selected')
			}
		})
	}


	if (is_touch_device()) {
		const subMenus = document.querySelectorAll('header .menu .sub_menu')

		// Submenu on the touch screen
		$('header .menu_item > a.sub_link').addClass('touch_link')

		$('header .menu_item > a.sub_link').click(function (e) {
			const dropdown = $(this).next()

			if (dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.forEach(el => el.classList.remove('show'))
				dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Close the submenu when clicking outside it
		document.addEventListener('click', e => {
			if ($(e.target).closest('.menu').length === 0) {
				subMenus.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}


	// Turn off autopayment
	$('.autopayment .status .toggle, .cards .card .info .toggle').click(function(e) {
		const _self = $(this)

		setTimeout(() => {
			if (e.target.nodeName === 'LABEL' && !_self.find('input').prop('checked')) {
				Fancybox.show([{
					src: '#disable_autopaymeny_confirm_modal',
					type: 'inline'
				}])
			}
		})
	})


	// Toggle input type
	$('.toggle_type_btn').click(function(e) {
		e.preventDefault()

		const field = $(this).closest('.field')

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? field.find('.input').attr('type', 'text')
			: field.find('.input').attr('type', 'password')
	})


	// LK - Edit personal data
	$('.personal_data .edit_btn').click(function(e) {
		e.preventDefault()

		const line = $(this).closest('.line'),
			input = line.find('.input')

		$(this).addClass('hide')

		input.removeClass('success filled failed').attr('readonly', false)
	})


	$('.personal_data .save_btn').click(function(e) {
		e.preventDefault()

		const line = $(this).closest('.line'),
			input = line.find('.input')

		line.find('.edit_btn').removeClass('hide')

		input.addClass('filled')
		input.attr('readonly', true)

		if (input.attr('type') === 'email') {
			input.addClass('failed')
		}
	})


	// Custom submit
	$('.action_block .form, #order_modal .form').submit(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#order_success_modal',
			type: 'inline'
		}])
	})


	$('#question_modal .form').submit(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#question_success_modal',
			type: 'inline'
		}])
	})


	if ($('#new_password_modal').length) {
		Fancybox.show([{
			src: '#new_password_modal',
			type: 'inline'
		}])
	}


	if ($('#enable_autopayment_info_modal').length) {
		Fancybox.show([{
			src: '#enable_autopayment_info_modal',
			type: 'inline'
		}])
	}


	// Calc
	$('.calc .type input[name=type]').change(function () {
		const val = $(this).val()

		val != 3
			? $('.calc .form .select').show()
			: $('.calc .form .select').hide()

		$('.calc .form .bottom.rate .val').hide()
		$('.calc .form .bottom.rate .val.type_' + val).show()
	})


	sumRange = $('#sum_range').ionRangeSlider({
		min: 10000,
		max: 500000,
		from: 100000,
		step: 500,
		postfix: ' ₽',
		onChange: data => {
			$('.sum_range .val').text(data.from.toLocaleString() + ' ₽')
		},
		onUpdate: data => {
			$('.sum_range .val').text(data.from.toLocaleString() + ' ₽')
		}
	}).data('ionRangeSlider')


	monthRange = $('#month_range').ionRangeSlider({
		min: 3,
		max: 60,
		from: 30,
		step: 1,
		postfix: ' мес',
		onChange: data => {
			$('.month_range .val').text(data.from.toLocaleString() + ' мес')
		},
		onUpdate: data => {
			$('.month_range .val').text(data.from.toLocaleString() + ' мес')
		}
	}).data('ionRangeSlider')



	// Payment form
	$('.payment_form .input').keyup(function() {
		const _self = $(this)

		setTimeout(() => {
			_self.val().length
				? $('.payment_form .exp').addClass('show')
				: $('.payment_form .exp').removeClass('show')
		})
	})

	$('.payment_form .tips .btn').click(function(e) {
		e.preventDefault()

		const value = $(this).data('value')

		$('.payment_form .input').val(value)
		$('.payment_form .exp').addClass('show')
	})
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})