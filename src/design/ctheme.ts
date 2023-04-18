import {extendTheme} from "@chakra-ui/react"

const customTheme : any = {
    fonts: {
        body: 'Poppins',
        heading: 'Poppins',
        mono: 'Poppins'}
    
}
const Theme = extendTheme(customTheme)

export default Theme;