class CategoryFood {
  protected listCateGory:typeCategoryFoodData = [];

  makeCategory(nameCategory: typeCategoryFoodData) {
    if (!nameCategory?.length) {
      return "Please fill the name category";
    }
    nameCategory.map(value => this.listCateGory.push(value))
  }
  get logData (){
    return this.listCateGory
  }
}

const category = new CategoryFood()
const makeCategory = category.makeCategory([{"Fast-food":["berger","pizza"]},{"Stack":["mite","bird"]}]);
console.log(category.logData)


class MakeTable {}

//TYPE 
type typeCategoryFoodData = {[key: string]: string[]}[]
