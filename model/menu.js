orderApp.factory("MenuTA", function(){
    function MenuTA(plainObject) {
        this.name = plainObject.name;
        this.set = plainObject.description;
        this.number = plainObject.duration;
        this.photo = plainObject.ingrediants;
        this.price = plainObject.steps;
       };

    return MenuTA;
});