orderApp.factory("MenuTA", function(){
    function MenuTA(plainObject) {
        this.name = plainObject.name;
        this.set = plainObject.set;
        this.number = plainObject.number;
        this.photo = plainObject.photo;
        this.price = plainObject.price;
       };

    return MenuTA;
});

orderApp.factory("menus", function(MenuTA) {
    var menuArr = [];

    var add = function(posMenu) {
        menuArr.push(posMenu);
    }

    var remove = function(index) {
        menuArr.splice(index, 1);
    }

// admin
    var load = function(plainObjectArr) {
        for (var i = 0; i < plainObjectArr.length; i++) {
            menuArr.push(new MenuTA(plainObjectArr[i]))
        }
    }

    var getAll = function() {
        return menuArr;
    }

    var get = function(index) {
        return menuArr[index];
    }

    var removeAll = function() {
        menuArr = [];
    }

    return {
        add: add,
        update: update,
        remove: remove,
        load: load,
        getAll: getAll,
        get: get,
        removeAll: removeAll
    }
})