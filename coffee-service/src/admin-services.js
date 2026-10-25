var CategoryFood = /** @class */ (function () {
    function CategoryFood() {
        this.listCateGory = [];
    }
    CategoryFood.prototype.makeCategory = function (nameCategory) {
        var _this = this;
        if (!(nameCategory === null || nameCategory === void 0 ? void 0 : nameCategory.length)) {
            return "Please fill the name category";
        }
        if ((nameCategory === null || nameCategory === void 0 ? void 0 : nameCategory.length) && nameCategory[0]) {
            nameCategory.map(function (value) { return _this.listCateGory.push(value); });
            return "Make list Category";
        }
    };
    Object.defineProperty(CategoryFood.prototype, "logData", {
        get: function () {
            return this.listCateGory;
        },
        enumerable: false,
        configurable: true
    });
    return CategoryFood;
}());
var category = new CategoryFood();
var makeCategory = category.makeCategory([
    { "fast-food": ["berger", "pizza"] },
    { stack: ["mite", "bird"] },
]);
var MakeTable = /** @class */ (function () {
    function MakeTable() {
    }
    return MakeTable;
}());
