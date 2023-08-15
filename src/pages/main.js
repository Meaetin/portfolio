import "../components/styles/main.css"

const Main = () => {
    return ( 
        <div className="flex flex-col items-center overflow-hidden ">
            <div className="svg-cont pt-4 items-center flex flex-col">
                <svg width="540" height="459" viewBox="0 0 540 459" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="me-svg" className="me-svg">
                        <g id="backdrop">
                            <path id="Vector 1" className="random" d="M297.204 426.711L248.015 428.001L202.036 424.889L171.536 422.859L148.036 420.389L121.036 415.889C96.7281 410.431 62.7538 388.654 48.0362 354.89C43.1489 343.677 28.1196 318.725 28.5364 290.889C28.9383 264.047 44.6179 234.244 49.0362 226.39C58.0362 210.39 66.1852 180.657 130.617 172.025C195.049 163.393 152.674 95.8693 182.036 60.3893C194.036 45.8892 232.036 26.5657 287.61 26.5658C333.74 37.7215 329.46 56.8572 368.495 71.8735C407.53 86.8898 430.456 80.6523 447.35 95.7715C464.244 110.891 459.867 116.444 459.459 159.792C459.05 203.141 517.412 202.778 523.471 262.48C529.53 322.182 497.331 352.174 497.331 352.174L454.036 404.889L426.036 411.889L399.536 416.389C399.536 416.389 380.346 416.662 370.036 418.889C359.727 421.116 334.007 422.859 334.007 422.859L297.204 426.711Z" fill="#92DEFF"/>
                        </g>
                        <g id="man">
                            <g id="hand">
                                <path d="M40.1175 149.357C42.4714 155.62 48.4726 164.224 53.5064 167.199C53.6554 168.653 54.1244 172.248 54.8078 174.993C59.2627 179.227 73.3455 183.245 90.0591 165.85L85.2643 158.3L92.0253 135.994C92.0253 135.994 96.888 130.721 101.604 126.468C106.32 122.215 110.889 118.982 110.188 117.044C108.785 113.167 99.4876 115.627 94.2711 118.675C89.0547 121.723 86.3975 129.308 79.2212 128.762C72.0448 128.217 76.4063 76.7783 69.8892 76.9436C63.3721 77.1089 65.1935 109.593 61.1634 109.503C57.1332 109.413 50.6699 70.8715 44.9561 73.9702C39.2422 77.069 48.4736 108.29 46.637 109.987C44.8004 111.683 30.5564 85.4985 26.7812 87.8959C23.006 90.2933 39.2009 120.801 38.3081 121.898C37.4152 122.995 24.5601 115.265 24.5601 115.265C20.3601 113.517 16.0402 110.609 15.4027 114.193C14.7652 117.777 26.2711 127.055 28.6274 130.429C30.9838 133.804 36.6615 140.161 40.1175 149.357Z" fill="#FED8CC"/>
                                <path d="M57.1294 168.221C56.0059 168.336 54.778 167.951 53.5064 167.199M53.5064 167.199C48.4726 164.224 42.4714 155.62 40.1175 149.357C36.6615 140.161 30.9838 133.804 28.6274 130.429C26.2711 127.055 14.7652 117.777 15.4027 114.193C16.0402 110.609 20.3601 113.517 24.5601 115.265C24.5601 115.265 37.4152 122.995 38.3081 121.898C39.2009 120.801 23.006 90.2933 26.7812 87.8959C30.5564 85.4985 44.8004 111.683 46.637 109.987C48.4736 108.29 39.2422 77.069 44.9561 73.9702C50.6699 70.8715 57.1332 109.413 61.1634 109.503C65.1935 109.593 63.3721 77.1089 69.8892 76.9436C76.4063 76.7783 72.0448 128.217 79.2212 128.762C86.3975 129.308 89.0547 121.723 94.2711 118.675C99.4876 115.627 108.785 113.167 110.188 117.044C110.889 118.982 106.32 122.215 101.604 126.468C96.888 130.721 92.0253 135.994 92.0253 135.994L85.2643 158.3M53.5064 167.199C53.6554 168.653 54.1244 172.248 54.8078 174.993C59.2627 179.227 73.3455 183.245 90.0591 165.85L85.2643 158.3M85.2643 158.3C84.0397 162.044 79.9243 165.047 78.0197 166.08M68.9798 131.822C62.45 130.883 59.38 139.508 58.6613 143.938" stroke="black" strokeWidth="0.5"/>
                            </g>
                            <g id="sleeve">
                                <path id="sleeve_2" d="M90.0591 165.85C84.9446 169.893 66.7734 179.704 54.7659 175.149C54.6578 178.948 54.9667 182.013 56.0819 187.427C63.8487 189.647 83.3491 188.653 95.4023 173.847C93.4513 169.524 91.1558 166.743 90.0591 165.85Z" fill="white" stroke="black" strokeWidth="0.5"/>
                            </g>
                            <g id="shirt">
                                <path d="M201.386 209.205L250.386 216.705C263.386 218.705 292.988 226.376 315.832 225.643C331.442 227.561 366.879 234.283 383.743 245.824C397.725 259.637 431.218 310.822 453.341 405.057C440.315 408.738 411.05 416.127 398.194 416.238C387.864 403.726 365.038 372.29 356.369 346.64C358.369 370.127 362.267 397.343 369.345 419.195C343.922 426.157 263.912 436.033 147.254 419.843C147.038 406.294 147.658 362 151.867 293.212C85.386 324.205 56.886 261.205 55.886 188.205C79.086 187.405 91.886 178.205 95.386 173.705C106.886 196.205 119.386 223.705 121.386 230.205C142.386 219.205 169.386 209.205 174.386 209.205C184.386 206.731 195.611 208.213 201.386 209.205Z" fill="#009F95"/>
                                <path d="M151.867 293.212C153.513 281.483 157.886 262.205 162.886 249.205M151.867 293.212C147.658 362 147.038 406.294 147.254 419.843C263.912 436.033 343.922 426.157 369.345 419.195C362.267 397.343 358.369 370.127 356.369 346.64M151.867 293.212C85.386 324.205 56.886 261.205 55.886 188.205C79.086 187.405 91.886 178.205 95.386 173.705C106.886 196.205 119.386 223.705 121.386 230.205C142.386 219.205 169.386 209.205 174.386 209.205C184.386 206.731 195.611 208.213 201.386 209.205L250.386 216.705C263.386 218.705 292.988 226.376 315.832 225.643C331.442 227.561 366.879 234.283 383.743 245.824C397.725 259.637 431.218 310.822 453.341 405.057C440.315 408.738 411.05 416.127 398.194 416.238C387.864 403.726 365.038 372.29 356.369 346.64M354.534 304.106C354.444 313.702 354.879 329.135 356.369 346.64" stroke="black" strokeWidth="0.5"/>
                            </g>
                            <g id="neck">
                                <path id="neck_2" d="M272.011 239.444L259.413 224.412C260.303 223.292 264.101 218.178 263.582 201.343C269.563 205.756 285.439 211.568 301.091 199.509C301.418 204.335 302.434 215.556 303.882 221.841C303.937 224.014 295.987 228.881 274.886 242.705L272.011 239.444Z" fill="#FED8CC" stroke="black" strokeWidth="0.5"/>
                                <path id="neck shadow" d="M263.748 207.86C263.646 206.866 263.511 204.567 263.786 203.333C266.864 207.206 278.603 211.565 301.142 200.007C301.851 205.295 302.429 217.467 303.385 221.892C302.921 222.275 302.173 222.821 301.102 224.137C300.536 223.524 298.855 220.849 296.651 215.043C293.858 212.314 271.641 221.125 263.748 207.86Z" fill="#272727" stroke="black" strokeWidth="0.5"/>
                            </g>
                            <g id="collar">
                                <path d="M302.72 213.222L310.322 214.027C314.711 217.242 315.457 223.378 315.282 226.044C315.282 226.044 311.758 233.032 308.245 237.02C304.731 241.008 297.508 247.884 288.696 251.454C287.698 250.784 284.809 247.541 281.235 239.929L274.725 242.907C273.395 241.903 270.537 239.193 269.746 236.391C268.074 238.218 263.125 242.768 256.713 246.347C253.066 240.501 246.749 223.265 247.572 216.468C249.248 213.807 252.481 211.297 254.886 209.705C257.289 208.913 261.552 209.532 263.386 209.205C262.868 214.703 262.358 219.878 260.386 222.205C263.196 226.01 266.231 228.883 273.253 234.402C273.413 236.403 273.931 240.905 274.725 242.907C275.561 241.91 277.437 239.116 278.248 235.919C281.916 235.598 290.855 233.862 303.297 221.503C302.798 221.168 302.299 219.621 302.72 213.222Z" fill="white"/>
                                <path d="M274.725 242.907L281.235 239.929M274.725 242.907C275.561 241.91 277.437 239.116 278.248 235.919C281.916 235.598 290.855 233.862 303.297 221.503M274.725 242.907C273.395 241.903 270.537 239.193 269.746 236.391M274.725 242.907C273.931 240.905 273.413 236.403 273.253 234.402C266.231 228.883 263.196 226.01 260.386 222.205M303.297 221.503C304.801 220.342 309.517 215.624 310.322 214.027M303.297 221.503C302.798 221.168 302.299 219.621 302.72 213.222L310.322 214.027M310.322 214.027C314.711 217.242 315.457 223.378 315.282 226.044C315.282 226.044 311.758 233.032 308.245 237.02C304.731 241.008 297.508 247.884 288.696 251.454C287.698 250.784 284.809 247.541 281.235 239.929M281.235 239.929L280.241 237.926M254.886 209.705C252.481 211.297 249.248 213.807 247.572 216.468C246.749 223.265 253.066 240.501 256.713 246.347C263.125 242.768 268.074 238.218 269.746 236.391M254.886 209.705C257.289 208.913 261.552 209.532 263.386 209.205C262.868 214.703 262.358 219.878 260.386 222.205M254.886 209.705C254.5 211.225 256.651 217.146 260.386 222.205M269.746 236.391C270.549 235.593 271.084 235.062 271.251 234.896" stroke="black" strokeWidth="0.5"/>
                            </g>
                            <g id="hair">
                                <path id="hair_2" d="M252.024 122.679C251.82 120.69 248.918 102.491 260.447 97.288C264.325 95.8854 269.146 102.851 270.165 103.831C272.431 106.012 274.969 106.254 277.252 104.01C278.879 102.41 285.351 92.122 294.462 90.7861C302.352 89.3072 321.373 87.9276 334.464 103.172C338.579 108.682 342.956 121.602 340.028 128.336C341.006 128.068 343.13 127.214 343.803 125.939C343.922 127.099 343.425 130.099 340.487 132.812C342.213 133.306 345.527 134.91 344.976 137.379C344.427 136.932 342.843 136.19 340.894 136.792C343.13 142.259 345.938 156.58 339.285 170.129C334.842 177.454 321.441 193.169 303.382 197.432L302.782 196.489L316.711 175.459L320.257 161.022L316.266 156.405L311.102 140.348L299.164 141.571L288.592 131.597L278.627 137.042L267.034 136.722C253.357 131.087 252.228 124.669 252.024 122.679Z" fill="#213438" stroke="black" strokeWidth="0.5"/>
                            </g>
                            <g id="face">
                                <g id="face_2">
                                    <path d="M273.351 208.384C261.52 205.743 243.16 187.453 264.365 135.42C267.553 137.104 276.889 137.956 288.725 127.897C290.115 133.283 296.702 142.962 311.936 138.586C313.512 145.796 317.571 160.224 321.193 160.255C322.137 159.656 324.443 158.615 326.116 159.248C327.328 159.627 329.417 162.026 328.08 168.597C327.901 170.123 327.199 174.718 318.564 183.645C317.174 184.793 313.801 186.848 313.214 183.691C309.761 189.417 309.399 194.773 297.417 202.902C288.923 208.296 280.758 210.037 273.351 208.384Z" fill="#FED8CC"/>
                                    <path d="M316.358 176.835C315.983 178.265 315.043 180.658 313.214 183.691M313.214 183.691C309.761 189.417 309.399 194.773 297.417 202.902C288.923 208.296 280.758 210.037 273.351 208.384C261.52 205.743 243.16 187.453 264.365 135.42C267.553 137.104 276.889 137.956 288.725 127.897C290.115 133.283 296.702 142.962 311.936 138.586C313.512 145.796 317.571 160.224 321.193 160.255C322.137 159.656 324.443 158.615 326.116 159.248C327.328 159.627 329.417 162.026 328.08 168.597C327.901 170.123 327.199 174.718 318.564 183.645C317.174 184.793 313.801 186.848 313.214 183.691Z" stroke="black" strokeWidth="0.5"/>
                                </g>
                                <ellipse id="left eye" cx="274.37" cy="151.23" rx="3" ry="4.5" transform="rotate(13.8475 274.37 151.23)" fill="#223434"/>
                                <ellipse id="right eye" cx="303.652" cy="158.032" rx="3.05225" ry="4.55016" transform="rotate(3.86397 303.652 158.032)" fill="#223434"/>
                                <path id="nose" d="M286.223 162.332C280.266 167.968 277.447 174.791 282.472 174.779" stroke="black" strokeWidth="0.5"/>
                                <path id="eyebrow" d="M268.854 139.986C270.639 137.793 274.767 137.202 276.608 137.181M311.463 148.687C310.178 143.994 307.136 142.429 305.775 142.233" stroke="black"/>
                                <path id="mouth" d="M292.534 179.779C291.151 184.162 277.421 186.753 273.99 185.198C270.56 183.643 274.156 191.715 274.156 191.715C275.405 194.1 279.244 197.225 283.72 196.766C288.146 195.81 292.317 192.367 292.534 179.779Z" fill="white" stroke="black" strokeWidth="0.5"/>
                            </g>
                            <g id="glasses">
                                <circle id="Ellipse 1" cx="274.554" cy="151.465" r="13.25" transform="rotate(-5.85196 274.554 151.465)" fill="url(#paint0_linear_143_98)" fillOpacity="0.5" stroke="black" strokeWidth="0.5"/>
                                <path id="Ellipse 2" d="M316.608 157.207C317.354 164.486 312.058 170.993 304.778 171.739C297.499 172.485 290.993 167.188 290.246 159.909C289.5 152.629 294.797 146.123 302.076 145.377C309.356 144.631 315.862 149.927 316.608 157.207Z" fill="url(#paint1_linear_143_98)" fillOpacity="0.5" stroke="black" strokeWidth="0.5"/>
                                <path id="Vector 3" d="M287.69 152.129C289.241 151.568 290.759 152.652 291.325 153.264" stroke="black" strokeWidth="0.5"/>
                                <path id="Vector 4" d="M316.27 161.262C317.342 159.946 319.684 160.242 320.696 160.306" stroke="black" strokeWidth="0.5"/>
                                <path id="Vector 5" d="M262.846 145.125C261.969 144.411 261.533 143.752 261.201 143.786" stroke="black" strokeWidth="0.5"/>
                            </g>
                        </g>
                    </g>
                    <defs>
                    <linearGradient id="paint0_linear_143_98" x1="274.554" y1="137.965" x2="274.554" y2="164.965" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EFE7E7"/>
                    <stop offset="1" stopColor="#D9D9D9" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_143_98" x1="302.051" y1="145.128" x2="304.804" y2="171.987" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EFE7E7"/>
                    <stop offset="1" stopColor="#D9D9D9" stopOpacity="0"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="title flex flex-col items-center select-none">
                <h1 className="pt-1 text-7xl font-normal">Hi, I'm Martin!</h1>
                <p className="pt-2 h-10">Front-end Developer</p>
            </div>
        </div>
    );
}
 
export default Main;