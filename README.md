
# react-layout-approaches
Here, I'm documenting a few different ways to do high level layouts (navs, side bars, etc) with React. 



## Approach 1
Each page uses a `<StandardLayout>` component, specifying header, etc. 

## Approach 1b 

Similar but things that _every page must have_ (like the header, footer) are not included in the StandardLayout component. 

## Approach 2 

Use portals instead. 

