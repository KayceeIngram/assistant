import React from 'react'
import { Icon as FLUID_Icon } from 'fluid/ui'

const Icon = { ...FLUID_Icon }

Icon.Pencil = ( { size = 45, ...rest } ) => {

	// View box is intentionally larger than art to offset the art to the top and left
	return (
		<svg width={ size } height={ size } viewBox="0 0 450 450" version="1.1" xmlns="http://www.w3.org/2000/svg" { ...rest }>
			<path d="M241.176,32.58 C212.203,3.607 165.229,3.607 136.257,32.58 C104.728,64.108 64.7505,104.086 33.2582,135.578 C4.3968,164.44 4.3968,211.233 33.2582,240.095 C74.0633,280.9 129.115,335.951 161.573,368.409 C178.953,385.789 202.525,395.5527 227.103,395.5527 C265.428,395.5527 323.836,395.5527 361.062,395.5527 C370.443,395.5527 379.44,391.8261 386.073,385.193 C392.706,378.559 396.433,369.563 396.433,360.182 C396.433,325.232 396.433,271.611 396.433,233.469 C396.433,204.251 384.826,176.229 364.165,155.569 C331.325,122.728 279.883,71.286 241.176,32.58 Z" fill="#FFAD3B"></path>
			<path d="M356.247,395.5527 C362.981,395.5527 369.052,391.4966 371.63,385.275 C374.208,379.054 372.784,371.893 368.024,367.13 C291.192,290.26 85.032,84.001 85.032,84.001 C67.7094,101.324 50.3646,118.624 32.9985,135.901 L292.65,395.5527 C292.65,395.5527 327.055,395.5527 356.247,395.5527 Z" fill="#FE8300"></path>
			<path d="M396.584,291.619 L136.932,31.967 C136.932,31.967 136.932,31.967 136.932,31.967 C150.667,18.162 169.33,10.389 188.804,10.364 C208.278,10.338 226.962,18.063 240.732,31.833 C278.866,69.968 329.542,120.643 362.599,153.701 C384.359,175.461 396.584,204.974 396.584,235.747 C396.584,262.965 396.584,291.619 396.584,291.619 Z" fill="#FDC950"></path>
			<path d="M396.232,202.759 C395.989,200.247 394.319,198.1 391.943,197.248 C389.568,196.396 386.914,196.992 385.13,198.777 C352.273,231.665 231.009,353.059 199.222,384.881 C197.563,386.541 197.001,389.005 197.777,391.2207 C198.553,393.436 200.53,395.0112 202.862,395.2735 C204.547,395.4583 206.248,395.5527 207.959,395.5527 C247.622,395.5527 338.046,395.5527 377.469,395.5527 L396.433,376.589 C396.433,337.166 396.433,246.742 396.433,207.079 C396.433,205.631 396.365,204.19 396.232,202.759 Z" fill="#F8C978"></path>
			<path d="M396.244,202.896 C396.007,200.358 394.325,198.186 391.927,197.322 C389.53,196.458 386.849,197.057 385.048,198.86 C353.145,230.793 240.578,343.48 240.578,343.48 L292.65,395.5527 C325.192,395.5527 357.727,395.5527 377.469,395.5527 C382.498,395.5527 387.322,393.5548 390.878,389.9984 C394.435,386.442 396.433,381.618 396.433,376.589 C396.433,337.166 396.433,246.742 396.433,207.079 C396.433,205.677 396.369,204.281 396.244,202.896 Z" fill="#FAA849"></path>
			<path d="M396.254,203.004 C396.021,200.446 394.33,198.254 391.915,197.38 C389.5,196.506 386.797,197.109 384.982,198.926 C360.753,223.176 292.467,291.536 292.467,291.536 C292.467,291.536 359.703,358.807 383.025,382.141 C385.271,384.388 388.649,385.061 391.584,383.845 C394.519,382.63 396.433,379.766 396.433,376.59 C396.433,376.589 396.433,376.589 396.433,376.589 C396.433,337.166 396.433,246.742 396.433,207.079 C396.433,205.714 396.373,204.354 396.254,203.004 Z" fill="#FFCC7A"></path>
			<path d="M396.276,203.263 C396.055,200.657 394.342,198.416 391.886,197.519 C389.429,196.622 386.675,197.232 384.827,199.082 C370.799,213.119 344.456,239.491 344.456,239.491 L396.433,291.671 C396.433,259.264 396.433,226.859 396.433,207.079 C396.433,205.801 396.38,204.528 396.276,203.263 Z" fill="#FFE09D"></path>
			<path d="M46.5328,242.175 L52.9512,249.313 C53.9647,250.664 54.8775,252.126 55.2208,253.761 C55.6435,255.774 55.3689,257.989 54.2428,259.718 C53.9658,260.143 53.5981,260.501 53.2757,260.893 C53.274,260.895 53.2722,260.896 53.2722,260.896 C52.1867,261.725 52.0041,262.005 50.6898,262.447 C48.1707,263.294 45.2579,262.721 43.0585,261.237 C42.5802,260.914 42.1613,260.511 41.7126,260.148 C41.7126,260.148 26.1296,245.076 26.1296,245.076 C26.1296,245.076 25.2578,244.255 24.5604,243.563 C15.1361,234.199 8.0369,222.541 4.0988,209.605 C0.2362,196.918 -0.5051,183.315 1.9442,170.235 C4.3825,157.213 10.1396,144.798 18.4641,134.225 L18.568,134.094 C20.238,132.052 22.0092,130.092 23.8572,128.217 L39.2699,112.604 C56.93,94.959 74.5982,77.311 92.363,59.748 C98.876,53.31 105.378,46.86 111.945,40.477 C117.806,34.779 123.789,29.208 129.747,23.628 C130.042,23.351 130.308,23.103 130.308,23.103 C139.686,14.435 151.175,7.899 163.35,4.342 C169.363,2.585 175.521,1.454 181.743,1.068 C183.885,0.907 186.038,0.832 188.208,0.837 C201.73,0.91 215.282,4.826 227.186,11.48 C235.651,16.211 243.295,22.357 250.263,29.1 C258.483,37.055 266.481,45.276 274.395,53.342 C293.825,73.144 313.015,93.115 332.556,112.921 L332.558,112.923 C332.887,113.331 333.258,113.71 333.545,114.149 C334.924,116.255 335.197,119.052 334.25,121.392 C333.728,122.683 333.427,122.887 332.555,123.958 L332.552,123.961 C332.147,124.29 331.774,124.661 331.338,124.949 C328.808,126.62 325.289,126.615 322.743,124.947 C321.708,124.269 321.155,123.602 320.315,122.771 C298.977,101.675 278.191,80.62 256.807,59.542 C250.127,52.958 243.436,46.335 236.521,39.987 C231.091,35.002 225.145,30.557 218.649,27.081 C208.055,21.411 196.13,18.649 184.223,19.655 C183.826,19.688 183.436,19.725 183.339,19.736 C172.551,20.879 161.872,25.255 153.016,32 L189.346,71.345 L201.841,59.271 C203.021,58.269 204.204,57.256 205.555,56.505 C206.743,55.846 208.063,55.316 209.396,55.036 C209.996,54.91 210.613,54.891 211.221,54.818 C211.784,54.866 212.346,54.913 212.908,54.961 C214.371,55.465 214.384,55.465 215.637,56.372 L215.641,56.376 C215.94,56.788 216.304,57.161 216.538,57.614 C217.902,60.251 217.038,63.702 215.508,66.458 C214.757,67.809 213.744,68.992 212.742,70.172 L200.224,83.126 L218.713,103.15 C219.683,104.342 220.663,105.537 221.387,106.887 C222.845,109.606 223.716,113.057 222.389,115.656 C222.165,116.095 221.813,116.457 221.524,116.858 L221.521,116.861 C221.12,117.15 220.758,117.502 220.318,117.727 C217.712,119.058 214.296,118.197 211.55,116.725 C210.2,116 209.005,115.021 207.812,114.05 L188.01,95.766 L150.825,134.247 L189.144,174.99 L207.135,157.69 C208.261,156.746 209.39,155.792 210.683,155.103 C211.832,154.491 213.105,154.017 214.391,153.785 C214.975,153.679 215.574,153.679 216.166,153.626 C216.717,153.689 217.267,153.752 217.817,153.815 C219.266,154.353 219.278,154.353 220.521,155.271 L220.524,155.275 C221.366,156.414 221.646,156.555 221.981,157.979 C222.696,161.018 221.42,164.373 219.552,166.935 C219.11,167.541 218.588,168.085 218.106,168.661 L200.455,187.017 L220.269,208.084 C221.401,209.435 222.543,210.785 223.419,212.307 C225.127,215.272 226.377,219.06 225.003,221.957 C224.781,222.425 224.411,222.807 224.115,223.232 L224.112,223.235 C223.687,223.531 223.305,223.901 222.837,224.123 C221.213,224.893 219.193,224.757 217.452,224.315 C215.173,223.737 212.995,222.587 211.039,221.128 C210.315,220.588 209.656,219.968 208.964,219.389 L188.15,199.813 L151.099,238.345 L219.08,309.063 C220.266,310.466 221.465,311.872 222.354,313.477 C224.144,316.71 225.187,320.848 223.582,323.96 C223.306,324.495 222.876,324.935 222.523,325.422 L222.52,325.426 C222.032,325.779 221.592,326.209 221.057,326.484 C217.935,328.095 213.844,327.068 210.574,325.256 C208.969,324.367 207.563,323.168 206.161,321.983 L135.755,254.302 L97.265,294.33 C121.366,318.49 145.44,342.677 169.72,366.656 C173.648,370.523 178.344,373.639 183.163,376.499 C195.442,383.785 209.247,388.538 223.637,388.553 L224.923,388.673 C225.337,388.791 225.764,388.872 226.165,389.028 C229.765,390.4266 231.69,395.0788 229.893,398.6792 C228.929,400.6113 227.037,402.0394 224.909,402.4348 C223.468,402.7027 222.039,402.5495 220.603,402.4939 C201.006,401.7355 181.739,393.7103 166.235,381.987 C163.993,380.292 161.812,378.523 159.807,376.543 L159.729,376.465 L63.974,280.815 L63.1482,279.821 C62.5922,278.824 62.3733,278.594 62.1079,277.469 C61.4235,274.566 62.8519,271.232 65.5115,269.749 C66.2668,269.327 67.0937,269.05 67.9502,268.93 C68.8013,268.811 69.6653,268.929 70.52,269.047 C70.9283,269.184 71.351,269.283 71.745,269.457 C72.8032,269.924 72.9894,270.181 73.8681,270.91 C76.406,273.445 78.9427,275.981 81.478,278.518 L121.207,240.316 L83.425,203.996 L46.5328,242.175 Z M100.797,186.019 L137.725,224.433 L175.602,188.011 L135.404,150.206 L100.797,186.019 Z M32.3203,154.869 C28.3673,160.645 25.4099,167.115 23.6426,173.764 C20.4984,185.593 20.7944,197.982 24.4876,209.374 C26.1637,214.544 28.46,219.451 31.3582,224.011 L67.7073,188.886 L32.3203,154.869 Z M83.954,101.816 L82.861,102.915 C72.3568,113.466 61.813,123.978 51.2381,134.466 L86.291,170.929 L121.383,137.019 L83.954,101.816 Z M136.574,48.272 C133.845,51.159 131.121,54.051 128.351,56.9 C123.065,62.337 112.48,73.053 102.627,83 L138.173,120.795 L175.77,84.464 L136.574,48.272 Z" fill="#525252"></path>
			<path d="M389.513,316.189 C389.506,289.674 389.433,263.159 389.433,236.644 C389.381,216.281 383.785,196.321 373.365,179.165 C368.752,171.57 363.224,164.536 356.975,158.278 L344.644,145.947 C344.369,145.616 344.062,145.308 343.819,144.953 C342.114,142.465 342.243,138.891 344.208,136.525 C345.313,135.195 346.913,134.303 348.627,134.064 C349.478,133.946 350.342,134.064 351.196,134.183 C351.605,134.32 352.027,134.42 352.421,134.594 C353.479,135.061 353.665,135.318 354.543,136.047 C361.842,143.346 369.449,150.416 375.894,158.43 C387.542,172.914 395.902,190.021 400.163,208.251 C402.018,216.188 403.089,224.267 403.36,232.382 C403.403,233.675 403.429,234.962 403.432,236.251 L403.433,236.626 C403.433,278.582 403.615,320.538 403.432,362.493 C403.394,371.349 400.323,380.265 394.78,387.273 C387.318,396.7072 375.511,402.4995 363.363,402.5525 C332.687,402.6027 301.956,402.5583 271.221,402.5603 L257.638,402.5606 L256.352,402.4415 C255.938,402.3236 255.511,402.2435 255.109,402.088 C252.298,400.9988 250.384,397.9774 250.668,394.9149 C250.946,391.9076 253.369,389.2375 256.351,388.68 C256.775,388.601 257.209,388.6 257.638,388.561 C277.493,388.56 297.366,388.558 317.217,388.556 L389.513,316.189 Z" fill="#525252"></path>
		</svg>
	)
}
Icon.Pencil.displayName = 'Icon.Pencil'

Icon.Apps = () => {
	return (
		<svg width="20px" height="14px" viewBox="0 0 21 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g fill="currentColor" fillRule="nonzero">
				<circle cx="2.5" cy="2.5" r="2.5"/>
				<circle cx="10.5" cy="2.5" r="2.5"/>
				<circle cx="18.5" cy="2.5" r="2.5"/>

				<circle cx="2.5" cy="11.5" r="2.5"/>
				<circle cx="10.5" cy="11.5" r="2.5"/>
				<circle cx="18.5" cy="11.5" r="2.5"/>
			</g>
		</svg>
	)
}
Icon.Apps.displayName = 'Icon.Apps'

Icon.DragHandle = () => {
	return (
		<svg width="7px" height="14px" viewBox="0 0 7 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
				<path d="M1,1 L6,1"></path>
				<path d="M1,5 L6,5"></path>
				<path d="M1,9 L6,9"></path>
				<path d="M1,13 L6,13"></path>
			</g>
		</svg>
	)
}
Icon.DragHandle.displayName = 'Icon.DragHandle'

Icon.Close = () => {
	return (
		<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round">
				<path d="M13,1 L1,13"></path>
				<path d="M1,1 L13,13"></path>
			</g>
		</svg>
	)
}
Icon.Close.displayName = 'Icon.Close'

Icon.CloseCompact = () => {
	return (
		<svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g transform="translate(-2.000000, -2.000000)" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
				<path d="M11,3 L3,11"></path>
				<path d="M3,3 L11,11"></path>
			</g>
		</svg>
	)
}
Icon.CloseCompact.displayName = 'Icon.CloseCompact'

Icon.Expand = () => {
	return (
		<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
				<polyline points="1 5 1 1 5 1"></polyline>
				<polyline points="9 1 13 1 13 5"></polyline>
				<polyline points="13 9 13 13 9 13"></polyline>
				<polyline points="5 13 1 13 1 9"></polyline>
			</g>
		</svg>
	)
}
Icon.Expand.displayName = 'Icon.Expand'

Icon.Collapse = () => {
	return (
		<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
				<polyline points="1 5 5 5 5 1"></polyline>
				<polyline points="9 1 9 5 13 5"></polyline>
				<polyline points="13 9 9 9 9 13"></polyline>
				<polyline points="5 13 5 9 1 9"></polyline>
			</g>
		</svg>
	)
}
Icon.Collapse.displayName = 'Icon.Collapse'

Icon.SmallSpinner = () => {
	return (
		<svg width="16px"  height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style={ { background: 'none' } }>
			<circle cx="50" cy="50" fill="none" stroke="#8a8a8a" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(299.801 50 50)">
				<animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
			</circle>
		</svg>
	)
}
Icon.SmallSpinner.displayName = 'Icon.SmallSpinner'

Icon.Spinner = () => {
	return (
		<svg width="32px"  height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style={ { background: 'none' } }>
			<circle cx="50" cy="50" fill="none" stroke="#8a8a8a" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(299.801 50 50)">
				<animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
			</circle>
		</svg>
	)
}
Icon.Spinner.displayName = 'Icon.Spinner'

Icon.Search = () => {
	return (
		<svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinejoin="round">
				<path d="M6.5,12 C3.46243388,12 1,9.53756612 1,6.5 C1,3.46243388 3.46243388,1 6.5,1 C9.53756612,1 12,3.46243388 12,6.5 C12,9.53756612 9.53756612,12 6.5,12 Z M15.8568331,15.8587942 L10.4910728,10.4930339 L15.8568331,15.8587942 Z"></path>
			</g>
		</svg>
	)
}
Icon.Search.displayName = 'Icon.Search'

Icon.Brightness = () => (
	<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<g stroke="none" strokeWidth="2" fill="currentColor" fillRule="evenodd">
			<path d="M7.00294406,4 C8.63984298,4 10,5.35749265 10,6.9970617 C10,8.63663075 8.63984298,10 7.00294406,10 C5.36015702,10 4,8.63663075 4,6.9970617 C4,5.35749265 5.36015702,4 7.00294406,4 Z" id="Center" stroke="currentColor" fill="none" fillRule="nonzero"></path>

			<circle cx="7" cy="1" r="1"></circle>
			<circle cx="7" cy="13" r="1"></circle>
			<circle cx="1" cy="7" r="1"></circle>
			<circle cx="13" cy="7" r="1"></circle>
			<circle transform="translate(2.757359, 2.757359) rotate(-45.000000) translate(-2.757359, -2.757359) " cx="2.75735931" cy="2.75735931" r="1"></circle>
			<circle transform="translate(11.242641, 11.242641) rotate(-45.000000) translate(-11.242641, -11.242641) " cx="11.2426407" cy="11.2426407" r="1"></circle>
			<circle transform="translate(2.757359, 11.242641) rotate(-45.000000) translate(-2.757359, -11.242641) " cx="2.75735931" cy="11.2426407" r="1"></circle>
			<circle transform="translate(11.242641, 2.757359) rotate(-45.000000) translate(-11.242641, -2.757359) " cx="11.2426407" cy="2.75735931" r="1"></circle>
		</g>
	</svg>
)
Icon.Brightness.displayName = 'Icon.Brightness'

Icon.RightCaret = () => (
	<svg width="9px" height="14px" viewBox="0 0 9 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<path fill="currentColor" d="M0.292893219,1.70710678 C-0.0976310729,1.31658249 -0.0976310729,0.683417511 0.292893219,0.292893219 C0.683417511,-0.0976310729 1.31658249,-0.0976310729 1.70710678,0.292893219 L8.41421356,7 L1.70710678,13.7071068 C1.31658249,14.0976311 0.683417511,14.0976311 0.292893219,13.7071068 C-0.0976310729,13.3165825 -0.0976310729,12.6834175 0.292893219,12.2928932 L5.58578644,7 L0.292893219,1.70710678 Z"></path>
	</svg>
)
Icon.RightCaret.displayName = 'Icon.RightCaret'

Icon.LeftCaret = () => (
	<svg width="9px" height="14px" viewBox="0 0 9 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<path fill="currentColor" d="M0.292893219,1.70710678 C-0.0976310729,1.31658249 -0.0976310729,0.683417511 0.292893219,0.292893219 C0.683417511,-0.0976310729 1.31658249,-0.0976310729 1.70710678,0.292893219 L8.41421356,7 L1.70710678,13.7071068 C1.31658249,14.0976311 0.683417511,14.0976311 0.292893219,13.7071068 C-0.0976310729,13.3165825 -0.0976310729,12.6834175 0.292893219,12.2928932 L5.58578644,7 L0.292893219,1.70710678 Z"  transform="scale(-1, 1) translate(-9, 0)"></path>
	</svg>
)
Icon.LeftCaret.displayName = 'Icon.LeftCaret'

Icon.DownCaretSmall = () => (
	<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
)
Icon.DownCaretSmall.displayName = 'Icon.DownCaretSmall'

Icon.Plus = () => (
	<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<path fill="currentColor" stroke="none" d="M9,9.01464844 L9,15 C9,15.5522847 8.55228475,16 8,16 L8,16 C7.44771525,16 7,15.5522847 7,15 L7,9.01464844 L0.985379923,9.00206204 C0.440836381,9.00092251 6.66874965e-17,8.55916265 0,8.01461792 L0,8.01461792 C-6.66466866e-17,7.47040642 0.441170584,7.02923584 0.98538208,7.02923584 L7,7.02923584 L7,1 C7,0.44771525 7.44771525,1.01453063e-16 8,0 L8,0 C8.55228475,-1.01453063e-16 9,0.44771525 9,1 L9,7.02923584 L15.0072937,7.02923584 C15.5555503,7.02923584 16,7.47368559 16,8.02194214 L16,8.02194214 C16,8.57019869 15.5555503,9.01464844 15.0072937,9.01464844 L9,9.01464844 Z" />
	</svg>
)

Icon.BreadcrumbArrow = () => (
	<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
	</svg>
)
Icon.BreadcrumbArrow.displayName = 'Icon.BreadcrumbArrow'

Icon.More = () => (
	<svg width="6px" height="19px" viewBox="0 0 6 19" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<path fill="currentColor" d="M3.25,13.5 C1.83246521,13.5 0.684326172,14.61875 0.684326172,16 C0.684326172,17.38125 1.83246521,18.5 3.25,18.5 C4.66753479,18.5 5.81567383,17.38125 5.81567383,16 C5.81567383,14.61875 4.66753479,13.5 3.25,13.5 Z"></path>
		<path fill="currentColor" d="M3.25,0 C1.83246521,0 0.684326172,1.11875 0.684326172,2.5 C0.684326172,3.88125 1.83246521,5 3.25,5 C4.66753479,5 5.81567383,3.88125 5.81567383,2.5 C5.81567383,1.11875 4.66753479,0 3.25,0 Z"></path>
		<path fill="currentColor" d="M3.25,6.75 C1.83246521,6.75 0.684326172,7.86875 0.684326172,9.25 C0.684326172,10.63125 1.83246521,11.75 3.25,11.75 C4.66753479,11.75 5.81567383,10.63125 5.81567383,9.25 C5.81567383,7.86875 4.66753479,6.75 3.25,6.75 Z"></path>
	</svg>
)
Icon.More.displayName = 'Icon.More'

Icon.DefaultApp = ( { windowSize, context } ) => {
	let size = 32
	if ( 'app-list' === context ) {
		size = 'mini' === windowSize ? 34 : 42
	}
	return (
		<svg width={ size } height={ size } viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg">
			<g transform="translate(-8.000000, -8.000000)" stroke="currentColor" strokeWidth="2" fill="transparent">
				<path d="M22.5460192,9 L27.4539808,9 C31.3970976,9 33.3650237,9.38915686 35.3558274,10.4538503 C37.1597255,11.4185856 38.5814144,12.8402745 39.5461497,14.6441726 C40.6108431,16.6349763 41,18.6029024 41,22.5460192 L41,27.4539808 C41,31.3970976 40.6108431,33.3650237 39.5461497,35.3558274 C38.5814144,37.1597255 37.1597255,38.5814144 35.3558274,39.5461497 C33.3650237,40.6108431 31.3970976,41 27.4539808,41 L22.5460192,41 C18.6029024,41 16.6349763,40.6108431 14.6441726,39.5461497 C12.8402745,38.5814144 11.4185856,37.1597255 10.4538503,35.3558274 C9.38915686,33.3650237 9,31.3970976 9,27.4539808 L9,22.5460192 C9,18.6029024 9.38915686,16.6349763 10.4538503,14.6441726 C11.4185856,12.8402745 12.8402745,11.4185856 14.6441726,10.4538503 C16.6349763,9.38915686 18.6029024,9 22.5460192,9 Z"></path>
			</g>
		</svg>
	)
}
Icon.DefaultApp.displayName = 'Icon.DefaultApp'

Icon.Beaver = () => (
	<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fillRule="evenodd" clipRule="evenodd" d="M5.16961 12.1746C5.14512 12.1504 5.11077 12.1394 5.07422 12.1425C4.85974 12.1635 4.41612 12.7734 4.25139 13.01C4.18361 12.9398 4.11363 12.8725 4.05038 12.8115C3.98157 12.7451 3.89785 12.6646 3.86972 12.6272C3.9979 12.3619 4.18556 12.0048 4.38398 11.6276C5.19566 10.0838 5.33524 9.75407 5.21342 9.66789C5.1976 9.65674 5.17091 9.64469 5.13384 9.65233C4.97664 9.68408 4.69346 10.1144 4.12866 11.0204C3.82669 11.5048 3.51449 12.0057 3.35715 12.1629C3.30337 12.2166 3.24518 12.2424 3.18777 12.2408C3.13645 12.2381 3.08888 12.2115 3.04508 12.1575C2.97263 12.0682 2.92157 11.9917 2.97704 11.8882C3.16768 11.5318 3.46589 11.034 3.78172 10.5069C4.91715 8.61152 5.42363 7.70121 5.16339 7.54232C5.03172 7.46209 4.85416 7.71598 4.08421 8.93176C3.58058 9.72659 3.00996 10.6276 2.55739 11.1523C2.5145 11.2018 2.48378 11.2158 2.47004 11.2131C2.40511 11.1988 2.33785 10.9616 2.29754 10.8198C2.25633 10.6746 2.21965 10.5453 2.16613 10.4678C2.36286 10.1967 3.0535 9.12927 3.74297 8.02896C5.15924 5.76861 5.12023 5.71781 5.08239 5.66869C5.05893 5.63823 5.02575 5.61983 4.98441 5.6232C4.67233 5.63162 3.69956 7.01005 2.46019 8.81123C2.05286 9.40337 1.701 9.91477 1.62298 9.98242C1.4462 10.1359 1.3547 10.3103 1.35121 10.5012C1.34317 10.9293 1.75335 11.4002 2.41755 12.0217C2.76385 12.3456 3.01825 12.5901 3.21719 12.7814C3.91029 13.4472 3.93724 13.4732 4.83356 13.9587L4.8959 13.9924L4.92389 13.9273C4.95499 13.8556 4.76344 13.5976 4.70512 13.5219C4.72106 13.4679 4.79714 13.3188 4.86492 13.186C5.12581 12.6753 5.30025 12.3038 5.16961 12.1746Z" fill="currentColor"/>
		<path fillRule="evenodd" clipRule="evenodd" d="M13.8669 13.9007C13.7416 13.9644 13.6725 13.9871 13.449 13.9828C14.0307 12.5248 14.46 11.0596 14.7526 9.08706C15.1815 9.60144 15.6872 9.97689 16.1926 10.2592C15.8987 11.283 14.442 13.6079 13.8669 13.9007ZM13.0359 13.9666C12.8663 13.9463 12.7194 13.9103 12.6444 13.8642C12.2235 13.6053 11.3409 11.888 11.1256 10.7259C11.8861 10.5951 13.3297 9.88358 14.0285 9.17519C13.8783 10.7787 13.4602 12.3342 13.0359 13.9666ZM12.9302 2.60473C12.2757 2.6173 11.6191 2.65773 11.1131 2.69013C12.2053 1.82687 14.8144 1.6812 15.0871 2.62831C14.5541 2.62598 13.773 2.58879 12.9302 2.60473ZM10.052 2.58879C9.78673 2.28863 9.43694 1.51168 9.01224 1.60642C9.29697 1.09165 10.0852 0.801083 11.2021 0.683017C11.4669 0.915261 12.0041 1.10707 12.1745 1.63519C11.5543 1.66448 11.0564 1.7228 10.8874 1.81456C10.5865 1.97772 10.2786 2.27982 10.052 2.58879ZM13.5127 0.966582C13.6815 1.11407 13.8231 1.24548 14.0285 1.6243C13.6443 1.61277 13.2382 1.60953 12.8489 1.61497C12.5524 0.988225 12.3332 0.981875 11.9689 0.664744C12.6108 0.583225 13.2146 0.706605 13.5127 0.966582ZM17.5266 3.92626C17.5216 3.60964 18.1967 3.24495 18.1531 2.8463C18.1236 2.5766 16.624 1.72448 16.3679 1.83063C16.1675 1.91383 16.0471 2.27165 15.8769 2.46696C15.9443 2.20517 15.763 1.86419 15.682 1.76505C15.6138 1.68159 15.3768 1.69934 14.7781 1.65942C14.5589 1.16137 14.0666 0.750539 13.7363 0.451681C13.3948 0.142715 12.5218 0.0556239 11.5396 0.152565L11.5394 0.152435C11.4391 0.0772671 11.3239 -0.0258946 11.079 0.00585745C10.9018 0.0287967 10.6646 0.0850431 10.6816 0.163192C10.6902 0.20259 10.6775 0.279184 10.6377 0.286182C9.2323 0.533459 8.02067 0.953752 7.69939 1.78514C7.6399 1.93936 7.5983 2.22189 7.61398 2.57932C7.17049 2.97486 6.79659 3.36781 6.79245 3.49041C6.78312 3.76426 7.26834 4.15396 7.30398 4.35808C7.33975 4.5622 6.43073 5.95424 5.88473 7.874C5.2134 10.2338 5.61361 13.492 7.71533 13.4747C8.85399 13.4652 8.57263 11.7314 7.79918 11.7654C7.57018 11.7756 7.73036 12.9992 7.20963 12.7678C6.28662 12.3578 6.1311 10.0964 6.79932 8.40096C8.14612 4.98444 8.66569 4.80145 8.62421 4.55702C8.58287 4.31272 8.05475 3.88919 8.04192 3.72395C8.02689 3.53214 8.7958 2.79679 9.02714 2.87753C9.23022 2.94817 9.56278 3.72603 9.84867 3.7767C10.1019 3.82167 14.9308 2.97227 16.0928 3.49754C17.2549 4.02281 18.9717 7.88165 18.8423 8.28198C18.7127 8.68206 17.6326 9.3736 16.6573 9.32747C15.9764 9.29533 15.0863 8.67597 14.7058 8.34471C14.715 8.33914 14.7236 8.3311 14.7329 8.32501C14.6325 8.36571 14.5195 8.39098 14.3896 8.39098C14.2678 8.39098 14.1615 8.36739 14.0657 8.33123C13.5148 8.79222 12.5406 9.41521 11.6738 9.47197C10.5403 9.5461 9.42061 8.78703 9.23696 8.45785C9.02908 8.08525 9.79878 6.6625 9.69043 6.5736C9.47206 6.39449 7.49255 8.50904 7.7117 9.25048C7.87772 9.81256 9.11566 10.3816 10.1168 10.6224C10.3704 11.5488 11.7513 13.9294 12.1311 14.1767C12.5362 14.4404 13.4653 14.5391 13.9652 14.3335C14.5358 14.0987 16.386 12.0966 16.9474 10.5062C17.1264 10.4943 17.5467 10.3758 17.775 10.3091C17.5684 13.4463 14.4127 15.6976 14.5249 15.9053C14.6393 16.117 16.3269 15.6068 16.5297 15.8102C16.7172 15.9982 15.8945 16.92 15.9486 16.92C16.8977 16.9202 17.9749 15.6303 17.8258 15.0995C17.7387 14.7889 16.5176 14.949 16.4466 14.8241C16.379 14.705 18.5535 13.1807 19.0591 9.7164C19.4145 9.49491 19.6899 9.25865 19.7828 9.05259C20.0689 8.41949 17.5279 4.00842 17.5266 3.92626Z" fill="currentColor"/>
		<path fillRule="evenodd" clipRule="evenodd" d="M16.4555 5.48616C16.1192 5.48616 15.8447 5.76065 15.8447 6.09684C15.8447 6.43315 16.1192 6.70738 16.4555 6.70738C16.7918 6.70738 17.066 6.43315 17.066 6.09684C17.066 5.76065 16.7918 5.48616 16.4555 5.48616Z" fill="currentColor"/>
		<path fillRule="evenodd" clipRule="evenodd" d="M11.8419 5.4899C11.5067 5.4899 11.2332 5.76348 11.2332 6.09876C11.2332 6.43403 11.5067 6.70749 11.8419 6.70749C12.1772 6.70749 12.4507 6.43403 12.4507 6.09876C12.4507 5.76348 12.1772 5.4899 11.8419 5.4899Z" fill="currentColor"/>
		<path fillRule="evenodd" clipRule="evenodd" d="M5.22005 11.7185C4.89204 12.216 1.70634 8.94399 1.4159 8.73766C0.795121 8.29689 1.66837 7.66717 2.4715 6.75401C3.87986 5.15319 3.35965 6.2128 4.43701 5.48613C4.44388 5.49831 5.42353 6.25919 5.25181 6.53991C5.11728 6.75971 4.08281 5.81415 3.97952 5.9142C3.79951 6.08838 3.49223 6.13659 3.52437 6.17495C4.1064 6.87 4.92819 7.21512 4.63141 7.51191C4.45865 7.68466 3.77968 6.97834 3.29174 6.5898C2.87092 6.25466 2.62935 7.03329 2.70089 7.14047C3.46799 8.29029 4.61845 8.91262 4.34525 9.27226C4.02449 9.54987 3.52307 8.78989 2.4391 7.842C2.07324 7.52228 1.94765 8.10884 1.7885 8.25983C2.09851 8.5789 5.40888 11.432 5.22005 11.7185Z" fill="currentColor"/>
		<path fillRule="evenodd" clipRule="evenodd" d="M14.4595 16.5406C14.142 16.6496 13.5502 16.7063 12.6959 16.6527C11.3022 16.5655 9.97871 16.0712 9.1459 15.8278C9.2269 15.9708 9.44644 16.3947 9.51305 16.5478C9.50061 16.5563 9.51901 16.5819 9.54519 16.6202C9.57358 16.6827 9.60001 16.7353 9.62464 16.773C9.64473 16.8385 9.64784 16.9144 9.60481 16.9967C9.48104 17.2334 8.05713 16.8858 7.98468 16.7067C7.90718 16.5155 8.20694 15.9326 8.16405 15.7424C8.12102 15.5527 7.70682 15.3085 7.45539 15.1524C5.4024 13.8765 1.39556 10.2432 1.67407 9.03758C1.93638 7.90241 3.93014 5.89763 4.3669 5.82195C4.80352 5.74613 6.85094 6.71113 6.94373 6.26414C7.0075 5.9566 4.33229 4.83893 3.84927 4.94948C3.39269 5.05355 0.297456 7.86626 0.0392932 8.95541C-0.569568 11.5258 6.08306 15.2739 6.95617 15.8579C7.21447 16.0305 6.70579 16.6219 6.8893 16.9756C7.1301 17.4393 10.5287 17.9489 10.6092 17.6676C10.6477 17.5335 10.4975 17.2076 10.3085 16.9114C10.7904 16.9738 11.5633 17.0711 12.6702 17.1969C14.6757 17.47 15.1036 17.0198 15.164 16.9513C15.2243 16.883 14.5378 16.5115 14.4595 16.5406Z" fill="currentColor"/>
		<path fillRule="evenodd" clipRule="evenodd" d="M14.0673 8.40698C14.0275 8.38106 13.9629 8.31574 13.8173 8.16501C13.7442 8.0892 13.6815 8.01882 13.6159 7.95247C13.5346 7.87043 13.4531 7.78814 13.3645 7.6807C12.8214 7.0222 15.7123 6.95857 15.3993 7.5835C15.2847 7.81237 15.141 7.97683 14.9788 8.1645C14.7365 8.44482 14.7599 8.50055 14.4381 8.49873C14.3024 8.49809 14.1628 8.47994 14.0673 8.40698Z" fill="currentColor"/>
	</svg>
)

Icon.Audio = () => (
	<svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M16.9212 13.8832C17.2882 14.1074 17.7572 14.0019 18.0086 13.6261C19.2728 11.7668 20 9.45924 20 7C20 4.54736 19.2592 2.23976 18.0086 0.373903C17.7572 -0.00190514 17.2882 -0.107395 16.9212 0.116771C16.527 0.354124 16.4658 0.822236 16.7377 1.2442C17.8047 2.85951 18.4572 4.86383 18.4572 7C18.4572 9.13617 17.8251 11.1669 16.7377 12.7624C16.4658 13.1778 16.527 13.6459 16.9212 13.8832ZM1.67872 10.0328H3.66328C3.72445 10.0328 3.77203 10.046 3.81281 10.0856L6.84402 12.7162C7.23142 13.0525 7.53726 13.2173 7.93145 13.2173C8.51595 13.2173 8.95092 12.7888 8.95092 12.2284V1.80461C8.95092 1.2376 8.51595 0.789271 7.92466 0.789271C7.53726 0.789271 7.2586 0.954099 6.84402 1.31672L3.81281 3.9276C3.76523 3.96716 3.72445 3.98035 3.66328 3.98035H1.67872C0.577698 3.98035 0 4.55395 0 5.68137V8.33181C0 9.46583 0.577698 10.0328 1.67872 10.0328ZM13.8356 12.0108C14.2094 12.2284 14.658 12.136 14.9095 11.78C15.8406 10.4614 16.3707 8.77355 16.3707 7C16.3707 5.22645 15.8474 3.53201 14.9095 2.21998C14.658 1.86395 14.2094 1.77165 13.8356 1.98922C13.4346 2.22657 13.3871 2.70128 13.6657 3.12983C14.3861 4.20451 14.8143 5.5627 14.8143 7C14.8143 8.4373 14.3861 9.80208 13.6657 10.8702C13.3871 11.2987 13.4346 11.7734 13.8356 12.0108ZM1.86902 8.6351C1.65833 8.6351 1.54279 8.52961 1.54279 8.32522V5.69456C1.54279 5.49017 1.65833 5.37809 1.86902 5.37809H4.0235C4.22739 5.37809 4.37011 5.34512 4.53323 5.19348L7.19744 2.84633C7.22462 2.81336 7.2654 2.79358 7.30618 2.79358C7.36735 2.79358 7.40813 2.83314 7.40813 2.89907V11.1075C7.40813 11.1735 7.36735 11.213 7.30618 11.213C7.2722 11.213 7.23142 11.1932 7.19744 11.1603L4.53323 8.8197C4.37011 8.67466 4.22739 8.6351 4.0235 8.6351H1.86902ZM10.7636 10.1449C11.1102 10.3625 11.5588 10.2834 11.7967 9.95372C12.388 9.17573 12.7346 8.10765 12.7346 7C12.7346 5.89235 12.388 4.83086 11.7967 4.04628C11.5588 3.71662 11.1102 3.6441 10.7636 3.85508C10.3626 4.10562 10.2879 4.56054 10.6005 5.04184C10.9607 5.5561 11.1782 6.26816 11.1782 7C11.1782 7.73184 10.9539 8.45049 10.6005 8.96475C10.2879 9.44605 10.3626 9.89438 10.7636 10.1449Z" fill="currentColor"/>
	</svg>
)

Icon.Video = () => {
	return (
		<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M2.05173 14.228L12.1897 8.21476C12.3506 8.11931 12.3506 7.88069 12.1897 7.78524L2.05173 1.77204C1.89081 1.6766 1.68966 1.7959 1.68966 1.9868L1.68966 14.0132C1.68966 14.2041 1.8908 14.3234 2.05173 14.228ZM13.0345 9.71806C14.3218 8.95448 14.3218 7.04552 13.0345 6.28194L2.89655 0.268744C1.6092 -0.494838 1.22544e-06 0.459639 1.15869e-06 1.9868L6.32995e-07 14.0132C5.66241e-07 15.5404 1.6092 16.4948 2.89655 15.7313L13.0345 9.71806Z" fill="currentColor"/>
		</svg>
	)
}

Icon.Document = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5.04179 20H14.9485C16.8795 20 17.8403 19.0205 17.8403 17.0802V8.61007C17.8403 7.40672 17.7004 6.88433 16.9541 6.1194L11.8142 0.886194C11.1052 0.158582 10.5175 0 9.47276 0H5.04179C3.12015 0 2.15 0.988806 2.15 2.9291V17.0802C2.15 19.0298 3.11082 20 5.04179 20ZM5.10709 18.4981C4.14627 18.4981 3.65187 17.9851 3.65187 17.0522V2.95709C3.65187 2.03358 4.14627 1.50187 5.11642 1.50187H9.26754V6.92164C9.26754 8.09701 9.85522 8.67537 11.0213 8.67537H16.3384V17.0522C16.3384 17.9851 15.844 18.4981 14.8739 18.4981H5.10709ZM11.1892 7.26679C10.816 7.26679 10.6761 7.11754 10.6761 6.7444V1.79104L16.0493 7.26679H11.1892Z" fill="currentColor"/>
	</svg>
)

export default Icon
