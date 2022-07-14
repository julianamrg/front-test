import axios from "axios";

const baseUrl = "https://PrismaTest.prismadigdev.repl.co";

// dynamic function that contains the url and adds the corresponding endpoint depending on the type of the method
const axiosFunction =  ( endPoint, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endPoint }`;

    // starting with methot Get by default
    if ( method === 'GET' ) {
        return axios.get( url );
    } else {
        return axios({
            method,
            url,
            data
        }); // other different method needs the url, method and data
    }
}
export default axiosFunction;