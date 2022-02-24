
# react-layout-approaches
Here, I'm documenting a few different ways to do high level layouts (navs, side bars, etc) with React. 



## Approach 1
Each page uses a `<StandardLayout>` component and specifying which elements they need: 


eg: 

```jsx

// Adding nothing
export const FooPage = (props: FooPageProps) => {
  const { } = props;
  return <StandardLayout>
    foo page

    <SizedContent/>
  </StandardLayout>;
};
```


```jsx 

//Specifying side nav and sub nav content 
export const BarPage = (props: BarPageProps) => {
  const { } = props;
  return <StandardLayout

    sideNavContent={
      <SizedContent width={100} height={3000} color="#7f8">I am the side nav. Note that I scroll independently!</SizedContent>
    }
    subNavContent={
      <SizedContent width={800} height={100} color="#6af"> I am some sub nav content. Note that I am sticky!</SizedContent>
    }
  >
    bar page



    <SizedContent />
  </StandardLayout>;
};
```










## Approach 1b 

Similar but things that _every page must have_ (like the header, footer) are not included in the StandardLayout component. 

## Approach 2 

Use portals instead. 

