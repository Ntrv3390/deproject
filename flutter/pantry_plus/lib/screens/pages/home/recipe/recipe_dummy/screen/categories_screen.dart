import 'package:flutter/material.dart';
import 'package:pantry_plus/screens/pages/home/recipe/recipe_dummy/widgets/category_item.dart';
import 'package:pantry_plus/screens/pages/home/recipe/recipe_dummy/model/dummy_data.dart';

class CategoriesScreen extends StatelessWidget {
  const CategoriesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return GridView(
      padding: const EdgeInsets.all(25),
      gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
        maxCrossAxisExtent: 300,
        childAspectRatio: 3 / 2,
        crossAxisSpacing: 25,
        mainAxisSpacing: 25,
      ),
      children: dummyCategories
          .map((catData) => CategoryItem(
                catData.id,
                catData.title,
                catData.color,
              ))
          .toList(),
    );
  }
}
