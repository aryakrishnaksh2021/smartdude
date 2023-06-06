export const container = {
    hidden: (matches) => ( { 
        opacity: 0, y: 30 ,x: matches ? '-6vw' : 0,    
    }),
    visible: (matches) => ({
        opacity: 1,
        y: 0,
        x: matches ? '-6vw' : 0,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
            type: "spring", stiffness: 100 
        }
    })
};

export const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};