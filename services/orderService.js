orderApp.factory("orderService", function () {
    var orderArr = [];

    var addOrder = function (order) {
        orderArr.push(order);
    }

    var getAllOrders = function () {
        return orderArr;
    }

    return {
        addOrder: addOrder,
        getAllOrders: getAllOrders
    }
});