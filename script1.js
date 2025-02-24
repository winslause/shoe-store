$(document).ready(function() {
    // Separate arrays for each category (as provided)
    let mens_shoes = [
        { id: 1, name: "Fashion Men's Sneaker", price: 899, rating: 4, image: "./images/nike1.jpg", details: "Lightweight, breathable running shoes for men.", category: "Men's Shoes" },
        { id: 3, name: "Alagzi Men's Formal Shoes", price: 1190, rating: 4, image: "./images/alagzi.jpg", details: "Elegant casual shoes for formal occasions.", category: "Men's Shoes" }
    ];

    let womens_shoes = []; // Add women's shoes here if you have data

    let kids_shoes = []; // Add kids' shoes here if you have data

    let sports_shoes = [
        { id: 2, name: "Sports Men's Shoes", price: 1200, rating: 4.5, image: "./images/nike4.jpg", details: "Durable sports shoes for running and training.", category: "Sports Shoes" }
    ];

    let casual_shoes = [
        { id: 4, name: "Couple Canvas Low Top", price: 759, rating: 4.2, image: "shoe4.jpg", details: "Classic casual canvas shoes for couples.", category: "Casual Shoes" }
    ];

    // Combine all shoes for search and sort functionality
    let all_shoes = [...mens_shoes, ...womens_shoes, ...kids_shoes, ...sports_shoes, ...casual_shoes];

    // Display shoes
    function displayShoes(shoesToDisplay) {
        const shoeList = $('#shoeList');
        shoeList.empty();
        if (shoesToDisplay.length === 0) {
            shoeList.append('<p>No shoes found in this category.</p>');
            return;
        }
        shoesToDisplay.forEach(shoe => {
            const shoeDiv = $('<div>').addClass('shoe-item').attr('data-id', shoe.id);
            shoeDiv.append(`
                <img src="${shoe.image}" alt="${shoe.name}">
                <h3>${shoe.name}</h3>
                <p class="price">KSh ${shoe.price}</p>
                <p class="rating">⭐ ${shoe.rating} (${Math.floor(Math.random() * 500) + 100} reviews)</p>
                <button class="book-btn">Book</button>
                <div class="shoe-details">${shoe.details}</div>
            `);
            shoeList.append(shoeDiv);
        });

        // Expand shoe details on click
        $('.shoe-item').on('click', function(e) {
            // Prevent the click from triggering the book button
            if (!$(e.target).hasClass('book-btn')) {
                $(this).find('.shoe-details').slideToggle();
            }
        });

        // Book button functionality (example alert)
        $('.book-btn').on('click', function(e) {
            e.stopPropagation();
            const shoeName = $(this).closest('.shoe-item').find('h3').text();
            alert(`You have booked: ${shoeName}`);
        });
    }

    // Initial display (all shoes)
    displayShoes(all_shoes);

    // Sort functionality
    $('#sortSelect').on('change', function() {
        const sortBy = $(this).val();
        let sortedShoes = [...all_shoes];
        if (sortBy === 'price-low') {
            sortedShoes.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            sortedShoes.sort((a, b) => b.price - a.price);
        }
        displayShoes(sortedShoes);
    });

    // Real-time search with autocomplete
    $("#searchInput").autocomplete({
        source: function(request, response) {
            const term = request.term.toLowerCase();
            const filteredShoes = all_shoes.filter(shoe => 
                shoe.name.toLowerCase().includes(term)
            );
            response(filteredShoes.map(shoe => shoe.name));
        },
        select: function(event, ui) {
            const selectedShoe = all_shoes.find(shoe => shoe.name === ui.item.value);
            displayShoes([selectedShoe]);
            $(this).val('');
            return false;
        }
    });

    // AJAX simulation (replace with actual API call)
    function fetchShoes(query = '', category = '') {
        return new Promise(resolve => {
            setTimeout(() => {
                let filteredShoes = all_shoes;
                if (category) {
                    switch (category) {
                        case "Men's Shoes":
                            filteredShoes = mens_shoes;
                            break;
                        case "Women's Shoes":
                            filteredShoes = womens_shoes;
                            break;
                        case "Kids' Shoes":
                            filteredShoes = kids_shoes;
                            break;
                        case "Sports Shoes":
                            filteredShoes = sports_shoes;
                            break;
                        case "Casual Shoes":
                            filteredShoes = casual_shoes;
                            break;
                    }
                }
                if (query) {
                    filteredShoes = filteredShoes.filter(shoe => 
                        shoe.name.toLowerCase().includes(query.toLowerCase())
                    );
                }
                resolve(filteredShoes);
            }, 500);
        });
    }

    // Search button click
    $('#searchButton').on('click', function() {
        const query = $('#searchInput').val();
        fetchShoes(query).then(displayShoes);
    });

    // Real-time search as user types
    $('#searchInput').on('input', function() {
        const query = $(this).val();
        fetchShoes(query).then(displayShoes);
    });

    // Category filter in sidebar
    $('.sidebar li').on('click', function() {
        const category = $(this).text();
        let shoesToDisplay;
        switch (category) {
            case "Men's Shoes":
                shoesToDisplay = mens_shoes;
                break;
            case "Women's Shoes":
                shoesToDisplay = womens_shoes;
                break;
            case "Kids' Shoes":
                shoesToDisplay = kids_shoes;
                break;
            case "Sports Shoes":
                shoesToDisplay = sports_shoes;
                break;
            case "Casual Shoes":
                shoesToDisplay = casual_shoes;
                break;
            default:
                shoesToDisplay = all_shoes; // Show all if no category matches
        }
        displayShoes(shoesToDisplay);
    });

    // Hamburger menu toggle for small devices (toggle both sidebar and nav-right)
    $('.hamburger').on('click', function() {
        $('.sidebar, .nav-right').toggleClass('active');
    });

    // No custom dropdown toggle needed for Account; Bootstrap handles it
});