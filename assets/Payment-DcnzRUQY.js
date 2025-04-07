import{r as s,j as t}from"./index-DaqtsTnt.js";const m=()=>{const[e,n]=s.useState(!1),[r,i]=s.useState(!1);return s.useEffect(()=>{const o=setTimeout(()=>{n(!0)},100),l=setTimeout(()=>{i(!0)},600),a=document.createElement("script");return a.src="https://js.stripe.com/v3/buy-button.js",a.async=!0,document.body.appendChild(a),()=>{clearTimeout(o),clearTimeout(l),document.body.removeChild(a)}},[]),t.jsxs("div",{className:"bg-white min-h-screen relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 bg-repeat opacity-5 pointer-events-none z-0",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b9a16b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}),t.jsxs("header",{className:`bg-[#08081a] text-white pb-8 relative ${e?"opacity-100":"opacity-0"} transition-opacity duration-1000`,children:[t.jsxs("div",{className:"flex items-center justify-center pt-4 pb-2",children:[t.jsx("div",{className:"w-24 h-px bg-[#b9a16b] transform transition-transform duration-1000 ease-out scale-x-0 origin-right",style:{transform:e?"scaleX(1)":"scaleX(0)"}}),t.jsx("div",{className:"mx-2 transition-transform duration-700 ease-out delay-300",style:{transform:e?"scale(1)":"scale(0)"}}),t.jsx("div",{className:"w-24 h-px bg-[#b9a16b] transform transition-transform duration-1000 ease-out scale-x-0 origin-left",style:{transform:e?"scaleX(1)":"scaleX(0)"}})]}),t.jsx("h1",{className:"text-3xl md:text-4xl font-serif text-center pt-2 overflow-hidden",children:t.jsx("span",{className:"block transform transition-transform duration-700 delay-700",style:{transform:e?"translateY(0)":"translateY(100%)"},children:"Payment"})})]}),t.jsx("section",{className:`py-12 px-4 flex justify-center items-center ${r?"opacity-100 transform translate-y-0":"opacity-0 transform -translate-y-4"} transition-all duration-700 delay-300`,children:t.jsx("div",{className:"stripe-button-container flex justify-center items-center w-full max-w-xs mx-auto",children:t.jsx("stripe-buy-button",{"buy-button-id":"buy_btn_1RBCwPCmv3s4FZUerz7XmjDL","publishable-key":"pk_live_51RB4UrCmv3s4FZUeBEVNkVtcfRjJgCtu9CVtuXle2cgjtvO5zssZRE1VI5ktimYAhDaBSEhlwv3Z8CXRpd5jIcNk009E1p8cJU"})})}),t.jsx("style",{jsx:!0,children:`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 1.2s ease-out forwards;
        }
        
        /* Custom styling for Stripe button container */
        .stripe-button-container {
          max-width: 100%;
          margin: 0 auto;
        }
        
        /* Additional styling to center the Stripe button */
        stripe-buy-button {
          display: block !important;
          margin: 0 auto !important;
        }
      `})]})};export{m as default};
