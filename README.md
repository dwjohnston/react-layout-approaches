
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



Pretty happy with this. 

Some learnings: 

- Getting pretty happy with using grid, rather than flex. Named columns/rows is helpful. 
- The min-width:0 / min-height:0 trick, to stop a flex/grid item from growing, is essential. See: https://stackoverflow.com/a/66689926/1068446


Not sure about: 

The position of the footer, when the side nav is open. Question for a designer though. 


Performance: 

I've left a console log in HeaderContent.tsx . 

What you can see is that when we click between the Foo and Bar page, the Header Content re-renders. (It doesn't remount though). 

Where this could potentially become problematic, is if you have a 'User Menu' type button in your header (where the user access the profile settings, sign out, etc). 

I dunno, it's not remounting (which would be the real problem, imagine that the User Menu button did a profile fetch on mount), so I might squibbling here. 









## ~~Approach 1b~~

Similar but things that _every page must have_ (like the header, footer) are not included in the StandardLayout component. 

I can't be bothered doing this right now. 


## Approach 2 

Use portals instead. 

Eg: 

```jsx

// Plain component
export const FooPage = (props: FooPageProps) => {
  const { } = props;
  return <div>
    foo page

    <SizedContent/>
  </div>;
};


```


```jsx
//Component with subnav and side nav
export const BarPage = (props: BarPageProps) => {
  const { } = props;
  return <div
  >

    <SubNav>
      <SizedContent width={800} height={100} color="#6af"> I am some sub nav content. Note that I am sticky!</SizedContent>
    </SubNav>

    <SideNav>
      <SizedContent width={100} height={3000} color="#7f8">I am the side nav. Note that I scroll independently!</SizedContent>
    </SideNav>


    <SizedContent />
  </div>;

```


In this solution, I'm using the same CSS technique to arrange the content. 

This has the debatable advantage of not having to put the same boiler plate at the top of each page. 



Peformance: 

Has the same rerendering has Appraoch 1. I think this is because it's the route change that causes the rerender. 


Other note: 

This has the advantage of being able to have multiple items put content into the your elements. In the example I've created `SomeSubComponent` also puts something inside of the subnav. 

