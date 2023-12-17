function loadData(data) {
	var productImage = document.getElementById("product-image");
	var productText = document.getElementById("product-text");
	
	if (data === "xs") {
		productText.innerHTML = "The iPhone XS (stylized and marketed as iPhone Xs and iPhone Xs Max; Roman numeral \"X\" pronounced \"ten\") are smartphones designed, developed and marketed by Apple Inc. They are the twelfth-generation flagships of the iPhone, succeeding the iPhone X. Apple CEO Tim Cook";
		productImage.src = "./images/apple-iphone-xs.jpg";
	} else if (data === "max") {
		productText.innerHTML = "The iPhone XS Max (stylized and marketed as iPhone Xs and iPhone Xs Max; Roman numeral \"X\" pronounced \"ten\") are smartphones designed, developed and marketed by Apple Inc. They are the twelfth-generation flagships of the iPhone, succeeding the iPhone X. Apple CEO Tim Cook announced the";
		productImage.src = "./images/apple-iphone-xs-max.jpg";
	} else if (data === "8s") {
		productText.innerHTML = "The iPhone 8 and iPhone 8 Plus are smartphones designed, developed, and marketed by Apple Inc. They are the eleventh generation of the iPhone. The iPhone 8 was released on September 22, 2017, succeeding the iPhone 7 and iPhone 7 Plus respectively and preceding the iPhone XR. The iPhone 8 and";
		productImage.src = "./images/apple-iphone-8-plus.jpg";
	}
}