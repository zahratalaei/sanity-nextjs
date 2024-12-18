import { BasketIcon } from './../../frontend/node_modules/@sanity/icons/src/icons/basketIcon';
import { defineArrayMember, defineField, defineType } from "sanity"

{/*order type*/}
export const orderType = defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    icon: BasketIcon,
    fields: [
        defineField({
            name: 'orderNumber',
            title: 'Order Number',
            type: 'string',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'sripeCheckoutSessionId',
            title: 'Stripe Checkout Session ID',
            type: 'string',
        }),
        defineField({
            name: 'stripeCustomerId',
            title: 'Stripe Customer ID',
            type: 'string',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name:'customerName',
            title: 'Customer Name',
            type: 'string',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name: 'email',
            title: 'Customer Email',
            type: 'string',
            validation: (Rule)=>Rule.required()
        }),
        defineField({
            name:'stripePaymentIntentId',
            title: 'Stripe Payment Intent ID',
            type: 'string',
            validation: (Rule)=>Rule.required()

        }),
        defineField({
            name: "products",
            title: 'Products',
            type: 'array',
            of:[defineArrayMember({
                type: 'object',
                fields:[
                    defineField({
                        name: 'product',
                        title: 'Product',
                        type: 'reference',
                        to: [{type: 'product'}],
                        validation: (Rule)=>Rule.required()
                    }),
                    defineField({
                        name: 'quantity',
                        title: 'Quantity',
                        type: 'number',
                        validation: (Rule)=>Rule.required().min(1)
                    }),
                    defineField({
                        name: 'price',
                        title: 'Price',
                        type: 'number',
                        validation: (Rule)=>Rule.required().min(0)
                    })
                ],
                preview:{
                    select:{
                        product: 'product.name',
                        quantity: 'Quantity purchased',
                        media: 'product.image',
                        price:'product.price',
                        currency: 'product.currency'
                    },
                    prepare(select){
                        return {
                            title: select.product,
                            subtitle: `${select.quantity} x ${select.price} ${select.currency}`,
                            media: select.media
                        }
                    }
                }
            })],
        })
    
       
    ],
    preview:{
        select:{
            title:"orderNumber",
            subtitle:"orderDate"
        },
        prepare(select){
            return {
                title: select.title,
                subtitle: select.subtitle,
            }
        }
    }
})