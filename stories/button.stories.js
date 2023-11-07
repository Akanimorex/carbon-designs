import Button from "../components/Button";

export default  {
    title:"Test/Button",
    component:Button,
   
}

export const button = {
    args:{
        variant:"default",
        disabled:false
    }
}
export const dangerButton = {
    args:{
        variant:"danger"
    }
}
export const primaryButton = {
    args:{
        variant:"primary"
    }
}
export const secondaryButton = {
    args:{
        variant:"secondary"
    }
}
export const disabled = {
    args:{
        disabled:true
    }
}