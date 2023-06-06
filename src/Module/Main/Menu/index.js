import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation.js";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            // stiffness: 200,
            // restDelta: 2,
            // damping: 20
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            // delay: 0.5,
            type: "spring",
            // stiffness: 400,
            // damping: 20
        }
    }
};

const Example = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);


    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                zIndex: 10
            }}
        >
            <motion.div className="background" variants={sidebar}/>
            <Navigation />
            <MenuToggle toggle={() => {
                console.log('clicked')
                toggleOpen()
            }} />
        </motion.nav>
    );
};

export default Example;