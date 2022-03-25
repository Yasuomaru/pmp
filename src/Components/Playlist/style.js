import React from 'react';
import { styled } from '@stitches/react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

const SCROLLBAR_SIZE = 10;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: 200,
  height: 225,
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: `0 2px 10px #303030`,
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  background: "#282828",
  transition: 'background 160ms ease-out',
  '&:hover': { background: "#353535" },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: "blue",
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});

const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: "#353535",
});

const Box = styled('div', {});
const Text = styled('div', {
  color: "purple",
  fontSize: 15,
  lineHeight: '18px',
  fontWeight: 500,
});
const Tag = styled('div', {
  color: "purple",
  fontSize: 13,
  lineHeight: '18px',
  marginTop: 10,
  borderTop: `1px solid purple`,
  paddingTop: 10,
});

export {
  StyledScrollArea as ScrollArea,
  StyledViewport as ScrollAreaViewport,
  StyledScrollbar as ScrollAreaScrollbar,
  StyledThumb as ScrollAreaThumb,
  StyledCorner as ScrollAreaCorner,
  Box, Text, Tag
}

