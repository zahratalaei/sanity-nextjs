import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Shopr Ecommerce Website',

  projectId: 'jui6abk4',
  dataset: 'production',

  plugins: [structureTool({
    structure: (S,context)=>{
      console.log(context)
      return S.list()
        .title('Shopr Ecommerce')
        .items([
          S.documentTypeListItem('category'),
          S.divider(),
          S.documentTypeListItem('product'),
          S.documentTypeListItem('button'),
          S.documentTypeListItem('post'),
          S.documentTypeListItem('order'),
        ])
    }
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
