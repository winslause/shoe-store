$(document).ready(function () {
    // Sidebar toggle for small devices
    $('.navbar-toggler').click(function () {
        $('#sidebar').toggleClass('show');
    });

    // Close sidebar when clicking outside on mobile
    $(document).click(function (event) {
        if ($(window).width() <= 768) {
            if (!$('#sidebar').is(event.target) && $('#sidebar').has(event.target).length === 0 && !$('.navbar-toggler').is(event.target)) {
                $('#sidebar').removeClass('show');
            }
        }
    });

    // Navigation tabs
    $('.nav-link, .dropdown-item').click(function (e) {
        e.preventDefault();
        const target = $(this).attr('href').substring(1);
        $('.section').hide();
        $('#' + target).show();
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });

    // Form submission handlers (mock functionality with alerts)
    $('#productForm').submit(function (e) {
        e.preventDefault();
        const product = {
            id: Date.now(), // Mock ID
            name: $('#productName').val(),
            price: parseFloat($('#productPrice').val()),
            rating: parseFloat($('#productRating').val()),
            image: $('#productImage').val(),
            details: $('#productDetails').val(),
            category: $('#productCategory').val()
        };
        alert(`Product Added:\n${JSON.stringify(product, null, 2)}`);
        $('#productForm')[0].reset();
        addProductToTable(product);
        $('#productsModal').modal('hide');
    });

    $('#addOrderForm').submit(function (e) {
        e.preventDefault();
        const order = {
            id: Date.now(),
            customer: $('#orderCustomer').val(),
            product: $('#orderProduct').val(),
            date: $('#orderDate').val(),
            status: $('#orderStatus').val()
        };
        alert(`Order Added:\n${JSON.stringify(order, null, 2)}`);
        $('#addOrderForm')[0].reset();
        $('#addOrderModal').modal('hide');
    });

    $('#editOrderForm').submit(function (e) {
        e.preventDefault();
        const status = $('#editOrderStatus').val();
        alert(`Order Status Updated to: ${status}`);
        $('#editOrderModal').modal('hide');
    });

    $('#addUserForm').submit(function (e) {
        e.preventDefault();
        const user = {
            id: Date.now(),
            name: $('#userName').val(),
            email: $('#userEmail').val(),
            joined: $('#userJoined').val()
        };
        alert(`User Added:\n${JSON.stringify(user, null, 2)}`);
        $('#addUserForm')[0].reset();
        $('#addUserModal').modal('hide');
    });

    $('#editUserForm').submit(function (e) {
        e.preventDefault();
        const name = $('#editUserName').val();
        const email = $('#editUserEmail').val();
        alert(`User Updated:\nName: ${name}\nEmail: ${email}`);
        $('#editUserModal').modal('hide');
    });

    $('#addSaleForm').submit(function (e) {
        e.preventDefault();
        const sale = {
            id: Date.now(),
            date: $('#saleDate').val(),
            product: $('#saleProduct').val(),
            quantity: parseInt($('#saleQuantity').val()),
            revenue: parseFloat($('#saleRevenue').val()),
            profitLoss: parseFloat($('#saleProfitLoss').val())
        };
        alert(`Sale Record Added:\n${JSON.stringify(sale, null, 2)}`);
        $('#addSaleForm')[0].reset();
        $('#addSaleModal').modal('hide');
    });

    $('#replyMessageForm').submit(function (e) {
        e.preventDefault();
        const reply = $('#messageReply').val();
        alert(`Reply Sent:\n${reply}`);
        $('#replyMessageForm')[0].reset();
        $('#replyMessageModal').modal('hide');
    });

    $('#addRefundForm').submit(function (e) {
        e.preventDefault();
        const refund = {
            customer: $('#refundCustomer').val(),
            orderId: $('#refundOrder').val(),
            amount: parseFloat($('#refundAmount').val()),
            reason: $('#refundReason').val()
        };
        alert(`Refund Processed:\n${JSON.stringify(refund, null, 2)}`);
        $('#addRefundForm')[0].reset();
        $('#addRefundModal').modal('hide');
    });

    // Function to add product to table (mock)
    function addProductToTable(product) {
        const row = `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>$${product.price.toFixed(2)}</td>
                <td>${product.rating}</td>
                <td>${product.category.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase())}</td>
                <td><button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#editProductModal">Edit</button></td>
            </tr>
        `;
        $('#productsTable').append(row);
    }
});