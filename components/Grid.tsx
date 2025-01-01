import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {[{ title: 'Title', description: 'Desc1', id:1}].map
        ((gridItems.map(item))=>(
          <BentoGridItem
            id={item.id}

          />

        ))}
      </BentoGrid>

    </section>
  )
}

export default Grid