import Modal from "../components/Modal";

export default {
    title:"Test/Modal",
    component:Modal,
    args:{
        scroll:false
    }
}

export const dangerModal ={
    args:{
        variant:"danger"
    }
}

export const fullWidthModal ={
    args:{
        size:"lg"
    }
}
export const mediumWidthModal ={
    args:{
        size:"md"
    }
}
export const smallWidthModal ={
    args:{
        size:"sm"
    }
}
export const scrollableModal ={
    args:{
        size:"sm",
        scroll:true
    }
}