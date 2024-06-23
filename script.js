document.addEventListener('DOMContentLoaded', () => {
    const menuItems = [
        {
            name: 'Margherita Pizza',
            description: 'Classic delight with 100% real mozzarella cheese',
            price: '$8.99',
            image: 'https://via.placeholder.com/200'
        },
        {
            name: 'Pepperoni Pizza',
            description: 'A delicious blend of pepperoni and cheese',
            price: '$9.99',
            image: 'https://via.placeholder.com/200'
        },
        {
            name: 'Veggie Burger',
            description: 'Loaded with fresh vegetables and a tangy sauce',
            price: '$7.99',
            image: 'https://via.placeholder.com/200'
        },
        {
            name: 'Grilled Chicken Salad',
            description: 'Healthy and fresh with a variety of greens',
            price: '$10.99',
            image: 'https://via.placeholder.com/200'
        }
    ];

    const menuItemsContainer = document.getElementById('menu-items');
    menuItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');
        menuItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p class="price">${item.price}</p>
        `;
        menuItemsContainer.appendChild(menuItemElement);
    });
});
