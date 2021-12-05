import { useLocation } from 'react-router-dom';
import { capitalizeWords, stripSlashes } from "../helpers";

export const useTitle = () => {
    const { pathname } = useLocation();
    const header = capitalizeWords(stripSlashes(pathname));
    const path = header[header.length - 1].match(/[0-9]/g) ? 'Product' : header[header.length - 1];
    const dynamic = header[header.length - 1];

    return {
        path,
        dynamic
    }
}