import { ChakraProvider } from "@chakra-ui/react"

export default function App ({Component, pagePros}) {
    return (
        <ChakraProvider>
            <Component {...pagePros} />
        </ChakraProvider>
        
    )
}