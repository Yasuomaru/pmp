import React from 'react'
import {ScrollArea, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaCorner, Box, Text, Tag} from './style.js'


const TAGS = Array.from({ length: 50 }).map((a, i) => `Music ${String(i + 1).padStart(2, "0")}`);

const ScrollAreaDemo = () => (
  <ScrollArea>
    <ScrollAreaViewport css={{ backgroundColor: 'white' }}>
      <Box style={{ padding: '15px 20px' }}>
        <Text>Tags</Text>
        {TAGS.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Box>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollArea>
);

export default ScrollAreaDemo