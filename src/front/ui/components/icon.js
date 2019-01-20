import React from 'react'

export const Icon = ({ name }) => {
    switch(name) {
        case 'close':
            return (
                <svg className="fl-asst-icon"width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(-407.000000, -25.000000)">
                        <path d="M414,33.2071068 L408.658051,38.7071068 C408.278749,39.0976311 407.663779,39.0976311 407.284477,38.7071068 C406.905174,38.3165825 406.905174,37.6834175 407.284477,37.2928932 L412.425271,32 L407.284477,26.7071068 C406.905174,26.3165825 406.905174,25.6834175 407.284477,25.2928932 C407.663779,24.9023689 408.278749,24.9023689 408.658051,25.2928932 L414,30.7928932 L419.341949,25.2928932 C419.721251,24.9023689 420.336221,24.9023689 420.715523,25.2928932 C421.094826,25.6834175 421.094826,26.3165825 420.715523,26.7071068 L415.574729,32 L420.715523,37.2928932 C421.094826,37.6834175 421.094826,38.3165825 420.715523,38.7071068 C420.336221,39.0976311 419.721251,39.0976311 419.341949,38.7071068 L414,33.2071068 Z"></path>
                    </g>
                </svg>
            )
        case 'more':
            return (
                <svg className="fl-asst-icon" width="6px" height="19px" viewBox="0 0 6 19" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.25,13.5 C1.83246521,13.5 0.684326172,14.61875 0.684326172,16 C0.684326172,17.38125 1.83246521,18.5 3.25,18.5 C4.66753479,18.5 5.81567383,17.38125 5.81567383,16 C5.81567383,14.61875 4.66753479,13.5 3.25,13.5 Z"></path>
                    <path d="M3.25,0 C1.83246521,0 0.684326172,1.11875 0.684326172,2.5 C0.684326172,3.88125 1.83246521,5 3.25,5 C4.66753479,5 5.81567383,3.88125 5.81567383,2.5 C5.81567383,1.11875 4.66753479,0 3.25,0 Z"></path>
                    <path d="M3.25,6.75 C1.83246521,6.75 0.684326172,7.86875 0.684326172,9.25 C0.684326172,10.63125 1.83246521,11.75 3.25,11.75 C4.66753479,11.75 5.81567383,10.63125 5.81567383,9.25 C5.81567383,7.86875 4.66753479,6.75 3.25,6.75 Z"></path>
                </svg>
            )
		case 'spinner':
            return (
                <svg className="fl-asst-icon" width="51px"  height="51px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style={{background: 'none'}}>
					<path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none" d="M10 50A40 40 0 0 0 90 50A40 46 0 0 1 10 50" fill="#b6ced7" transform="rotate(155.231 50 53)">
						<animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 53;360 50 53" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
					</path>
				</svg>
            )
		case 'star-outline':
            return (
                <svg className="fl-asst-icon" width="18px" height="19px" viewBox="0 0 18 19" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g transform="translate(-371.000000, -375.000000)">
                        <polygon stroke="#3AA4CC" strokeWidth="1" fill="transparent" points="380 389.466316 385.562 393 384.086 386.34 389 381.858947 382.529 381.281053 380 375 377.471 381.281053 371 381.858947 375.914 386.34 374.438 393"></polygon>
                    </g>
                </svg>
            )

        case 'notifications-active':
            return (
                <svg width="20px" height="19px" viewBox="0 0 20 19" version="1.1">
                    <g transform="translate(-319.000000, -53.000000)">
                        <path d="M327,72 C328.04,72 328.882353,71.1945 328.882353,70.2 L325.117647,70.2 C325.117647,71.1945 325.96,72 327,72 Z M332.976668,66.0590357 L332.976668,61.65 C332.976668,58.8825 331.108235,56.574 328.411765,55.962 L328.411765,55.0911483 C328.411765,54.3441483 327.781176,54 327,54 C326.218824,54 325.588235,54.3441483 325.588235,55.0911483 L325.588235,55.962 C322.891765,56.574 320.98235,58.8825 320.98235,61.65 L320.98235,66.0590357 L319,67.0215302 L319,68.9750312 L335,68.9750312 L335,67.0215302 L332.976668,66.0590357 Z M331.056143,67.0382342 L322.940315,67.0382342 L322.940315,61.65 C322.940315,59.4135 324.661176,57.6 327,57.6 C329.338824,57.6 331.056143,59.4135 331.056143,61.65 L331.056143,67.0382342 Z"></path>
                        <circle fill="#E10000" cx="336.5" cy="55.5" r="2.5"></circle>
                    </g>
                </svg>
            )
        case 'find-app':
            return (
                <svg className="fl-asst-icon" width="28px" height="23px" viewBox="0 0 28 23">
                    <g transform="translate(-209.000000, -11.000000)">
                        <g transform="translate(162.000000, 11.000000)">
                            <path d="M60.5,7 C58.568,7 57,8.568 57,10.5 C57,12.432 58.568,14 60.5,14 C62.432,14 64,12.432 64,10.5 C64,8.568 62.432,7 60.5,7 Z M72.2,0 L49.8,0 C48.253,0 47,1.2865625 47,2.875 L47,20.125 C47,21.7134368 48.253,23 49.8,23 L72.2,23 C73.747,23 75,21.7134368 75,20.125 L75,2.875 C75,1.2865625 73.747,0 72.2,0 Z M67.9803747,20 L63.8340767,15.8518519 C62.8421053,16.4801428 61.6788582,16.8514056 60.4228368,16.8514056 C56.8760036,16.8514056 54,13.9741187 54,10.4257028 C54,6.87728693 56.8760036,4 60.4228368,4 C63.9696699,4 66.8456735,6.87728693 66.8456735,10.4257028 C66.8456735,11.6822847 66.4745763,12.8460509 65.8465656,13.8313253 L70,17.9723338 L67.9803747,20 Z" id="Fill-1"></path>
                        </g>
                    </g>
                </svg>
            )
        default:
            return (
                <svg className="fl-asst-icon" width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(-54.000000, -186.000000)">
                        <path d="M62,200 L64,200 L64,198 L62,198 L62,200 Z M63,186 C58.032,186 54,190.032 54,195 C54,199.968 58.032,204 63,204 C67.968,204 72,199.968 72,195 C72,190.032 67.968,186 63,186 Z M63,202 C59.14125,202 56,198.85875 56,195 C56,191.14125 59.14125,188 63,188 C66.85875,188 70,191.14125 70,195 C70,198.85875 66.85875,202 63,202 Z M63,190 C61.3425,190 60,191.392222 60,193.111111 L61.5,193.111111 C61.5,192.255556 62.175,191.555556 63,191.555556 C63.825,191.555556 64.5,192.255556 64.5,193.111111 C64.5,194.666667 62.25,194.472222 62.25,197 L63.75,197 C63.75,195.25 66,195.055556 66,193.111111 C66,191.392222 64.6575,190 63,190 Z"></path>
                    </g>
                </svg>
            )
    }
}
