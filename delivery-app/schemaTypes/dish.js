import {defineField, defineType} from 'sanity'

export const dishType = defineType({
  name: 'dish',
  title: 'dishes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Dish Name ',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Dish Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Dish Image',
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price of the dish',
    }),
  ],
})
