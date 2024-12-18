import { TrolleyIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';
export const productType = defineType ({
    name: 'product',
    title: 'Products',
    type: 'document',
    icon: TrolleyIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Product',
            type: 'string',
            validation: (rule) => rule.required().min(1).max(50),
        }),
        defineField({
            name: 'slug',
            title: 'Product slug',
            type: 'slug',
            validation: (rule) => rule.required(),
            options: {
                source: 'name',
            },
        }),

        defineField({
            name: 'image',
            title: 'Product image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'description',
            title: 'Product description',
            type: 'text',
            validation: (rule) => rule.required().min(1).max(200),
        }),
        defineField({
            name: 'price',
            title: 'Product price',
            type: 'number',
            validation: (rule) => rule.required().min(0).max(10000),
        }),
       
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'category'}]}],
        }),
        defineField({
            name: 'stock',
            title: 'Product stock',
            type: 'number',
            validation: (rule) => rule.required().min(0).max(1000),
        }),
    ],
    preview:{
        select:{
            title:"name",
            media:"image",
            price: "price"
        },
        prepare(select){
            return {
                title: select.title,
                subtitle: `${select.price}`,
                media: select.media,
            }
        }
    }
})