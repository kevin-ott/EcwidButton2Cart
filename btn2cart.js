window.Ecwid.OnAPILoaded.add(() => {
	let btns = document.querySelectorAll(
		"div[id^=product] div[aria-label='Jetzt kaufen']"
	);
	btns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.stopImmediatePropagation();
			e.preventDefault();
			let productId = parseInt(
				e.currentTarget.parentElement.parentElement.parentElement.parentElement.id.substring(
					8
				)
			);
			window.Ecwid.Cart.addProduct(productId, (success, product, _) => {
				console.debug(success);
				console.debug(`Added ${product.name} to cart.`);
			});
		});
	});
});
