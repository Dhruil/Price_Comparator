const productCards = document.getElementById('product-cards');
const searchBox = document.getElementById('search-box');

// Example product data (replace with your data)
const products = [
    { 
        Shop_Name:"Nike Official",
Name: "Nike Air Max 97 Men's Shoes Size 8 (Black)",
Price: "16995.0 INR",
URL: "https://www.nike.com/in/t/air-max-97-shoes-EBZrb8/921826-015"
    },
    {
        Shop_Name:"StockX",
Name:"Nike Air Max 97 Triple Black",
Price:"12212.63 INR",
URL:"https://stockx.com/nike-air-max-97-triple-black?country=DE&currencyCode=EUR&size=9.5&srsltid=AfmBOooxy6vCahgO1Fs41TPAfFxQ5BNUS64WbkU6mz5nE5RdegrbLFmk1xI"
    },
    {
        Shop_Name:"KDB Deals",
Name:"Men's Nike Airmax 97 Satan MSCHF X Lil Nas (LB928) - 9-uk",
Price: "3399.0 INR",
URL: "https://kdbdeals.com/product/nike-airmax-97-satan-mschf-x-lil-nas/?attribute_pa_size=9-uk"
},
      {
        Shop_Name:"ssense.com",
Name:"Nike Red & Black Air Max 97 Sneakers",
Price:"18318.34 INR",
URL:"https://www.ssense.com/en-us/men/product/nike/red-and-black-air-max-97-sneakers/11224371"
},
    { 
        Shop_Name:"Amazon.in",
        Name:"Milton Cubic Small Tiffin Box800 ml 2 Containers Lunch Box",
        Price:"615.0 INR",
        URL:"https://www.amazon.in/Milton-Cubic-Small-Tiffin-Containers/dp/B093PT4FGG?source=ps-sl-shoppingads-lpcont"
    },
    {
        Shop_Name:"Snapdeal",
        Name:"Nanonine - Tiffiny Double Wall Insulated Stainless Steel Insulated Lunch Box 2 Container ( Pack Of 1 ) No Blue",
        Price:"575.0 INR",
        URL:"https://www.snapdeal.com/product/nanonine-tiffiny-double-wall-insulated/641015602753?supc=SDL325702955&utm_source=earth&utm_medium=641015602753_207_5_575&vendorCode=4a62e3&isSellerPage=true&fv=true"
    }
    ,{
        Shop_Name:"Flipkart",
Name:"Pigeon Thermo Warm And Fresh Insulated Tiffin 2 Containers Lunch Box",
Price:"580.0 INR",
URL:"http://www.flipkart.com/pigeon-thermo-warm-fresh-insulated-tiffin-2-containers-lunch-box/p/itmdb822b86a3553?pid=LBXGZHVFAQZSYCGU&lid=LSTLBXGZHVFAQZSYCGUDYCUE1&marketplace=FLIPKART&cmpid=content_lunch-box_8965229628_gmc"},
      {
        Shop_Name:"bigbasket.com",
Name:"Modware Exclusive Stainless Steel Tiffin Box - Grey 3 pcs (400 ml + 400 ml + 450 ml)",
Price:"319.0 INR",
URL:"https://www.bigbasket.com/pd/40288828/modware-exclusive-stainless-steel-tiffin-box-grey-3-pcs/?z=MzE0OTkyNTYwMg&utm_source=google&utm_medium=cpc&utm_campaign=Coimbatore-PLA/"
},
    { 
      Shop_Name: "Croma",
      Name: "DELL G15-5530 Intel Core i5 13th Gen ",
      Price: "95999.0" ,
      URL: "https://www.croma.com/dell-g15-5530-intel-core-i5-13th-gen-15-6-inch-16gb-512gb-windows-11-ms-office-2021-nvidia-geforce-rtx-3050-full-hd-display-dark-shadow-gray-with-black-thermal-shelf-gn5530d83m6002orb1-/p/273309?srsltid=AfmBOorN0lYuKd14mcA9pZblVaRvMlKilJ12lr2R158I-jPVnAv-LMnhtT4"
    },
    {
      Shop_Name: "Amazon.in",
      Name: "PDell G15 5520 Gaming Laptop, Intel i5-12500H,16GB DDR5,512GB SSD,NVIDIA RTX 3050 (4GB GDDR6),15.6(39.62cm) FHD WVA AG 120Hz 250 nits, Backlit KB",
      Price: "70990.0",
      URL: "https://www.amazon.in/Dell-i5-12500H-39-62Cms-Backlit-D560822WIN9B/dp/B09XXM57T2?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A14CZOWI0VEHLG"
    }
    ,{
        Shop_Name: "Vijay Sales",
        Name: "Dell G15 Gaming Laptop (11th Gen Core i5/ 8 GB RAM/ 512 GB SSD/ 15.6 Inch (39.62 cm) FHDDisplay/ 4 GB NVIDIA Graphics/ Win11 / MSOffice) D560827WIN9",
    Price:"68999.0", 
        URL: "https://www.vijaysales.com/dell-g15-5511-d560827win9-gaming-laptop-11th-gen-intel-core-i5-8-gb-ram-512-gb-ssd-15-6-inch-39-62-cm-display-4-gb-nvidia-graphics-win-11-mso/21744"
      },
      {
        Shop_Name: "Tradeindia.com",
        Name: "15.6 Inches Display 512 Gb 16 Gb Ram Core I5 G15-5511 Laptop",
        Price:' 69490.0',
        URL: "https://www.tradeindia.com/products/dell-new-g15-5511-gaming-laptop-intel-i5-11260h-8gb-512gb-ssd-15-6-dark-shadow-grey-3kg-7776646.html"
      }
];

// Function to display product cards
function displayProductCards(productList) {
    productCards.innerHTML = '';

    productList.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = 
        `<a href="${product.URL}">
        <h3>${product.Name}</h3>
        </a>
            
            <h4>${product.Price}</h4>
            <h4>${product.Shop_Name}</h4>
        `;

        productCards.appendChild(card);
    });
}

// Function to filter products by name
function filterProductsByName(searchText) {
    return products.filter(product => product.Name.toLowerCase().includes(searchText.toLowerCase()));
}
// Event listener for the search box
searchBox.addEventListener('input', () => {
    const searchText = searchBox.value.trim();
    const filteredProducts = filterProductsByName(searchText);

    if (filteredProducts.length > 0) {
        displayProductCards(filteredProducts);
    } else {
        productCards.innerHTML = '<p class="search-error">No products found.</p>';
    }
}); // Missing closing parenthesis and semicolon


// Display all products on page load
displayProductCards(products);
