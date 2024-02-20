export const STEPS_TO_CHECKOUT =[
     {
        name:"Customer Info",
        Component:() => <h1>Provide your contact details.</h1>,
     },
     {
        name:"Shipping Info",
        Component:()=><h1>Enter your shipping address.</h1> 
     },
     {
        name: "Payment",
        Component: () => <h1>Complete payment for your order.</h1>,
      },
      {
        name: "Delivered",
        Component: () => <h1> Your order has been delivered.</h1>,
      },
]