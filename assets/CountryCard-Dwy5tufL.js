import{r as i,C as d,j as a,L as p}from"./index-CFPw23VU.js";function m(n){const{countryName:s,countryFlag:t,countryFlagAlt:e,countryPopulation:l,countryRegion:o,countryCapital:r}=n,{theme:c}=i.useContext(d);return a.jsx(a.Fragment,{children:a.jsxs(p,{className:`card ${c}-card`,id:s,to:`/Where-in-the-world/country/${s}`,children:[a.jsx("img",{src:t,alt:e,width:200,loading:"lazy"}),a.jsxs("div",{className:"countryDetails",children:[a.jsx("p",{className:"countryName bold-800",children:s}),a.jsxs("p",{className:"population",children:[a.jsx("span",{className:"bold-600",children:"Population: "}),l.toLocaleString()]}),a.jsxs("p",{className:"region",children:[a.jsx("span",{className:"bold-600",children:"Region: "}),o]}),a.jsxs("p",{className:"capital",children:[a.jsx("span",{className:"bold-600",children:"Capital: "}),r]})]})]})})}export{m as default};
