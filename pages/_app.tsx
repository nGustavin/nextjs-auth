import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../config/theme'
import '@fontsource/nunito/800.css'
import '@fontsource/nunito/600.css'
import '@fontsource/nunito/400.css'

export default function App({Component, pageProps}: AppProps){
    return(
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}