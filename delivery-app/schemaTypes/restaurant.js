import {defineField, defineType} from 'sanity'

export const restaurantType = defineType({
  name: 'restaurant',
  title: 'restaurants',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Restaurant Name ',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Restaurant Description',
      validation: (rule) => rule.max(200).warning('Description should be concise'),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Restaurant Image',
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'latitude of the restaurant',
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'longitude of the restaurant',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address of the restaurant',
      validation:(rule)=>rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter the rating between 1 to 5',
        validation: (rule) => rule.min(1).max(5).error('Rating must be between 1 and 5'),
    }),
    defineField({
      name: 'reviews',
      type: 'string',
      title: 'Number of reviews',
    }),
    defineField({
      name: 'dish',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
      validation: (rule) => rule.required().min(1).error('At least one dish is required'),
    }),
    defineField({
      name: 'type',
      type: 'reference',
      title: 'Category',
      to: [{type: 'category'}],
      validation: (rule) => rule.required().error('Category is required'),
    }),

  ],
})
