import {defineField, defineType} from 'sanity'

export const buttonType = defineType({
  name: 'button',
  title: 'Button',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Button Label',
      type: 'string',
      validation: (rule) => rule.required().min(1).max(50),
    }),
    defineField({
      name: 'url',
      title: 'Button URL',
      type: 'url',
      validation: (rule) => rule.required().uri({allowRelative: true, scheme: ['https', 'http']}),
    }),
    defineField({
      name: 'style',
      title: 'Button Style',
      type: 'string',
        options: {
            list: [
                {title:'Primary', value: 'primary'},
                {title:'Secondary', value: 'secondary'},
                {title:'Outline', value: 'outline'}
            ],
        },
    }),
    defineField({
      name: 'icon',
      title: 'Button Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'isDisabled',
      title: 'Button Disabled',
      type: 'boolean',
    }),
  ],
})