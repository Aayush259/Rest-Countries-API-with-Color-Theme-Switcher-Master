import{r as t,C as D,j as s,T as R,a as w,u as B,E}from"./index-DPfgpFmz.js";function T(){const[e,u]=t.useState(null),{theme:l}=t.useContext(D),[d,o]=t.useState(s.jsx(R,{theme:l})),m=w();t.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);const{countryName:c}=B(),x=()=>{m(-1)},p=t.useCallback(()=>{const n=new AbortController;return fetch(`https://restcountries.com/v3.1/name/${c}?fullText=true`,{signal:n.signal}).then(a=>a.json()).then(a=>{u(a)}).catch(a=>{console.log("error:",a),o(s.jsx(E,{errorName:a.name,errorMessage:a.message,status:a.status?a.status:""}))}),()=>{n&&n.abort()}},[c]);t.useEffect(()=>p(),[]);const h=t.useCallback(()=>{if(e){const n=e[0].flags.svg,a=e[0].flags.alt,j=Object.values(e[0].languages).join(", "),g=e[0].name.nativeName[Object.keys(e[0].languages)[0]].common,N=e[0].population,b=e[0].region,y=e[0].subregion,f=e[0].capital,v=e[0].tld,C=e[0].currencies[Object.keys(e[0].currencies)[0]].name;let r;try{r=e[0].borders.join(", ")}catch{r="No Border Countries"}let k=r.toString().split(",");return s.jsxs("div",{id:"countryDetail",className:"flex",children:[s.jsx("div",{id:"countryFlag",children:s.jsx("img",{src:n,alt:a})}),s.jsxs("div",{id:"details",children:[s.jsx("p",{className:"countryName bold-800",children:c}),s.jsxs("div",{className:"otherDetails flex",style:{alignItems:"flex-start"},children:[s.jsxs("div",{style:{width:"50%"},children:[s.jsxs("p",{className:"nativeName",children:[s.jsx("span",{className:"bold-600",children:"Native Name: "}),g]}),s.jsxs("p",{className:"population",children:[s.jsx("span",{className:"bold-600",children:"Population: "}),N.toLocaleString()]}),s.jsxs("p",{className:"region",children:[s.jsx("span",{className:"bold-600",children:"Region: "}),b]}),s.jsxs("p",{className:"subRegion",children:[s.jsx("span",{className:"bold-600",children:"Sub Region: "}),y]}),s.jsxs("p",{className:"capital",children:[s.jsx("span",{className:"bold-600",children:"Capital: "}),f]})]}),s.jsxs("div",{style:{width:"50%"},children:[s.jsxs("p",{className:"topLevelDomain",children:[s.jsx("span",{className:"bold-600",children:"Top Level Domain: "}),v]}),s.jsxs("p",{className:"currencies",children:[s.jsx("span",{className:"bold-600",children:"Currencies: "}),C]}),s.jsxs("p",{className:"languages",children:[s.jsx("span",{className:"bold-600",children:"Languages: "}),j]})]})]}),s.jsxs("p",{className:"borderCountries flex",style:{flexWrap:"wrap",justifyContent:"flex-start",gap:"8px"},children:[s.jsx("span",{className:"bold-600",children:"Border Countries: "}),k.map(i=>s.jsx("span",{className:`borderCountry ${l}-backBtn`,children:i},i))]})]})]})}},[e]);return t.useEffect(()=>{o(h)},[e]),s.jsxs(s.Fragment,{children:[s.jsxs("button",{onClick:x,id:"backBtn",className:`flex ${l}-backBtn`,children:[s.jsx("span",{className:"backArrow",children:"↗"}),"Back"]}),d]})}export{T as default};
