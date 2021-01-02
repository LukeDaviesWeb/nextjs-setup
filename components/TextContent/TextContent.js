import styled from 'styled-components'
import { Code, BinaryCode } from '../Icons'
import { motion } from "framer-motion"
import { StyledTextContent } from './styled'


const TextContentIcon = ({ icon, fill }) => {
    switch (icon) {
        case 'code':
            return <Code fill={fill} />
        case 'binary':
            return <BinaryCode fill={fill} />
        default:
            return <div></div>
    }

}
export const TextContent = ({ position, icon, className, children }) => {

    const variants = {
        start: { y: 30, x: 10 },
        finish: { y: -30, x: 0 }
    }
    return (
        <StyledTextContent position={position} className={className}>
            <div className="textContent__text">
                {children}
            </div>

            {icon && (
                <motion.div
                    className="textContent__icon"
                    initial="start"
                    animate="finish"
                    variants={variants}
                    transition={{ repeat: Infinity, ease: "easeOut", type: "tween", duration: 3, repeatType: "reverse" }}
                >
                    <TextContentIcon icon={icon} fill="rgba(7,7,11, 1)" />
                </motion.div>
            )}

        </StyledTextContent>
    )
}