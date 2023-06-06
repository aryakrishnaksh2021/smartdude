import * as React from "react";
import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};


// {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
// width="30" height="30"
// viewBox="0 0 30 30"
// style=" fill:#000000;">    
// <path 
// d="M 15 2 A 1 1 0 0 0 14.300781 2.2851562 L 3.3925781 11.207031 A 1 1 0 0 0 3.3554688 11.236328 L 3.3183594 11.267578 L 3.3183594 11.269531 A 1 1 0 0 0 3 12 A 1 1 0 0 0 4 13 L 5 13 L 5 24 C 5 25.105 5.895 26 7 26 L 23 26 C 24.105 26 25 25.105 25 24 L 25 13 L 26 13 A 1 1 0 0 0 27 12 A 1 1 0 0 0 26.681641 11.267578 L 26.666016 11.255859 A 1 1 0 0 0 26.597656 11.199219 L 25 9.8925781 L 25 6 C 25 5.448 24.552 5 24 5 L 23 5 C 22.448 5 22 5.448 22 6 L 22 7.4394531 L 15.677734 2.2675781 A 1 1 0 0 0 15 2 z M 18 15 L 22 15 L 22 23 L 18 23 L 18 15 z"
// ></path></svg> */}

// <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
// width="30" height="30"
// viewBox="0 0 30 30"
// style=" fill:#000000;"><path 
// d="M 15 3 C 8.3844276 3 3 8.3844276 3 15 C 3 21.615572 8.3844276 27 15 27 C 21.615572 27 27 21.615572 27 15 C 27 8.3844276 21.615572 3 15 3 z M 15 5 C 20.534692 5 25 9.4653079 25 15 C 25 20.534692 20.534692 25 15 25 C 9.4653079 25 5 20.534692 5 15 C 5 9.4653079 9.4653079 5 15 5 z"
// ></path></svg>

 const Example = () => (
  <div className="container">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="item"
      style={{
        width: "56%",
        overflow: "visible",
        stroke: "#fff",
        strokeWidth: "1",
        strokeLinejoin: "round",
        strokeLinecap: "round",

      }}
    >
      <motion.path
      d="M 15 3 C 8.3844276 3 3 8.3844276 3 15 C 3 21.615572 8.3844276 27 15 27 C 21.615572 27 27 21.615572 27 15 C 27 8.3844276 21.615572 3 15 3 z M 15 5 C 20.534692 5 25 9.4653079 25 15 C 25 20.534692 20.534692 25 15 25 C 9.4653079 25 5 20.534692 5 15 C 5 9.4653079 9.4653079 5 15 5 z"

    //   d="M 15 2 A 1 1 0 0 0 14.300781 2.2851562 L 3.3925781 11.207031 A 1 1 0 0 0 3.3554688 11.236328 L 3.3183594 11.267578 L 3.3183594 11.269531 A 1 1 0 0 0 3 12 A 1 1 0 0 0 4 13 L 5 13 L 5 24 C 5 25.105 5.895 26 7 26 L 23 26 C 24.105 26 25 25.105 25 24 L 25 13 L 26 13 A 1 1 0 0 0 27 12 A 1 1 0 0 0 26.681641 11.267578 L 26.666016 11.255859 A 1 1 0 0 0 26.597656 11.199219 L 25 9.8925781 L 25 6 C 25 5.448 24.552 5 24 5 L 23 5 C 22.448 5 22 5.448 22 6 L 22 7.4394531 L 15.677734 2.2675781 A 1 1 0 0 0 15 2 z M 18 15 L 22 15 L 22 23 L 18 23 L 18 15 z"

        // d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 1, ease: "easeInOut" },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
  </div>
);

export default Example;


<svg xmlns="http://www.w3.org/2000/svg" width="278" height="290" version="1.1" desc="Created with imagetracer.js version 1.2.6">
          <path fill="rgb(0,105,254)" stroke="rgb(0,105,254)" stroke-width="1" opacity="0.996078431372549" d="M 58.5 31 L 61 32.5 L 123 145.5 L 120.5 144 Q 111.7 138.3 99.5 136 L 86.5 136 Q 84 137 85 141.5 L 86.5 143 L 96.5 144 L 114.5 150 L 129 162.5 L 137 177.5 L 141 201 L 144.5 202 L 148 199.5 L 148.5 192 L 195 277 L 170.5 286 L 154.5 289 L 145.5 289 L 144.5 290 L 129.5 290 L 128.5 289 L 118.5 289 L 111 285.5 L 86 240.5 L 87.5 240 Q 101.1 250.9 118.5 258 Q 123.1 260.9 131.5 260 Q 141.8 256.3 148 248.5 L 152 240.5 L 152 233.5 L 144.5 225 L 129.5 214 Q 125.4 210.1 116.5 211 L 110 215.5 L 104.5 222 L 100.5 223 Q 83 217.5 73 204.5 L 66 193.5 L 64 187.5 L 64 182.5 L 69.5 176 L 75 171.5 L 76 164.5 Q 68.7 146.4 54.5 135 L 45.5 134 Q 37.4 136.4 32.5 142 L 12 106.5 L 8 96.5 L 9 93.5 Q 21.6 61.6 45.5 41 L 58.5 31 Z M 94 150 L 90 151 L 89 156 L 94 159 Q 106 159 113 165 L 121 175 L 125 188 L 125 194 L 128 196 L 132 195 L 133 193 L 133 185 L 131 177 L 123 163 L 108 153 L 94 150 Z M 97 166 Q 93 167 94 172 L 98 174 L 104 175 L 109 181 L 110 188 L 113 191 Q 117 192 118 189 Q 119 177 113 173 L 104 166 L 97 166 Z " />
          <path fill="rgb(0,105,254)" stroke="rgb(0,105,254)" stroke-width="1" opacity="0.996078431372549" d="M 83.5 237 L 84.5 239 L 83.5 237 Z " />
          <path fill="rgb(43,125,253)" stroke="rgb(43,125,253)" stroke-width="1" opacity="0.9921568627450981" d="M 93.5 13 Q 95.8 12.3 95 14.5 L 157 127.5 L 153 130 Q 154.1 132.7 151.5 132 L 146.5 135 L 94 41.5 L 83 19 L 81 18.5 L 93.5 13 Z " />
          <path fill="rgb(43,125,253)" stroke="rgb(43,125,253)" stroke-width="1" opacity="0.9921568627450981" d="M 164.5 140 L 227 252.5 L 227 255.5 L 216.5 264 L 212 253.5 L 151 144.5 L 156.5 144 L 164.5 140 Z " />
          <path fill="rgb(43,125,253)" stroke="rgb(43,125,253)" stroke-width="1" opacity="0.9921568627450981" d="M 132.5 186 L 133 191.5 L 132 191.5 L 132.5 186 Z " />
          <path fill="rgb(43,125,253)" stroke="rgb(43,125,253)" stroke-width="1" opacity="0.9921568627450981" d="M 76.5 208 L 77.5 210 L 76.5 208 Z " />
          <path fill="rgb(43,125,253)" stroke="rgb(43,125,253)" stroke-width="1" opacity="0.9921568627450981" d="M 62.5 218 L 69.5 226 L 62.5 218 Z " />
          <path fill="rgb(43,125,253)" stroke="rgb(43,125,253)" stroke-width="1" opacity="0.9921568627450981" d="M 145.5 250 L 143.5 253 L 145.5 250 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 133.5 31 L 136 32.5 L 134 33.5 L 133.5 31 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 132.5 35 L 134 39 L 132 39.5 L 133.5 42 Q 128.8 39.7 133 37.5 L 132.5 35 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 141.5 35 L 142.5 37 L 141.5 35 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 144.5 37 L 146.5 40 L 144.5 37 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 148.5 40 L 149.5 42 L 148.5 40 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 151.5 42 L 153.5 45 L 151.5 42 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 133.5 43 L 137 49.5 L 136 51.5 L 137.5 54 L 135 50.5 L 136 48.5 Q 131.8 47.3 133.5 43 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 156.5 46 L 158.5 49 L 156.5 46 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 161.5 50 L 163.5 53 L 161.5 50 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 166.5 54 L 168.5 57 L 166.5 54 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 139.5 58 Q 142.5 58.5 142 62.5 L 141 62.5 L 139.5 58 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 170.5 58 L 175.5 64 L 170.5 58 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 134.5 65 L 137 65.5 L 134.5 66 L 134.5 65 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 181.5 71 L 183 74.5 L 182 74.5 L 181.5 71 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 137.5 74 L 138.5 76 L 137.5 74 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 140.5 79 L 142.5 82 L 140.5 79 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 183.5 80 L 184 82.5 L 183 82.5 L 183.5 80 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 235.5 94 L 240 94.5 L 235.5 95 L 235.5 94 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 242.5 96 L 243.5 98 L 242.5 96 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 229.5 97 L 228.5 99 L 229.5 97 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 153.5 98 L 154 100.5 L 153 100.5 L 153.5 98 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 245.5 98 L 248 98.5 L 245.5 99 L 245.5 98 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 191.5 100 L 193.5 103 L 191.5 100 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 227.5 100 L 226.5 102 L 227.5 100 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 250.5 100 L 249.5 102 L 244 101.5 L 250.5 100 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 220.5 103 L 222 103.5 L 218.5 105 L 218.5 104 L 220.5 103 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 198.5 106 L 211 106.5 L 198.5 107 L 198.5 106 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 230.5 106 L 229.5 108 L 230.5 106 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 216.5 113 L 215.5 115 L 213.5 116 L 214.5 114 L 216.5 113 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 161.5 116 L 162.5 118 L 161.5 116 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 211.5 116 L 207.5 121 L 211.5 116 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 206.5 122 L 205.5 124 L 206.5 122 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 162.5 123 L 160.5 126 L 162.5 123 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 202.5 127 L 199.5 131 L 202.5 127 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 156.5 129 L 155.5 131 L 156.5 129 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 146.5 135 L 145.5 137 L 146.5 135 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 191.5 135 L 190.5 137 L 188.5 138 L 189.5 136 L 191.5 135 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 87.5 136 L 95 136.5 L 86.5 138 L 87.5 136 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 99.5 137 L 102 137.5 L 99.5 138 L 99.5 137 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 85.5 139 L 87 141.5 L 85 140.5 L 85.5 139 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 155.5 139 L 157 139.5 L 154.5 141 L 155.5 139 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 35.5 140 L 32.5 144 L 35.5 140 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 60.5 142 L 62.5 145 L 60.5 142 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 89.5 142 L 93 142.5 L 89.5 143 L 89.5 142 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 150.5 142 L 156 143.5 L 152.5 144 L 150.5 142 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 148.5 143 L 147.5 145 L 146 144.5 L 148.5 143 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 118.5 144 L 119.5 146 L 118.5 144 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 121.5 146 L 122.5 148 L 121.5 146 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 65.5 148 L 66.5 150 L 65.5 148 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 124.5 148 L 127.5 152 L 124.5 148 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 28.5 151 L 29 153.5 L 28 153.5 L 28.5 151 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 118.5 151 L 119.5 153 L 118.5 151 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 121.5 153 L 124.5 157 L 121.5 153 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 129.5 153 L 134.5 159 L 129.5 153 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 69.5 154 L 70.5 156 L 69.5 154 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 92.5 157 L 95 157.5 L 92.5 158 L 92.5 157 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 28.5 158 L 29 160.5 L 28 160.5 L 28.5 158 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 116.5 159 L 117.5 161 L 116.5 159 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 127.5 159 L 129.5 162 L 127.5 159 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 113.5 164 L 115.5 167 L 113.5 164 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 123.5 166 L 124.5 168 L 123.5 166 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 140.5 168 L 142 170.5 L 141 170.5 L 140.5 168 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 118.5 169 L 119.5 171 L 118.5 169 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 73.5 171 L 70.5 175 L 73.5 171 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 110.5 171 L 112.5 174 L 110.5 171 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 105.5 175 L 108.5 179 L 105.5 175 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 67.5 176 L 65.5 179 L 67.5 176 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 131.5 183 L 132 193.5 Q 131.3 195.8 127.5 195 L 126.5 193 L 131 194 L 131.5 183 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 146.5 185 L 147 187.5 L 146 187.5 L 146.5 185 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 116.5 188 L 115.5 190 L 116.5 188 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 140.5 189 L 141 191.5 L 140 191.5 L 140.5 189 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 46.5 197 L 47.5 199 L 46.5 197 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 146.5 199 L 145.5 201 L 143 200.5 L 146.5 199 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 48.5 200 L 49.5 202 L 48.5 200 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 70.5 202 L 71.5 204 L 70.5 202 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 51.5 204 L 52.5 206 L 51.5 204 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 73.5 206 L 78.5 212 L 73.5 206 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 54.5 208 L 56.5 211 L 54.5 208 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 82.5 214 L 83.5 216 L 82.5 214 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 60.5 215 L 71.5 227 L 60.5 215 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 129.5 215 L 130.5 217 L 129.5 215 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 109.5 218 L 108.5 220 L 109.5 218 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 136.5 220 L 137.5 222 L 136.5 220 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 106.5 221 L 105.5 223 L 106.5 221 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 99.5 223 L 103 223.5 L 99.5 224 L 99.5 223 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 140.5 223 L 142.5 226 L 140.5 223 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 145.5 227 L 146.5 229 L 145.5 227 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 76.5 230 L 78.5 233 L 76.5 230 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 81.5 234 L 82.5 236 L 81.5 234 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 151.5 235 L 152 237.5 L 151 237.5 L 151.5 235 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 85.5 237 L 86.5 239 L 85.5 237 Z " />
          <path fill="rgb(226,237,254)" stroke="rgb(226,237,254)" stroke-width="1" opacity="1" d="M 146.5 248 L 141.5 254 L 146.5 248 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 187.5 16 L 201 21 L 201.5 23 L 203 22.5 Q 202.2 25.1 205.5 24 L 224 36 Q 222.9 38.7 225.5 38 Q 247.5 56 261 82.5 L 270 105.5 L 275 126.5 L 275 128.5 Q 273.5 134 276 135.5 L 275 137.5 L 276 138.5 L 276 152.5 Q 273.5 154 275 159.5 L 275 161.5 L 273.5 166 L 239.5 104 L 237.5 105 L 237.5 104 Q 241.5 101 249.5 102 L 251 100.5 Q 251.8 97.9 248.5 99 Q 242.3 98.2 239.5 94 L 235.5 94 L 230.5 97 L 231.5 95 Q 234.1 95.8 233 92.5 L 193 19 L 187.5 17 L 187.5 16 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 134.5 31 L 134 32.5 L 133.5 34 L 133 32.5 L 134.5 31 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 146.5 38 L 147.5 40 L 146.5 38 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 159.5 48 L 160.5 50 L 159.5 48 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 163.5 51 L 165.5 54 L 163.5 51 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 142.5 64 Q 145.5 64.5 145 68.5 L 144 68.5 L 142.5 64 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 176.5 64 L 180.5 69 L 176.5 64 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 134.5 70 L 135.5 72 L 134.5 70 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 144.5 84 L 146.5 87 L 144.5 84 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 149.5 90 L 150.5 92 L 149.5 90 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 187.5 93 L 188.5 95 L 187.5 93 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 190.5 98 L 191.5 100 L 190.5 98 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 227.5 99 L 225.5 102 L 227.5 99 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 194.5 103 L 196.5 106 L 194.5 103 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 231.5 106 L 230.5 108 L 231.5 106 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 157.5 111 L 158.5 113 L 157.5 111 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 219.5 112 L 221 112.5 L 216.5 115 L 217.5 113 L 219.5 112 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 159.5 114 L 160.5 116 L 159.5 114 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 212.5 116 L 210.5 119 L 212.5 116 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 163.5 118 L 166 121.5 L 165 121.5 L 163.5 118 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 208.5 120 L 207.5 122 L 208.5 120 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 205.5 124 L 203.5 127 L 205.5 124 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 154.5 130 L 153.5 132 L 154.5 130 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 198.5 131 L 197.5 133 L 198.5 131 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 195.5 133 L 194.5 135 L 195.5 133 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 47.5 134 L 51 134.5 L 47.5 135 L 47.5 134 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 57.5 138 L 58.5 140 L 57.5 138 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 63.5 145 L 64.5 147 L 63.5 145 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 91.5 151 L 90.5 153 L 91.5 151 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 125.5 157 L 126.5 159 L 125.5 157 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 119.5 161 L 122.5 165 L 119.5 161 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 97.5 166 L 102 166.5 L 97.5 167 L 97.5 166 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 116.5 167 L 117.5 169 L 116.5 167 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 273.5 167 L 274 171.5 L 273 171.5 L 273.5 167 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 272.5 174 L 273 176.5 L 272 176.5 L 272.5 174 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 63.5 183 L 64 187.5 L 63 187.5 L 63.5 183 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 117.5 183 L 118 187.5 L 117 187.5 L 117.5 183 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 125.5 189 L 126 191.5 L 125 191.5 L 125.5 189 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 141.5 199 L 142.5 201 L 141.5 199 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 80.5 212 L 81.5 214 L 80.5 212 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 58.5 213 L 59.5 215 L 58.5 213 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 112.5 214 L 109.5 218 L 112.5 214 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 143.5 225 L 144.5 227 L 143.5 225 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 72.5 227 L 74.5 230 L 72.5 227 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 83.5 236 L 84.5 238 L 83.5 236 Z " />
          <path fill="rgb(120,165,252)" stroke="rgb(120,165,252)" stroke-width="1" opacity="0.9607843137254902" d="M 126.5 259 L 129 259.5 L 126.5 260 L 126.5 259 Z " />
          <path fill="rgb(0,73,253)" stroke="rgb(0,73,253)" stroke-width="1" opacity="0.984313725490196" d="M 7.5 97 L 32 142.5 L 27 152.5 L 27 159.5 Q 41.5 202.5 72.5 229 L 86 239 L 112.5 287 L 114 287.5 L 112.5 288 Q 61.2 276.8 33 242.5 Q 11.8 218.7 2 183.5 L 0 173.5 L 0 122.5 L 7.5 97 Z " />
          <path fill="rgb(14,113,253)" stroke="rgb(14,113,253)" stroke-width="1" opacity="0.996078431372549" d="M 69.5 24 L 72 25.5 L 199 255.5 L 206 270.5 L 195.5 276 L 148 191.5 Q 147.3 174.7 140 164.5 L 125.5 148 L 123 146.5 L 112 124.5 L 59 30.5 L 69.5 24 Z " />
          <path fill="rgb(14,113,253)" stroke="rgb(14,113,253)" stroke-width="1" opacity="0.996078431372549" d="M 124.5 157 L 126.5 160 L 124.5 157 Z " />
          <path fill="rgb(14,113,253)" stroke="rgb(14,113,253)" stroke-width="1" opacity="0.996078431372549" d="M 114.5 166 L 116.5 169 L 114.5 166 Z " />
          <path fill="rgb(14,113,253)" stroke="rgb(14,113,253)" stroke-width="1" opacity="0.996078431372549" d="M 110.5 170 L 112.5 173 L 110.5 170 Z " />
          <path fill="rgb(14,113,253)" stroke="rgb(14,113,253)" stroke-width="1" opacity="0.996078431372549" d="M 111.5 214 L 110.5 216 L 111.5 214 Z " />
          <path fill="rgb(14,113,253)" stroke="rgb(14,113,253)" stroke-width="1" opacity="0.996078431372549" d="M 107.5 219 L 106.5 221 L 107.5 219 Z " />
          <path fill="rgb(14,113,253)" stroke="rgb(14,113,253)" stroke-width="1" opacity="0.996078431372549" d="M 71.5 227 L 72.5 229 L 71.5 227 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 154.5 45 L 155.5 47 L 154.5 45 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 164.5 53 L 166.5 56 L 164.5 53 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 175.5 64 L 179.5 69 L 175.5 64 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 135.5 70 L 136.5 72 L 135.5 70 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 145.5 84 L 146.5 86 L 145.5 84 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 192.5 102 L 195.5 106 L 192.5 102 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 163.5 117 L 164.5 119 L 163.5 117 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 159.5 126 L 157.5 129 L 159.5 126 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 198.5 130 L 197.5 132 L 198.5 130 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 55.5 137 L 59.5 142 L 55.5 137 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 163.5 139 L 180 139.5 L 163.5 140 L 163.5 139 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 159.5 140 L 158.5 142 L 159.5 140 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 32.5 144 L 31.5 146 L 32.5 144 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 63.5 146 L 64.5 148 L 63.5 146 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 66.5 150 L 67.5 152 L 66.5 150 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 28.5 154 L 29 157.5 L 28 157.5 L 28.5 154 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 124.5 155 L 125.5 157 L 124.5 155 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 114.5 158 L 115.5 160 L 114.5 158 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 134.5 159 L 135.5 161 L 134.5 159 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 118.5 161 L 122.5 166 L 118.5 161 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 130.5 162 L 131.5 164 L 130.5 162 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 116.5 166 L 117.5 168 L 116.5 166 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 96.5 167 L 95.5 169 L 96.5 167 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 108.5 170 L 110.5 173 L 108.5 170 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 106.5 175 L 108.5 178 L 106.5 175 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 112.5 188 L 113.5 190 L 112.5 188 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 42.5 190 L 43.5 192 L 42.5 190 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 50.5 202 L 51.5 204 L 50.5 202 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 71.5 204 L 72.5 206 L 71.5 204 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 53.5 206 L 54.5 208 L 53.5 206 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 57.5 211 L 59.5 214 L 57.5 211 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 79.5 212 L 81.5 215 L 79.5 212 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 113.5 214 L 110.5 218 L 113.5 214 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 131.5 217 L 132.5 219 L 131.5 217 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 138.5 222 L 139.5 224 L 138.5 222 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 73.5 227 L 75.5 230 L 73.5 227 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 147.5 229 L 148.5 231 L 147.5 229 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 79.5 232 L 80.5 234 L 79.5 232 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 83.5 235 L 84.5 237 L 83.5 235 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 87.5 238 L 88.5 240 L 87.5 238 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 147.5 246 L 146.5 248 L 147.5 246 Z " />
          <path fill="rgb(254,254,255)" stroke="rgb(254,254,255)" stroke-width="1" opacity="0.996078431372549" d="M 140.5 253 L 139.5 255 L 140.5 253 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 143.5 6 L 144.5 7 L 161.5 8 L 174.5 11 L 193 19 L 230 86.5 L 233 95 L 228 97 L 224.5 102 L 213.5 106 L 197.5 106 L 197 103.5 L 183 78.5 Q 183.7 71.8 181 68.5 L 175 61 L 172 59.5 Q 174.3 58.3 171.5 57 Q 169.8 59.8 168 55.5 L 171 56.5 L 143.5 6 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 131.5 35 L 132.5 37 L 131.5 35 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 148.5 39 L 149.5 41 L 148.5 39 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 152.5 42 L 154.5 45 L 152.5 42 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 133.5 46 L 134.5 48 L 133.5 46 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 157.5 46 L 158.5 48 L 157.5 46 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 161.5 49 L 162.5 51 L 161.5 49 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 135.5 52 L 136.5 54 L 135.5 52 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 138.5 65 L 139.5 67 L 138.5 65 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 190.5 97 L 191.5 99 L 190.5 97 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 239.5 104 L 274 166.5 L 270 188.5 L 260 214 L 257 212.5 L 209 125.5 L 208 121.5 L 209 119 L 214.5 115 L 234.5 105 L 239.5 104 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 159.5 125 L 155.5 130 L 159.5 125 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 203.5 127 L 200.5 131 L 203.5 127 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 59.5 140 L 60.5 142 L 59.5 140 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 159.5 141 L 158.5 143 L 159.5 141 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 140.5 142 L 141.5 144 L 140.5 142 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 129.5 152 L 131.5 155 L 129.5 152 Z " />
          <path fill="rgb(97,151,252)" stroke="rgb(97,151,252)" stroke-width="1" opacity="0.9882352941176471" d="M 147.5 194 L 148 197.5 L 147 197.5 L 147.5 194 Z " />
          <path fill="rgb(255,255,255)" stroke="rgb(255,255,255)" stroke-width="1" opacity="1" d="M 135 33 Q 157.9 44.9 175 63.5 Q 180.8 67.7 183 75.5 L 183 82.5 L 185 90.5 L 195.5 106 L 197.5 107 L 210.5 107 L 223.5 104 L 229 99.5 Q 228.3 97.3 230.5 98 Q 232.7 93.7 240.5 95 Q 242.3 100.5 250 99 Q 251.4 103 244.5 101 L 231.5 105 L 226.5 109 L 208 118 Q 205.9 125.6 199.5 130 L 184.5 139 L 163.5 139 L 155.5 143 L 152.5 143 L 150.5 142 L 145.5 145 L 145 143 L 141 141.5 L 144.5 137 Q 157.5 131.5 166 121.5 Q 166.5 117.5 163.5 117 L 160 114.5 L 154 102.5 L 152 91 L 149 89.5 L 140 78.5 L 134 66.5 L 137.5 66 Q 140.5 70 147.5 70 L 147.5 69 L 145 67.5 L 145 65 Q 142.3 66.1 143 63.5 L 139.5 58 Q 136.1 58.9 138 53.5 L 136 50.5 L 137 47 L 134 45.5 L 135 42.5 L 132.5 39 Q 135.1 39.8 134 36.5 L 132.5 34 L 134.5 35 L 135 33 Z M 154 139 L 154 141 L 157 140 L 154 139 Z " />
          <path fill="rgb(255,255,255)" stroke="rgb(255,255,255)" stroke-width="1" opacity="1" d="M 47.5 135 L 54.5 137 L 63 145.5 L 74 162.5 L 75 167.5 L 69.5 175 L 64 179.5 Q 61.7 182.7 63 189.5 Q 68.9 205.6 81.5 215 L 95.5 223 L 103.5 224 L 115.5 213 L 120.5 212 Q 138.1 219.4 150 232.5 L 151 239.5 Q 148.4 248.4 141.5 253 Q 136.3 258.2 126.5 259 Q 85.9 244.1 60 214.5 L 46 196.5 L 33 172.5 L 29 162.5 L 29 150.5 L 36.5 140 L 47.5 135 Z " />
          <path fill="rgb(255,255,255)" stroke="rgb(255,255,255)" stroke-width="1" opacity="1" d="M 87.5 137 L 96.5 137 L 109.5 140 Q 124.4 146.6 134 158.5 Q 141.2 167.3 145 179.5 L 147 189.5 L 147 198.5 L 143.5 200 L 141 197.5 L 141 188.5 L 135 168.5 L 124.5 155 L 108.5 146 L 86 141 L 87.5 137 Z " />
          <path fill="rgb(255,255,255)" stroke="rgb(255,255,255)" stroke-width="1" opacity="1" d="M 93.5 151 L 103.5 153 L 112.5 157 L 125 168.5 L 131 182.5 L 131 194 Q 127.2 195 126 192.5 Q 126.2 174.3 116.5 166 L 108.5 161 L 92.5 157 L 91 155.5 Q 89.5 151.1 92.5 152 L 93.5 151 Z " />
          <path fill="rgb(255,255,255)" stroke="rgb(255,255,255)" stroke-width="1" opacity="1" d="M 97.5 167 L 104.5 168 L 113 174.5 L 117 183.5 L 117 187.5 Q 114.5 192.5 112 187.5 Q 111.6 178.9 106.5 175 L 98.5 173 L 95 170.5 L 97.5 167 Z " />
          <path fill="rgb(28,119,253)" stroke="rgb(28,119,253)" stroke-width="1" opacity="0.9921568627450981" d="M 80.5 18 L 83 19 L 94 41.5 L 146 134.5 L 140 139.5 Q 139.3 143.3 141.5 144 Q 144.1 143.3 143 146 L 146.5 146 L 150.5 144 L 212 253.5 L 216 261.5 L 216 265 L 206 270 L 71 23.5 L 80.5 18 Z " />
          <path fill="rgb(28,119,253)" stroke="rgb(28,119,253)" stroke-width="1" opacity="0.9921568627450981" d="M 34.5 140 L 32.5 143 L 34.5 140 Z " />
          <path fill="rgb(28,119,253)" stroke="rgb(28,119,253)" stroke-width="1" opacity="0.9921568627450981" d="M 60.5 216 L 61.5 218 L 60.5 216 Z " />
          <path fill="rgb(78,140,252)" stroke="rgb(78,140,252)" stroke-width="1" opacity="0.9882352941176471" d="M 128.5 6 L 140.5 6 L 141.5 7 L 145 6.5 L 145 8.5 L 173 58.5 L 168.5 55 L 148.5 39 L 132.5 31 L 132.5 33 Q 129.9 32.2 131 35.5 L 132.5 38 Q 130.3 37.3 131 39.5 L 133 42.5 L 133 44.5 L 134.5 48 Q 136.8 47.3 136 49.5 L 135 52.5 Q 138 53.8 137 58 L 141 60.5 L 141 63.5 L 144 68 L 141 66.5 L 113 14.5 L 109 9.5 L 112.5 8 L 127.5 7 L 128.5 6 Z " />
          <path fill="rgb(78,140,252)" stroke="rgb(78,140,252)" stroke-width="1" opacity="0.9882352941176471" d="M 139.5 79 L 141.5 82 L 139.5 79 Z " />
          <path fill="rgb(78,140,252)" stroke="rgb(78,140,252)" stroke-width="1" opacity="0.9882352941176471" d="M 184.5 80 L 198 104.5 L 196.5 105 L 187 92.5 L 184 83.5 L 184.5 80 Z " />
          <path fill="rgb(78,140,252)" stroke="rgb(78,140,252)" stroke-width="1" opacity="0.9882352941176471" d="M 207.5 122 L 259 216 L 257 216.5 L 257 218.5 Q 250.1 232.6 239.5 243 Q 237.3 243.8 238 241.5 L 182 140.5 L 193.5 136 L 204 127.5 L 207.5 122 Z " />
          <path fill="rgb(78,140,252)" stroke="rgb(78,140,252)" stroke-width="1" opacity="0.9882352941176471" d="M 147.5 191 L 148 193.5 L 147 193.5 L 147.5 191 Z " />
          <path fill="rgb(78,140,252)" stroke="rgb(78,140,252)" stroke-width="1" opacity="0.9882352941176471" d="M 140.5 194 L 141 196.5 L 140 196.5 L 140.5 194 Z " />
          <path fill="rgb(0,0,1)" stroke="rgb(0,0,1)" stroke-width="1" opacity="0" d="M 0 0 L 278 0 L 278 290 L 156 289.5 L 177.5 285 L 201.5 275 Q 223.9 262.9 240 244.5 Q 259.8 222.8 270 191.5 L 276 162.5 L 276 133.5 L 272 111.5 L 264 88.5 Q 252.8 63.8 234.5 46 L 231 43.5 L 228.5 40 Q 208.5 22 180.5 12 L 159.5 7 L 133.5 5 L 132.5 6 L 120.5 6 L 119.5 7 L 108.5 8 L 80.5 17 Q 51.3 30.3 32 53.5 Q 18.2 69.2 9 89.5 L 0.5 117 L 0 0 Z " />
          <path fill="rgb(0,0,1)" stroke="rgb(0,0,1)" stroke-width="1" opacity="0" d="M 0.5 179 Q 12.7 230.8 48.5 259 Q 62.5 271 80.5 279 L 99.5 286 L 118 289.5 L 0 290 L 0.5 179 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 133.5 5 L 140 5.5 L 133.5 6 L 133.5 5 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 120.5 6 L 128 6.5 L 120.5 7 L 120.5 6 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 145.5 6 L 153 6.5 L 145.5 7 L 145.5 6 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 113.5 7 L 118 7.5 L 113.5 8 L 113.5 7 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 155.5 7 L 160 7.5 L 155.5 8 L 155.5 7 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 108.5 8 L 112 8.5 L 108.5 9 L 108.5 8 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 162.5 8 L 165 8.5 L 162.5 9 L 162.5 8 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 104.5 9 L 107 9.5 L 104.5 10 L 104.5 9 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 100.5 10 L 103 10.5 L 100.5 11 L 100.5 10 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 96.5 11 L 99 11.5 Q 58.5 24 34 52.5 Q 18.1 70.1 8.5 94 L 8 92.5 Q 22.1 58.6 48.5 37 Q 68.6 20.1 96.5 11 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 178.5 12 L 183 13.5 L 181.5 14 L 178.5 13 L 178.5 12 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 186.5 15 L 195 18.5 L 193.5 19 L 186.5 16 L 186.5 15 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 228.5 40 L 230.5 43 L 228.5 40 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 234.5 46 L 239.5 52 L 234.5 46 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 7.5 95 L 8 96.5 L 5.5 102 L 5 100.5 L 7.5 95 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 4.5 103 L 5 105.5 L 3 109.5 L 0.5 122 L 0 117.5 L 4.5 103 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 275.5 153 L 276 159.5 L 275 159.5 L 275.5 153 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 274.5 164 L 275 170.5 L 274 170.5 L 274.5 164 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 273.5 172 L 274 175.5 L 273 175.5 L 273.5 172 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 0.5 174 L 2 182.5 L 1 182.5 L 0.5 174 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 272.5 177 L 273 180.5 L 271.5 184 L 271 181.5 L 272.5 177 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 2.5 184 L 4 189.5 L 3 189.5 L 2.5 184 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 270.5 185 L 271 187.5 L 270 187.5 L 270.5 185 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 269.5 189 L 270 191.5 L 267.5 197 L 267 195.5 L 269.5 189 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 4.5 191 L 6 195.5 L 5 195.5 L 4.5 191 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 6.5 197 Q 20.1 233.9 47.5 257 Q 62.5 270 82 278.5 L 80.5 279 Q 50 265 30 240.5 Q 13.8 222.1 6.5 197 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 265.5 201 L 266 202.5 L 257.5 219 L 258 217.5 L 265.5 201 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 256.5 220 L 255.5 222 L 256.5 220 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 253.5 225 L 253 226.5 Q 243.4 242.9 229.5 255 Q 212.8 270.8 189.5 280 L 189.5 279 Q 216.4 267.9 235 248.5 L 253.5 225 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 83.5 279 L 87 280.5 L 85.5 281 L 83.5 279 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 186.5 280 L 188 280.5 L 166.5 288 L 155.5 290 L 145.5 290 L 145.5 289 L 154.5 289 L 170.5 286 L 186.5 280 Z " />
          <path fill="rgb(2,120,254)" stroke="rgb(2,120,254)" stroke-width="1" opacity="0.3686274509803922" d="M 88.5 281 Q 105.4 288.6 129 289.5 L 118.5 290 L 99.5 286 L 88.5 282 L 88.5 281 Z " />
          <path fill="rgb(59,131,252)" stroke="rgb(59,131,252)" stroke-width="1" opacity="0.9921568627450981" d="M 107.5 9 L 111 11.5 L 141 66.5 L 138.5 65 Q 132.4 63.8 133 66.5 L 139 79.5 Q 145.8 83.7 148 91 L 151 92.5 L 156 110.5 L 161 118 L 165 120.5 L 157.5 127 L 95 13.5 L 107.5 9 Z " />
          <path fill="rgb(59,131,252)" stroke="rgb(59,131,252)" stroke-width="1" opacity="0.9921568627450981" d="M 86.5 136 L 85.5 138 L 86.5 136 Z " />
          <path fill="rgb(59,131,252)" stroke="rgb(59,131,252)" stroke-width="1" opacity="0.9921568627450981" d="M 165 140 L 181.5 140 L 183 141.5 L 239 243.5 L 232.5 251 L 227.5 255 L 165 140 Z " />
          <path fill="rgb(59,131,252)" stroke="rgb(59,131,252)" stroke-width="1" opacity="0.9921568627450981" d="M 27.5 155 L 28 157.5 L 27 157.5 L 27.5 155 Z " />
          <path fill="rgb(59,131,252)" stroke="rgb(59,131,252)" stroke-width="1" opacity="0.9921568627450981" d="M 94.5 171 L 95.5 173 L 94.5 171 Z " />
          <path fill="rgb(59,131,252)" stroke="rgb(59,131,252)" stroke-width="1" opacity="0.9921568627450981" d="M 73.5 172 L 72.5 174 L 73.5 172 Z " />
</svg>