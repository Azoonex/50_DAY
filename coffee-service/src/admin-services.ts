class CategoryFood {
  protected listCateGory: typeCategoryFoodData = [];
  protected detailList: typeDetailList={};

  makeCategory(nameCategory: typeCategoryFoodData) {
    if (!nameCategory?.length) {
      return "Please fill the name category";
    }
    if (nameCategory?.length && nameCategory[0]) {
      nameCategory.map((value) => this.listCateGory.push(value));
      return "Make list Category";
    }
  }
  makeDetailCategory(){
   return this.listCateGory.values()
  }
  get logData() {
    return this.listCateGory;
  }
}

const category = new CategoryFood();
const makeCategory = category.makeCategory([
  { fast_food: ["berger", "pizza"] },
  { stack: ["mite", "bird"] },
]);

class MakeTable {}

//! TYPE
type typeCategoryFoodData = { [key: string]: string[] }[];
type typeDetailList = {
  name: string;
  sell_price: number;
  imgUrl: string;
  mixture: string;
};
