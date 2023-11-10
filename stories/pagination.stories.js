import Pagination from "../components/Pagination";

export default {
    title:"Test/Pagination",
    component:Pagination
}

export const sample = {
    args:{
        total:500,
        limit:10,
        activeStyles:{
            active:"border-t border-b border-l border-blue-100 px-3 py-2 bg-blue-100 no-underline text-blue-500 text-sm"
        }
    }
}